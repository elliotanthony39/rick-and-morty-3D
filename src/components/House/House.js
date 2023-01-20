import { useState } from 'react'
import CharacterList from '../CharacterList/CharacterList'
import Credits from '../Credits/Credits'
import logo from '../../assets/img/rick-morty-logo.png'
import rick from '../../assets/img/rick-and-morty.png'
import '../../styles/House.css'


function House() {
  const [load, setLoad] = useState(true)
  return (
    <div className='house-content'>
    <div className="house-header d-flex justify-content-center">
      <img className="image image-rick img-fluid" src={rick} alt='rick-morty'/>  
      <img className="image image-logo img-fluid" src={logo} alt="logo"/>
    </div>
      {
        load ? <Credits setLoad={setLoad}/> : <CharacterList />
      }
    </div>
  )
}

export default House