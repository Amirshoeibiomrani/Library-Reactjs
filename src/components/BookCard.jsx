import React, { useState } from 'react'
import { AiFillHeart } from 'react-icons/ai'

const BookCard = ({data:{title,author,image,language,pages}}) => {
    const [like,setLike] =useState(false)

    const likeHandler=()=>{
        setLike((like)=>!like)
    }
  return (
    <div className='flex p-2.5 mb-2.5 bg-[#303030] rounded-lg'>
        <img className='w-[60px] rounded-md mr-6' src={image} alt={title} />
        <div className="w-full flex flex-col justify-between">
            <h3 className='text-white font-semibold'>{title}</h3>
            <p className='text-white font-semibold'>{author}</p>
            <div>
                <span className='mr-5 text-sm text-[#959595]'>{language}</span>
                <span className='mr-5 text-sm text-[#959595]'>{pages} pages</span>
            </div>
        </div>
        <button onClick={likeHandler} className='h-fit bg-none border-none cursor-pointer transition-all ease-in-out duration-100 hover:scale-125'>
            <AiFillHeart color={like?'red':"white"} fontSize='1.8rem' />
        </button>
    </div>
  )
}

export default BookCard