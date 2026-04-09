"use client"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import styles from './page.module.css'

export default function Dashboard() {
  const router = useRouter()

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn")

    if (!isLoggedIn) {
      router.push("/dashboard/login")
    }
  }, [])

  return  <div className={styles.container}>
    <h1>Welcome to FitPlus Gym & Training 🎉</h1>
  </div>
}