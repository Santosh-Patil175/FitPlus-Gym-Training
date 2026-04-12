"use client";
import React, { useState } from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    alert("Message sent!");

    setFormData({
  name: "",
  email: "",
  message: ""
  });
  };

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.back} >
          ← Back to Home
        </Link>
      <h1 className={styles.title}>Contact Us</h1>

      <div className={styles.content}>
        <div className={styles.img}>
          <Image src="/contact.jpg" fill alt="contactus" className={styles.image} />
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            className={styles.input}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            className={styles.input}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Text"
            className={styles.textarea}
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit" className={styles.btn}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
