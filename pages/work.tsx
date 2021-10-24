/* eslint-disable @typescript-eslint/ban-ts-comment */
import Layout from '@layout/index';
import { Fade } from 'react-awesome-reveal';
import VTimelineGrid from '@components/TimelineGrid';
import styles from '@styles/pages/work.module.scss';
import type { ReactElement } from 'react';
import type { NextPage } from 'next';

const VWork: NextPage = () => {
	return (
		<div className={styles.workContainer}>
			<div className={styles.content}>
				<div className={styles.summary}>
					<Fade>
						<h1>My work history</h1>
						<h2>
							I've started my journey with programming back in 2016 on Silesian
							University with C++ (basics) and Python (basics + NumPy), which I
							mostly used to analyze and simulate results of different
							experiments. I've also got some experience in creating basic
							drivers. Later, after I'd finished my studies, I decided to go in
							the different direction. I lived in London for a year and was
							learning web development on my own. In 2020 I'd managed to get an
							internship and worked as a trainee Full-Stack developer (PHP, JS
							React, MySQL, Rest API). Since then, I have been working as
							Front-End React TypeScript Software Developer.
						</h2>
					</Fade>
				</div>
				<Fade>
					<div className={styles.timelineGridCotainer}>
						<VTimelineGrid />
					</div>
				</Fade>
			</div>
		</div>
	);
};

// @ts-ignore
VWork.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;
export default VWork;
