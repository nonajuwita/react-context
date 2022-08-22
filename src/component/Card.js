import React from 'react'
import CardImage from './CardImage'
import CardName from './CardName'
import Toggle from './Toggle'
import { useContext } from 'react'
import {LayoutContextNew} from '../context/LayoutContextNew';
const Card = (props) => {
    const {nightmode,day,night} = useContext(LayoutContextNew);
    const mood = nightmode ? night : day;
  return (
    <div style={{background:mood.background}}>
        <CardName/>
        <CardImage/>
        <Toggle/>
    </div>
  )
}

export default Card