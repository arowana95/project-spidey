import { useState, useEffect } from 'react';

function App() {
    const [pun, setPun] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://v2.jokeapi.dev/joke/Pun?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single')
            .then(res => res.json())
            .then(data => {
                setPun(data);
                setIsLoading(false);
            })
            .catch(err => console.log(err))
    }, []);

    return (
        <>
            <div id='spidey'></div>
            <div id='arrow'></div>
            <div id='baloon'>
                {isLoading ? <p id='pun'>Thinking for a good one..</p> : <p key={pun.id} id="pun">{pun.joke}</p>}
            </div>
        </>
    );
}

export default App;
