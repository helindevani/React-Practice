
import { useState, useEffect } from 'react';
import Places from './Places.jsx';
import Error from './Error.jsx';
import {sortPlacesByDistance} from '../loc.js';
import { fetchAvailablePlaces } from '../http.js';

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();

//  useEffect(() => {
//   setIsFetching(true);
//    fetch("http://localhost:3000/places")
//      .then((response) => {
//        return response.json();
//      })
//      .then((resData) => {
//        setAvailablePlaces(resData.places);
//        setIsFetching(false);
//      });
//  }, []);

 //using async and await method to fetch request
 useEffect(() => {
   async function fetchPlaces() {
     setIsFetching(true);
     try {
      const places=await fetchAvailablePlaces();

       navigator.geolocation.getCurrentPosition((position) => {
         const sortedPlaces = sortPlacesByDistance(
           places,
           position.coords.latitude,
           position.coords.longitude
         );
         setAvailablePlaces(sortedPlaces);
         setIsFetching(false);
       });
     } catch (error) {
       setError({
         message:
           error.message || "could not fetch places please try again later"
       });
       setIsFetching(false);
     }
   }
   fetchPlaces();
 }, []);

 if(error){
  return <Error title="An error occurred!" message={error.message} />;
 }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
