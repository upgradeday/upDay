import React from 'react';

const ModalHeader = ({
    category,
    duration,
    isMyPost,
    mode,
    onChange,
    formData,
	onDelete,
	onUpdate
}) => {

    if (mode === 'create' || mode === 'edit') {
        return (
            <div className='flex justify-between items-center mb-4'>
                <div className='flex items-center'>
                    <select value={formData.category} onChange={(e) => onChange({...formData, category: e.target.value})}>
                        <option value=''>카테고리 선택</option>
                        <option value='식단'>식단</option>
                        <option value='학습'>학습</option>
                        <option value='운동'>운동</option>
                        <option value='습관'>습관</option>
                    </select>

					<select value={formData.duration} onChange={(e) => onChange({...formData, duration: e.target.value})}>
						<option value="">기간 선택</option>
						<option value="2주">2주</option>
						<option value="4주">4주</option>
						<option value="6주">6주</option>
						<option value="8주">8주</option>
					</select>
                </div>
            </div>
        );
    }

    return (
        <div className='flex justify-between items-center mb-4'>
            <div className='flex items-center'>
                <span className='mr-4 px-6 py-[6px] rounded-xl bg-pink-200'>
                    {category}
                </span>
                <span>목표기간 {duration}</span>
            </div>

            {isMyPost && (
                <div className='flex'>
                    <button onClick={onUpdate}>수정</button>
                    <button onClick={onDelete}>삭제</button>
                </div>
            )}
        </div>
    );
};

export default ModalHeader;
