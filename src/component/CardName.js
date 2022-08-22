import React,{useContext} from 'react'
import { MainContextNew } from '../context/mainContextNew'
import {LayoutContextNew} from '../context/LayoutContextNew'

const CardName = () => {
const context = useContext(MainContextNew);

const {nightmode,day,night} = useContext(LayoutContextNew);

const mood = nightmode ? night : day;

console.log(context)
return (
    <div >
        <h1 style={{color:mood.color}}>{context.data.name}</h1>
    </div>
  )
}

export default CardName