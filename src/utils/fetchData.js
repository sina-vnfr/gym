export const exerciesoptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key':process.env.REACT_APP_RAPID_API_KEY   ,
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};

export const youtubeOptions = {
	method: 'GET',
	headers: {
	  'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
	  'X-RapidAPI-Key': 'ba7c040e37msh2f9228bd2d00a1fp1a367ajsn158f422d3406',
	},
  };


export const fetchData = async (url , options) => {
    const response = await fetch(url,options);
    const data = await response.json();


    return data;
}