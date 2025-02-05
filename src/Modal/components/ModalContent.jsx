import React from 'react'

const ModalContent = ({title, content}) => {
  return (
	<div className='mb-4'>
		<p className='mb-4 text-2xl font-semibold'>{title}</p>
		<p>{content}</p>
	</div>
  )
}

export default ModalContent