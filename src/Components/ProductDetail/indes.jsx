import { useContext } from "react"
import { ShoppingCartContext } from '../../Context'
import './ProductDetail.css'

const ProductDetail = () => {

    const context = useContext(ShoppingCartContext)
    // console.log(context.showDataProducDetail);

    return(
        <aside 
            className={`product-detail flex flex-col fixed gap-5 right-0 border border-black rounded-lg bg-white  ${context.isProductDetailOpen? 'fñex': 'hidden'}`}
        >
            <div className="Title flex justify-between items-center p-3">
                <h2 className="font-medium text-xl">
                    Details
                </h2>
                <div  
                    className='absolute top-0 right-0 flex justify-center items-center bg-gray-600 text-white w-6 h-6 rounded-full m-2 p-1 cursor-pointer' 
                    onClick={() => context.closeProductDetail() }
                >
                    x 
                </div>

            </div>

            <figure className="px-5">
                <img 
                    src={context.showDataProducDetail.images?context.showDataProducDetail.images:''} 
                    // src={context.showDataProducDetail.images} 
                    alt="MyProduct" 
                    className="w-full h-full object-cover rounded-lg"
                />
            </figure>

            <p className="flex flex-col p-5">
                <span className="font-medium text-2xl">
                    {`Price: ${context.showDataProducDetail.price}`}
                </span>
                <span className="font-light text-xl">
                    {`Name: ${context.showDataProducDetail.title}`}
                </span>
                <span className="font-light text-md text-justify">
                    {`Description: ${context.showDataProducDetail.description}`}
                </span>
            </p>
            
        </aside>
    )

}

export {ProductDetail}