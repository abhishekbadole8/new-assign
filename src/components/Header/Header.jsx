import React from "react";
import styles from "./Header.module.css"; // Import module CSS file

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>LOGO</div>

      <div className={styles.authBtns}>
        <button className={styles.loginBtn}>Login</button>
        <button className={styles.signupBtn}>Signup</button>
      </div>
    </header>
  );
}
