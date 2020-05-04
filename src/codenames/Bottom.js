import React from "react";
import SpySwitch from "./components/SpySwitch";

function Bottom(props) {
  return (
    <div className="row mb-5">
      <div className="col-12 d-flex justify-content-between align-items-end">
        <SpySwitch {...props} />
        <button type="button" className="btn btn-secondary ml-5">
          Nieuw spel
        </button>
      </div>
    </div>
  );
}

export default Bottom;
