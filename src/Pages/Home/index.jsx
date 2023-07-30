import { useState,useEffect } from "react" // USe effect es bueno para APIs
import { Card } from "../../Components/Card/indes"
import { LayOut } from "../../Components/LayOut"
import { ProductDetail } from "../../Components/ProductDetail/indes";
import { ShoppingCartContext } from "../../Context";
import { useContext } from "react";


function Home() {

  const context = useContext(ShoppingCartContext)

  const renderProducts = ()=>{
    if (context.searchBytitle?.length>0) { // If there is something in the input
        if ( context.filteredItems?.length > 0) { // If we hace filtered items
          return(
            context.filteredItems?.map(
              (item) => (
                <Card
                  key = {item.id}
                  data = {item}
                />
              )
            )
          )
        }else{ // Else, let's show a message
          return(
            <h1 className="text-xl mt-20 font-bold ">
              Sorry, we've not found nothing
            </h1>
          )
        }
    } else { // else, let's show the API Items

      return(
        context.items?.map(
          (item) => (
            <Card
              key = {item.id}
              data = {item}
            />
          )
        )
      )
      
    }
  }

  return (

    <LayOut>
      <h2 className="font-medium text-xl mb-4">
      Home
      </h2>

      <input className="rounded-lg border border-black w-80 p-4 mb-3" placeholder="Search"
            // value={searchValue} 
            onChange={(event)=>{
              
              context.setSearchBytitle(event.target.value)
              
            }}
      />

      
        <div className=" grid gap-4 grid-cols-3 justify-items-center w-full max-w-screen-lg focus:outline-none">
          { //Renderizar un car por cada item De acuerdo a si queremos buscar algo o no.

            renderProducts()

          }
        </div>

      
      <ProductDetail/>  
    </LayOut>
  )
  
}
  
export {Home}