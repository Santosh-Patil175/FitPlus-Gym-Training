import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

export const metadata = {
  title: "FitPlus Gym Blog",
  description: "Blogepage",
};

// Simulated blog posts data
function getBlogPosts() {
  return [
    {
      id: 1,
      title: "5 Tips to Build Muscle Faster",
      excerpt:
        "Learn the most effective techniques to gain muscle mass safely and efficiently. Perfect for beginners and pros alike.",
      
    },
    {
      id: 2,
      title: "Nutrition Hacks for Weight Loss",
      excerpt:
        "Discover nutrition strategies that help you burn fat while maintaining energy for your workouts.",
      
    },
    {
      id: 3,
      title: "Top 10 Cardio Workouts for Endurance",
      excerpt:
        "Boost your stamina with these tried-and-tested cardio routines that fit any fitness level.",
      
    },
    {
      id: 4,
      title: "How to Stay Motivated in the Gym",
      excerpt:
        "Practical tips and psychology hacks to stay consistent and reach your fitness goals faster.",
      
    },
  ];
}

export default function Blog() {
  const posts = getBlogPosts();

  return (
    <div className={styles.Container}>
      <Link href="/" className={styles.back} >
          ← Back to Home
        </Link>
      <div className={styles.Wrapper}>
        <h1 className={styles.Title}>FitPulse Blog</h1>
        <p className={styles.Tagline}>
          Fitness insights, tips, and inspiration to keep you moving.
        </p>

        <section className={styles.blogGrid}>
          {posts.map((post) => (
            <div key={post.id} className={styles.blogCard}>
              <h3>{post.title}</h3>        
              <p>{post.excerpt}</p>
                <Link href={`/blog/${post.id}`}>
                  <button className={styles.readMoreButton}>Read More</button>
                </Link>
            </div>
))}
        </section>
      </div>
    </div>
  );
}