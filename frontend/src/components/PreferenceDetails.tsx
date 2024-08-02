import React from 'react'
import { useFormContext } from 'react-hook-form'
import { preferenceType } from '../interfaces/basicDetailsType'

export const PreferenceDetails = () => {

  const { register, formState: { errors } } = useFormContext<preferenceType>();

  return (
    <div>
      <h2 className='text-white text-3xl'>Preferencce Details</h2>
      <div>
        <div>
          <label>Prefered Location</label>
          <select  {...register('preferences.0.preferanceLocation')}>
            <option value="" hidden>select your Preferece Location</option>
            <option value="Surat">Surat</option>
            <option value="Ahmedabad">Ahmedabad</option>
            <option value="rajkot">Rajkot</option>
          </select>
        </div>
        <div>
          <p>{errors.preferences?.[0]?.preferanceLocation?.message}</p>
        </div>
      </div>

      <div className='flex gap-4'>
        <div className='w-1/3'>
          <div>
            <label>Notice Peroid</label>
            <input type="text" {...register('preferences.0.noticePeroid')} />
          </div>
          <div>
            <p>{errors.preferences?.[0]?.noticePeroid?.message}</p>
          </div>
        </div>

        <div className='w-1/3'>
          <div>
            <label>Expected ctc</label>
            <input type="text" {...register('preferences.0.expectedCtc')} />
          </div>
          <div>
            <p>{errors.preferences?.[0]?.expectedCtc?.message}</p>
          </div>
        </div>

        <div className='w-1/3'>
          <div>
            <label>Current ctc</label>
            <input type="text" {...register('preferences.0.currentCtc')} />
          </div>
          <div>
            <p>{errors.preferences?.[0]?.currentCtc?.message}</p>
          </div>
        </div>

      </div>

      <div>
        <div>
          <label >Department</label>
          <select {...register('preferences.0.department')}>
            <option value="" hidden>Select Your Department</option>
            <option value="Business Develoment">Business Development</option>
            <option value="Development">Development</option>
            <option value="Marketing">Marketing</option>
          </select>

        </div>

      </div>

    </div>

  )
}
