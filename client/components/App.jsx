import React, { useState, useEffect, Fragment } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../views/home';
import About from '../views/about';

function App() {





	return (
		<Router>
			<div>
				<MyVideo autoPlay loop muted>
					<source src='./assets/MFJI.mp4' type="video/mp4"></source>
				</MyVideo>
				<Wrapper>
					<Switch>
						<Route  path="/About" component={About} />
						<Route  path="/" component={Home} />
					</Switch>
				</Wrapper>
			</div>
		</Router>

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



const MyVideo = styled.video`
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
`;
export default App;

/*
Need to figure out how to route with a button

or

infinite scroll and render

refer to FEC


*/