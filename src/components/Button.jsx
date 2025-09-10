import React from 'react'


const Button = ({title,id, leftIcon, rightIcon, containerClass}) => { //(props) {props.title}
  return (
    <button id={id} className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}>
        <span className='flex items-center gap-2'>
        {leftIcon}
        <span className='relative inline font-general text-xs uppercase'>{title}</span>
        {rightIcon}
        </span>

    </button>
  )
}

export default Button
