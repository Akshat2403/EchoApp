import Axios from './axios/axios';
import { useState, useEffect } from 'react';

const useFetch = (url) => {
    let [data, setData] = useState(null);
    let [isLoading, setLoading] = useState(false);
    let [error, setError] = useState(null);
    useEffect(() => {
        const fetch = async () => {
            setLoading(true);
            try {
                const res = await Axios.get(url);
                setData(res.data);
                setLoading(false);
            } catch (err) {
                setError(false);
            }
        };
        fetch();
    }, [url]);
    const refetch = async () => {
        try {
            const res = await Axios.get(url);
            setData(res.data);
        } catch (err) {
            setError(err);
        }
    };
    return { data, isLoading, error };
};

export default useFetch;
