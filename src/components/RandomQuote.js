import { useEffect, useState } from "react";
import axios from "axios";

const RandomQuote = () => {
    const [ quote, setQuote ] = useState('');

    const getRandomQuote = async () => {
        console.log("Inside first of getRandom Quote");
        const response = await axios.get('https://api.quotable.io/random');
        console.log(response);
        setQuote(response.data.content);
        console.log("Inside last of getrandom quote");
    };

    useEffect(() => {
        getRandomQuote();
        console.log("After get random quote");
    }, []);

    return (
        <div>
            <h1>Random Quote Website</h1>
            <div>
                {quote? quote : 'Loading quote....'}
            </div>

            <button onClick={getRandomQuote}>Next</button>
        </div>
    );
};

export default RandomQuote;