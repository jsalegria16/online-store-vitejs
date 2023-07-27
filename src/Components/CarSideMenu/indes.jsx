import {Link, NavLink} from 'react-router-dom'
import { useContext } from "react"
import { ShoppingCartContext } from '../../Context'
import './styles.css'
import { CarOrder } from "./CarOrder"
import { TotalPrice } from "../../Utils"

const CarSideMenu = () => {

    const context = useContext(ShoppingCartContext)
    // console.log(context.showDataProducDetail);

    const HandleCheckOut = () => {

        context.closeCarSideMenu()

        //Generate my new order
        const orderToAdd = {
            date: '2023 :)',
            products: context.shoppingCardProducts,
            totalProducts:context.count,
            totalPrice: TotalPrice(context.shoppingCardProducts)
        }
        //I update my order State
        context.setOrder([...context.order,orderToAdd])
        console.log(context.order);

        context.setShoppingCardProducts([])
        context.setCount(0)
    }

    return(
        <aside 
            className={`car-side-menu flex flex-col fixed gap-5 right-0 border border-black rounded-lg bg-white ${context.isCarSideMenuOpen? 'flex': 'hidden'} `}
        >
            {/* Tittle  */}
            <div className="Title flex justify-between items-center p-3 border border-black rounded-lg">
                <h2 className="font-medium text-xl">
                    My Order
                </h2>
                <div  
                    className='absolute top-0 right-0 flex justify-center items-center bg-gray-600 text-white w-6 h-6 rounded-full m-2 p-1 cursor-pointer' 
                    onClick={() => context.closeCarSideMenu() }
                >
                    x 
                </div>
            </div>

            {/* Total price */}
            <div class="MyOrderInf ">
                <p className="text-lg">
                    Total 
                </p>

                <p class="TotalPriceShoppingCar ">
                    {`$ ${TotalPrice(context.shoppingCardProducts)}`}
                </p>
            </div>

            {/* Lista de producs en el car. */}
            <div className="p-2 overflow-y-scroll flex1">
                {
                    context.shoppingCardProducts.map(
                        (product) => (
                            <CarOrder
                                key = {product.id} 
                                data ={product}
                            />
                        )
                    )
                }
            </div>

            {/* Checkout button */}

            <Link to='my-orders/last'>
                <button 
                    class="PrimaryButton flex items-center justify-center mt-1 mb-1 h-11 w-9/10 rounded-lg text-white font-bold bg-violet-600 cursor-pointer"
                    onClick={()=> HandleCheckOut()}
                >
                Checkout
                </button>
            </Link>
            
            
            
        </aside>
    )

}

export {CarSideMenu}