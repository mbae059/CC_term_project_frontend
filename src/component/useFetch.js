import { useEffect, useState } from "react";

/*
get response to url
Input. url
Output. json
*/
export default function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(data => {
        setData(data);
      });
  }, [url]);
  return data;
}