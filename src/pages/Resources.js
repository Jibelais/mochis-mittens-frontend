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
    for (let i = 0; i<num; i++){
      icons.push(<i key={i}><GiIcons.GiPlainCircle/></i>)
    }
    return icons
   }
   const display = () =>{
    return (
      <dv>
        <img id= 'resource-img'src={breed.url} alt={breed.name}></img>
        <p className='description'>{breed.breeds[0].description}</p>
        <table>
          <tbody>
            <tr>
              <td>Affection Level</td>
              <td>{iconGenerate(breed.breeds[0].affection_level)}</td>
            </tr>
            <tr>
              <td>Shedding Level</td>
              <td>{iconGenerate(breed.breeds[0].shedding_level)}</td>
            </tr>
            <tr>
              <td>Child Friendly</td>
              <td>{iconGenerate(breed.breeds[0].child_friendly)}</td>
            </tr>
            <tr>
              <td>Energy Level</td>
              <td>{iconGenerate(breed.breeds[0].energy_level)}</td>
            </tr>
          </tbody>
        </table>
      </dv>
        
      )    
    }
  return (

    <section className='resource-container'>
      <main className='add-container border'>
          <p className='resource-text'>Every cat has different personality and physical traits.  Knowing your cat defintely helps you to choose
          right products.  Search any breed you are curious about! 
          </p>
          <form className='form-container'onSubmit={handleSearch}>
          <input
            id='search'
            type="text"
            placeholder="Enter any cat breed"
            value={form}
            onChange={handleChange}
          />
          <button className='button' onClick = {handleSearch} >Search</button>
        </form>
        <div>
          {breed ? display() : <img id='resource-img'src='/img/resource.png' alt='pic'/>}
        </div>
      </main>
    </section>
 
   
  )
}

export default Resources