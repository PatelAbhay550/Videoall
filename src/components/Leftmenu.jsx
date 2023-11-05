import React from "react";
import styles from "./Leftmenu.module.css";
import { BiSolidVideos } from "react-icons/bi";
import { GrHistory } from "react-icons/gr";
import { BiHelpCircle } from "react-icons/bi";
import { MdOutlineFeedback } from "react-icons/md";
import { PiTiktokLogoFill } from "react-icons/pi";
const Leftmenu = () => {
  return (
    <div className={styles.leftmenu}>
      <ul className={styles.iconsleft}>
        <li>
          <div className={styles.shorts}>
            <PiTiktokLogoFill className="text-2xl" />
            Shorts
          </div>
        </li>
        <li>
          <div className={styles.you}>
            <BiSolidVideos className="text-2xl" />
            <p>You</p>
          </div>
        </li>
        <li>
          <div className={styles.history}>
            <GrHistory className="text-2xl text-white" />
            <p> History</p>
          </div>
        </li>
        <li>
          <div className={styles.help}>
            <BiHelpCircle className="text-2xl" /> <p>Help</p>
          </div>
        </li>
        <li>
          <div className={styles.feedback}>
            <MdOutlineFeedback className="text-2xl" /> <p>Feedback</p>
          </div>
        </li>
      </ul>
      <div className={styles.termsandend}>
        <li>About</li>
        <li>Contact</li>
        <li>Copyright</li>
        <li>Advertise</li>
        <li>Terms</li>
        <li>Privacy and Policy</li>
        <li>Test new features</li>
      </div>
      <div className={styles.copy}>© 2023 Videoall</div>
    </div>
  );
};

export default Leftmenu;
