import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const Search = () => {
    const [results, setResults] = useState([]);
    const params = useParams();

    useEffect(() => {
        fetch(
            `https://api-scripture-iust-dev.herokuapp.com/v1/scripture/quraan/search/${params.term}`
        ).then(async (res) => {
            setResults(await res.json());
        });
    }, [params.term]);

    return (
        <div>
            {typeof results?.data == "object" ? (
                <div>
                    {results.data.map((search) => (
                        <div key={search.id}>{search.text.uthmani}</div>
                    ))}
                </div>
            ) : (
                <span>
                    No results found. <Link to="/">Go back</Link>.
                </span>
            )}
        </div>
    );
};

export default Search;
