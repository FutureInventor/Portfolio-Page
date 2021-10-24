/* eslint-disable @typescript-eslint/ban-ts-comment */
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Fade } from 'react-awesome-reveal';
import VMainHeader from '@components/MainHeader';
import { chevronDown, profilePicture } from '@shared/assets/index';
import styles from '@styles/pages/home.module.scss';
import Layout from '@layout/index';
import type { NextPage } from 'next';
import { ReactElement } from 'react';
import VToolsTech from '@components/ToolsTech';

const Home: NextPage = () => (
	<main className={styles.homeContainer}>
		<Head>
			<title>Karolina Hudziec</title>
			<meta
				name="description"
				content="This is my portfolio page. The purpose of this page is to introduce my person, my coding style, and show off a little bit of my web development skills."
			/>
			<meta name="author" content="Karolina Hudziec" />
			<meta name="keywords" content="Karolina, Hudziec, Portfolio, Frontend" />
			<meta
				property="og:image"
				content="https://www.khudziec.com/portfolioPage.png"
				key="ogimage"
			/>
			<link rel="shortcut icon" href="/favicon.ico?" type="image/x-icon" />
		</Head>
		<div className={styles.content}>
			<section className={styles.intro}>
				<div className={styles.introduction}>
					<VMainHeader />
					<div className={styles.profilePicture}>
						<Image
							alt="Profile picture of Karolina Hudziec."
							src={profilePicture}
						/>
					</div>
				</div>
				<div className={styles.swipeDownIcon}>
					<Image
						alt="Chevron down icon."
						src={chevronDown}
						width="40px"
						height="15px"
					/>
				</div>
			</section>
			<section className={styles.workHistory}>
				<div className={styles.linkBox}>
					<Fade>
						<h1 className={styles.linkBoxTitle}>
							Work
							<br />
							History
						</h1>
						<h2 className={styles.linkBoxTextContent}>
							Here you can find out more about the companies I've collaborated
							with, projects I've been part of and the technologies I use every
							day.
						</h2>
						<Link href="work">
							<a className={styles.linkBoxButton}>Check out my work history</a>
						</Link>
					</Fade>
				</div>
				<div className={styles.workHistoryBackground} />
			</section>
			<section className={styles.technologiesAndTools}>
				<Fade>
					<h1>Technologies & Tools I work with</h1>
					<VToolsTech />
				</Fade>
			</section>
			<section className={styles.personalProjects}>
				<div className={styles.linkBox}>
					<Fade>
						<h1 className={styles.linkBoxTitle}>About me</h1>
						<h2 className={styles.linkBoxTextContent}>
							Here you can find out more about me, my hobbies and personal
							project I'm currently working on.
						</h2>
						<Link href="about">
							<a className={styles.linkBoxButton}>Get to know more about me</a>
						</Link>
					</Fade>
				</div>
				<div className={styles.personalProjectsBackground} />
			</section>
		</div>
	</main>
);

// @ts-ignore
Home.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;
export default Home;
