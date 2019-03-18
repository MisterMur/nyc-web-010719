import React from "react";
import Hog from "./Hog";
const HogList = props => {
  const renderHogs = () => {
    return props.hogs.map(function(hog) {
      return <Hog hog={hog} key={hog.name} />;
    });
  };
  console.log(renderHogs());
  return <div className="">{renderHogs()}</div>;
};

export default HogList;
