import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (initialUrl) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            try {
                const res = await axios.get(initialUrl);

                if (res.status !== 200) {
                    setError('Could not fetch the data for that resource');
                } else {
                    setData(res.data.data);
                }

                setLoading(false);
            } catch (error) {
                setError('Error fetching data');
                setLoading(false);
            }
        };

        fetchData();
    }, [initialUrl]);

    return { data, error, loading };
};

export default useFetch;
