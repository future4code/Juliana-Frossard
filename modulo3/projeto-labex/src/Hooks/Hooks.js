import { useState, useEffect } from "react";
import axios from "axios";


export function useRequestData(url) {
    const [data, setData] = useState(undefined)

    useEffect(() => {
        axios.get(url)
    .then((response) => {
        setData(response.data)
        })
    .catch((err) => {
        window.alert(err.response.data)
    })
    }, [url])
    return data
}

