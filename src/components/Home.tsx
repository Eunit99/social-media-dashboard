import React from 'react'
import { Layout } from './layouts/Layout'
import { Inter } from "next/font/google";
import styles from '@/styles';
import Hero from './Hero';




const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  return (
    <>
      <Layout>
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>

      </Layout>

    </>
  )
}
