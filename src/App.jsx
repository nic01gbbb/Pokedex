import { useContext, useEffect, useState } from "react";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import Appcontext from "./create";

function App(){
const [input,setinput]=useState("")
const[img,setimg]=useState("")
const [name,setname]=useState("")
const [id,setid]=useState("")


const chamando=async(cod)=>{
const data  = await fetch(`https://pokeapi.co/api/v2/pokemon/${cod}`)
if(data.status==404 ||input>649){
alert("Nome ou id do pokemon digitado incorretamente,tente outra vez!")
}
else{
const valores = await data.json()
setimg(valores["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"])
setid(valores.id)
setname(valores.name)
}
}
const previachamada=(e)=>{
e.preventDefault()
chamando(input)
setinput("")
}

const previa=()=>{
if(id>0 &&id<650){
chamando(id-1)
}

}

const proximo=()=>{
if(id>0 && id<649){
chamando(+id+1)
}


}


return(

<main>
<div className="pokemon">
<img src={img}/>
</div>
<div



className="nomeEid">
<div className="id">
<h4>{id}</h4>
</div>
<div 
style={{fontSize:name.includes("-")?"12px":"20px"}}


className="nome"><h4>{name}</h4></div>
<form onSubmit={previachamada} className="form">
<input 
value={input}
onChange={(e)=>setinput(e.target.value)}
type="text" placeholder="Name or number" />
</form>
</div>
<div className="btns">
<button onClick={previa} >
<GrFormPrevious />
</button>
<button onClick={proximo} >
<GrFormNext />
</button>
</div>


<img className="pokedeximg"  src="https://github.com/manualdodev/pokedex/blob/main/images/pokedex.png?raw=true"/>


</main>




)





}
export default App