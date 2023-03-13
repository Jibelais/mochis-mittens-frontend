import {Routes, Route} from "react-router-dom"
import { useEffect, useState} from "react"
import Home from "../pages/Home"
import Resources from "../pages/Resources"
import Products from "../pages/Products"
import Show from "../pages/Show"
import Add from "../pages/Add"
import Edit from "../pages/Edit"
import {db} from "../firebase_config"
import {collection, getDocs, addDoc, updateDoc, doc, deleteDoc} from 'firebase/firestore'


function Main(props){
    const [products, setProducts] = useState([])
    const productsCollectionRef = collection(db, "products")

    const createProduct = async(product) => {
        await addDoc(productsCollectionRef, product)
    }
    
    const updateProduct = async (product, id) => {
        const docRef = doc(db, "products", id)
        await updateDoc(docRef, product)

    }

    const deleteProduct = async (id) => {
        const docRef = doc(db, "products", id)
        await deleteDoc(docRef)
    }


  useEffect(() => {

         const getProducts = async () => {
            const data = await getDocs(productsCollectionRef)
            setProducts(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }
    getProducts()

    }, [])

    return(
        <main className = 'main-content'>
            <Routes>
                <Route exact path = '/' element = {<Home/>}/>
                <Route exact path = '/resource' element = {<Resources/>}/>
                <Route exact path = '/products' element = {<Products products = {products}/>}/>
                <Route exact path = '/products/:id' element = {<Show products = {products}/>}/>
                <Route exact path = '/products/add' element = {<Add products = {products} createProduct = {createProduct}/>}/>
                <Route exact path = '/products/:id/edit' element = {<Edit products = {products} updateProduct = {updateProduct} deleteProduct = {deleteProduct}/>}/>
            </Routes>
            
        </main>
    )
}

export default Main; 