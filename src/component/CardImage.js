import React, {useContext} from 'react'
import { mainContext } from '../context/mainContext'
import {LayoutContext} from '../context/mainContext'
const CardImage = () => {
const context = useContext(mainContext);
console.log(context)
  return (
    <div>

        {/* <img src={context.data.avatar}/> */}
    </div>
  )
}

export default CardImage