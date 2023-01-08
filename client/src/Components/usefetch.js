import axios from 'axios';
import { useState, useEffect } from 'react';

const useFetch = (url) => {
    let [data, setData] = useState(null);
    // let [ispending, setIspending] = useState(true);
    // let [error, setError] = useState(null);

    // useEffect(() => {
    //     const abortCont = new AbortController();
    //     axios(url, { signal: abortCont.signal })
    //         .then((response) => {
    //             setData(response.data);
    //             setIspending(false);
    //             setError(null);
    //         })
    //         .catch((err) => {
    //             if (err.name === 'AbortError') {
    //                 console.log('fetch aborted');
    //             } else {
    //                 setIspending(false);
    //                 setError(err.message);
    //             }
    //         });
    //     return () => abortCont.abort;
    // }, [url]);
    useEffect(() => {
        const abortCont = new AbortController();
        axios
            .get(url, { signal: abortCont.signal })
            .then((response) => {
                setData(response.data);
            })
            .catch((err) => {
                console.log(err.message);
            });
        // .then((response) => {
        //     // console.log(response.data.email)
        //     let data=response.data
        //     return data;
        // });

        return () => abortCont.abort;
    }, []);

    return { data };
};

export default useFetch;
