import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function App() {

	let handleGitClick = () => {
		window.open('https://github.com/zubair-akbar');
	};

	return (
		<div>
			<MyVideo autoPlay loop muted>
				<source src='./assets/videoplayback.mp4' type="video/mp4"></source>
			</MyVideo>
			<Wrapper>
				<Header>VERTEX Route</Header>
				<Para>An app that makes it a little easier to ascend...</Para>
				<ButtonWrap>
					<Button>
            How it works
					</Button>
					<Button
						onClick={handleGitClick}>
            View on Github
					</Button>
				</ButtonWrap>
			</Wrapper>
		</div>
	);

}
const Wrapper = styled.div`
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
  min-height: 100vh;
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
  transition:all 2.2s ease-in-out;
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

const MyVideo = styled.video`
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
`;
export default App;

