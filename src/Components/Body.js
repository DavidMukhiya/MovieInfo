import React from 'react'
import CardGroup from './CardGroup'
import {name1} from './name.js'
import {name2} from './name.js'

const Body = () => {
  return (
    <div class="container">
        <CardGroup name={name1}/>
        <CardGroup name={name2}/>
    </div>
  )
}

export default Body