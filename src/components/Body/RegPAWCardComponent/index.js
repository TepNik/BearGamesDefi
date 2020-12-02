import React from "react";
import {Scrollbars} from "react-custom-scrollbars";

import './regpawcard.scss';

function RegPAWCardComponent() {
  return (
      <div className = "reg-paw-card">
      <div className = "row">
          <div className = "reg-paw-card__content">
              <div className = "reg-paw-card__content-title">
                  Regular PAW CARD
              </div>
              <div className = "reg-paw-card__content-body">
                  <Scrollbars style={{ width:500, height: 615 }}>
              <div className = "reg-paw-card__content-body-frame">
              <div className = "reg-paw-card__content-body-frame-text">
                  Each Regular PAW CARD displays a Bear Navy PAW Operative Ship with a unique character
                  set and can only move into one of the four field bays. The Regular PAW CARD is used to
                  record the number of Open Chests obtained when the card moves into the Regular PAW CARD
                  associated field bay as a CHEST list on the CARD.
                  <span className = "reg-paw-card__content-body-frame-text-special">
                  The salvaged GOLD tokens received by
                  each Regular PAW CARD’s Open Chest are claimable by clicking the withdraw button in front
                  of the Open Chest. The withdrawal automatically closes the Chest and makes it ineligible
                  to salvaged GOLD tokens from its registered field bay.  Veterans (Regular PAW CARD holders)
                  are advised to wait till their Open CHEST receives its complete eligible salvaged GOLD tokens
                  (then Chest becomes Closed) before withdrawing their GOLD tokens.
                  </span>
              </div>
              </div>
              <div className = "reg-paw-card__content-body-frame">
              <div className = "reg-paw-card__content-body-frame-text">
                   <span className = "reg-paw-card__content-body-frame-text-special">
                  The Bear Navy PAW Operative Ship displayed on each Regular PAW CARD has four designs and beauty depending on the amount of Open Chest available on the card;
                   </span>
                  <ol>
                      <li>
                  <span className = "reg-paw-card__content-body-frame-text-special">
                     SubMarines
                  </span>
                      - contains 0 to 10 Open Chest.
                      </li>
                      <li>
                  <span className = "reg-paw-card__content-body-frame-text-special">
                      GunBoat
                  </span>
                      - contains 11 to 100 Open Chest.
                      </li>
                      <li>
                  <span className = "reg-paw-card__content-body-frame-text-special">
                   BattleShip
                  </span>
                      - contains 101 to 1000 Open Chest.
                      </li>
                      <li>
                  <span className = "reg-paw-card__content-body-frame-text-special">
                   Aircraft Carrier
                  </span>
                      - contains 1001 or more Open Chest.
                      </li>
                  </ol>
              </div>
              </div>
                  </Scrollbars>
              </div>

      </div>
      </div>
      </div>
  );
}

export default RegPAWCardComponent;
