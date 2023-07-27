import { useContext } from "react"
import { ShoppingCartContext } from '../../Context'
import './styles.css'
import { CarOrder } from "./CarOrder"

const CarSideMenu = () => {

    const context = useContext(ShoppingCartContext)
    // console.log(context.showDataProducDetail);

    return(
        <aside 
            className={`car-side-menu flex flex-col fixed gap-5 right-0 border border-black rounded-lg bg-white ${context.isCarSideMenuOpen? 'flex': 'hidden'} `}
        >
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

            <div className="p-2">
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
            
        </aside>
    )

}

export {CarSideMenu}