import React, { Fragment, useState } from "react";

const Sample = () => {
  const [state, setstate] = useState(0);
  return (
    <Fragment>
      <h1>{state}</h1>
      <button
        onClick={() => {
          setstate(state + 1);
        }}
      >
        increment
      </button>
    </Fragment>
  );
};

export default Sample;
