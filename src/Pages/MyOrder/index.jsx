import { CarOrder } from "../../Components/CarSideMenu/CarOrder"
import { LayOut } from "../../Components/LayOut"
import { useContext } from 'react'
import { ShoppingCartContext } from "../../Context"



function MyOrder() {

  const context = useContext(ShoppingCartContext)
  console.log('Order actual: ',context.order);
  console.log('Order actual: ',context.order?.slice(-1)[0]);
  console.log('Order actual: ',context.order?.slice(-1)[0].products);
  return (
    <LayOut>
      <p>
        My order
      </p>
      {/* Lista de producs en el car. */}
      <div className="w-80 flex flex-col">
        {
          context.order?.slice(-1)[0].products.map( //The last order
              (product) => (
                <div className=" flex justify-between items-center gap-2 mb-4">
                  <figure className="h-20 w-20">
                      <img src={product.images[0]} alt={product.title} className="w-full h-full rounded-lg object-cover"/>
                  </figure>
                  <p className="text-sm font-light ">
                      {product.title}
                  </p>
                  <p className="text-lg font-bold ">
                      {` $ ${product.price}`}
                  </p>
                </div>
              )
          )
        }
      </div>
    </LayOut>
  )
    
  }
  
export {MyOrder}