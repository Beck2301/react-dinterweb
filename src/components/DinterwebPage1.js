import React from 'react'
import { Link } from 'react-router-dom'



function DinterwebPage1() {
    return (
        <>
            <div class="text-center mt-20 c-first">
                <div class="md:flex  ">
                    <div class="flex-1 m-auto">
                        <h1 class=" md:text-6xl mb-5">Ejemplo pagina 1</h1>
                        <Link to='/Dinterweb2'>
                            <button class="px-10 py-3 mt-4 text-base text-white bg-red-500  rounded-3xl mr-2" >Ir a pagina 2</button>
                        </Link>

                        <Link to='/Dinterweb3'>
                            <button class="px-10 py-3 mt-4 text-base text-white bg-red-500  rounded-3xl" >Ir a pagina 3</button>
                        </Link>
                    </div>
                    <div class="pl-4 pr-4 md:flex-1 m-auto  md:text-justify ">
                        <img src="https://www.dinterweb.com/wp-content/uploads/2021/03/agencia-inbound-latinoamerica.png" alt="" class=" mb-6  m-auto rounded-3xl" />
                    </div>
                </div>
            </div>





        </>
    )
}

export default DinterwebPage1
