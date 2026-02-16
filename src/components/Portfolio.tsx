import HorizontalCardCap from "./HorizontalCardCap"
import Data from '../ProjectData.json'
import Scrollbar from "./Scrollbar";
import React, { useState } from "react";

const ProjectData = Data.Projects;

const Portfolio = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [checkBox, setCheckBox] = useState(ProjectData[selectedIndex].Title);
  const handleInputChange = (item: string) => {
    setCheckBox(item);
    changeCardCap(item);
  };
  const changeCardCap = (check:string) =>{

    {ProjectData.map((item,index) =>{
        if(item.Title === check ){
            setSelectedIndex(index);
            return;
        }
    } )}
  };
 const ScrollData = ProjectData.map((item) => ({
    Image: item.IconImage,
    Title: item.Title,
    OnClick: handleInputChange,
    Checked: item.Title === checkBox
 }));
  return (
    <div id="scrollspyHeading2">
      <HorizontalCardCap data = {ProjectData[selectedIndex]} />
      <Scrollbar AllButtons={ScrollData} />
   </div>
  )
}

export default Portfolio
