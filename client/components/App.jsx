import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function App() {

	return (
		<div>
			<MyVideo autoPlay loop muted>
				<source src='./assets/videoplayback.mp4' type="video/mp4"></source>
			</MyVideo>
			<Wrapper>
				<Header>VERTEX Route</Header>
				<Para>An app that makes it a little easier to ascend...</Para>
				<ButtonWrap>
					<Button>How it works</Button>
					<Button>View on Github</Button>
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

const Button = styled.a`
  border: 2px solid rgba(255,255,255,0.20);
  border-radius: 61px;
  font-size: 15px;
  color: #FFFFFF;
  letter-spacing: 1px;
  text-decoration: none;
  text-transform: uppercase;
  padding: 10px 25px;
  display: inline-block;
  margin-right: 15px;
  `;

const MyVideo = styled.video`
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
`;
export default App;

