import { DFPSlotsProvider, AdSlot } from 'react-dfp';

const Banner = () => (
    <DFPSlotsProvider dfpNetworkId="89328808">
         <div className="desktop-ads">
          <AdSlot dfpNetworkId="89328808" sizes={[[970, 90]]} adUnit="Forum_V_SL" />
          <AdSlot dfpNetworkId="89328808" sizes={[[970, 90]]} adUnit="Forum_V_HP" />
        </div>
    </DFPSlotsProvider>
);

export default Banner;