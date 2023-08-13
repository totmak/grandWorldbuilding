import React, {useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import RegionMap from "./regionMap.js"
import InfoBox from "./infoBox.js"
import regions from "./regions.json"


const App = () => {
  const width = 1670;
  const height = 830;
  const [colorTable, setColorTable] = useState(Array.from({ length: 25 }, () => "grey"));
  const [selectedRegion, setSelectedRegion] = useState("");


  const onClickHandle = function(event){
    if (event.target.id.substring(0,4) == "REG_"){
      const key = Number(event.target.id.substring(4,7));
      setSelectedRegion(regions[key-1].name)
      const narray = Array.from({ length: 25 }, () => "grey")
      narray[key] = "green";
      setColorTable(narray)
    }
  }

  return (
    <div id="container">
      <InfoBox selectedRegion={selectedRegion}/>
      <RegionMap id="RegionMap" width={width} height={height} onClick={onClickHandle} color={colorTable}/>
    </div>
  );
};

export default App;
