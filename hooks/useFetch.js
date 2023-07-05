import {useState, useEffect} from 'react';
import axios from 'axios';

const useFetch = (locationes, units) => {
  const [datas, setdata] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [error, seterror] = useState(null);

  const options = {
    method: 'GET',
    url: 'https://visual-crossing-weather.p.rapidapi.com/forecast',
    params: {
      aggregateHours: '24',
      location: locationes,
      contentType: 'json',
      unitGroup: units,
      shortColumnNames: '0',
    },
    headers: {
      'X-RapidAPI-Key': 'ae3c8fbdc9msh43d1ce08c99c70cp1318c4jsnda131d799d2a',
      'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com',
    },
  };

  const fetchData = async () => {
    setisLoading(true);

    try {
      const response = await axios.request(options);
      setdata(response.data.locations[locationes]);
      console.log(datas.currentConditions);
      setisLoading(false);
    } catch (error) {
      seterror(error);
      console.error(error);
    } finally {
      setisLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setisLoading(true);
    fetchData();
  };

  return {datas, error, isLoading, refetch};
};


export default useFetch;
