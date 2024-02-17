import CreatePasswords from "./customAuthPage";
import wolfgangLogo from "../../assets/wolfgangLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../hooks/userAuthContext";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { BASE_URL } from "../../libs";
import axios from "axios";
import toast from "react-hot-toast";


const passwordSchema = z.object({
    password: z.string().min(5, { message: "Password must be 5 or more characters long" }),
    confirmPassword: z.string(),
  }).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"]
  })
  
  type FormFields = z.infer<typeof passwordSchema>;


const CreatePassword = () => {

    const { user, setUser, setClientDetials } = UserAuth();
    const navigate = useNavigate();



    const {
        control,
        handleSubmit,
        register,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<FormFields>({
    resolver: zodResolver(passwordSchema),
    });



    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        const getName = user?.firstName

        // console.log(data);

        setUser({ ...user, password: data.password, confirmPassword: data.confirmPassword})
        console.log("user", user)
        // console.log("hghghh", placeholderImg)
        // console.log("hghghhjwhjwhjwh", addPfImg)

        // {
        //     "signUpRequest": {
        //       "firstName": "string",
        //       "middleName": "string",
        //       "lastName": "string",
        //       "email": "string",
        //       "phone": "string",
        //       "streetAddr": "string",
        //       "state": "string",
        //       "zipCode": "string",
        //       "dob": "string",
        //       "consultMethod": "string",
        //       "referralMethod": "string",
        //       "govId": "string",
        //       "addressProof": "string",
        //       "profileImg": "string",
        //       "ssn": "string",
        //       "transactionId": "string",
        //       "password": "string"
        //     },
        //     "gId": "string",
        //     "addPf": "string",
        //     "profileImg": "string"
        //   }

        

        const formData = new FormData();
        
        formData.append('email', user?.email as string);
        formData.append('firstName', user?.firstName as string);
        formData.append('lastName', user?.lastName as string);
        formData.append('password', data.password);
        formData.append("govId", user?.gId as string);
        formData.append("addressProof", user?.addPf as string);
        formData.append("ssn", user?.addPf as string);
        formData.append("transactionId", user?.transactionId as string);
        formData.append("zipCode", user?.zipCode as string);
        formData.append("state", user?.state as string);
        formData.append("dob", user?.dob as string);
        // "ssn": "string",
        //       "transactionId": "string",

        console.log("FormData contents:");
        for (let pair of formData.entries()) {
            console.log(pair[0] + ": " + pair[1]);
        }


        const toastId = toast.loading("Creating Client Account");

        try {
             const response = await axios.post(`${BASE_URL}/auth/signup`, formData, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            // console.log("response", response.data)
            // setUserAuthData(response.data)
            if(response.statusText === "OK") {
                console.log("response", response.data)
                toast.success("Client Account Created successfully", { id: toastId });
            }
    
        } catch (error: any) {
            toast.remove()     

            // console.log(error.message)
            toast.error('Error encountered. Try again');

        }   

        

        // reset()
        // Add your form submission logic here
    };

    return(
        <div className="bg-[#F5F5F5] py-5 px-4 md:px-8 w-[rem] h-[vh] mx-3 my-3 md:my-0 md:mx-0">
            <div className="flex__center bg-primary mb-3 py-2">
                <img src={wolfgangLogo} className="" alt="" />
            </div>
            <h3 className="text-primary text-[1.4rem] md:text-[1.7rem] font-bold text-center ">Create Password</h3>
            <p className="text-center mb-6">To keep your account safe, we need a strong password</p>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex items-center justify-center flex-col gap-4 md:mx-4 lg:mx-0">
                    <div className="flex flex-col w-full">
                        <label className="font-bold">Password</label>
                        {/* <CustomInput placeholder="Enter password" /> */}
                        <input {...register('password')}  type="text" className="inputCls focus:outline-primary" /> 
                        {errors.password && (
                        <p className="text-red-600">{errors.password.message}</p>)}
                    </div>
                    <div className="flex flex-col w-full">
                        <label className="font-bold">Confirm Password</label>
                        {/* <CustomInput placeholder="Confirm Password" /> */}
                        <input {...register('confirmPassword')}  type="text"  className="inputCls focus:outline-primary" /> 
                        {errors.confirmPassword && (
                        <p className="text-red-600">{errors.confirmPassword.message}</p>)}
                    </div>
                </div>

                <p className="my-3"><span>*</span> This field is mandatory</p>
                {/* {backToLogin &&<div className="flex justify-end"><p className="text-primary">Back to Log In</p></div>} */}

                {/* <div className=" flex__center mt-6 mb-3 text-center">                
                    <Link to="/login" className="btnLg text-center">Register</Link>
                </div> */}

                <div className=" flex__center mt-6 mb-3">                
                    {/* <Link to="/create_password " className="btnLg ">Continue</Link> */}
                    <button disabled={isSubmitting} type="submit" className="btnLg">{ isSubmitting ? "Loading..." : "Register"}</button>
                </div>
            </form>

        </div>
    )
}

export default CreatePassword;





// <CreatePasswords
        //     title="Create Password"
        //     description="To keep your account safe, we need a strong password"
        //     firstInputName="Password"
        //     firstInputPlaceholder="Enter password"
        //     secondInputName="Confirm Password "
        //     secondInputPlaceholder="Confirm password"
        //     mandatory
        //     route="/login"
        //     btnText="Continue"        
        // />