import {useEffect, useState} from 'react';

export function useFetch(fetchFn,initialValue){

    const [fetchedData, setFetchedData] = useState();
    const [isFetching, setIsFetching] = useState(initialValue);
    const [error, setError] = useState();

    useEffect(() => {
        async function fetchData() {
          setIsFetching(true);
          try {
            const data = await fetchFn();
            setFetchedData(data);
          } catch (error) {
            setError({ message: error.message || 'Failed to fetch user places.' });
          }
    
          setIsFetching(false);
        }
    
        fetchData();
      }, [fetchFn]);

      return {
        isFetching,
        error,
        setFetchedData,
        fetchedData
      }
}