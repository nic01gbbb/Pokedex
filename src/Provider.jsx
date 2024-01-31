import propTypes from 'prop-types'
import { createContext } from 'react'
import Appcontext from './create'

function Provider({children}){

const chamandopokemon=async(cod)=>{
const data  = await fetch(`https://pokeapi.co/api/v2/pokemon/${cod}`)
return data.json()
}


const valores ={
chamandopokemon


}



return(
<Appcontext.Provider value={valores}>


{children}





</Appcontext.Provider>



)






}
export default Provider
Provider.propTypes={
children: propTypes.any,
}.isRequired