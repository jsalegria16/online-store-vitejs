import { useContext } from "react"
import {ShoppingCartContext} from '../../Context'

const Card = ({data}) => {

    // const {setCount,count} = useContext(ShoppingCartContext) // Read the global state
    const context = useContext(ShoppingCartContext) // Read the global state
    // div is goint to have all the styles for all the options in the navBar

    const showProductDetail = (event,data) => {
        context.closeCarSideMenu()
        context.openProductDetail()
        context.setShowDataProducDetail(data)
        console.log(data);
    }

    const addProductToCar = (event,productData) => {
        event.stopPropagation() // I only want menu side and no product detail.
        context.setCount(context.count + 1) //Numero del carrio
        context.setShoppingCardProducts([...context.shoppingCardProducts,productData]) // Spread >> Agrego el nuevo producto a lo enterior
        console.log(context.shoppingCardProducts);
        context.closeProductDetail()
        context.openCarSideMenu() // Abrimos el sideMenu del shopping car

        
    }

    {/* data.images[0] */}
    return(
        // mb-10 margin-bott
        <div className="bg-white w-56 h-64 rounded-lg cursor-pointer"
            onClick={(event)=>showProductDetail(event,data)}
        >
            <figure className="relative mb-2 w-full h-8/10 ">
                <pam 
                    className='absolute bottom-0 left-0 bg-blue-50 rounded-lg text-black text-xs m-2 px-3 py-0.5'
                > 
                    {data.category.name} 
                </pam>
                <img src={'https://images.pexels.com/photos/63690/pexels-photo-63690.jpeg?auto=compress&cs=tinysrgb&w=600'} 
                
                    alt="MyProduct" 
                    className="w-full h-full object-cover"
                />
                <div 
                    className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1 cursor-pointer" 
                    onClick={(event)=>addProductToCar(event,data)}
                >
                    +
                </div>
            </figure>
            <p className="flex justify-between">
                <spam className='text-sm font-light'>
                   {data.title} 
                </spam>
                <spam className='text-lg font-bold'>
                    {`$ ${data.price}`}
                </spam>
            </p>
           
        </div> 
    )

}

export {Card}