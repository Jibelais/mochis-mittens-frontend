import {Routes, Route} from "react-router-dom"
import { useEffect, useState} from "react"
import Products from "../pages/Products"


function Main(props){





    return(
        <main>
            <Routes>
                <Route exact path = '/products' element = {<Products />}/>
            </Routes>
        </main>
    )
}

export default Main; 