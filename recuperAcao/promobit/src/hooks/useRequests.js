import { useEffect, useState } from "react";
import axios from 'axios';

const useRequest = (initialData, url) => {
    const [data, setData] = useState(initialData)

    useEffect(() => {
        axios.get(url)
            .then((response) => {
                setData(response.data.genres)
            })
            .catch((err) => {
                console.log("erro data", err.response)
                
            })
    }, [url])
    return (data)
}
export default useRequest;