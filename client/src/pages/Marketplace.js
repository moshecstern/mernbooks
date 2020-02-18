import React, { useState } from "react";
import Notes from "../components/Notes"
import FeaturedAll from "../components/HomeNavLayout/FeaturesAll"

const Marketplace = props => {



    // const [selectedDashboard, setSelectedDashboard] = useState('VolumesByDB')

    return (
        <>
        <div className="text-center">
        <FeaturedAll tab={"marketplace"}/>
<br />
        <Notes />
        
</div>
    </>
  );
}
export default Marketplace;