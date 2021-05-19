import React, { useState, useEffect, Fragment } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function Home() {

	let handleGitClick = () => {
		window.open('https://github.com/zubair-akbar');
	};

  let handleRouteChange = () => {
  	<Link to="/about">About</Link>;
  };

  return (
    <div>
      <Header>VERTEX Route</Header>
      <Para>An app that makes it a little easier to ascend...</Para>
      <p><Link to="/About">About</Link></p>
      <ButtonWrap>
        <Button
        >
          How it works
						</Button>
        <Button
          onClick={handleGitClick}>
          View on Github
						</Button>
      </ButtonWrap>
    </div>
  )
}

export default Home

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