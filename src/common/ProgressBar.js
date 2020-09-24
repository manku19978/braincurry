import React, { useState, useEffect } from "react";

const ProgressBar = ({ width, percentage }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue((percentage * width) / 100);
  }, [percentage, width]);

  return (
    <div className="progress-div" style={{ width: `${width}px` }}>
      <div style={{ width: `${value}px` }} className="progress" />
    </div>
  );
};

export default ProgressBar;
