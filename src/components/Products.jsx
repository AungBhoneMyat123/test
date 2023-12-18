import React, {useEffect, useState} from "react";
import Product from "./Product.jsx";
import {useContextProvider} from "../context/StateContext.jsx";

function Products () {

    const {state: {products}} = useContextProvider()

    return (
        <div className={'grid grid-cols-3 gap-5 my-5 mx-[4.15rem]'}>
            {products.map(item => {
                return(
                    <Product key={item.id} {...item}/>
                )
            })}
        </div>
    )

}

export default Products
