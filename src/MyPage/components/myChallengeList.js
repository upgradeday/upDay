import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setMyPosts } from '../../store/features/userChallengeSlice';
import { HiFire, HiDocumentCheck } from 'react-icons/hi2';

export default function MyChallengeList() {
    const dispatch = useDispatch();
    const myPosts = useSelector((state) => state.challenge.myPosts);

    useEffect(() => {
        dispatch(setMyPosts());
    }, [dispatch]);

    return (
        <table className='w-full text-sm'>
            <tbody>
                {myPosts.length > 0 ? (
                    myPosts.map((post) => (
                        <tr
                            key={post.id}
                            className='flex flex-1 gap-2 py-1.5 border-b border-neutral-300'
                        >
                            <td className='w-[72px] p-0 text-neutral-500 flex justify-center items-center'>
                                {post.id}
                            </td>
                            <td className='flex flex-1 gap-1 items-center p-0'>
                                <div className='budge-meal text-xs'>
                                    {post.category}
                                </div>
                                {post.title}
                            </td>
                            <td className='w-[48px] p-0 flex justify-between items-center'>
                                <button className='doing-on'>
                                    <HiFire />
                                </button>
                                <button className='done-off'>
                                    <HiDocumentCheck />
                                </button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td
                            colSpan='3'
                            className='text-center text-gray-500 py-2'
                        >
                            참여한 챌린지가 없습니다.
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}
