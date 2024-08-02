import React from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form';
import { technologyType } from '../interfaces/basicDetailsType';

export const TechnologyLanguage = ({ technologiesDetails, setTechnologiesDetails }: {
  technologiesDetails: number[], setTechnologiesDetails:
  React.Dispatch<React.SetStateAction<number[]>>
}) => {

  const { register, watch, control, getValues, formState: { errors } } = useFormContext<technologyType>();
  const { append, remove, fields } = useFieldArray({
    control,
    name: 'technologies'
  });
  const technologyList = ['php', 'Laravel', 'Oracle', 'Mysql'];
  const technologyWatch = watch('technologies');

  const onTechLanguage = (tech: string, checked: boolean) => {
    const currentLanguage = getValues('technologies');
    if (checked) {
      append({ technologyLan: tech, level: '' })
    } else {
      const index = currentLanguage.findIndex(l => l.technologyLan === tech);
      const id: number = Number(getValues(`technologies.${index}`).id);
     
      if (id) {
        setTechnologiesDetails((prev) => {
          return [...prev, id]
        });
      }
      if (index !== -1)
        remove(index);
    }
  }

  const getWatchValues = (techLanguage: string) => {
    return technologyWatch.some((lan) => {
      return techLanguage === lan.technologyLan
    });
  }

  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='text-2xl text-white'>Technology You Know ...</div>
      <div>
        <div>
          <div className='flex items-center justify-center gap-5'>
            {
              technologyList.map((tech, index) => (
                <div className='' key={index}>
                  <label className='gap-4'>
                    <input
                      className='w-5 h-5'
                      type="checkbox"

                      checked={getWatchValues(tech)}
                      onChange={(e) => onTechLanguage(tech, e.target.checked)}
                    />
                    {tech}
                  </label>
                </div>
              ))
            }
          </div>
          {errors.technologies && <p>{errors.technologies.message}</p>}
        </div>

      </div>

      {/* {
                ["basic", "intermediate", "expert"].map((level) => (
                  <label key={level}>
                    <input type="radio"
                      className='w-5 h-5'
                      value={level}
                      {...register(`technologies.${index}.level`)}
                      disabled={!watch(`technologies.${index}.selected`)}
                    />
                    {level}
                  </label>

                ))
              } */}

      {
        fields.map((field, index) => (
          <div key={field.id} className='flex items-center'>

            <div className='flex flex-col'>

              <div className='flex gap-4 items-center'>
                <div className=''>
                  <div className='flex w-1/4 text-2xl text-white'>
                    <h2>{field.technologyLan}</h2>
                  </div>
                </div>

                <div className=''>
                  <div>
                    <label className='h-14 flex gap-3 items-center'>
                      <input type="radio" value='basic' className='w-5 h-5' {...register(`technologies.${index}.level`, {
                      })
                      } />
                      Basic
                    </label>
                  </div>
                </div>

                <div className=''>
                  <div>
                    <label className='h-14 flex gap-3 items-center'>
                      <input type="radio" value='intermediate' className='w-5 h-6' {...register(`technologies.${index}.level`, {
                      })
                      } />
                      intermediate
                    </label>
                  </div>
                </div>

                <div className=''>
                  <div>
                    <label className='h-14 flex gap-3 items-center'>
                      <input type="radio" value='expert' className='w-5 h-5' {...register(`technologies.${index}.level`, {
                      })
                      } />
                      expert
                    </label>
                  </div>
                </div>
              </div>
              <div>
                {errors.technologies?.[index]?.message && <p>{errors.technologies?.[index]?.message}</p>}
              </div>
            </div>

          </div>
        ))
      }
    </div>

  )
}


