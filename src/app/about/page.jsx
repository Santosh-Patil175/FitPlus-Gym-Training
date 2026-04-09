import React from "react";
import styles from "./page.module.css"; // CSS Module import
import Image from "next/image";
import { Content } from "next/font/google";

export const metadata = {
  title: "FitPlus Gym About",
  description: "Aboutpage",
};

// Simulated dynamic data
function getAboutData() {
  return {
    name: "FitPulse Gym & Training",
    tagline: "Transform Your Body, Transform Your Life",
    description:
      "At FitPulse Gym & Training, we combine science-backed workouts with personalized coaching to help you achieve your fitness goals faster. Whether you're building strength, losing weight, or improving endurance, our expert trainers guide you every step of the way.",
    mission:
      "To empower individuals to live healthier, stronger, and more confident lives through fitness and discipline.",
    vision:
      "To become a leading fitness community that inspires transformation and lifelong wellness.",
    services: [
      "Personal Training",
      "Strength & Conditioning",
      "Weight Loss Programs",
      "Group Fitness Classes",
      "Nutrition Guidance",
    ],
    stats: [
      { label: "Members Trained", value: "500+" },
      { label: "Expert Trainers", value: "15+" },
      { label: "Years Experience", value: "10+" },
    ],
  };
}

export default function About() {
  const data = getAboutData();

  return (
    <div className={styles.Container}>
      <div className={styles.Wrapper}>

        <h1 className={styles.Title}>About {data.name}</h1>
        <p className={styles.Tagline}>{data.tagline}</p>

        <div className={styles.track}>
        {/* Original */}
        <Image src="/gym2.jpg" width={500} height={250} alt="image" />
        <Image src="/gym3.jpg" width={500} height={250} alt="image" />

        {/* Duplicate (IMPORTANT for loop) */}
        <Image src="/gym2.jpg" width={500} height={250} alt="image" />
        <Image src="/gym3.jpg" width={500} height={250} alt="image" />
        </div>
      </div>
      


        <section className={styles.Section}>
          <h2>Who We Are</h2>
          <p>{data.description}</p>
        </section>


        <section className={styles.Grid}>
          <div className={styles.card}>
            <h3>Our Mission</h3>
            <p>{data.mission}</p>
          </div>

          <div className={styles.card}>
            <h3>Our Vision</h3>
            <p>{data.vision}</p>
          </div>
        </section>

        {/* Services */}
        <section className={styles.Section}>
          <h2>What We Offer</h2>
          <ul className={styles.servicesList}>
            {data.services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </section>

        {/* Stats */}
        <section className={styles.statsGrid}>
          {data.stats.map((stat, index) => (
            <div key={index} className={styles.statCard}>
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </section>

      </div>
    
  );
}