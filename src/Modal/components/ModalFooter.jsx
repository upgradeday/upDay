import React from 'react'

const ModalFooter = ({userImg, nickname, isMyPost}) => {

  return (
	<div className='flex justify-between '>
		<div>
			<div>
				<img src={userImg} alt="" />
			</div>
			<p>{nickname}</p>
		</div>
		<div>
			{
				isMyPost ? (
					<button className='btn btn-primary'>공유하기</button>
				) : (
					<button className='btn btn-primary'>참여하기</button>
				)
			}
		</div>
	</div>
  )
}

export default ModalFooter