import { useState, useEffect } from 'react';
import axios from 'axios';  

const useFetch = url => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            // const url = 'http://localhost:4000/api/v1/tours/search/getFeaturedTours';
            try {
                const res = await fetch(url);

                if (!res.ok) {
                    setError('Could not fetch the data for that resource');
                    // alert('Could not fetch the data for that resource')
                }
                const result = await res.json();
                setData(result.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);

            }
        };

        fetchData();

    }, [url]);


    return {
        data,
        error,
        loading
    };
};

export default useFetch