import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"

const OrdersCar = ({data,index}) => {

    const context = useContext(ShoppingCartContext)
    // console.log(context.showDataProducDetail);

    return(
        <div className=" flex justify-between items-center mb-4 border border-black rounded-lg w-80 p-4">
            
            <div className="flex justify-between w-full">
                <p className="flex flex-col">
                    <span>{`Order N°: ${index+1}  `} </span>
                    <span>{`date: ${data.date}`} </span>
                    <span>{`${data.totalProducts} articles `} </span>
                </p>
            </div>
                
            <span className="font-bold text-lg">{`Total Price: $ ${data.totalPrice}`} </span>
           
        </div>
    )

}

export {OrdersCar}