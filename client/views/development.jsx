import React, { Component } from 'react';
import styled from 'styled-components';
import SearchBar from '../components/Searchbar';
import SelectBar from '../components/SelectBar';
import data from '../../graphql-server.json';
import AddDetailsModal from '../components/AddDetailsModal';


function Development({ selection, setSelection, modal, setModal }) {

	let currentSelection = data.mountains.filter(obj => obj.name === selection);

	console.log(modal);

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
			<Button
				onClick={() => setModal(true)}
			>Add your climb details</Button>
			<SearchBar
				selection={selection}
				setSelection={setSelection}
			/>
			<AddDetailsModal
				onClose={() => setModal(false)}
				open={modal}
			/>
		</DevelopmentWrapper>
	);
}

// <AddDetailsModal
// 				onClose={() => setModal(false)}
// 				open={modal}
// 			/>

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

const Button = styled.button`
  border: 2px solid rgba(255,255,255,0.20);
  border-radius: 61px;
  font-size: 15px;
  color: #FFFFFF;
  background-color: transparent;
  letter-spacing: 1px;
  text-decoration: none;

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