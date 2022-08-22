import React, {useContext} from 'react'
import { MainContextNew } from '../context/mainContextNew'

const CardImage = () => {
const context = useContext(MainContextNew);
console.log(context)
  return (
    <div>

        <img src={context.data.avatar}/>
    </div>
  )
}

export default CardImage