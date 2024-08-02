import React, { ChangeEvent, useEffect, useState } from 'react'
import './Users.css'
// import { debounce } from "lodash";
import debounce from 'lodash/debounce'
import { useNavigate } from 'react-router-dom';
import { GrFormTrash } from "react-icons/gr";
import { GrFormEdit } from "react-icons/gr";
import Pagination from './Pagination';
import { number } from 'yup';
import { UsersType } from '../../interfaces/userDetailsType';
import { userTypes } from '../../interfaces/basicDetailsType';
import { toast } from 'react-toastify';
import { FaEye } from "react-icons/fa";

export const Users = () => {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPge, SetPostsPerPage] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        let result: Response = await fetch(`http://192.168.10.71:8000/users`, {
          "headers": { "Content-Type": "application/json" },
          method: 'get'
        });
        let getData = await result.json();
        setUsers(getData.data)
      } catch (error) {
        console.log(error);
      }
    }
    getAllUsers();
  }, []);

  const indexOfLastUser = currentPage * postsPerPge;
  const indexOfFirstUser = indexOfLastUser - postsPerPge;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const handlePagination = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  }

  const editHandler = (id: number) => {
    navigate(`/users/${id}`);
  }

  const handleClick = async (id: number) => {
    let user = {
      id: id
    };
    let result = await fetch(`http://192.168.10.71:8000/removeUser`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify(user)
    });
    if (result.ok) {
      console.log("user remove successfully");
      setUsers((prev: any) => {
        return prev.filter((item: any) => item.id !== user.id)
      });
      toast.success("User Remove Successfully !!!");
    }
  }

  const handleSearch = async (e: ChangeEvent<HTMLInputElement>) => {

    let searchInput = e.target.value.trim();
    let data = {
      search: searchInput
    }
    let result = await fetch(`http://192.168.10.71:8000/search`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify(data)
    });
    const res = await result.json();
    setUsers(res.data);
  }


  return (
    <div>
      {/* <Button className='bg-gray-600' onClick={clickHandler}></Button> */}
      {/* <div className='ml-96'>
        <button type='button' style={{ backgroundColor: 'grey' }} onClick={clickHandler}>Add Candidate</button>
      </div> */}
      <div>

        <div className='w-[1100px] mx-auto flex gap-4 justify-center items-center'>
          <label htmlFor="search">
            Search User
          </label>
          <input
            type="text"
            placeholder='Search User......'
            className='w-48'
            id='search'
            onChange={handleSearch}
          />

        </div>

        <div className='mt-8  '  >
          <table className='text-white mx-auto border rounded-lg' hidden={users.length === 0}>
            <thead className='bg-slate-400 text-white' >
              <tr className=''>
                <th className='p-3'>Id</th>
                <th className='p-3'>FirstName</th>
                <th className='p-3'>LastName</th>
                <th className='p-3'>Desiganation</th>
                <th className='p-3'>Email</th>
                <th className='p-3'>Gender</th>
                <th className='p-3' colSpan={3}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                Object.values(currentUsers).map((ele: {
                  id: number, firstName: string, lastName: string, desiganation: string,
                  email: string, gender: string
                }, index) => (
                  <tr key={index} className='text-center bg-gray-700'>
                    <td className='p-2'>{ele.id}</td>
                    <td className='p-2'>{ele.firstName}</td>
                    <td className='p-2'>{ele.lastName}</td>
                    <td className='p-2'>{ele.desiganation}</td>
                    <td className='p-2'>{ele.email}</td>
                    <td className='p-2'>{ele.gender}</td>
                    {/* a href={`/users/${ele.id}`}> */}
                    <td className='p-2 cursor-pointer'><a href={`/userDetails/${ele.id}`} ><FaEye size={20} /></a></td>
                    <td className='p-2 flex justify-center cursor-pointer' onClick={() => editHandler(ele.id)}><div><GrFormEdit size={30} /></div></td>
                    <td className='p-2 cursor-pointer' onClick={() => handleClick(ele.id)}><GrFormTrash size={30} /></td>
                  </tr>
                ))

              }
            </tbody>
          </table>

          <div className='flex justify-center'>
            <div className='text-white text-2xl' hidden={users.length !== 0}>No Data Found !!!!</div>
          </div>

        </div>
        <Pagination length={users.length} postsPerPage={postsPerPge} handlePagination={handlePagination} currentPage={currentPage} />
      </div>


    </div>

  )
}
