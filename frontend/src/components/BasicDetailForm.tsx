import React from 'react'
import { FieldErrors, FieldValues, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';

export const BasicDetailForm = ({ register, handleSubmit, errors }:
  {
    register: UseFormRegister<FieldValues>, handleSubmit: UseFormHandleSubmit<FieldValues>,
    errors: FieldErrors<FieldValues>
  }) => {


  return (
    <div>
      <h1 className='text-4xl'>Application Form </h1>
      <div>
        <label htmlFor="firstName">FirstName</label>
        <input type="text" {...register("firstName", {
          required: "first Name is Required !!!!",
          maxLength: {
            value: 20,
            message: 'firstName Should be Upto 20 character'
          }
        })} />
        {errors.firstName && <p>{errors.firstName.message?.toString()}</p>}


        <label htmlFor="lastName">LastName</label>
        <input type='text' {...register("lastName", {
          required: "LastName is Required !!!",
          maxLength: {
            value: 20,
            message: 'LastName Should be Upto 20 character'
          }
        })} />
        {errors.lastName && <p>{errors.lastName.message?.toString()}</p>}


        <label htmlFor="email">Email</label>
        <input type="text" {...register("email", {
          required: "Email is Required !!!",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "invalid email address"
          }
        })}
        />
        {errors.email && <p>{errors.email.message?.toString()}</p>}
        {/* {errors.email && <p>{errors.email?.message}</p>} */}

        <label>Gender Selection</label>
        <select {...register("gender", {
          required: "Select Your Gender ....."
        })}>
          <option value='' hidden>Select Your Gender </option>
          <option value="male">male</option>
          <option value="female">female</option>
          <option value="other">other</option>
        </select>
        {errors.gender && <p>{errors.gender.message?.toString()}</p>}

        <label htmlFor="age">Age </label>
        <input type="number" {...register("age", {
          required: "Age is Required Field !!!!",
          min: {
            value: 18,
            message: "Age is Not less than 18 ...."
          },
          max: {
            value: 99,
            message: 'Age is not Greater Than 99'
          }
        })} />
        {errors.age && <p>{errors.age.message?.toString()}</p>}

      </div>


      <hr />

      <div className='mt-2'>
        <h2 className='text-2xl text-white'>Hsc Result</h2>
        <div className='flex'>
          <div className='w-1/3'>
            <label htmlFor="hscBoard">Hsc Board</label>
            <input type="text" placeholder='Name of Hsc Board' {...register('hscBoardName', {
              required: "hscBoardName is Required !!!",
            })} />
            {errors.hscBoardName && <p>{errors.hscBoardName.message?.toString()}</p>}
          </div>

          <div className='w-1/3'>
            <label htmlFor="hscPassingYear">Passing Year</label>
            <input type="year" placeholder='Enter hscPassingYear' {...register('hscPassingYear', {
              required: "hscPassingYear is Required !!!",
            })} />
            {errors.hscPassingYear && <p>{errors.hscPassingYear.message?.toString()}</p>}
          </div>

          <div className='w-1/3'>
            <label htmlFor="hscPercentage">Percentage</label>
            <input type="text" placeholder='Enter hscPercentage' {...register('hscPercentage', {
              required: "hscPercentage is Required !!!",
            })} />
            {errors.hscPercentage && <p>{errors.hscPercentage.message?.toString()}</p>}
          </div>
        </div>

      </div>
      <hr />

      <div className='mt-2'>
        <h2 className='text-2xl text-white'>Bachelar Degree</h2>
        <div className='flex'>
          <div className='w-1/4'>
            <label htmlFor="bachlearCourseName">Course Name</label>
            <input type="text" placeholder='Course Name' {...register('bCourseName', {
              required: "CourseName is Required !!!",
            })} />
            {errors.bCourseName && <p>{errors.bCourseName.message?.toString()}</p>}
          </div>

          <div className='w-1/4'>
            <label htmlFor="bachelarUniversity">University</label>
            <input type="text" placeholder='University Name' {...register('bUniversityName', {
              required: "University is Required !!!",
            })} />
            {errors.bUniversityName && <p>{errors.bUniversityName.message?.toString()}</p>}
          </div>

          <div className='w-1/4'>
            <label htmlFor="bPassingYear">Passing Year</label>
            <input type="year" placeholder='Passing Year' {...register('bPassingYear', {
              required: "Bachelar passing year is Required !!!",
            })} />
            {errors.bPassingYear && <p>{errors.bPassingYear.message?.toString()}</p>}
          </div>

          <div className='w-1/4'>
            <label htmlFor="bPercentage">Percentage</label>
            <input type="text" placeholder='Percentage' {...register('bachelarPercentage', {
              required: "bachelarPercentage is Required !!!",
            })} />
            {errors.bachelarPercentage && <p>{errors.bachelarPercentage.message?.toString()}</p>}
          </div>
        </div>
      </div>
      <hr />

      <div className='mt-2'>
        <h2 className='text-2xl text-white'>Master Degree</h2>
        <div className='flex'>
          <div className='w-1/4'>
            <label htmlFor="bachlearCourseName">Course Name</label>
            <input type="text" placeholder='Course Name' {...register('masterCourseName', {
              required: "CourseName is Required !!!",
            })} />
            {errors.masterCourseName && <p>{errors.masterCourseName.message?.toString()}</p>}
          </div>

          <div className='w-1/4'>
            <label htmlFor="masterUniversity">University</label>
            <input type="text" placeholder='University Name' {...register('masterUniversityName', {
              required: "University is Required !!!",
            })} />
            {errors.masterUniversityName && <p>{errors.masterUniversityName.message?.toString()}</p>}
          </div>

          <div className='w-1/4'>
            <label htmlFor="bPassingYear">Passing Year</label>
            <input type="year" placeholder='Bachelar PassingYear' {...register('masterPassingYear', {
              required: "passing year is Required !!!",
            })} />
            {errors.masterPassingYear && <p>{errors.masterPassingYear.message?.toString()}</p>}
          </div>

          <div className='w-1/4'>
            <label htmlFor="bPercentage">Percentage</label>
            <input type="text" placeholder='Percentage' {...register('masterPercentage', {
              required: "Percentage is Required !!!",
            })} />
            {errors.masterPercentage && <p>{errors.masterPercentage.message?.toString()}</p>}
          </div>
        </div>
      </div>
      <hr />

    </div>

  )
}

