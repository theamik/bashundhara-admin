import React, { useState, useEffect } from 'react'
import { FaEdit, FaEye, FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Pagination from '../Pagination'
import { get_banners } from '../../store/reducers/bannerReducer'
const Banners = () => {
    const dispatch = useDispatch()
    useEffect(() => {     
        dispatch(get_banners())
    }, [])

    const { allBanner } = useSelector(state => state?.banner)
    return (
        <div className='px-2 lg:px-7 pt-5 '>
            <div className='w-full p-4  bg-[#283046] rounded-md'>
                <div className='relative overflow-x-auto mt-5'>
                    <table className='w-full text-sm text-left text-[#d0d2d6]'>
                        <thead className='text-sm text-[#d0d2d6] uppercase border-b border-slate-700'>
                            <tr>
                                <th scope='col' className='py-3 px-4'>No</th>
                                <th scope='col' className='py-3 px-4'>Image</th>
                                <th scope='col' className='py-3 px-4'>Product Name</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                allBanner?.map((d, i) => <tr key={i}>
                                    <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'>{i + 1}</td>
                                    <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'>
                                        <img className='w-[650px] h-[200px]' src={d.banner} alt="" />
                                    </td>
                                    <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'>
                                        <span>{d?.link?.slice(0, 16)}...</span>
                                    </td>
                                    
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
                
            </div>
        </div>
    )
}

export default Banners