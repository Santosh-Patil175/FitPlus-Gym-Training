import Image from "next/image";
import styles from "./page.module.css";
import gym from '../app/gym.jpg'


export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.items}>
        <h1 className={styles.title}>Transform Your Body, Transform Your Life.</h1>
        <p className={styles.description}>Join our gym and take the first step toward a stronger, healthier, and <br /> more confident you.</p>

        <button className={styles.button}>See our Works</button>
      </div>
      <div className={styles.items}>
        <Image src={gym} width={500} height={500} alt="gym" className={styles.Image}></Image>
      </div>
      
    </div>
  );
}
