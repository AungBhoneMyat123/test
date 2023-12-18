import {Link} from "react-router-dom";
import {AiOutlineShoppingCart} from "react-icons/ai";
import {useContextProvider} from "../context/StateContext.jsx";

function Navbar () {

    const {search, searchItem, state:{cart}} = useContextProvider()

    return (
        <div className='flex justify-around h-[60px] content-center items-center mx-3 rounded-lg shadow'>
            <Link to={'/'}>
                <h2 className={'text-2xl'}>
                    Comfity
                </h2>
            </Link>
            <form>
                <input value={search} onChange={e => searchItem(e.target.value)} type="text" placeholder='Search Meal' className='ps-2 pt-2 pb-2 focus:outline-none placeholder:italic border-b-2 border-b-grey-500'/>
            </form>
            <Link to={'/addtocart'}>
                <div className="relative">
                    <AiOutlineShoppingCart className={'text-2xl'}/>
                    <span className={'absolute flex justify-center items-center top-[-15px] right-[-12px] bg-sky-200 rounded-[100%] w-[20px] h-[20px]'}>{cart.length}</span>
                </div>
            </Link>
        </div>
    )
}

export default Navbar
