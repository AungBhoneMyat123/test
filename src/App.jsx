import './index.css'
import {Route, Routes} from "react-router-dom";
import Products from "./components/Products.jsx";
import Navbar from "./components/Navbar.jsx";
import Details from "./components/Details.jsx";
import {useEffect, useState} from "react";
import AddToCart from "./components/AddToCart.jsx";

function App() {

    const [items, setItems] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const api = await fetch(`https://fakestoreapi.com/products`)
        const data = await api.json()
        setItems(data)
    }

    return (
        <div>
            <Navbar setItems={setItems} items={items}/>
            <Routes>
                <Route path={'/'} element={<Products products={items}/>}/>
                <Route path={'/detail/:id'} element={<Details/>}/>
                <Route path={'/addtocart'} element={<AddToCart/>}></Route>
            </Routes>
        </div>
    )

}

export default App
