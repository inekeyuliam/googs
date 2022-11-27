import React, { createContext, useContext, useState} from 'react';
import axios from 'axios';
const ResultContext = createContext();
const baseUrl = 'https://google-search72.p.rapidapi.com/search';

export const ResultContextProvider = ({ children }) => {
	const [results, setResults] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const [searchTerm, setSearchTerm] = useState('')

	//type = is a basic search / video / images
	const getResults = async(q) => {
		setIsLoading(true);
		const response = await axios.get(`${baseUrl}`, {
			headers: {
				'X-RapidAPI-Key': 'ea0ff3659bmsh71565c2072c680ap1204e8jsn3f67476bb912',
				'X-RapidAPI-Host': 'google-search72.p.rapidapi.com'
			},
			params: {
				num: '20',
				start: '0',
				query: q
			},
		})

		const data = response;
		console.log(data)
		setResults(data)
		setIsLoading(false)

	
	}
	return (
		<ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm , isLoading}}>
			{children}
		</ResultContext.Provider>
	)
}

export const useResultContext = () => useContext(ResultContext)