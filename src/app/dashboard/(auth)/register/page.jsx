"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function Register() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    // ✅ Basic password confirmation check
    if (form.password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Save user in localStorage
    localStorage.setItem("user", JSON.stringify(form));
    alert("Registered successfully!");

    // Redirect to login
    router.push("/dashboard/login");
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleRegister} className={styles.form}>
        <h2 className={styles.title}>Sign up</h2>

        <input
          className={styles.input}
          type="email"
          placeholder="Email"
          required
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          className={styles.input}
          type="password"
          placeholder="Password"
          required
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <input
          className={styles.input}
          type="password"
          placeholder="Confirm Password"
          required
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button type="submit" className={styles.button}>
          Create Account
        </button>
      </form>
    </div>
  );
}