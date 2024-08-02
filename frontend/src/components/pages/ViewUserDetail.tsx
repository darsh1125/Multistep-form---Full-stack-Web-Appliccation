import React, { useEffect, useState } from 'react'
import { useActionData, useParams } from 'react-router-dom'
import { ViewUserInfo } from '../../interfaces/basicDetailsType';


export const ViewUserDetail = () => {

  const { id } = useParams();
  const [userData, setUserData] = useState<ViewUserInfo>();
  const fetchData = async () => {
    try {
      let result = await fetch(`http://192.168.10.71:8000/getUserData/${id}`, {
        headers: {
          'Content-Type': "application/json"
        },
        method: 'get'
      });
      const formData = await result.json();
      const fetchData = formData.data[0];
      console.log(fetchData);
      setUserData(fetchData);

    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className='w-[1700px] mx-auto flex flex-col justify-center'>
      {/* Basic Details  */}
      <div className=''>
        <div>
          <div className='border p-5 rounded-lg mt-6'>
            <div className='text-white text-2xl mb-3'>Basic Details </div>
            <div className='flex gap-10'>
              <div className='flex flex-col gap-2 text-xl text-gray-400'>
                <div>FirstName : {userData?.firstName}</div>
                <div>LastName : {userData?.lastName}</div>
                <div>Designation : {userData?.desiganation}</div>
                <div>Email : {userData?.email} </div>
                <div>Address1 : {userData?.address1}</div>
                <div>Address2 : {userData?.address2}</div>

              </div>

              <div className='flex flex-col gap-2 text-xl text-gray-400'>
                <div>Gender : {userData?.gender}</div>
                <div>Date Of Birth : {userData?.dateOfBirth.toString()}</div>
                <div>PhoneNumber : {userData?.phoneNumber}</div>
                <div>Zipcode : {userData?.zipcode}</div>
                <div>state : {userData?.state}</div>
                <div>city : {userData?.city}</div>
              </div>

            </div>

          </div>


          <div className='border p-5 rounded-lg mt-10'>
            <div className='text-2xl text-white mt-2'>Education details</div>
            <div>
              {
                userData?.schDetails.map((ele, index) => (
                  <div key={index} className='flex gap-2 text-xl w-[1000px] mt-2 text-gray-400'>
                    <div className='w-1/4'> courseName: {ele.courseName}</div>
                    <div className='w-1/4'> InstituteName : {ele.instituteName}</div>
                    <div className='w-1/4'> PassingYear : {ele.passingYear.toString()}</div>
                    <div className='w-1/4'> Percentage : {ele.percentage}</div>

                  </div>
                ))
              }
            </div>

          </div>


          {/* Work experience  details  */}
          <div className='p-5 border rounded-lg mt-10'>
            <div className='text-2xl text-white mt-2'>Language Known </div>
            <div>
              {
                userData?.languages.map((ele, index) => (
                  <div key={index} className='flex gap-2 text-xl w-[1000px] mt-2 text-gray-400'>
                    <div>{ele.languageName} :</div>
                    <div>{ele.read === true ? 'Read' : ''}</div>
                    <div>{ele.write === true ? 'Write' : ''}</div>
                    <div>{ele.speak === true ? 'Speak' : ''}</div>

                  </div>
                ))
              }
            </div>
          </div>

          {/* Language details */}

          <div className='p-5 mt-10 border rounded-lg'>
            <div className='text-2xl text-white mt-2'>Technology Known </div>
            <div>
              {
                userData?.technologies.map((ele, index) => (
                  <div key={index} className='flex gap-2 text-xl w-[1000px] mt-2 text-gray-400'>
                    <div>{ele.technologyLan} : </div>
                    <div>{ele.level}</div>
                  </div>
                ))
              }
            </div>
          </div>

          <div className='mt-10 p-5 border rounded-lg'>
            <div className='text-2xl text-white mt-2'>Reference Contacts</div>

            <div>
              {
                userData?.referenceContacts.map((ele, index) => (
                  <div key={index} className='flex gap-2 text-xl w-[1000px] mt-2 text-gray-400'>
                    <div className='w-1/3'>Name : {ele.refName}</div>
                    <div className='w-1/3'>ContactNo : {ele.refContactNumber}</div>
                    <div className='w-1/3'>Relation : {ele.refRelation}</div>
                  </div>
                ))
              }
            </div>

          </div>

          <div className='mt-10 p-5 border rounded-lg mb-20'>
            <div className='text-2xl text-white mt-2'>Preference</div>
            <div>
              {
                userData?.preferences.map((ele, index) => (
                  <div key={index} className='flex gap-2 text-xl w-[1500px] mt-2 text-gray-400'>
                    <div className='w-1/5'>PreferenceLocation : {ele.preferanceLocation}</div>
                    <div className='w-1/5'>NoticePeroid : {ele.noticePeroid}</div>
                    <div className='w-1/5'>ExpectedCtc : {ele.expectedCtc}</div>
                    <div className='w-1/5'>CurrentCtc : {ele.currentCtc}</div>
                    <div className='w-1/5'>Department : {ele.department}</div>

                  </div>
                ))
              }
            </div>


          </div>

        </div>
      </div>
    </div>
  )
}
