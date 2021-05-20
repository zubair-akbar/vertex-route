// import React, { useState, createContext } from 'react';

// // Create Context Object
// export const SearchContext = createContext();

// export const SearchContextProvider = props => {
// 	const [search, setSearchTerm] = useState('');

// 	const searchHandler = (search) => {
// 		setSearchTerm(search);
// 	};

// 	return (
// 		<SearchContext.Provider value={[search, setSearchTerm]}>
// 			{props.children}
// 		</SearchContext.Provider>
// 	);
// };

// export default SearchContextProvider;