import Axios from './axios/axios';
import { useState, useEffect } from 'react';

const useFetch = (url) => {
    let [data, setData] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();
        const fetch = async () => {
            await Axios.get(
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
        };
        fetch();

        return () => abortCont.abort;
    }, [url]);

    return { data };
};

export default useFetch;
