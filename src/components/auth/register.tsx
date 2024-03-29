// import CustomInput from "../../utils/customInput";
import wolfgangLogo from "../../assets/wolfgangLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { UserAuth } from "../../hooks/userAuthContext";
import { useState } from "react";
import toast from "react-hot-toast";

// Define Zod schema for form validation
const registerSchema = z.object({
  firstName: z.string().min(3, { message: "Must be 3 or more characters long" }),
  middleName: z.string().min(3, { message: "Must be 3 or more characters long" }),
  lastName: z.string().min(3, { message: "Must be 3 or more characters long" }),
  phoneNumber: z.string().min(11, { message: "Must be 11 characters long" }),
  emailAddress: z.string().email(),
  streetAddress: z.string().min(1, { message: "streetAddress is required" }),
  state: z.string().min(1, { message: "state is required" }),
  zipCode: z.string().min(1, { message: "zipCode is required" }),
  dateOfBirth: z.string().min(1, { message: "date Of Birth is required" }),
    // .date({ required_error: "Expired date is require" })
    // .date({ required_error: "Expired date is require" })
    // .min(new Date(), { message: "Product already expired" }),
//   dateOfBirth: z.string({required_error: "First Name is required" }),
  creditConsultMethod: z.string().min(5, { message: "Must be 5 or more characters long" }),
  referralSource: z.string().min(5, { message: "Must be 5 or more characters long" }),
});

type FormFields = z.infer<typeof registerSchema>;


