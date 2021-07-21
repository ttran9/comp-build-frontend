import React from "react";

const ComputerBuildError = (props) => {
  return (
    <div className="Container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h3>{props.message}</h3>
        </div>
      </div>
    </div>
  );
};

export default ComputerBuildError;
