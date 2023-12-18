import {createContext, useContext, useEffect, useReducer, useState} from "react";
import {reducer} from "./reducer.js";

const StateContext = createContext()

export const StateContextProvider = ({children}) => {

    const initialState = {
        products: [],
        cart: []
    }

    const [productList, setProductList] = useState([])
    const [search, searchItem] = useState('')

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        dispatch({type:"GET_PRODUCT", payload:productList})
        const filterData = productList.filter(item => item.title.toLowerCase().includes(search))
        dispatch({type:"GET_PRODUCT", payload:filterData})
    },[productList, search])

    const fetchData = async () => {
        const api = await fetch(`https://dummyjson.com/products`)
        const {products} = await api.json()
        setProductList(products)
    }

    const [state, dispatch] = useReducer(reducer, initialState)
    const data = {state, dispatch, search, searchItem}

    return(
        <StateContext.Provider value={data}>
            {children}
        </StateContext.Provider>
    )
}

export const useContextProvider = () => useContext(StateContext)