"use client";

import { useState, useEffect } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [userExists, setUserExists] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) setUserExists(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      storedUser.email === form.email &&
      storedUser.password === form.password
    ) {
      localStorage.setItem("isLoggedIn", "true");

      // ✅ VERY IMPORTANT: update navbar immediately
      window.dispatchEvent(new Event("loginStatusChanged"));

      router.push("/");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className={styles.container}>
      <h2> Sign in</h2>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="email"
          placeholder="Email"
          required
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Password"
          required
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        <button type="submit">Sign in</button>
      </form>

      {!userExists && (
        <p
          onClick={() => router.push("/dashboard/register")}
          className={styles.link}
        >
          Register here
        </p>
      )}
    </div>
  );
}