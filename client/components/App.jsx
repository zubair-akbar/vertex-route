import React, { useState, useEffect, Fragment } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import Home from '../views/home';
import About from '../views/about';
import Development from '../views/development';
import SideBar from '../components/Sidebar';


function App() {
	const [selection, setSelection] = useState('');
	const [modal, setModal] = useState('false');

	console.log('%c Woah! Made by Zubair Akbar 🤓 ', 'background: #222; color: #bada55');

	return (


		<Router>
			<SideBar right width={ '12%' } />
			<div>
				<MyVideo loop autoPlay muted>
					<source src='./assets/MFJI.mp4' type="video/mp4"></source>
				</MyVideo>

				<Switch>
					<Route path="/Development" render={() => <Development
						selection={selection}
						setSelection={setSelection}
						modal={modal}
						setModal={setModal}
					/>}
					/>
					<Route path="/About" component={About} />
					<Route path="/" component={Home}/>
				</Switch>

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
  font-family: 'Proxima';
  text-align: center;
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
