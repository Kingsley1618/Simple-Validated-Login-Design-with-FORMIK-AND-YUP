'use client'
import React,{useState} from 'react'
import { useFormik } from 'formik';
import {AiOutlineEyeInvisible, AiOutlineEye} from "react-icons/ai"
import * as Yup from 'yup'


export default function SignUpForm() {
  
    const [eye, setEye] = useState(false)

   
   
  function changeEyeTrue() {
    setEye(true)
  }
  function changeEyefalse() {
    setEye(false)
  }
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required').matches(
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
      'Invalid email format'
    ),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters long')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character'
      ),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values, { resetForm }, event) => {
      // Handle form submission here
      event.preventDefault()
       
    },
  });

 
    
  return (
    <div className="dark h-screen flex flex-col items-center justify-center px-8 ">
        
        <form className="bg-white px-[50px] py-8 rounded-3xl w-[100%] max-w-[550px]" onSubmit={formik.handleSubmit}>
<h1 className="font-semibold text-4xl text-center">Create An Account</h1>
<div className="max-w-[350px] text-center text-[grey] block mx-auto">create an account to enjoy all the services without ads for free</div>
        
        <div className="w-[100%] max-w-[800px] block mx-auto">
            <input type = "email" 
            placeholder='Email'
            
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
             className="px-5 py-3 w-[100%]  rounded-lg border border-[rgba(0,0,0,0.1)] mt-4 focus:outline-[rgba(0,0,0,0.2)] focus:shadow-sm"/>
         {formik.touched.email && formik.errors.email ? (
          <div className="error">{formik.errors.email}</div>
        ) : null}
        
        </div>
        <div className="w-[100%] max-w-[800px] block mx-auto relative">
        <input type = {eye ? "text" : "password"}
        placeholder='Password' 
        id="password"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className="px-7 py-3 w-[100%]  rounded-lg border border-[rgba(0,0,0,0.1)] focus:outline-[rgba(0,0,0,0.2)] focus:shadow-sm mt-7"/>{eye ? <AiOutlineEye className="absolute right-2 top-12 cursor-pointer" onClick = {changeEyefalse}/>:<AiOutlineEyeInvisible className="absolute right-2 top-12 cursor-pointer" onClick = {changeEyeTrue}/>}
        {formik.touched.password && formik.errors.password ? (
          <div className="error">{formik.errors.password}</div>
        ) : null}
        </div>

        <input type="submit" className="bg-cyan-900/75 cursor-pointer py-4 text-white block mx-auto mt-6 font-semibold text-xl rounded-2xl max-w-[300px] w-[100%]" value = "Create Account"/>
        
       
        </form>


    </div>
  )
}
