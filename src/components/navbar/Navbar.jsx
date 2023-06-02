"use client";
import React, { useState } from "react";
import classes from "./navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import person from "../../../public/person.jpg";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleShowDropdown = () => setShowDropdown((prev) => true);

  const handleHideDropDown = () => setShowDropdown((prev) => false);

  const loggedIn = true;
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2 className={classes.left}>
          <Link
            className={classes.title}
            href="/"
          >
            BLOG
          </Link>
        </h2>
        <ul className={classes.right}>
          {loggedIn ? (
            <div>
              <Image
                alt="img"
                onClick={handleShowDropdown}
                src={person}
                width="45"
                height="45"
              />
              {showDropdown && (
                <div className={classes.dropdown}>
                  <AiOutlineClose
                    className={classes.closeIcon}
                    onClick={handleHideDropDown}
                  />
                  <button
                    onClick={handleHideDropDown}
                    className={classes.logout}
                  >
                    Logout
                  </button>
                  <Link
                    onClick={handleHideDropDown}
                    href="/create-post"
                    className={classes.create}
                  >
                    Create
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <>
              <button className={classes.login}>Log in</button>
              <Link href="/register">Register</Link>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
