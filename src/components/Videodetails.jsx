import React from "react";
import styles from "./Videodetails.module.css";

const Videodetails = (props) => {
  const { data } = props;
  return (
    <div className={styles.main}>
      <div className={styles.imgtext}>
        <div className={styles.chnl}>
          <img src={data.img} alt="channelimg" />
        </div>
        <p>{data.desc}</p>
      </div>
      <div className={styles.chnldets}>
        <div className="name">{data.name}</div>
        <div className="viewstime">1.8 Lakh Views • 2 Years ago</div>
      </div>
    </div>
  );
};

export default Videodetails;
