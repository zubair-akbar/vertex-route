import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import styled from 'styled-components';
import { BrowserRouter as Router, Link } from 'react-router-dom';

export default props => {
	return (

		<Wrapper>
			<Menu {...props}>
				<a className="menu-item" href="/">
          Home
				</a>
				<Link to="/about">
				About</Link>

				<a className="menu-item" href="/services">
          Services
				</a>

				<a className="menu-item" href="/contact">
          Contact
				</a>
			</Menu>
		</Wrapper>

	);
};

const Wrapper = styled.div`
  color: #f1f1f1;
  width: 100%;
  padding: 10px;
  text-align: center;
  font-family: 'Proxima';
  height: 30px
`;