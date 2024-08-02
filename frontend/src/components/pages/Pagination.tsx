import React from 'react'
import './Pagination.css'

const Pagination = ({ postsPerPage, length, handlePagination, currentPage }:{
  postsPerPage:number,length:number,handlePagination:(pageNumber: number) => void,
  currentPage:number
}) => {
    let paginationNumber = []
    for (let i = 1; i <= Math.ceil(length / postsPerPage); i++) {
        paginationNumber.push(i);
    }
    return (
        <div className='pagination'>
            {
                paginationNumber.map((data) => (
                    <button key={data} onClick={() => handlePagination(data)} className={currentPage === data ? 'active' : ''}>
                        {data}
                    </button>
                ))
            }
        </div>
    )
}
export default Pagination