import React, { useEffect, useMemo, useState } from 'react';
import { EducationDetail } from './EducationDetail';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { BasicDetailForm } from './BasicDetailForm';
import { BasicFormDetails } from './BasicFormDetails';
import { WorkExperience } from './WorkExperience';
import { LanguageComponets } from './LanguageComponets';
import { IStepFormInput, basicInfo, submitHandlerType } from '../interfaces/basicDetailsType';
import { TechnologyLanguage } from './TechnologyLanguage';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { basicDetailschema, educationSchema, languageSchema, preferenceSchema, referenceContactsSchema, technologySchema, workExperienceSchema } from '../interfaces/yupSchema';
import { formDataType } from '../interfaces/basicDetailsType';
import { ReferencesDetails } from './ReferencesDetails';
import { PreferenceDetails } from './PreferenceDetails';
import { useNavigate, useParams } from 'react-router-dom';
import { SuccessForm } from './SuccessForm';

export const ApplicationForm = () => {

  const [updateData, setUpdateData] = useState<formDataType>();
  const { id } = useParams();
  const [eduDetails, setEduDetails] = useState<number[]>([]);
  const [workExdetails, setWorkExDetails] = useState<number[]>([]);
  const [referenceDetails, setReferenceDetails] = useState<number[]>([]);
  const [languagesDetail, setlanguageDetails] = useState<number[]>([]);
  const [technologiesDetails, setTechnologiesDetails] = useState<number[]>([]);
  const userId = Number(id);

  useEffect(() => {
    if (id !== undefined) {
      const fetchFormData = async () => {
        try {
          const result: Response = await fetch(`http://192.168.10.71:8000/getUserData/${id}`, {
            headers: { "Content-Type": "application/json" },
            method: 'get'
          });
          const formData = await result.json();
          const fetchData = formData.data[0];
          reset(fetchData);
          console.log(fetchData);
        } catch (error) {
          console.log(error);
        }
      }
      fetchFormData();
    }
    reset();
  }, []);

  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const schema = [basicDetailschema, educationSchema, workExperienceSchema, languageSchema, technologySchema, referenceContactsSchema, preferenceSchema];
  const methods = useForm<formDataType>({
    mode: 'all',
    resolver: yupResolver<formDataType>(schema[step]),
    defaultValues:
    {
      schDetails: [{
        courseName: '', instituteName: '', percentage: 80, passingYear: 2016
      }],
      languages: [],
      technologies: [],
      referenceContacts: [{
        refName: '', refContactNumber: '', refRelation: ''
      }]
    }
  },
  );
  const { register, reset, handleSubmit, trigger, control, formState: { errors }, watch } = methods;

  const prevHandler = () => {
    setStep(step - 1)
  }
  const nextHandler = async () => {
    if (!await trigger()) {
      return;
    }
    setStep((prev) => (prev + 1));

  }

  const onSubmitForm: SubmitHandler<formDataType> = async (data: formDataType) => {
    try {
      if (id === undefined) {
        const response = await fetch(`http://192.168.10.71:8000/formData`, {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        }).then(async (data) => {
          console.log(data);
        });
        navigate("/success");
      } else {
        let userData = {
          data: data,
          id: id,
          eduDetails: eduDetails,
          workExdetails: workExdetails,
          referenceDetails: referenceDetails,
          languagesDetail: languagesDetail,
          technologiesDetails: technologiesDetails
          // defaultData:defaultData
        }

        const result = await fetch(`http://192.168.10.71:8000/updateUser`, {
          method: 'post',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData)
        }).then(async (data) => {
          console.log(data);
        })
        navigate("/updateSuccess");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='h-[100vh] w-[100vw] mt-8'>

      <h1 className='text-4xl mb-6'>Job Application Form </h1>
      <div className='text-white text-xl text-center mt-4 mb-4'>step: {step + 1}/7</div>

      <FormProvider {...methods} >
        <form className='form-container' onSubmit={handleSubmit(onSubmitForm)}>
          {
            (step === 0) && (
              <BasicFormDetails />
            )
          }

          {
            (step === 1) && (
              <EducationDetail
                eduDetails={eduDetails}
                setEduDetails={setEduDetails}
              />
            )
          }

          {
            (step === 2) && (
              <WorkExperience
                workExdetails={workExdetails}
                setWorkExDetails={setWorkExDetails}
              />
            )
          }

          {
            (step === 3) && (
              <LanguageComponets
                languagesDetail={languagesDetail}
                setlanguageDetails={setlanguageDetails}
              />
            )
          }

          {
            (step === 4) && (
              <TechnologyLanguage
                technologiesDetails={technologiesDetails}
                setTechnologiesDetails={setTechnologiesDetails}
              />
            )
          }

          {
            (step === 5) && (
              <ReferencesDetails
                referenceDetails={referenceDetails}
                setReferenceDetails={setReferenceDetails}
              />
            )
          }

          {
            (step === 6) && (
              <PreferenceDetails />
            )
          }

          <div className='flex justify-between'>

            <button type='button' disabled={step === 0} hidden={step === 0} onClick={prevHandler}>Prev</button>
            {/* {
              (step < 6) ?
                <button
                  type='button'
                  onClick={nextHandler}
                >Next</button>
                :
                <button type='submit'>
                  Submit
                </button>
            } */}

            {step != 6 && <button type='button' onClick={nextHandler} >Next</button>}
            {step == 6 && <button type='submit'>{id !== undefined ? 'Update' : 'Submit'}</button>}

          </div>
        </form>
      </FormProvider>
    </div>

  )
}
