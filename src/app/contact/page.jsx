import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

export const metadata = {
  title: "FitPlus Gym Contact",
  description: "Contactpage",
};

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}> Contact Us</h1>
      <div className={styles.content}>
        <div className={styles.img}>
          <Image src="/contact.jpg" fill={true} alt="contactus" className={styles.image} ></Image>
        </div>
        <form className={styles.form}>
          <input type="text" placeholder='Name' className={styles.input} />
          <input type="email" placeholder='Email' className={styles.input} />
          <textarea placeholder='Text' cols={30} rows={10} className={styles.textarea}></textarea>

          <button url="#"className={styles.btn}> Send</button>

        </form>
      </div>
    </div>
  )
}

export default Contact
