import React from 'react'

const SideCard = ({data:{image,title}}) => {
  return (
    <div className='flex items-center py-1.5 px-2.5 my-2.5 px-0 bg-[#7c6ee9] rounded-md '>
        <img src={image} alt={title} className='w-8 mr-4' />
        <p>{title}</p>
    </div>
  )
}

export default SideCard