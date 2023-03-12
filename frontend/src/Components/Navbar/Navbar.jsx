import Aos from "aos";
import React, { useEffect } from "react";
import Dropedown from "./Dropedown";
import styles from "./nav.module.css";
import Navbar2 from "./Navbar2";

export default function Navbar() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className={styles.navbar}>
      {/* <Topnav /> */}
      <Navbar2 />
      <Dropedown />{" "}
    </div>
  );
}
