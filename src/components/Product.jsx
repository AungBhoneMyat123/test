import React from 'react';
import {Link} from "react-router-dom";
import {useContextProvider} from "../context/StateContext.jsx";

const Product = props => {
    const {id, thumbnail, title, category, price} = props
    const {dispatch} = useContextProvider()
    return (
        <div className={'w-[23rem] border border-2 rounded-[1rem]'}>
            <div className="flex flex-col items-center">
                <img className={'w-[15rem] h-[15rem]'} src={thumbnail} alt=""/>
                <div className="flex flex-col justify-start w-[95%] my-5">
                    <h1 className={'font-bold text-neutral-600 text-3xl my-1'}>{title.substring(0, 16,)}....</h1>
                    <p className={'italic text-neutral-600 font-bold text-2xl my-1'}>Category: <span className={'not-italic font-normal'}>{category}</span></p>
                    <span className={'text-2xl my-1 text-slate-600'}>$ {price}</span>
                </div>
                <div className={'w-[100%] flex justify-between'}>
                    <Link to={`/detail/${id}`}>
                        <button className={'shadow h-[2rem] rounded px-3 h-[2.75rem] mx-3 my-3 text-stone-300 bg-neutral-500'}>Detail</button>
                    </Link>
                    <button onClick={() => dispatch({type: "ADD_TO_CART", payload: props})} className={'shadow h-[2rem] rounded px-3 h-[2.75rem] mx-3 my-3 text-stone-300 bg-neutral-500'}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

Product.propTypes = {

};

export default Product;