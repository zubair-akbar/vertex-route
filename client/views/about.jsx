import React, { Component } from 'react';
import styled from 'styled-components';

function About() {

	return (
		<AboutWrapper>
			<h1>About</h1>
            Application created to showcase multiple front and back end technologies revolving around Javascript and React.js. If you want to know more about this approach check these links below or checkout my other projects on Github.
			<h2>Talks where this project is showcased</h2>
			<h2>Posts this project is mentioned</h2>
			<ul>
				<li><em>Coming soon...</em></li>
			</ul>
		</AboutWrapper>

	);
}

const AboutWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: fixed;
  color: #f1f1f1;
  width: 100%;
  padding: 10px;
  text-align: center;
  font-family: 'Proxima';
  height: 80%;
`;

export default About;
