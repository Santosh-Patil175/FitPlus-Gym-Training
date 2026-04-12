import React from 'react'
import Link from 'next/link'
import styles from './page.module.css'

export const metadata = {
  title: "FitPlus Our Work",
  description: "Aboutpage",
};

const mydata = [
  {
    id: 1,
    title: "Weight Loss Transformation",
    category: "Client Result",
    clientName: "Rahul Sharma",
    duration: "4 Months",
    result: "Lost 12 kg",
    description: "Rahul followed a strict workout and diet plan designed by our trainers and achieved amazing fat loss results."
  },
  {
    id: 2,
    title: "Muscle Gain Program",
    category: "Training Program",
    clientName: "Amit Patel",
    duration: "6 Months",
    result: "Gained 8 kg muscle",
    description: "Focused strength training and high-protein diet helped Amit build lean muscle mass effectively."
  },
  {
    id: 3,
    title: "Personal Training Success",
    category: "Service",
    clientName: "Sneha Joshi",
    duration: "3 Months",
    result: "Improved strength & stamina",
    description: "One-on-one personal training sessions helped improve endurance, posture, and confidence."
  },
  {
    id: 4,
    title: "Fat Loss Bootcamp",
    category: "Program",
    clientName: "Group Batch",
    duration: "8 Weeks",
    result: "Average 5 kg loss per person",
    description: "High-intensity group workouts designed for fast fat burning and motivation."
  },
  {
    id: 5,
    title: "Strength & Conditioning",
    category: "Program",
    clientName: "Fitness Enthusiasts",
    duration: "Ongoing",
    result: "Increased overall strength",
    description: "Advanced training techniques to improve power, endurance, and athletic performance."
  },
  {
    id: 6,
    title: "Beginner Fitness Program",
    category: "Program",
    clientName: "New Members",
    duration: "1 Month",
    result: "Basic fitness improvement",
    description: "Perfect for beginners to start their fitness journey with guided workouts."
  }
];

const page = () => {
  return (
    <>
    
    <div className={styles.container}>

  <Link href="/" className={styles.button}>
    ← Back to Home
  </Link>

  <h1 className={styles.title}>Our Work</h1>

  <p className={styles.description}>
    At our gym, we are committed to transforming lives through fitness, discipline, and expert guidance.
  </p>

  <div className={styles.grid}>
    {mydata.map((post) => (
      <div key={post.id} className={styles.card}>
        <h2>{post.title}</h2>
        <span className={styles.category}>{post.category}</span>

        <p><strong>Client:</strong> {post.clientName}</p>
        <p><strong>Duration:</strong> {post.duration}</p>
        <p className={styles.result}>{post.result}</p>
        <p>{post.description}</p>
      </div>
    ))}
  </div>

</div>
    </>

  )
}

export default page
