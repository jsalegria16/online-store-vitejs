import { useContext } from "react"
import { LayOut } from "../../Components/LayOut"
import { OrdersCar } from "../../Components/OrdersCar"
import { ShoppingCartContext } from "../../Context"
import { Link } from "react-router-dom"




function MyOrders() {
  const context = useContext(ShoppingCartContext)

    return (
      <LayOut>
        My Orders
        {
          context.order.map((order,index)=>(
            <Link key={index} to={`/my-orders/${index}`} >
              <OrdersCar
                data = {order}
                index = {index}
              />
            </Link>
          ))
        }
      </LayOut>
    )
    
  }
  
export {MyOrders}