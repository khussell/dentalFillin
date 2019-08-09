import React from 'react';


const Marker = (props) => {
    const { name } = props;
    return (
      <div className="marker"
        title={name}
        style={{backgroundColor: "white", height: "18px", width: "18px"}}>
            <p>{name}</p>
      </div>
    );
  };

  export default Marker;