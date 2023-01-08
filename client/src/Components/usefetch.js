import axios from 'axios';
import { useState, useEffect } from 'react';

const useFetch = (url) => {
    let [data, setData] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();
        axios
            .get(
                url,
                {
                    withCredentials: false,
                },
                { signal: abortCont.signal }
            )
            .then((response) => {
                setData(response.data);
            })
            .catch((err) => {
                console.log(err.message);
            });

        return () => abortCont.abort;
    }, []);

    return { data };
};

export default useFetch;
