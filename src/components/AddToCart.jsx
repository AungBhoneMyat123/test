import React, {useEffect, useState} from 'react';
import {useContextProvider} from "../context/StateContext.jsx";
import Cart from "./Cart.jsx";
import {Link} from "react-router-dom";

function AddToCart() {
    const {state:{cart},dispatch} = useContextProvider()
    const [mainTotal, setMainTotal] = useState(0)

    const total = () => cart?.reduce((pv,cv) => pv + cv.price, 0)

    useEffect(() => {
        setMainTotal(total)
    },[])

    const increaseTotal = (price) => {
        setMainTotal(mainTotal + price)
    }

    const decreaseTotal = (price) => {
        setMainTotal(mainTotal - price)
    }

    return (
        <>
            {cart.length > 1 ? (
                <div>
                    <div className={'flex flex-col mt-20'}>
                        {cart?.map(item => {
                            return <Cart key={item.id} item={item} increaseTotal={increaseTotal} decreaseTotal={decreaseTotal}/>
                        })}
                    </div>
                    <hr className={'w-[90%] mx-auto mb-5'}/>
                    <div className="flex justify-around">
                        <h2>Total</h2>
                        <p>{mainTotal.toFixed(2)}</p>
                    </div>
                    <div className="flex justify-center">
                        <button onClick={() => dispatch({type:"ALL_CLEAR"})} className={'shadow my-3 bg-sky-300 rounded w-[3.5rem] h-[1.5rem]'}>Clear</button>
                    </div>
                </div>
            ) : (
                <div className={'h-auto text-center'}>
                    <div className={'flex flex-col justify-center items-center'}>
                        <h2 className={'text-2xl text-gray-400'}>Cart is Empty</h2>
                        <Link to={'/'}>
                            <button className={'text-gray-500 my-3 bg-neutral-400 rounded w-[3.5rem] h-[1.5rem]'}>Fill it</button>
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
}

export default AddToCart;