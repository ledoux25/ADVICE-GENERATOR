import React, { useContext, useState } from 'react'
import './AdviceDisplay.css'
import {icons} from '../assets/assets'
import { ApiContext } from '../Context/AdviceContext'

export const AdviceDisplay = () => {
  const {apiData , increment} = useContext(ApiContext)
    
  return (
    <div className='advice-container'>
        <span>ADVICE  #{apiData ? apiData.slip.id : 1}</span>
        {apiData &&  <p>{apiData.slip.advice}</p>}
        <div className='advice-container-line'>
            {
              window.screen.width > 600 ? <img src={icons.divider_pc} alt="" /> : <img src={icons.divider_mobile} alt="" />
            }
        </div>
        <button onClick={increment}>
            <img src={icons.dice} alt="dice" />
        </button>
    </div>
  )
}
