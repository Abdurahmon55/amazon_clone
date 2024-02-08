import React from 'react'

function FooterCart({name, link}) {
  return (
    <li>
        <a href={link} className='text-white cursor-pointer hover:underline text-sm'>{name}</a>
    </li>
   ) 
}

export default FooterCart