import './body.scss';
import React from "react";
import {BearVSNavyComponent,
    GamesComponent,
    OfferingComponent,
    PAWComponent,
    RegPAWCardComponent,
    MissionEconomicsComponent,
    GOLDTokensComponent,
    WarStrategyComponent,
    PAWAuctionComponent,
    InfoComponent,
    RegEconomicsComponent
} from '../../components'



function Body() {
  return (
      <div className = "body">
          <GamesComponent/>
          <OfferingComponent/>
          <BearVSNavyComponent/>
          <PAWComponent/>
          <RegPAWCardComponent/>
          <MissionEconomicsComponent/>
          <GOLDTokensComponent/>
          <WarStrategyComponent/>
          <RegEconomicsComponent/>
          <PAWAuctionComponent/>
          <InfoComponent/>
      </div>
  );
}

export default Body;