import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'


const Footer = () => {
  return (
    <div className={styles.container}>
      <div >
        @2026 FitPulse Gym & Training All rights reserved.
      </div>
      <div>
        <div className={styles.images}>
      <Image src="/1.png" width={15} height={15} alt="fb" className={styles.icons}></Image>
      <Image src="/2.png" width={15} height={15} alt="fb" className={styles.icons}></Image>
      <Image src="/3.png" width={15} height={15} alt="fb" className={styles.icons}></Image>
      <Image src="/4.png" width={15} height={15} alt="fb" className={styles.icons}></Image>
      </div>
      </div>
      
    </div>
  )
}

export default Footer
