/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { ReactElement } from 'react';
import type { NextPage } from 'next';
import { Fade } from 'react-awesome-reveal';
import styles from '@styles/pages/about.module.scss';
import Layout from '@layout/index';
import VPhotoGrid from '@components/PhotoGrid';
import VNewsletters from '@shared/components/Newsletters';
import VGraphicGallery from '@shared/components/GraphicGallery';
import Head from '@shared/components/Head';

const About: NextPage = () => (
	<main className={styles.aboutContainer}>
		<Head title="About me" />
		{/* // !@ TODO: Fix something here I don't know what's wrong but something is not working properly  */}
		<div className={styles.content}>
			<section className={styles.summary}>
				<Fade>
					<h1>Long story short about me</h1>
					<h2>
						I have two leading passions in my life: one is to create, and the
						other one is to explore the world. I love to create software,
						especially web applications. Graphic design, drawing and making
						animations give me a lot of fun as well. I try to lead an active
						lifestyle. Whenever I have some spare time, I try to dedicate it to
						learning new languages, spending my time with friends and family,
						and traveling. I'm a huge sports fan, as well, especially football.
						Besides that I love hiking and rock climbing. I feel extremely good
						in the mountains. In winter I ski. To relax I usually play video
						games or watch movies/tv series. I also pay high attention to my
						self-development in the IT field, in order to be up to date with
						current trends on the market. Beneath you can find all of the
						newsletters I subscribe currently.
					</h2>
				</Fade>
			</section>
			<Fade>
				<section className={styles.hobbies}>
					<div className={styles.newsletters}>
						<h2>Newsletters I subscribe to:</h2>
						<VNewsletters />
					</div>
					<div className={styles.commissions}>
						<h1>Graphic commissions</h1>
						<h2>
							Besides computer programming I love to create graphics. Drawing
							has been my passion since I can remember. When I was younger, I
							used to have hundreds of notebooks, all of them filled with my
							sketches. Later on I moved more into digital art work and now I
							treat it as my hobby, taking small graphical project from time to
							time.
						</h2>
						<div className={styles.scrollGallery}>
							<div className={styles.hint}>Scroll right to see more</div>
							<VGraphicGallery />
						</div>
					</div>
				</section>
			</Fade>
			<Fade>
				<section className={styles.photoGallery}>
					<h1>Photo Gallery</h1>
					<h2>
						I do believe that <s>actions</s> images speak louder than words. By
						looking at the pictures below, you can get a little grasp of what
						person I am outside of work.
						<br />
						<br />
						Hover on photo in order to get more details.
					</h2>
					<VPhotoGrid />
				</section>
			</Fade>
		</div>
	</main>
);

// @ts-ignore
About.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;
export default About;
