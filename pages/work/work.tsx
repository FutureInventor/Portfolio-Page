import React from 'react'
import Head from 'next/head'
import { Fade } from 'react-awesome-reveal'
import {
  VFooter,
  VMenuBar,
  VTimelineGrid
} from '../../utils'
import styles from './work.module.scss'

export default function VWork() {
  return(
    <div className={styles.workContainer}>
      <Head>
        <title>Work history</title>
        <meta name="description" content="Karolina Hudziec Portfolio Page" />
        <meta name="author" content="Karolina Hudziec"/>
        <meta name="keywords" content="Karolina, Hudziec, Portfolio, Frontend"/>
        <link rel="shortcut icon" href="/favicon.ico?" type="image/x-icon"/>
      </Head>
      <VMenuBar activeTab="Work"/>
      <div className={styles.content}>
        <div className={styles.summary}>
          <Fade>
            <h1>
              My work history
            </h1>
            <h2>
              I've started my journey with programming back in 2016 on
              Silesian University with C++ (basics) and Python (basics + NumPy),
              which I mostly used to analyze and simulate results of different experiments.
              I've also got some experience in creating basic drivers. Later, after
              I'd finished my studies, I decided to go in the different direction.
              I lived in London for a year and was learning web development on my own.
              In 2020 I'd managed to get an internship and worked as a trainee Full-Stack developer
              (PHP, JS React, MySQL, Rest API). Since then, I have been working as Front-End React TypeScript Software Developer.
            </h2>
          </Fade>
        </div>
        <Fade>
          <div className={styles.timelineGridCotainer}>
            <VTimelineGrid/>
          </div>
        </Fade>
      </div>
      <VFooter/>
    </div>
  )
}