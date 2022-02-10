import React, { Fragment, useState, useEffect } from "react";
import Navbar from '../components/Navbar'

const Home = () => {
  const [time, setTime] = useState(0);
  const [isStart, setisStart] = useState(true);
  useEffect(() => {
    if (isStart) {
      setTimeout(() => {
        setTime((prev,next)=>prev+1);
      }, 2000);
    }
  }, [time, isStart]);
  return (
    <Fragment>
      <Navbar/>
      <h1> Hello Rocketlane!</h1>
      timer : {time} seconds
      <button
        type="button"
        onClick={() => {
          setisStart(true);
        }}
      >
        start
      </button>
      <button
        type="button"
        onClick={() => {
          setisStart(false);
        }}
      >
        stop
      </button>
      <button
        type="button"
        onClick={() => {
          setTime((prev,next)=>prev+5);
        }}
      >
        add 5
      </button>
    </Fragment>
  );
};

export default Home;
