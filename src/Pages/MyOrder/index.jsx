import { LayOut } from "../../Components/LayOut"
import { useContext } from 'react'
import { ShoppingCartContext } from "../../Context"
import { Link } from "react-router-dom"



function MyOrder() {

  const context = useContext(ShoppingCartContext)
  // console.log('Order actual: ',context.order);
  // console.log('Order actual: ',context.order?.slice(-1)[0]);
  // console.log('Order actual: ',context.order?.slice(-1)[0].products);
  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
  console.log(index);
  if (index == 'last') {
    index = context.order?.length -1
  }
  // console.log(context.order?);

  return (
    <LayOut>
      <div className="flex justify-center items-center relative  w-80 mb-2">
          <Link to='/my-orders' className="absolute left-0 0">
            <div className="cursor-pointer">
              ◀
            </div>
          </Link > 
          <h1 className="absolute right-0">
            My order
          </h1>
      </div>

      {/* Lista de producs en el car. */}
      <div className="w-80 flex flex-col mt-5">
        {
          context.order?.[index]?.products.map( //The last order
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