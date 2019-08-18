import React from 'react';



const Marker = (props) => {
  const { name } = props;
  return (
    <div className="marker"
     
      title={name}
      style={{ border: "red solid 2px", borderRadius: '50%', height: "18px", width: "18px" }}
    >
      
    </div>
  );
};

export default Marker;