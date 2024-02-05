import React from 'react'

const ContentImage2 = ({imageUrl, id}) => {


  return (
    <div key={id} className='content__image'>
      <div className='bgc__img__ontent2'>
         <img className='img__content2' src={imageUrl} alt="" />
      </div>
      <div className='bgc__img__ontent2'>
         <img className='img__content2' src={imageUrl} alt="" />
      </div>
      <div className='bgc__img__ontent2'>
         <img className='img__content2' src={imageUrl} alt="" />
      </div>
    </div>
  )
}

export default ContentImage2