import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

function Details () {

    const {id} = useParams()

    const [items, setItems] = useState({})
    useEffect(()=> {
        fetchData()
    },[])

    const fetchData = async () => {
        const api = await fetch(`https://dummyjson.com/products/${id}`)
        const data = await api.json()
        setItems(data)
    }

    return (
        <div>
            <p>{items.title}</p>
        </div>
    )

}

export default Details
