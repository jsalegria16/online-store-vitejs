import { useContext } from "react"
import { ShoppingCartContext } from '../../../Context'

const CarOrder = ({data}) => {

    const context = useContext(ShoppingCartContext)
    // console.log(context.showDataProducDetail);

    return(
        <div className=" flex justify-between items-center gap-2 mb-4">
            <figure className="h-20 w-20">
                <img src={data.images[0]} alt={data.title} className="w-full h-full rounded-lg object-cover"/>
            </figure>
            <p className="text-sm font-light ">
                {data.title}
            </p>
            <p className="text-lg font-bold ">
                {` $ ${data.price}`}
            </p>
            <div  
                className='top-0 right-0 flex justify-center items-center bg-gray-600 text-white w-6 h-6 rounded-full m-2 p-1 cursor-pointer' 
                // onClick={() => context.closeCarSideMenu() }
            >
                ✖ 
            </div>
        </div>
    )

}

export {CarOrder}