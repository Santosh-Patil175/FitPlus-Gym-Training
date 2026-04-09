import React from "react";
import styles from "./page.module.css";

const categoryData = {
  "personal-training": {
    title: "Personal Training",
    image: "/training.jpg",
    description:
      "Our personal training program focuses on building strength, endurance, and confidence with one-on-one expert guidance.",
  },
  "group-classes": {
    title: "Group Classes",
    image: "/group.jpg",
    description:
      "Join our high-energy group classes designed to keep you motivated and consistent with fun and challenging workouts.",
  },
  "nutrition-plans": {
    title: "Nutrition Plans",
    image: "/plan.jpg",
    description:
      "We provide customized nutrition plans to help you achieve your fitness goals faster and maintain a healthy lifestyle.",
  },
};

const Category = ({ params }) => {
  const { category } = params;

  const data = categoryData[category];

  if (!data) {
    return (
      <div className={styles.container}>
        <h1>Category Not Found</h1>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>{data.title}</h1>

      <img
        src={data.image}
        alt={data.title}
        className={styles.image}
      />

      <p className={styles.description}>{data.description}</p>
    </div>
  );
};


export default Category;