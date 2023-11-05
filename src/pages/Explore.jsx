import React from "react";
import Leftmenu from "../components/Leftmenu";
import styles from "./Explore.module.css";

const Explore = () => {
  document.title = "Videoall";
  const posterStyle = {
    // Specify the URL of your poster image
    backgroundSize: "contain", // Adjust the size to cover the entire poster
    width: "100%", // Set the width
    height: "100%", // Set the height
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    color: "#fff", // Text color
    fontSize: "24px", // Text size
    textAlign: "center",
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className={styles.home}>
      <div className={styles.firstrow}>
        <div className={styles.videodiv}>
          <video
            muted
            poster="https://pbs.twimg.com/media/F80EMaeaMAA05yh?format=jpg&name=4096x4096"
            controls
            style={posterStyle}
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          ></video>
        </div>{" "}
        <div className={styles.videodiv}>
          <video
            muted
            poster="https://wallpapers.com/images/hd/inspiring-cricket-4k-ee6gig5lvunl3sse.jpg"
            controls
            style={posterStyle}
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          ></video>
        </div>{" "}
        <div className={styles.videodiv}>
          <video
            controls
            muted
            style={posterStyle}
            poster="https://upload.wikimedia.org/wikipedia/commons/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg"
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          ></video>
        </div>
      </div>

      <div className={styles.firstrow}>
        <div className={styles.videodiv}>
          <video
            muted
            poster="https://etimg.etb2bimg.com/photo/96493840.cms"
            controls
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          ></video>
        </div>{" "}
        <div className={styles.videodiv}>
          <video
            muted
            poster="https://assets.telegraphindia.com/telegraph/2023/Oct/1698494508_1698490185_rahul-gandhi.jpg"
            controls
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          ></video>
        </div>{" "}
        <div className={styles.videodiv}>
          <video
            controls
            muted
            poster="https://pbs.twimg.com/media/EBL0ssAUwAAKLpf.jpg"
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          ></video>
        </div>
      </div>
      <div className={styles.shorts}>
        <div className={styles.head}>
          <h2 className="text-3xl">Shorts</h2>
        </div>
        <div className={styles.videoall}>
          <div className={styles.videodivs}>
            <video
              muted
              controls
              poster="https://etimg.etb2bimg.com/photo/96493840.cms"
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4"
            ></video>
          </div>
          <div className={styles.videodivs}>
            <video
              muted
              controls
              poster="https://assets.telegraphindia.com/telegraph/2023/Oct/1698494508_1698490185_rahul-gandhi.jpg"
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4"
            ></video>
          </div>
          <div className={styles.videodivs}>
            <video
              muted
              controls
              poster="https://cdn.britannica.com/63/222663-050-58CCA884/Soccer-forward-Cristiano-Ronaldo-2018.jpg"
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4"
            ></video>
          </div>
          <div className={styles.videodivs}>
            <video
              muted
              controls
              poster="https://assets.telegraphindia.com/telegraph/2023/Oct/1698494508_1698490185_rahul-gandhi.jpg"
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4"
            ></video>
          </div>
          <div className={styles.videodivs}>
            <video
              muted
              controls
              poster="https://toofanisamachar.com/wp-content/uploads/2023/10/Ankit-Baiyanpuria-.png"
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4"
            ></video>
          </div>
          <div className={styles.videodivs}>
            <video
              muted
              controls
              poster="https://i.ytimg.com/vi/Juwouw7mT8k/oar2.jpg?sqp=-oaymwEYCJUDENAFSFqQAgHyq4qpAwcIARUAAIhC&rs=AOn4CLCytHWy1n_V5lJNUS_1RaAQISliNw"
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4"
            ></video>
          </div>
          <div className={styles.videodivs}>
            <video
              muted
              controls
              poster="https://upcmo.up.nic.in/images/ADITYANATH_YOGI.jpg"
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4"
            ></video>
          </div>
          <div className={styles.videodivs}>
            <video
              muted
              controls
              poster="https://samajwadiparty.in/_assets/img/president.jpg"
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4"
            ></video>
          </div>
          <div className={styles.videodivs}>
            <video
              muted
              controls
              poster="https://assets.telegraphindia.com/telegraph/2023/Jul/1688885003_arvind-kejriwal.jpg"
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4"
            ></video>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className={styles.firstrow}>
        <div className={styles.videodiv}>
          <video
            muted
            poster="https://etimg.etb2bimg.com/photo/96493840.cms"
            controls
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          ></video>
        </div>{" "}
        <div className={styles.videodiv}>
          <video
            muted
            poster="https://assets.telegraphindia.com/telegraph/2023/Oct/1698494508_1698490185_rahul-gandhi.jpg"
            controls
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          ></video>
        </div>{" "}
        <div className={styles.videodiv}>
          <video
            controls
            muted
            poster="https://pbs.twimg.com/media/EBL0ssAUwAAKLpf.jpg"
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          ></video>
        </div>
      </div>
      <div className={styles.firstrow}>
        <div className={styles.videodiv}>
          <video
            muted
            poster="https://pbs.twimg.com/media/F80EMaeaMAA05yh?format=jpg&name=4096x4096"
            controls
            style={posterStyle}
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          ></video>
        </div>{" "}
        <div className={styles.videodiv}>
          <video
            muted
            poster="https://wallpapers.com/images/hd/inspiring-cricket-4k-ee6gig5lvunl3sse.jpg"
            controls
            style={posterStyle}
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          ></video>
        </div>{" "}
        <div className={styles.videodiv}>
          <video
            controls
            muted
            style={posterStyle}
            poster="https://upload.wikimedia.org/wikipedia/commons/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg"
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          ></video>
        </div>
      </div>
    </div>
  );
};

export default Explore;
