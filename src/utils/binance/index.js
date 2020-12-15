import Web3 from 'web3';
import contractDetails from "../contractService/contractDetails";

const IS_PRODUCTION = false;

export default class BinanceService {
    constructor() {
        this.name = 'binance'
        this.wallet = window['BinanceChain']
        this.net = IS_PRODUCTION ? 'mainnet' : 'testnet'
        this.Web3Provider = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545');
        this.wallet && this.wallet.on('chainChanged', () => window.location.reload());
        this.wallet && this.wallet.on('accountsChanged', () => window.location.reload());
    }

    getAccount() {
        if (!this.wallet) throw new Error(`${this.name} wallet is not injected`);
        return new Promise((resolve, reject) => {
            const net = IS_PRODUCTION ? 'binance smart chain' : 'binance smart chain test'
            const usedNet = IS_PRODUCTION ? '0x38' : '0x61'
            const netVersion = this.wallet.chainId
            if (netVersion === usedNet) {
                this.wallet.request({ method: 'eth_requestAccounts' })
                    .then(account => resolve({
                        address: account[0]
                    }))
                    .catch(_ => reject({ errorMsg: 'Not authorized' }))
            } else {
                reject({
                    errorMsg: `Please choose ${net} network in ${this.name} wallet.`
                })
            }

        })
    }

    getContract(abi, address) {
        return new this.Web3Provider.eth.Contract(abi, address);
    }

    sendTx = async (methodName, addressFrom, data, amount) => {
        try {
            const method = this.getMethodInterface(methodName, contractDetails.PAW.ABI);
            const signature = this.encodeFunctionCall(method, data);
            const params = {
                from: addressFrom,
                to: contractDetails.PAW.ADDRESS[this.name][this.net],
                value: amount,
                data: signature,
            };
            const txHash = await this.wallet.request({
                method: 'eth_sendTransaction',
                params: [params],
            })
            const txReceipt = new Promise((resolve, reject) => {
                const trxSubscription = setInterval(() => {
                    this.Web3Provider.eth.getTransactionReceipt(
                    txHash,
                    (error, transaction) => {
                        if (transaction) {
                            if (transaction.status) {
                                resolve(transaction);
                            } else {
                                reject(error);
                            }
                            clearInterval(trxSubscription);
                        }
                        if (error) {
                            clearInterval(trxSubscription);
                        }
                    },
                    );
                }, 1000);
            })
            return await txReceipt;
        } catch (e) {
            console.error(e);
        }
    }

    encodeFunctionCall(abi, data) {
        return this.Web3Provider.eth.abi.encodeFunctionCall(abi, data);
    }

    getMethodInterface(methodName, abi) {
        return abi.filter((m) => {
            return m.name === methodName;
        })[0];
    }

}