import * as yup from 'yup'
import { eduDetailType, languageType, preferenceType, referenceContactsType, technologyType, userTypes, workexperienceType } from './basicDetailsType';

const ageDate: Date = new Date(new Date().getFullYear() - 18, new Date().getMonth(), new Date().getDate());

export const basicDetailschema: yup.ObjectSchema<userTypes> = yup.object().shape({
  firstName: yup.string().trim().matches(
    /^[A-Za-z ]*$/, 'Please enter valid firstName'
  ).max(15, 'firstname should not above 15 character').required("firstName is Required !!!"),

  lastName: yup.string().trim().matches(
    /^[A-Za-z ]*$/, 'Please enter valid LastName'
  ).max(15, 'lastname should not above 15 character').required("lastName is Required !!!"),

  desiganation: yup.string().trim().matches(
    /^[A-Za-z]*$/, 'Please Enter Valid Desiganation'
  ).max(15, 'Designation should not above 15 character').required("desiganation is Required !!!"),

  email: yup.string().email("invalid Email").required("Email is required !!!"),
  address1: yup.string().matches(
    /^[A-Za-z ]*$/, 'Please Enter Valid Address1 '
  ).max(100).required("Address1 is Required !!!"),

  address2: yup.string().matches(
    /^[A-Za-z]*$/, 'Plaase Enter Valid Address2 '
  ).max(100).required("Address2 is Required !!!"),

  phoneNumber: yup.string().required("phoneNumber is Required !!!").matches(
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
    "Please Enter valid phone number"
  ).min(10, '"At least 10 digit required.').max(10, 'Only 10 digit required.'),

  gender: yup.string().required("Select Your Gender!!!"),
  zipcode: yup.string().required("zipcode is Required !!!").matches(
    /^[1-9][0-9]{5}$/,
    'Enter valid Zipcode !!!'
  ),
  state: yup.string().typeError('state is Required !!!').required("state is Required !!!"),
  city: yup.string().typeError('city is Required !!!').required("city is Required !!!"),
  relationshipStatus: yup.string().required("relationshipStatus is Required !!!"),
  dateOfBirth: yup.date().max(ageDate, 'Age is Above 18 years').typeError("Date of birth is Required.").required("Date of birth is Required.")
});

export const educationSchema: yup.ObjectSchema<eduDetailType> = yup.object().shape({
  schDetails: yup.array().of(
    yup.object().shape({
      courseName: yup.string().trim().matches(
        /^[A-Za-z ]*$/, 'Please enter valid CourseName').required('CourseName is Required !!!'),
      instituteName: yup.string().trim().matches(
        /^[A-Za-z ]*$/, 'Please enter valid Institute Name').required("instituteName is required !!!"),
      passingYear: yup.number().required("Passing Year is Required !!!").typeError('Enter Valid Year').min(2000).max(2022),
      percentage: yup.number().transform((value, originalValue) => {
        return originalValue === "" ? null : value
      }).min(1).max(100).required('percentage is required !!!!')
    })
  ).required("Field is required !!!")
});

// from: yup.date().typeError('from Date is required !!!').max(new Date(), 'start Date before today').required(""),
// to: yup.date().typeError('from Date is required !!!').min( yup.ref("from"),
//   "End date has to be more than start date"
// ).required("")

export const workExperienceSchema: yup.ObjectSchema<workexperienceType> = yup.object().shape({

  workExperiences: yup.array().of(
    yup.object().shape({
      companyName: yup.string().trim().matches(
        /^[A-Za-z ]*$/, 'Please enter valid Company Name').required("Comapnay Name is Required !!!"),
      designation: yup.string().trim().matches(
        /^[A-Za-z ]*$/, 'Please enter valid designation').required("designation is required !!!"),
      from: yup.date().typeError('From Date is Required !!!').max(new Date(), 'start Date before today').required(""),
      to: yup.date().typeError("End date is required.").required("Please enter last date.")
        .test("checkLastDate", "", function (value) {
          const { path, parent, createError } = this;
          if ((parent.from).getTime() >= value.getTime()) {
            return createError({
              path,
              message: 'Job end date cannot be before start date',
            });
          }
          return true;
        })
      })
  ).required('')
});


export const languageSchema: yup.ObjectSchema<languageType> = yup.object().shape({
  languages: yup.array().of(
    yup.object().shape({
      languageName: yup.string().required(""),
      read: yup.bool(),
      write: yup.bool(),
      speak: yup.bool()
    }).test(
      'one skill required !!!',
      'at least one skill required !!!',
      (value) => value.read || value.write || value.speak
    )
  ).min(1, 'at least one language is required ').required("at least one language is required")
})

