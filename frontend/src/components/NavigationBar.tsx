import React from 'react'

export const NavigationBar = ({ step, setStep }: { step: number, setStep: React.Dispatch<React.SetStateAction<number>> }) => {

  const prevBtnHandler = () => {
    setStep(step-1);
  }

  const nextBtnHandler = () => {
    setStep(step+1)
  }

  return (
    <div className='w-[1000px] mx-auto'>
      
      {
        (step === 0) ? (
          <div className='flex justify-end'>
            <button className='bg-indigo-300 p-4 w-20 rounded-lg border-indigo-300' onClick={nextBtnHandler}>Next</button>
          </div>
        ) : (
          <div className='flex justify-between'>
            <button className='bg-indigo-300 p-4 w-20 rounded-lg border-indigo-300' onClick={prevBtnHandler}>prev</button>
            <button className='bg-indigo-300 p-4 w-20 rounded-lg border-indigo-300' onClick={nextBtnHandler}>Next</button>
          </div>
        )
      }



    </div>
  )
}
