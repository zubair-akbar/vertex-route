import React from 'react';
import styled from 'styled-components';
import modalStyles from './modalStyles';

const AddDetails = () => (
	<div className="Add-Review-Modal">
		<modalStyles.Title>
      Fill in your climbing details
		</modalStyles.Title>
		<modalStyles.Wrapper
			id="submit-answer-form"
		>
			<modalStyles.Label htmlFor="Reviews-Summary">
        What route(s) will you be attempting?
				<br />
				<modalStyles.Input
					type="text"
					id="Reviews-headline"
					name="Reviews-headline"
					maxLength="60"
					placeholder=""
					className="Reviews-headline"
					required
				/>
			</modalStyles.Label>
			<br />
			<modalStyles.Label htmlFor="Reviews-Body">
        Climbing Partners
				<br />
				<modalStyles.Input
					type="text"
					id="Reviews-Body"
					name="Reviews-Body"
					maxLength="1000"
					minLength="50"
					placeholder="Tag your friends"
					className="Reviews-Body"
					required
				/>
			</modalStyles.Label>
			<br />
			<modalStyles.Label htmlFor="Reviews-recommend">
        Will there be any porters?
				<Select id="recommends">
					<option value="null">Select</option>
					<option value="yes">Yes</option>
					<option value="no">No</option>
				</Select>
			</modalStyles.Label>
			<br />
			<br />
			<modalStyles.Label htmlFor="Reviews-nickname">
        Add your username
				<br />
				<modalStyles.Input
					type="text"
					id="Reviews-nickname"
					name="Reviews-nickname"
					maxLength="60"
					placeholder="Example:UeliSteck"
					required
				/>
			</modalStyles.Label>
			<br />
			<modalStyles.Disclaimer>
			</modalStyles.Disclaimer>
			<modalStyles.Label htmlFor="Reviews-email">
        Your email address
				<br />
				<modalStyles.Input
					type="text"
					id="Reviews-email"
					name="Reviews-email"
					maxLength="60"
					placeholder="Example:user@mail.com"
					required
				/>
			</modalStyles.Label>
			<br />
			<modalStyles.Label htmlFor="Review-Photos">
        Upload any photos
				<br />
				<modalStyles.Input
					type="text"
					id="photo-upload"
					name="photo-upload"
					placeholder="Link your image here"
				/>
			</modalStyles.Label>
			<br />
			<modalStyles.Button
				type="submit"
			>
        Submit Photo
			</modalStyles.Button>
			<modalStyles.Button
				type="submit"
			>
        Remove Photo
			</modalStyles.Button>
			<br />
			<br />

		</modalStyles.Wrapper>
	</div>
);

const Select = styled.select`
  width: 100%;
  height: 35px;
  background: whitesmoke;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: solid;
  border-width: 1px;
  border-radius: 40px;
  ;

  option {
    color: black;
    background: whitesmoke;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

export default AddDetails;
