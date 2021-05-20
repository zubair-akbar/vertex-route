import React, { Component } from 'react';
import styled from 'styled-components';
import SearchBar from '../components/Searchbar';
import SelectBar from '../components/SelectBar';
import data from '../../graphql-server.json';

function Development({ selection, setSelection }) {

	let currentSelection = data.mountains.filter(obj => obj.name === selection);

	console.log(currentSelection);

	return (
		<DevelopmentWrapper>
			<div>
				<h1>Plan your next climb</h1>
				<div>
					<div>
            Where do you plan to go?
					</div>
				</div>
				<SelectBar
					selection={selection}
					setSelection={setSelection}
				/>
			</div>
			{selection !== '' &&
        <Stats>
          You've selected:
        	<br />{selection}
        	<br />Elevation: {currentSelection[0].elevation}
        	<br />Est. caloric expenditure: {currentSelection[0].calories}
        	<br />Est. continuous movememnt time to summit: {currentSelection[0].time}
        	<br />Location: {currentSelection[0].location}
        </Stats>
			}
			<SearchBar
				selection={selection}
				setSelection={setSelection}
			/>
		</DevelopmentWrapper>
	);
}


export default Development;


const DevelopmentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: space-between;
  row-gap: 60px;
  position: fixed;
  color: #f1f1f1;
  width: 100%;
  padding: 10px;
  text-align: center;
  font-family: 'Proxima';
`;

const Stats = styled.div`
padding: 10px
line-height: 1.6;
`;

const SearchBarWrap = styled.div`

`;