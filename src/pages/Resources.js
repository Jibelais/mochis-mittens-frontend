import React from 'react'
import { useEffect, useState } from 'react'

export const Resources = () => {
    const [cats, setCats] = useState([])
    const [catID, setCatID] = useState([])
    const [catName, setCatName] = useState('')
    const [form, setForm] = useState("");

    const API_URL = 'https://api.thecatapi.com/v1'
    const API_KEY = process.env.API_KEY

    const getBreed =async() =>{
        const res = await fetch(`${API_URL}/breeds`)
        const data = await res.json();
        setCats(data)
    }
   

    useEffect(() => {
      getBreed()
    }, [])
   
 
    const handleChange = (event) => {
     setForm(event.target.value);
    };

    const handleSearch = (event) => {
      event.preventDefault();
      let selection = cats.filter((cat) => {
        return (cat.name  === form)
    })
    setForm('')
    setCatID(selection[0].reference_image_id)
    };
    console.log(catID)
   
    const getCatImage = async (breed_id)=>{
          const res = await fetch(`${API_URL}/images/${breed_id}`)
              const data = await res.json();
              console.log(data)
          }
    getCatImage(catID)
   
  return (
    <form onSubmit={handleSearch}>
    <input
      type="text"
      placeholder="Search..."
      value={form}
      onChange={handleChange}
    />
    <input type="submit"/>
  </form>
  )
}

export default Resources