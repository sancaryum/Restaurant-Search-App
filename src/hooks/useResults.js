import {useState, useEffect} from 'react';
import yelp from '../api/yelp';



export default () =>{

    //results verisi bir array şeklinde gelecek
    //setResults burada result'ın set metodudur
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        console.log("Hi there")
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose',
                }
            });
            setResults(response.data.businesses)
        } catch (e) {
            setErrorMessage('Connection Error')
        }

    };

    useEffect(() => {
        searchApi('meat');
    }, [])

    return [searchApi, results, errorMessage];


};