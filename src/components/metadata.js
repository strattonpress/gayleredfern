import React from 'react';
import { Helmet } from 'react-helmet';
import JSONData from '../contents/textcontents.json';

const Metadata = () => {
	return (
		<Helmet titleTemplate={`%s | ${JSONData.authorname}`} defaultTitle={`${JSONData.authorname}`}>
			<link rel="stylesheet" href="/css/global.css" />
			<link
				href="https://fonts.googleapis.com/css?family=Open+Sans|Francois+One|Raleway:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap"
				rel="stylesheet"
			/>
		</Helmet>
	);
};

export default Metadata;
