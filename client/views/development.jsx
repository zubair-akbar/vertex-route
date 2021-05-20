import React, { Component } from 'react';
import styled from 'styled-components';
import SearchBar from '../components/Searchbar';
function Development() {

	return (
		<Wrapper>
			<SearchBar></SearchBar>
			<div>
				<h1>About</h1>
				<div>
					<div>
           Something different
					</div>
				</div>
			</div>
		</Wrapper>
	);
}


export default Development;


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

`;