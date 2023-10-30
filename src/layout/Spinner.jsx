import React from "react";
import { LineWave } from "react-loader-spinner";
const Spinner = () => {
  return (
    <div className="h-[62vh] flex justify-center">
      <LineWave
        height="300"
        width="300"
        color="black"
        ariaLabel="line-wave"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        firstLineColor=""
        middleLineColor=""
        lastLineColor=""
      />
    </div>
  );
};

export default Spinner;
