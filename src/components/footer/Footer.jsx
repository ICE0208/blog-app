import React from "react";
import classes from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <h2>About the App</h2>
          <p>about the app...</p>
        </div>
        <div className={classes.col}>
          <h2>Contacts</h2>
          <span>Phone +123 456 789</span>
        </div>
        <div className={classes.col}>
          <h2>Location</h2>
          <span>Continent: Asia</span>
          <span>Country: Republic of Korea</span>
          <span>Current Location: Seoul</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
