import React, { useState } from "react";
import Notes from "../components/Notes"
import FeaturedAll from "../components/HomeNavLayout/FeaturesAll"

const Cartpage = props => {



    // const [selectedDashboard, setSelectedDashboard] = useState('VolumesByDB')

    return (
        <>
        <div className="text-center">
        <h2>Purchased Cancelled</h2>
        <FeaturedAll tab={"cart"}/>
<br />
        <Notes />
        
</div>
    </>
  );
}
export default Cartpage;