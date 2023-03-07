import {Routes, Route} from "react-router-dom"
import { useEffect, useState} from "react"
import Products from "../pages/Products"
import Add from "../pages/Add"
import {db} from "../firebase_config"
import {collection, getDocs, addDoc, updateDoc, doc} from 'firebase/firestore'


function Main(props){
    const [products, setProducts] = useState([])
    const productsCollectionRef = collection(db, "products")

    const createProduct = async(product) => {
        await addDoc(productsCollectionRef, product)
    }
    
    const editProduct = async (id, editedProduct) => {
        const productDoc = doc(db, "products", id)
        await updateDoc(productDoc, updateDoc)

    }


  useEffect(() => {

         const getProducts = async () => {
            const data = await getDocs(productsCollectionRef)
            setProducts(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }
    getProducts()

    }, [])
    console.log(products)

    return(
        <main>
            <Routes>
                <Route exact path = '/products' element = {<Products products = {products}/>}/>
                <Route exact path = '/products/add' element = {<Add products = {products} createProduct = {createProduct}/>}/>
            </Routes>
        </main>
    )
}

export default Main; 