import React from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { referenceContactsType } from '../interfaces/basicDetailsType'
// refName refContactNumber refrelation

export const ReferencesDetails = ({referenceDetails,setReferenceDetails}:{referenceDetails:number[],setReferenceDetails:React.Dispatch<React.SetStateAction<number[]>>}) => {

  const { register, control,getValues, trigger, formState: { errors } } = useFormContext<referenceContactsType>()
  const { append, remove, fields } = useFieldArray({
    control,
    name: 'referenceContacts'
  });

  return (
    <div>
      <h2 className='text-center text-2xl text-white'>Reference Contacts</h2>
      <div>
        {
          fields.map((field, index) => {
            return <div key={field.id}>
              <div className='flex gap-4'>
                <div className='w-1/3'>
                  <div>
                    <label>Reference Name</label>
                    <input type="text"
                      {...register(`referenceContacts.${index}.refName`)}
                    />
                  </div>
                  <div><p>{errors.referenceContacts?.[index]?.refName?.message}</p></div>
                </div>

                <div className='w-1/3'>
                  <div>
                    <label>Reference ContactNumber</label>
                    <input type="text"
                      {...register(`referenceContacts.${index}.refContactNumber`)}
                    />
                  </div>
                  <div><p>{errors.referenceContacts?.[index]?.refContactNumber?.message}</p></div>
                </div>

                <div className='w-1/3'>
                  <div>
                    <label>Relation</label>
                    <input type="text"
                      {...register(`referenceContacts.${index}.refRelation`)}
                    />
                  </div>
                  <div>
                    <p>{errors.referenceContacts?.[index]?.refRelation?.message}</p>
                  </div>
                </div>
                <div>
                  <button type='button' hidden={index === 0} disabled={index === 0}
                    onClick={() => {
                      const id = getValues(`referenceContacts.${index}`).id;
                      if(!id){
                        remove(index);
                      }else {
                        setReferenceDetails((prev)=>{
                          return [...prev,id];
                        });
                        remove(index);
                      }
                    }}>Remove</button>
                </div>
              </div>
            </div>
          })
        }
      </div>
      <button type='button'
        onClick={async () => {
          if (!await trigger()) {
            return <p>Please Fill Above Field First !!!</p>
          }
          append({ refName: '', refContactNumber: '', refRelation: '' });
        }}>
        Add
      </button>
    </div>
  )
}
