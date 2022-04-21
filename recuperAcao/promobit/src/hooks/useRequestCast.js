import { useEffect, useState } from "react";
import axios from 'axios';

const useRequestCast = (initialData, url) => {
    const [data, setData] = useState(initialData)

    useEffect(() => {
        axios.get(url)
            .then((response) => {
                setData(response.data.cast)
            })
            .catch((err) => {
                console.log("erro data", err.response)
                
            })
    }, [url])
    return (data)
}
export default useRequestCast;