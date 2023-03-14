import React from 'react'
import { useEffect, useState } from 'react'
import * as GiIcons from 'react-icons/gi'

export const Resources = () => {
    const [cats, setCats] = useState([])
    const [breed, setBreed] = useState('')
    const [form, setForm] = useState("");

    const API_URL = 'https://api.thecatapi.com/v1'

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
    getCatImage(selection[0].reference_image_id)
    };

   
    const getCatImage = async (breed_id)=>{
          const res = await fetch(`${API_URL}/images/${breed_id}`)
              const data = await res.json();
              console.log(data)
              setBreed(data)
          }
   
   const iconGenerate = (num) =>{
    const icons = []
    for (let i = 0; i<breed.breeds[0].affection_level; i++){
      icons.push(<i key={i}><GiIcons.GiPlainCircle/></i>)
    }
    return icons
   }
   const display = () =>{
    return (
      <div>
         <h5>{breed.breeds[0].name}</h5>
         <p>{breed.breeds[0].description}</p>
         <label>Affection Level:</label>
         <p className='rating'>{iconGenerate(breed.breeds[0].affection_level)}</p>
         <p>{breed.breeds[0].shedding_leve}</p>
         <p>{breed.breeds[0].child_friendly}</p>
         

     </div>
      )    
    }
  return (
    <main className='add-container bottom-margin'>
        
       <form className='form-container'onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter any cat breed"
          value={form}
          onChange={handleChange}
        />
        <button className='button' onClick = {handleSearch} >Search</button>
      </form>

      <div>
        <img className= 'show-image'src={breed.url} alt={breed.name}></img>
        {breed ? display() : " "}
      </div>
      

    </main>
   
  )
}

export default Resources