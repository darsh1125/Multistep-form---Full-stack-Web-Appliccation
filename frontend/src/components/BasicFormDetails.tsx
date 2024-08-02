import React, { ChangeEvent, useEffect, useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { IStepFormInput } from '../interfaces/basicDetailsType';
import { basicDetailschema, schema } from '../interfaces/yupSchema';
import * as yup from 'yup'

export const
  BasicFormDetails = () => {

    const { register, getValues, handleSubmit,watch, control, formState: { errors } } = useFormContext<yup.InferType<typeof basicDetailschema>>();
    const [state, setState] = useState([]);
    const [city, setCity] = useState([]);
    // const [currentState, setCurrentState] = useState<string>("")
    // const [currentCity, setCurrentCity] = useState<string>("")

    useEffect(() => {
      const setData = async () => {
        try {
          const data = await fetch('http://192.168.10.71:8000/getState');
          const result = await data.json();
          setState(result.data)

        } catch (error) {
          console.log(error);
        }
      }
      setData();
    }, []);

    const handleStateChange = async (e: { target: { value: React.SetStateAction<string>; }; }) => {
      let stateData = {
        state: e.target.value
      }
      let stateId: number;
      let id: number[] = [];

      const response = await fetch('http://192.168.10.71:8000/getStateId', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(stateData)
      }).then(async (data) => {
        stateId = await data.json();
        id = Object.values(stateId);
      });
      let stateObj = {
        state: id[0]
      }

      const result = await fetch('http://192.168.10.71:8000/getcities', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(stateObj)
      }).then(async (data) => {
        const res = await data.json();
        setCity(res.data)
      })
    }

    // const handleChangeState = (event: ChangeEvent<HTMLSelectElement>) => {
    //   console.log(event.target);
    // }

    // const handleCityChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    //   // setCity(e.target.value);
    // }

    const handleChangeState = (e: ChangeEvent<HTMLSelectElement>) => {
      console.log(e.target.value);
    }


    return (
      <div>
        <h1 className='text-4xl'>Basic Detail...</h1>

        <div className='flex'>

          <div className='w-6/12'>
            <label htmlFor="firstName">FirstName</label>
            <input type="text" placeholder='Enter your First Name .....' {...register('firstName')} />
            {errors.firstName && <p>{errors.firstName.message?.toString()}</p>}

          </div>

          <div className='w-6/12'>
            <label htmlFor="lastName">LastName</label>
            <input type="text" placeholder='Enter your Last Name .....' {...register('lastName')} />
            {errors.lastName && <p>{errors.lastName.message?.toString()}</p>}

          </div>

        </div>

        <div className='flex'>
          <div className='w-6/12'>
            <label htmlFor="desiganation">Designation</label>
            <input type="text" placeholder='Enter your Designation .....' {...register('desiganation')} />
            {errors.desiganation && <p>{errors.desiganation?.message?.toString()}</p>}

          </div>
          <div className='w-6/12'>
            <label htmlFor="phonenumber">PhoneNumber</label>
            <input type="text" placeholder='Enter Your PhoneNumber.....' {...register("phoneNumber")}
            />
            {errors.phoneNumber && <p>{errors.phoneNumber.message?.toString()}</p>}


          </div>

        </div>

        <div className='flex items-center gap-2'>
          <label htmlFor="gender">Gender:</label>
          <div className='flex gap-3 items-center'>
            <input type="radio" className='w-5 mt-4' value='male' id='male' {...register("gender")}
            />
            <label htmlFor="male">Male</label>
          </div>

          <div className='flex gap-3 items-center'>
            <input type="radio" className='w-5 mt-4' value='female' id='female' {...register("gender")}
            />
            <label htmlFor="female">Female</label>

          </div>

          <div className='flex gap-3 items-center'>
            <input type="radio" className='w-5 mt-4' value='other' id='other' {...register("gender")}
            />
            <label htmlFor="other">Other</label>

          </div>

        </div>
        <div>
          {errors.gender && <p>{errors.gender?.message?.toString()}</p>}
        </div>

        <label htmlFor="email">Email</label>
        <input type="text" placeholder='Enter Your Email.....' {...register("email")}
        />
        {errors.email && <p>{errors.email.message?.toString()}</p>}

        <label htmlFor="address1">Address 1</label>
        <input type="text" placeholder='Enter Your Address1.....' {...register("address1")}
        />
        {errors.address1 && <p>{errors.address1.message?.toString()}</p>}

        <label htmlFor="address2">Address 2</label>
        <input type="text" placeholder='Enter Your Address2.....' {...register("address2")}
        />
        {errors.address2 && <p>{errors.address2.message?.toString()}</p>}


        <div className='flex mt-4'>
          <div className='flex w-6/12 gap-5 items-center'>


            <div>
              <div className='flex gap-4'>
                {/* <label htmlFor="state">State</label>
                <select {...register('state')} onChange={handleStateChange} >
                  <option value='' hidden>Select Your State</option>
                  {
                    state.map((element: { id: number, state: string }) => {
                      return <option key={element.id} value={element.state}>{element.state}</option>
                    })}
                </select> */}

              </div>

              <Controller name="state" defaultValue={getValues('state')} control={control} render={({ field }) => (
                <select {...field} onChange={(e) => { handleStateChange(e); field.onChange(e); }} className='border p-1 border-black'>
                  <option value="">Select state</option>
                  {state.map((ele: { id: number, state: string }) => {
                    return (<option key={ele.id}>{ele.state}</option>)
                  })}
                </select>
              )} />
              <div>
                {errors.state && <p>{errors.state.message?.toString()}</p>}
              </div>
            </div>

          </div>

          <div className='flex w-6/12 gap-5 items-center'>
            <div>
              <div className='flex gap-4'>
                {/* <label htmlFor="city">City</label>
                <select {...register('city')} >
                  <option value='' hidden>Select city</option>
                  {
                    city.map((element: { id: number, city: string }) => (
                      <option key={element.id} value={element.city}>{element.city}</option>
                    ))
                  }
                </select> */}

                <Controller name='city' defaultValue={getValues('city')} control={control} render={({ field }) => (
                  <select  {...field} onChange={(e) => { field.onChange(e) }}>
                    <option value="" hidden>Select city</option>
                    {city.map((city: { id: number, city: string }) => {
                      return (<option key={city.id} value={city.city}>{city.city}</option>)
                    })}
                  </select>
                )} />

              </div>
              <div>
                {errors.city && <p>{errors.city.message?.toString()}</p>}
              </div>
            </div>
          </div>

        </div>

        <div className='flex mt-5'>
          <div className='flex-col w-6/12 gap-5 items-center'>
            <div>
              <label htmlFor="zipcode">Zipcode</label>
              <input type="text" placeholder='Enter zipcode.....' className='w-60' {...register("zipcode")}
              />
            </div>
            <div>
              {errors.zipcode && <p>{errors.zipcode.message?.toString()}</p>}
            </div>

          </div>
          <div className='flex-col w-6/12 gap-5 items-center'>
            <div>
              <label htmlFor="dateofBirth">Date Of Birth</label>
              <input type="date" placeholder='Enter Date of Birth.....' className='w-60' {...register("dateOfBirth")}
              />
            </div>
            <div>
              {errors.dateOfBirth && <p>{errors.dateOfBirth.message?.toString()}</p>}

            </div>

          </div>

        </div>

        <label htmlFor="state">Relationship Status</label>
        <select {...register('relationshipStatus', {
          required: 'Select Your Relationship status !!!'
        })}  >
          <option value="" hidden>Select Your relationshipStatus</option>
          <option value="single">single</option>
          <option value="married">Married</option>
        </select>
        {errors.relationshipStatus && <p>{errors.relationshipStatus.message?.toString()}</p>}

      </div>



    )
  }