export const technologySchema: yup.ObjectSchema<technologyType> = yup.object().shape({
  technologies: yup.array().of(
    yup.object().shape({
      technologyLan: yup.string(),
      selected: yup.boolean(),
      level: yup.string()
    }).test('one language is required ', 'one level is required to select !!!',
      (value) => {
        if (value.level !== "") {
          return true;
        }
        return false;
      }
    )
  ).min(1, "At Least one technology is required !!!").required("")
});

// 'at-least-one-selected',
// 'At least one technology must be selected ',
// (values) => values ? values.some((value) => value.selected) : false

export const referenceContactsSchema: yup.ObjectSchema<referenceContactsType> = yup.object().shape({
  referenceContacts: yup.array().of(
    yup.object().shape({
      refName: yup.string().trim().matches(
        /^[A-Za-z ]*$/, 'Please Enter Valid Reference Name'
      ).max(15, 'refName should not above 15 character').required('refName is Required !!!'),
      refContactNumber: yup.string().trim().required('refConatactNumber is required !!!').
        matches(
          /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
          "Please Enter valid refConatactNumber"
        ).min(10, 'At least 10 digit required.')
        .max(10, '10 digit required.')
      ,
      refRelation: yup.string().trim().matches(
        /^[A-Za-z ]*$/, 'Please Enter Valid refRealtion'
      ).max(15, 'refRelation should not above 15 character').required("ref relation is required !!!"),
    })
  ).required("")
});

export const preferenceSchema: yup.ObjectSchema<preferenceType> = yup.object().shape({
  preferences: yup.array().of(
    yup.object().shape({
      preferanceLocation: yup.string().typeError('Preferance location is required !!!').required('Preferance location is required !!!'),
      noticePeroid: yup.string().required('notice period  is required !!!'),
      expectedCtc: yup.string().required('expected ctc is required !!!'),
      currentCtc: yup.string().required('current ctc is required !!!'),
      department: yup.string().typeError('department is required !!!').required('department is required !!!'),

    })
  ).required('')
});


export const schema = yup.object({

  firstName: yup.string().max(15, 'firstname should not above 15 character').required("firstName is Required !!!"),
  lastName: yup.string().max(15, 'lastname should not above 15 character').required("lastName is Required !!!"),
  desiganation: yup.string().required("desiganation is Required !!!"),
  email: yup.string().email("invalid Email").required("Email is required !!!"),
  address1: yup.string().max(100).required("Address1 is Required !!!"),
  address2: yup.string().max(100).required("Address2 is Required !!!"),
  phoneNumber: yup.number().required("PhoneNumber is Required !!!"),
  gender: yup.string().required("Select Your Gender!!!"),
  zipcode: yup.number().required("zipcode is Required !!!"),
  state: yup.string().required("state is Required !!!"),
  city: yup.string().required("city is Required !!!"),
  relationshipStatus: yup.string().required("relationshipStatus is Required !!!"),
  dateOfBirth: yup.date().required("dateOfBirth is Required !!!"),

  schDetails: yup.array().of(
    yup.object().shape({
      courseName: yup.string().required('courseName is required !!!'),
      instituteName: yup.string().required("instituteName is required !!!"),
      passingYear: yup.date().required('passing year is required !!!'),
      percentage: yup.string().required('percentage is required !!!!'),
    })
  ),

  workExperiences: yup.array().of(
    yup.object().shape({
      companyName: yup.string().required("Comapnay Name is Required !!!"),
      designation: yup.string().required("designation is required !!!"),
      from: yup.date().required('from Date is required !!!'),
      to: yup.date().required('To Date is required !!!'),
    })
  ),

  languages: yup.array().of(
    yup.object().shape({
      languageName: yup.string().required("LanguageName is Required !!!"),
      read: yup.boolean().required(""),
      write: yup.boolean().required(""),
      speak: yup.boolean().required(''),
    }
    )

  ),

  technologies: yup.array().of(
    yup.object().shape({
      technologyLan: yup.string().required(),
      selected: yup.bool().required(),
      level: yup.string().required(),
    })
  ),

  referenceContacts: yup.array().of(
    yup.object().shape({
      refName: yup.string().required('refName is Required !!!'),
      refContactNumber: yup.string().required('refConatactNumber is required !!!'),
      refRelation: yup.string().required("ref relation is required !!!"),
    })
  ),

  preferanceLocation: yup.string().required('Preferance location is required !!!'),
  noticePeroid: yup.string().required('notice period  is required !!!'),
  expectedCtc: yup.string().required('expected ctc is required !!!'),
  currentCtc: yup.string().required('current ctc is required !!!'),
  department: yup.string().required('department is required !!!'),

})