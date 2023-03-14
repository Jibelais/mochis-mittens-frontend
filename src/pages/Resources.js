import React from 'react'
import { useEffect, useState } from 'react'

export const Resources = () => {
    const [cats, setCats] = useState([])
    const [catID, setCatID] = useState([])
    const [breed, setBreed] = useState('')
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
        return cat.name.toLowerCase().includes(form.toLowerCase())
    })
    setForm('')
    setCatID(selection[0].reference_image_id)
    };
    console.log(catID)
   
    const getCatImage = async (breed_id)=>{
          const res = await fetch(`${API_URL}/images/${breed_id}`)
              const data = await res.json();
              console.log(data)
              setBreed(data)
          }
    getCatImage(catID)
   
  return (
    <main>
        
       <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter any cat breed"
          value={form}
          onChange={handleChange}
        />
        <input type="submit"/>
      </form>

      <img src={breed.url} alt={breed.name}></img>
    </main>
   
  )
}

export default Resources