const Register = () => {

    const { user, setUser } = UserAuth();
    const [isChecked, setIsChecked] = useState(false);

    const navigate = useNavigate();

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
      };


    const {
        handleSubmit,
        register,
        reset,
        formState: { errors, isSubmitting },
      } = useForm<FormFields>({
        resolver: zodResolver(registerSchema),
    });


    const onSubmit: SubmitHandler<FormFields> = (data) => {
        console.log(data);
        if(!isChecked) {
            toast.error("You have to agree with the privacy policy")
            return
        }

        setUser({ ...user,email: data.emailAddress, firstName: data.firstName, middleName: data.middleName, lastName: data.lastName, phoneNumber: data.phoneNumber, state: data.state, dob: data.dateOfBirth, zipCode: data.zipCode })
        // console.log("user", user)
        navigate("/payment_details");
        

        reset()
        // Add your form submission logic here
    };

    return(
        <div className="bg-[#F5F5F5] py-5 px-4 md:px-8 h-[vh] mx-3 my-3 md:my-0 md:mx-0">
            <div className="flex__center bg-primary mb-3 py-2">
                <img src={wolfgangLogo} className="" alt="" />
            </div>
            <h3 className="text-primary text-[1.4rem] md:text-[1.7rem] font-bold text-center">Create An Account</h3>
            <p className="text-center mb-6">Already have an account? <Link to="/" className="text-primary">Log In</Link></p>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex items-center justify-center md:flex-row flex-col gap-4 md:mx-4 lg:mx-0">
                    <div className="flex flex-col w-full md:w-1/3">
                        <label className="font-bold">First Name <span>*</span></label>
                        {/* <CustomInput placeholder="Enter first name" {...register('firstName')} /> */}
                        {/* <CustomInput placeholder="Enter first name" name="firstName" register={register}  /> */}
                    
                        <input {...register('firstName')} type="text" placeholder="enter your first name" className="inputCls focus:outline-primary" />
                        {errors.firstName && (
                        <p className="text-red-600">{errors.firstName.message}</p>
                    )}
                    </div>
                    
                    <div className="flex flex-col w-full md:w-1/3">
                        <label className="font-bold">Middle Name <span>*</span></label>
                        {/* <CustomInput placeholder="Enter middle" {...register('middleName')} /> */}
                        <input {...register('middleName')} type="text" placeholder="enter your middle name" className="inputCls focus:outline-primary"  />
                        {errors.middleName && (
                        <p className="text-red-600">{errors.middleName.message}</p>
                    )}
                    </div>
                    <div className="flex flex-col w-full md:w-1/3">
                        <label className="font-bold">Last Name <span>*</span></label>
                        {/* <CustomInput placeholder="Enter last name" {...register('lastName')} /> */}
                        <input {...register('lastName')} type="text" placeholder="enter your last name" className="inputCls focus:outline-primary" />
                        {errors.lastName && (
                        <p className="text-red-600">{errors.lastName.message}</p>
                    )}
                    </div>
                </div>
                {/* {errors.firstName && (
                        <p>{errors.firstName.message}</p>
                    )}
                {errors.root && (
                            <p>{errors.root.message}</p>
                        )} */}

                <div className="flex items-center justify-center md:flex-row flex-col gap-4 mt-3 ">
                    <div className="flex flex-col w-full md:w-1/2">
                        <label className="font-bold">Phone Number <span>*</span></label>
                        {/* <CustomInput placeholder="Enter your phone number" {...register('phoneNumber')} /> */}
                        <input {...register('phoneNumber')} type="text" placeholder="enter your phone number" className="inputCls focus:outline-primary"  />
                        {errors.phoneNumber && (
                        <p className="text-red-600">{errors.phoneNumber.message}</p>
                    )}
                        
                    </div>
                    <div className="flex flex-col w-full md:w-1/2">
                        <label className="font-bold">Email Address <span>*</span></label>
                        {/* <CustomInput placeholder="Enter your email address" {...register('emailAddress')} /> */}
                        <input {...register('emailAddress')} type="text" placeholder="enter your first email" className="inputCls focus:outline-primary"  />
                        {errors.emailAddress && (
                        <p className="text-red-600">{errors.emailAddress.message}</p>
                    )}
                    </div>
                </div>

                <div className="flex flex-col w-full  mt-3">
                    <label className="font-bold">Street Address <span>*</span></label>
                    {/* <CustomInput placeholder="Enter your street address" {...register('streetAddress')} /> */}
                    <input {...register('streetAddress')} type="text" placeholder="enter your address" className="inputCls focus:outline-primary"  />
                    {errors.streetAddress && (
                        <p className="text-red-600">{errors.streetAddress.message}</p>
                    )}
                </div>

                <div className="flex items-center justify-center md:flex-row flex-col gap-4 mt-3">
                    <div className="flex flex-col w-full md:w-1/4">
                        <label className="font-bold">State <span>*</span></label>
                        {/* <CustomInput placeholder="Enter details" {...register('state')} /> */}
                        <input {...register('state')} type="text" placeholder="enter your state" className="inputCls focus:outline-primary"  />
                        {errors.state && (
                        <p className="text-red-600">{errors.state.message}</p>
                    )}
                    </div>
                    <div className="flex flex-col w-full md:w-1/4">
                        <label className="font-bold">Zip code <span>*</span></label>
                        {/* <CustomInput placeholder="Enter details" {...register('zipCode')} /> */}
                        <input {...register('zipCode')} type="text" placeholder="enter your zipcode" className="inputCls focus:outline-primary"  />
                        {errors.zipCode && (
                        <p className="text-red-600">{errors.zipCode.message}</p>
                    )}
                    </div>
                    <div className="flex flex-col w-full md:w-2/4">
                        <label className="font-bold">Date Of Birth <span>*</span></label>
                        {/* <CustomInput type="date" placeholder="Enter your date of birth" {...register('dateOfBirth')} /> */}
                        <input {...register('dateOfBirth')} type="date" className="inputCls focus:outline-primary"  />
                        {errors.dateOfBirth && (
                        <p className="text-red-600">{errors.dateOfBirth.message}</p>)}
                    </div>
                </div>

                <div className="flex items-center justify-center md:flex-row flex-col gap-4 mt-3">
                    <div className="flex flex-col w-full md:w-1/2">
                        <label className="font-bold">Preffered Credit Consult Method</label>
                        <select id="" className="bg-white py-3 px-4 shadow-md rounded-xl mt-2 focus:outline-primary"  {...register('creditConsultMethod')}>
                            <option >Select one</option>
                            <option >Method 1</option>
                            <option >Method 1</option>
                            <option >Method 1</option>
                        </select>
                        {errors.creditConsultMethod && (
                        <p className="text-red-600">{errors.creditConsultMethod.message}</p>)}
                    </div>
                    <div className="flex flex-col w-full md:w-1/2">
                        <label className="font-bold">Referral source <span>*</span></label>
                        <select id="" className="bg-white py-3 px-4 shadow-md rounded-xl mt-2 focus:outline-primary" {...register('referralSource')}>
                            <option>Select one</option>
                            <option>Method 1</option>
                            <option>Method 1</option>
                            <option>Method 1</option>
                        </select>
                        {errors.creditConsultMethod && (
                        <p className="text-red-600">{errors.creditConsultMethod.message}</p>)}

                    </div>
                </div>

                <p className="my-3"><span>*</span> This field is mandatory</p>
 
                <div className="flex items-center gap-4">
                    <input 
                        type="checkbox" 
                        name="" 
                        id=""  
                        className="w-5 h-5 rounded-md" 
                        onChange={handleCheckboxChange}

                    />
                    <p>I agree to the terms and conditions provided by the company</p>
                </div>

                <div className=" flex__center mt-6 mb-3">                
                    {/* <Link to="/payment_details" className="btnLg ">Continue</Link> */}
                    <button disabled={isSubmitting} type="submit" className="btnLg">{ isSubmitting ? "Loading..." : "Continue"}</button>
                </div>
            </form>

        </div>
    )
}

export default Register;