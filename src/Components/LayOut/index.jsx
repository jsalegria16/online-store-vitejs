
const LayOut = ({children}) => {

    // div is goint to have all the styles for all the options in the navBar
    return(
        <div className="flex flex-col items-center mt-20">
            {children} {/*Someone is comming here. */}
        </div> 
    )

}

export {LayOut}