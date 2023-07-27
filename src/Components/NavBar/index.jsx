import {NavLink} from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import { useContext } from 'react'
const NavBar = () => {

    const {setCount,count} = useContext(ShoppingCartContext)

    const activeStyle =  'underline underline-offset-4 '
    const activation = ({isActive}) => isActive? activeStyle : undefined

    return (
        <nav className='flex justify-between items-center top-0 w-full py-5 px-8 text-base font-light'>

            <ul className='RightSide flex items-center z-10 gap-4'>
                <li className='font-bold text-lg'>
                    <NavLink 
                        to='/'
                    >
                        Shopi
                    
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/all'
                        className = {({isActive}) => 
                            isActive? activeStyle : undefined
                        }
                    >
                        all 
                    
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/Clothes'
                        className = {({isActive}) => 
                        isActive? activeStyle : undefined
                    }
                    >
                        Clothes
                    
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/Electronics' 
                        className = {({isActive}) => 
                        isActive? activeStyle : undefined
                    }
                    >
                        Electronics
                   
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/Furnitures'
                        className = {({isActive}) => 
                        isActive? activeStyle : undefined
                    }
                    >
                        Furnitures
                    
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/Toys'
                        className = {({isActive}) => 
                        isActive? activeStyle : undefined
                    }
                    >
                        Toys
                    
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/Others'
                        className = {({isActive}) => 
                        isActive? activeStyle : undefined
                    }
                    >
                        Others
                    
                    </NavLink>
                </li>
            </ul>

            <ul className='LeftSide flex items-center  z-10 gap-4'>
                <li className='text-black/60'>
                    email@email.com
                </li>
                <li>
                    <NavLink to='/my-orders'
                        className = {({isActive}) => 
                        isActive? activeStyle : undefined
                    }
                    >
                        My Ordes 
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/my-account'
                        className = {({isActive}) => 
                        isActive? activeStyle : undefined
                    }
                    >
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/singin'
                        className = {({isActive}) => 
                        isActive? activeStyle : undefined
                    }
                    >
                        Sing In
                    </NavLink>
                </li>
                <li>
                    🛒 {count}
                </li>
            </ul>

        </nav>


    )

}

export {NavBar}