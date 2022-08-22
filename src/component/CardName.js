import React,{useContext} from 'react'
import { mainContext } from '../context/mainContext'
import {LayoutContextNew} from '../context/LayoutContextNew'

const CardName = () => {
const context = useContext(mainContext);

const {nightmode,day,night} = useContext(LayoutContextNew);

const mood = nightmode ? night : day;

console.log(context)
return (
    <div >
        {/* <h1 style={{color:mood.color}}>{context.data.name}</h1> */}
    </div>
  )
}

export default CardName