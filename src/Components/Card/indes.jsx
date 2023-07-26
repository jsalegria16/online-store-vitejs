
const Card = ({data}) => {

    // div is goint to have all the styles for all the options in the navBar
    return(
        // mb-10 margin-bott
        <div className="bg-white w-56 h-64 rounded-lg">
            <figure className="relative mb-2 w-full h-8/10 cursor-pointer">
                <pam 
                    className='absolute bottom-0 left-0 bg-blue-50 rounded-lg text-black text-xs m-2 px-3 py-0.5'
                > 
                    {data.category.name} 
                </pam>
                <img src={data.images[0]}
                    alt="MyProduct" 
                    className="w-full h-full object-cover"
                />
                <div 
                    className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1 cursor-pointer" 
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