import React from 'react'
import { Link } from 'react-router-dom'

function DinterwebPage2() {
    return (
        <>
            <div class="text-center mt-20 c-first">
                <div class="md:flex  ">
                    <div class="flex-1 m-auto">
                        <img src="https://pbs.twimg.com/profile_images/816646317908881408/zzo5shO6_400x400.jpg" alt="" class=" w-72 mb-6 md:w-96  rounded-3xl  m-auto " />
                    </div>
                    <div class="pl-4 pr-4 md:flex-1 m-auto  md:text-center">
                        <h1 className='text-8xl mb-7'>Pagina 2</h1>
                        <Link to='/react-dinterweb'>
                            <button class="px-10 py-3 mt-4 text-base text-white bg-red-500  rounded-3xl mr-2" >Ir a pagina 1</button>
                        </Link>

                        <Link to='/Dinterweb3'>
                            <button class="px-10 py-3 mt-4 text-base text-white bg-red-500  rounded-3xl" >Ir a pagina 3</button>
                        </Link>
                    </div>


                </div>
            </div>


        </>
    )
}

export default DinterwebPage2
