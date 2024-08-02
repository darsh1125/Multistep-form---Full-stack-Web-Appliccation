import React from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { languageType } from '../interfaces/basicDetailsType';
// hindi read write speak
export const LanguageComponets = ({ languagesDetail, setlanguageDetails }: {
  languagesDetail: number[],
  setlanguageDetails: React.Dispatch<React.SetStateAction<number[]>>
}) => {

  const { register, control, watch, getValues, formState: { isDirty, errors } } = useFormContext<languageType>();
  const { remove, append, fields } = useFieldArray({
    control,
    name: 'languages'
  });
  const languageName: string[] = ['Hindi', 'Gujarati', 'English'];
  const watchlanguage = watch('languages');

  const onlanguagechange = (language: string, checked: boolean) => {
    const currentLanguage = getValues('languages');
    console.log(currentLanguage);

    if (checked) {
      append({ languageName: language, read: false, write: false, speak: false })
    } else {
      const index = currentLanguage.findIndex(l => l.languageName === language);
      const id: number = Number(getValues(`languages.${index}`).id);
      if (id) {
        setlanguageDetails((prevData) => {
          return [...prevData, id]
        });
        remove(index);
      }
      if (index !== -1)
        remove(index)
    }
  }

  const getWatchValues = (language: string) => {
    return watchlanguage.some((element) => {
      return language === element.languageName;
    })
  }

  return (

    <div className='flex flex-col justify-center items-center'>
      <h2 className='text-white text-2xl'>Select Your Language</h2>
      <div>
        <div>
          <div className='flex items-center justify-center gap-5'>
            {
              languageName.map((language, index) => (

                <div className='' key={index}>
                  <label className='gap-4'>
                    <input
                      className='w-5 h-5'
                      type="checkbox"
                      checked={getWatchValues(language)}
                      onChange={(e) => onlanguagechange(language, e.target.checked)} />
                    {language}</label>
                </div>
              ))
            }
          </div>
          {errors.languages && <p>{errors.languages.message}</p>}

        </div>

        {
          fields.map((field, index) =>
            <div key={field.id}>

              <div className='flex flex-col items-center'>
                <div className='flex gap-5 items-center'>
                  <div>
                    <div className='flex w-1/4 text-2xl text-white'>
                      <h2>{field.languageName}</h2>
                    </div>
                  </div>

                  <div className='flex flex-col w-1/4 items-center'>
                    <div>
                      <label className='h-14 flex gap-3 items-center'>
                        <input type="checkbox" className='w-5 h-5' {...register(`languages.${index}.read`, {
                        })
                        } />
                        Read</label>
                    </div>
                  </div>

                  <div className='flex flex-col w-1/4 items-center'>
                    <div>
                      <label className='h-14 flex gap-3 items-center'>
                        <input type="checkbox" className='w-5 h-5' {...register(`languages.${index}.write`, {
                        })
                        } />
                        write</label>
                    </div>
                  </div>

                  <div className='flex flex-col w-1/4 gap-4 items-center'>
                    <div>
                      <label className='h-14 flex gap-3 items-center'>
                        <input type="checkbox" className='w-5 h-5' {...register(`languages.${index}.speak`, {
                        })
                        } />
                        Speak</label>
                    </div>
                  </div>

                </div>
                <div>
                  {errors.languages?.[index]?.message && <p>{errors.languages?.[index]?.message}</p>}
                </div>
              </div>
            </div>
          )
        }

      </div>

    </div>

  )
}



