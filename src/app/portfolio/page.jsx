import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';

const portfolioItems = [
  {
    title: "Personal Training",
    slug: "personal-training",
    image: "/training.jpg",
    description: "One-on-one training programs tailored to your goals.",
  },
  {
    title: "Group Classes",
    slug: "group-classes",
    image: "/group.jpg",
    description: "Energetic group workouts for all fitness levels.",
  },
  {
    title: "Nutrition Plans",
    slug: "nutrition-plans",
    image: "/plan.jpg",
    description: "Customized nutrition plans to complement your workouts.",
  },
];

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.back} >
          ← Back to Home
        </Link>
      <h1 className={styles.heading}>Our Portfolio</h1>

      <div className={styles.grid}>
        {portfolioItems.map((item, index) => (
          <Link key={index} href={`/portfolio/${item.slug}`} className={styles.card}>
            
            <img
              src={item.image}
              alt={item.title}
              className={styles.image}
            />

            <h2 className={styles.title}>{item.title}</h2>
            <p className={styles.description}>{item.description}</p>

          </Link>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;