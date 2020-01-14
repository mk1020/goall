import React from "react";
import styles from './personInfo.module.css'
const personInfo = () => {
  return (
    <div className={styles.PersonInfo}>
      <p>Name:</p>
      <p>LastName:</p>
      <p>Full Years:</p>
      <p>Your Native Sity:</p>
      <p>One Quote:</p>
      <p>your main goal:</p>
    </div>
  );
};

export default personInfo;
