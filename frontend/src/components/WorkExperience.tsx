import React, { useState } from 'react'
import { Control, FieldErrors, FieldValues, UseFieldArrayAppend, UseFieldArrayRemove, UseFormHandleSubmit, UseFormRegister, useFieldArray, useFormContext } from 'react-hook-form'
import { IStepFormInput } from '../interfaces/basicDetailsType';
import { schema, workExperienceSchema } from '../interfaces/yupSchema';
import * as yup from 'yup';

export const WorkExperience = ({workExdetails,setWorkExDetails}:{workExdetails:number[],setWorkExDetails:React.Dispatch<React.SetStateAction<number[]>>}) => {

  const { register, handleSubmit,getValues, trigger, formState: { errors }, control } = useFormContext<yup.InferType<typeof workExperienceSchema>>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'workExperiences'
  });

  console.log(fields);
  return (
    <div>
      <h2 className='text-center text-3xl text-white'>Work Experience </h2>
      <div>
        {
          fields.map((field, index) => {
            return <div key={field.id}>

              <div className='flex gap-4'>
                <div className='w-1/4'>
                  <div>
                    <label htmlFor="companyName">Company Name</label>
                    <input type="text" placeholder='Enter Company Name' className='w-48'
                      {...register(`workExperiences.${index}.companyName`)}
                    />
                  </div>
                  <div><p>{errors?.workExperiences?.[index]?.companyName?.message}</p></div>

                </div>
                <div className='w-1/4'>
                  <div> <label htmlFor="designation">Designation</label>
                    <input type="text" placeholder='Enter Designation' className='w-48'
                      {...register(`workExperiences.${index}.designation`)}
                    /></div>
                  <div><p>{errors.workExperiences?.[index]?.designation?.message}</p></div>


                </div>
                <div className='w-1/4'>
                  <div> <label htmlFor="from">from</label>
                    <input type="date" className='w-44'
                      {...register(`workExperiences.${index}.from`)}
                    />
                  </div>
                  <div><p>{errors.workExperiences?.[index]?.from?.message}</p></div>


                </div>
                <div className='w-1/4'>
                  <div>  <label htmlFor="to">to</label>
                    <input type="date" placeholder='Enter Comapnay Name' className='w-44'
                      {...register(`workExperiences.${index}.to`)}
                    />
                  </div>
                  <div><p>{errors.workExperiences?.[index]?.to?.message}</p></div>

                </div>
                <div>
                  <button type='button' hidden={index === 0} disabled={index === 0} onClick={() => {
                    const id = getValues(`workExperiences.${index}`).id;
                    if(!id){
                      remove(index)
                    }else{
                      setWorkExDetails((prev) => {
                        return [...prev,id];
                      });
                      remove(index);
                    }
                  }}>remove</button>
                </div>
              </div>
            </div>
          }
          )}

      </div>
      <button type='button' onClick={
        async () => {
          if (!await trigger()) {
            return <p>Please Fill above Experience First !!!</p>;
          }
          append({ "companyName": '', "designation": '', 'from':new Date(),'to':new Date() })
        }}>Add Work Experience</button>
    </div>
  )
}

