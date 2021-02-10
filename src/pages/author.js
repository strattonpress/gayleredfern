import React from 'react';
import Layout from '../layout/layout';
import { Helmet } from 'react-helmet';
import styles from './css/pages.module.scss';
import JSONData from '../contents/textcontents.json';

const Author = () => {
	return (
		<Layout>
			<Helmet>
				<title>About the Author</title>
			</Helmet>
			<div className={`${styles['ata-banner']}`}>
				<img src="/ata-banner.jpg" alt={`${JSONData.authorname}`} />
			</div>
			<div className={`${styles.main} ${styles['gray-bg']}`}>
				<div className={`container`}>
					<h2 className={`section-heading`}>About me</h2>
					<div className={`flex flex-item-even ${styles['about-the-author-content']}`}>
						<div className={`${styles['mid-space']}`}>
							{JSONData.abouttheauthor[0].left.map((data) => {
								return <p>{data}</p>;
							})}
						</div>
						<div>
							{/* JSONData.abouttheauthor[0].right.map((data) => {
								return <p>{data}</p>;
							}) */}

							<p>
								<strong>Education:</strong>
								<ul>
									<li>BA in Psychology</li>
									<li>MA – Master of Arts in Holistic Health</li>
								</ul>
							</p>
							<p>
								<strong>Additional Training in:</strong>
								<ul>
									<li>Ayurveda</li>
									<li>Counselling</li>
									<li>Energy Medicine, Pacific Flower & Sea Essences</li>
									<li>Metaphysics & Psychic counselling</li>
									<li>Three in One and Touch for Health concepts</li>
								</ul>
							</p>
							<p>
								<strong>Published Writer:</strong>
								<ul>
									<li>Comparative Study of Alternative Health Care System, 1996</li>
									<li>Ayurveda Demystified, Holistic Health for the Western World, 2003</li>
									<li>INNER BRIDGES, Opening your connection for inner peace & harmony, 2002</li>
									<li>Within & Beyond, The Connections, 2005</li>
									<li>Ancient Wisdoms, Exploring the Mysteries & Connections, 2009</li>
									<li>Ancient Wisdoms, 2nd Edition, 2018</li>
								</ul>
							</p>
							<p>
								<strong>Teacher, Lecturer:</strong>
								<ul>
									<li>
										Based on information from Inner Bridges, the importance of being balanced and
										connected within yourself and all around you.
									</li>
									<li>Ayurveda</li>
									<li>Bio-kinesiology</li>
									<li>Meditation</li>
								</ul>
							</p>
							<p>
								<strong>Psychic:</strong>
								<ul>
									<li>
										Energy reader specializing in readings that look at soul purpose and achieving
										life goals.
									</li>
								</ul>
							</p>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Author;
