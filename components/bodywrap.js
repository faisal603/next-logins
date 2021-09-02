import React from "react";

const Bodywrap = (props) => {
  return (
    <div className="my-body-content content p-3 m-5 columns is-flex-wrap-wrap">
      {props.children}
    </div>
  );
};

export default Bodywrap;
