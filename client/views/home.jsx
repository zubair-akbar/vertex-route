import React, { useState, useEffect, Fragment } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Link } from 'react-router-dom';


function Home() {

	let handleGitClick = () => {
		window.open('https://github.com/zubair-akbar');
	};

	return (
		<HomeWrapper>
			<Header>VERTEX Route</Header>
			<Para>An app that makes it a little easier to ascend...</Para>
			<ButtonWrap>
				<Link to="/development">
					<Button
					>
          How it works
					</Button>
				</Link>
				<Button
					onClick={handleGitClick}>
          View on Github
				</Button>
			</ButtonWrap>
		</HomeWrapper>
	);
}

export default Home;

const HomeWrapper = styled.div`
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
  height: 60%;
`;

const Header = styled.h1`
  font-weight: 600;
  color: #fff;
  font-size: 35px;
`;

const Para = styled.p`
  color: #fff;
  font-size: 15px;
  padding-bottom: 15px;
`;

const ButtonWrap = styled.div`
display: flex;
flex-direction: row;
`;

const Button = styled.button`
  border: 2px solid rgba(255,255,255,0.20);
  border-radius: 61px;
  font-size: 15px;
  color: #FFFFFF;
  background-color: transparent;
  letter-spacing: 1px;
  text-decoration: none;
  text-transform: uppercase;
  padding: 10px 25px;
  display: inline-block;
  margin-right: 15px;
  transition:all 1.2s ease-in-out;
  &:hover {
    text-shadow:
    0 0 10px rgba(255,255,255, 1),
    0 0 50px rgba(255, 255, 255, .8),
    0 0 75px rgba(255, 255, 255, .6),
    0 0 76px rgba(255, 255, 255, .4),
    0 0 77px rgba(255, 255, 255, .5),
    0 0 78px rgba(255, 255, 255, .4),
    0 0 79px rgba(255, 255, 255, .3),
    0 0 80px rgba(255, 255, 255, .2),
    0 0 85px rgba(255, 255, 255, .1);
  }
  `;