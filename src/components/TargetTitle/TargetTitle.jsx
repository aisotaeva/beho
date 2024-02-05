import React from 'react'
import TargetCard from '../TargetCard/TargetCard'

const TargetTitle = () => {
  return (
    <div className='target__title container'>
      <h1 className='logo-target'>Наша цель - создать фантастический <br />
        сервис для всех потребителей    </h1>
        <TargetCard/>
    </div>
  )
}

export default TargetTitle