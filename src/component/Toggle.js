import React,{useContext} from 'react'
import {LayoutContextNew} from '../context/LayoutContextNew'


const Toggle = () => {
const {handleToggle, nightmode} = useContext(LayoutContextNew);

  return (
    <div>
        <button onClick={handleToggle}>
            change to {nightmode ? "day" : "night"}
             mode</button>
    </div>
  )
}

export default Toggle