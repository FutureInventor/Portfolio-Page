import Image from 'next/image'
import Head from 'next/head'
import React from 'react'
import { Fade } from 'react-awesome-reveal'
import {
  VMenuBar,
  VPhotoGrid,
  VFooter
} from '../../utils'
import {
  belayTheCppLogo,
  bonoboPressLogo,
  comicCommission1,
  comicCommission2,
  cssTricksLogo,
  dribbbleLogo,
  freeCodeCampLogo,
  hashnodeLogo,
  logoCommission,
  posterCommission,
  schemeCommission,
  sitePointLogo,
} from '../../assets'
import styles from './about.module.scss'

export default function VAbout() {
  return (
    <div className={styles.aboutContainer}>
      <Head>
        <title>About me</title>
        <meta name="description" content="Karolina Hudziec Portfolio Page" />
        <meta name="author" content="Karolina Hudziec"/>
        <meta name="keywords" content="Karolina, Hudziec, Portfolio, Frontend"/>
        <link rel="shortcut icon" href="/favicon.ico?" type="image/x-icon"/>
      </Head>
      <VMenuBar activeTab="About"/>
      <div className={styles.content}>
        <div className={styles.summary}>
          <Fade>
            <h1>
              Long story short about me
            </h1>
            <h2>
              I have two leading passions in my life: one is to create,
              and the other one is to explore the world. I love to create
              software, especially web applications. Graphic design,
              drawing and making animations give me a lot of fun as well.
              I try to lead an active lifestyle. Whenever I have some spare time,
              I try to dedicate it to learning new languages, spending my time
              with friends and family, and traveling. I'm a huge sports fan,
              as well, especially football. Besides that I love hiking and rock
              climbing. I feel extremely good in the mountains. In winter
              I ski. To relax I usually play video games or watch movies/tv series.
              I also pay high attention to my self-development in the IT field,
              in order to be up to date with current trends on the market.
              Beneath you can find all of the newsletters I subscribe currently.
            </h2>
          </Fade>
        </div>
        <Fade>
          <div className={styles.hobbies}>
            <div className={styles.newsletters}>
              <h2>
                Newsletters I subscribe to:
              </h2>
              <a href="https://css-tricks.com/">
                <Image alt="CSS-Tricks logo" src={cssTricksLogo}/>
              </a>
              <a href="https://belaycpp.com/">
                <Image alt="Belay the CPP logo" src={belayTheCppLogo}/>
              </a>
              <a href="https://dribbble.com/">
                <Image alt="Dribbble logo" src={dribbbleLogo}/>
              </a>
              <a href="https://hashnode.com/">
                <Image alt='Hashnode logo' src={hashnodeLogo}/>
              </a>
              <a href="https://bonobopress.com/">
                <Image alt="Bonobopress logo" src={bonoboPressLogo}/>
              </a>
              <a href="https://www.sitepoint.com/">
                <Image alt="Site Point logo" src={sitePointLogo}/>
              </a>
              <a href="https://www.freecodecamp.org/">
                <Image alt="FreeCodeCamp logo" src={freeCodeCampLogo}/>
              </a>
            </div>
            <div className={styles.commissions}>
              <h1>
                Graphic commisions
              </h1>
              <h2>
                Besides computer programming I love to create graphics.
                Drawing has been my passion since I can remember. When I was younger,
                I used to have hundreds of notebooks, all of them filled with my sketches.
                Later on I moved more into digital art work and now I treat it as my
                hobby, taking  small graphical project from time to time.
              </h2>
              <div className={styles.scrollGallery}>
                <div className={styles.hint}>
                  Sroll right to see more
                </div>
                <Image
                  alt="Camera logo commission"
                  layout="fixed"
                  src={logoCommission}/>
                <Image
                  alt="Breathing scheme commission"
                  layout="fixed"
                  src={schemeCommission}/>
                <Image
                  alt="Woman poster commision"
                  layout="fixed"
                  src={posterCommission}/>
                <Image
                  alt="Comic commission 1"
                  layout="fixed"
                  src={comicCommission1}/>
                <Image
                  alt="Comic commission 2"
                  layout="fixed"
                  src={comicCommission2}/>
              </div>
            </div>
          </div>
        </Fade>
        <Fade>
          <div className={styles.photoGallery}>
            <h1>
              Photo Gallery
            </h1>
            <h2>
              I do believe that <s>actions</s> images speak louder than words. By looking at the pictures below,
              you can get a little grasp of what person I am outside of work.
              <br/>
              <br/>
              Hover on photo in order to get more details.
            </h2>
            <VPhotoGrid/>
          </div>
        </Fade>
      </div>
      <VFooter/>
    </div>
  )
}