import React from "react";
import styles from "./Banner.module.scss";
import video from "../../../assets/tedx-unscreen.gif";

const Banner = () => {
  
  return (
    <>
      {/*<!-- Contact Us Section -->*/}
      <div className={styles.touch}>
        {/*<div className={styles.xxx}>
          <img src={xxx} alt="xxx" />
  </div>*/}

        <div className={styles.touch_left}>
          
          <h1
            style={{
              color: "white",
            }}
          >
            Embracing the Pandemonium on 21st May,2022
          </h1>
          </div>


       

        <div className={styles.touch_right}>
        <img src={video} alt="xxx" />
          
          </div>
      </div>
      {/*<div className={styles.touch}>
        <div className={styles.touch_left}>
          <h1
            style={{
              color: "white",
            }}
          >
            Embracing the Pandemonium
          </h1>
        </div>
        <div className={styles.touch_right}>
          <img src={stage} alt="x_logo-banner" />
        </div>
          </div>*/}
    </>
  );
};

export default Banner;
