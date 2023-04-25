import React from 'react'

const SelectButton = ({children, selected, onClick}) => {
  return (
    <span 
    onClick={onClick}
        className='selectButton'
    >
      {children}
    </span>
  )
}

export default SelectButton
