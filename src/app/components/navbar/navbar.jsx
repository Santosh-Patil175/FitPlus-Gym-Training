"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkLogin = () => {
      const status = localStorage.getItem("isLoggedIn");
      setIsLoggedIn(status === "true");
    };

    checkLogin();

    window.addEventListener("loginStatusChanged", checkLogin);

    return () => {
      window.removeEventListener("loginStatusChanged", checkLogin);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);

    // ✅ notify navbar
    window.dispatchEvent(new Event("loginStatusChanged"));

    router.push("/dashboard/login");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.logo}>
        FitPulse Gym & Training
      </h1>

      <div className={styles.links}>
        {isLoggedIn ? (
          <>
            <Link href="/" className={styles.link}>Home</Link>
            <Link href="/about" className={styles.link}>About</Link>
            <Link href="/blog" className={styles.link}>Blog</Link>
            <Link href="/contact" className={styles.link}>Contact</Link>
            <Link href="/portfolio" className={styles.link}>Portfolio</Link>

            <button className={styles.logout} onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href="/dashboard/login" className={styles.link}>Sign in</Link>
            <Link href="/dashboard/register" className={styles.link}>Sign up</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;