import React from 'react'
import { FieldErrors, FieldValues, UseFormHandleSubmit, UseFormRegister, useFieldArray, useForm, useFormContext } from 'react-hook-form'
import { IStepFormInput } from '../interfaces/basicDetailsType'
import * as yup from 'yup'
import { educationSchema, schema } from '../interfaces/yupSchema'

export const EducationDetail = ({ eduDetails, setEduDetails }: { eduDetails: number[], setEduDetails: React.Dispatch<React.SetStateAction<number[]>> }) => {

  const { register, control, getValues, trigger, handleSubmit, formState: { errors } } = useFormContext<yup.InferType<typeof educationSchema>>();
  const { append, remove, fields } = useFieldArray({
    control,
    name: 'schDetails'
  });

  return (
    <div>
      <h2 className='text-center text-3xl text-white'>Education Details </h2>
      <div>
        {
          fields.map((field, index) => {
            return <div key={field.id}>
              <div className='flex gap-3'>
                <div className='flex w-1/4'>
                  <div className='flex flex-col'>
                    {/* <input type="number" hidden {...register(`schDetails.${index}.userId` as const)}/> */}
                    <div>
                      <label htmlFor="coursename">Course Name</label>
                      <input type="text" placeholder='Enter Course Name' className='w-48'
                        {...register(`schDetails.${index}.courseName` as const)}
                      />
                    </div>
                    <div><p>{errors.schDetails?.[index]?.courseName?.message}</p></div>
                  </div>
                </div>

                <div className='flex w-1/4'>
                  <div className='flex flex-col'>
                    <div>
                      <label htmlFor="instituteName">instituteName</label>
                      <input type="text" placeholder='Enter instituteName' className='w-48'
                        {...register(`schDetails.${index}.instituteName` as const)}
                      />
                    </div>
                    <div><p>{errors.schDetails?.[index]?.instituteName?.message}</p></div>
                  </div>
                </div>


                <div className='flex w-1/4'>
                  <div className='flex flex-col'>
                    <div>
                      <label htmlFor="passingYear">passingYear</label>
                      <input type="text" placeholder='Enter passingYear' className='w-48'
                        {...register(`schDetails.${index}.passingYear` as const)}
                      />
                    </div>
                    <div><p>{errors.schDetails?.[index]?.passingYear?.message}</p></div>
                  </div>
                </div>

                <div className='flex w-1/4'>
                  <div className='flex flex-col'>
                    <div>
                      <label htmlFor="percentage">percentage</label>
                      <input type="number" placeholder='Enter percentage' className='w-48'
                        {...register(`schDetails.${index}.percentage` as const)}
                      />
                    </div>
                    <div><p>{errors.schDetails?.[index]?.percentage?.message}</p></div>
                  </div>
                </div>

                <div>
                  <button type='button' hidden={index === 0} disabled={index === 0} onClick={() => {
                    const id = getValues(`schDetails.${index}`).id;
                    if (!id) {
                      remove(index);
                    } else {
                      setEduDetails((prev) => {
                        return [...prev, id]
                      });
                      remove(index);
                    }

                  }}>remove</button>
                </div>

              </div>

            </div>
          })
        }
      </div>

      <button type='button' onClick={
        async () => {
          if (!await trigger()) {
            return <p>Please fill Above Field First !!!</p>
          }
          append({ 'courseName': '', 'instituteName': '', 'passingYear': 2016, 'percentage': 80 })
        }
      }
      >Add </button>
    </div>
  )
}
