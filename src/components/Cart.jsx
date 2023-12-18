import React, {useState} from 'react';
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io";
import {useContextProvider} from "../context/StateContext.jsx";

const Cart = ({item, increaseTotal, decreaseTotal}) => {
    const [quantity, setQuantity] = useState(1)

    const increaseQty = () => {
        setQuantity(quantity + 1)
        increaseTotal(item.price)
    }

    const {dispatch} = useContextProvider()

    const decreaseQty = () => {
        if (quantity > 1){
            setQuantity(quantity - 1)
            decreaseTotal(item.price)
        }
    }

    const removeCart = () => {
        dispatch({type:"REMOVE_CART", payload:item})
        decreaseTotal(itemPrice)
    }

    const itemPrice = item.price * quantity

    return (
        <div className={' flex justify-around my-5'}>
            <div className="w-[90%] flex justify-around items-center">
                <img src={item.thumbnail} alt="" className={'w-[15rem] h-[15rem]'}/>
                <div className="">
                    <h2 className={'text-2xl'}>{item.title.substring(0, 25)}......</h2>
                    <p>$ {itemPrice.toFixed(2)}</p>
                    <p onClick={removeCart} className={'cursor-pointer text-red-600'}>Remove</p>
                </div>
                <div className={'flex flex-col items-center'}>
                    <p onClick={increaseQty} className={'bg-sky-300 rounded h-[1.25rem] flex items-center cursor-pointer'}>
                        <IoIosArrowUp/>
                    </p>
                    <span className={'my-5 select-none'}>{quantity}</span>
                    <p onClick={decreaseQty} className={'bg-sky-300 rounded h-[1.25rem] flex items-center cursor-pointer'}>
                        <IoIosArrowDown/>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Cart;