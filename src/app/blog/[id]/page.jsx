import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

// SAME blog data (keep consistent)
function getBlogPosts() {
  return [
    {
      id: 1,
      title: "5 Tips to Build Muscle Faster",
      content:
        "To build muscle faster, focus on progressive overload, proper protein intake, and compound exercises like squats and deadlifts. Consistency and recovery are key.",
    },
    {
      id: 2,
      title: "Nutrition Hacks for Weight Loss",
      content:
        "For effective weight loss, maintain a calorie deficit, eat high-protein meals, avoid processed foods, and stay hydrated throughout the day.",
    },
    {
      id: 3,
      title: "Top 10 Cardio Workouts for Endurance",
      content:
        "Improve endurance with workouts like running, cycling, jump rope, HIIT, swimming, and rowing. Stay consistent for best results.",
    },
    {
      id: 4,
      title: "How to Stay Motivated in the Gym",
      content:
        "Set realistic goals, track progress, find a workout partner, and stay disciplined. Motivation fades, but habits keep you going.",
    },
  ];
}

export default function BlogPage({ params }) {
  const posts = getBlogPosts();
  const post = posts.find((p) => p.id === parseInt(params.id));

  if (!post) {
    return (
      <div className={styles.notFound}>
        <h1>Post Not Found</h1>
        <Link href="/blog">
          <button className={styles.backButton}>Go Back</button>
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.Container}>
      <div className={styles.Wrapper}>
        <h1 className={styles.Title}>{post.title}</h1>

        <p className={styles.Content}>{post.content}</p>

        <Link href="/blog">
          <button className={styles.backButton}>← Back to Blog</button>
        </Link>
      </div>
    </div>
  );
}