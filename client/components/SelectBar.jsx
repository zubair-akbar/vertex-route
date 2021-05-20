import React, { useState, useEffect, Fragment } from 'react';
import styled from 'styled-components';


function SelectBar( {selection, setSelection} ) {

	return (
		<Select
			onChange={(e) => { setSelection(e.target.value); }}
		>
			<option value="">Select</option>
			<option value="Mount Fuji">Mount Fuji</option>
			<option value="Mount Whitney">Mount Whitney</option>
			<option value="Mount Blanc">Mount Blanc</option>
			<option value="Eiger">Eiger</option>
			<option value="Mount Damavand">Mount Damavand</option>

		</Select>

	);
}

export default SelectBar;

const Select = styled.select`
  background-color: transparent;
  width: auto;
  height: 35px;
  color: #f1f1f1;
  font-size: 14px;
  border: none;
  text-align: center;
  font-family: 'Proxima';
  `;