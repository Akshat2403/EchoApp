import axios from 'axios';

const useFetch = (url) => {
    let [data, setData] = useState(null);
    let [ispending, setIspending] = useState(true);
    let [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        // axios.get(baseURL).then((response) => {
        //     setPost(response.data);
        //   });

        axios(url, { signal: abortCont.signal })
            // .then((response) => {
            //     if (!response.ok) {
            //         throw Error('could not fetch the data');
            //     }
            //     return response.json();
            // })
            .then((response) => {
                setData(response.data);
                setIspending(false);
                setError(null);
            })
            .catch((err) => {
                if (err.name === 'AbortError') {
                    console.log('fetch aborted');
                } else {
                    setIspending(false);
                    setError(err.message);
                }
            });
        return () => abortCont.abort;
    }, [url]);

    return { data, ispending, error };
};

export default useFetch;