// import CustomAuthPage from "./customAuthPage";
import wolfgangLogo from "../../assets/wolfgangLogo.png";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { UserAuth } from "../../hooks/userAuthContext";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { BASE_URL } from "../../libs";
import axios from "axios";
// import { useEffect, useState } from "react";
import toast from "react-hot-toast";


const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(5, { message: "Must be 5 or more characters long" }),
});
  
type FormFields = z.infer<typeof loginSchema>;



const Login = () => {
    // const [userData, setUserData] = useState<any>()
    const navigate = useNavigate();

    const { userAuthData, setUserAuthData } = UserAuth();


    // useEffect(() => {
    //     setTimeout(() => {
    //         if (!userAuthData) {
    //             return <Navigate to='/dashboard' />;
    //         }
    //     }, 2000)
    //   },[])




    // const LOCAL_STORAGE_KEY = "returnedUserData"


    // useEffect(() => {
        // const retrivedUserData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) as string)
        // console.log(retrivedUserData)

        // if(retrivedUserData) setUserData(retrivedUserData)

        // if (retrivedUserData) {
        //     reset({
        //         email: retrivedUserData.email,
        //         password: retrivedUserData.password,
        //     });
        // }

    // }, [])
    // console.log("userData", userData?.email)

    

    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm<FormFields>({
        // defaultValues: {
        //     email: "Xquizit52@gmail.com",
        //     password: "password1",
            
        // },
    resolver: zodResolver(loginSchema),
    });


    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        
        console.log("data", data)
        const formData = new FormData();
        
        formData.append("email", data.email);
        formData.append("password", data.password);

        console.log("formData", formData)
        console.log("FormData contents:");
        for (let pair of formData.entries()) {
            console.log(pair[0] + ": " + pair[1]);
        }


        try {
            // toast.loading('Loading...')
            const toastId = toast.loading('Logging You In! Please Wait');

             const response = await axios.post(`${BASE_URL}/auth/signin`, formData, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            // console.log("response", response.data)
            

            
            // Object.keys(response.data).length

            // const json = await response.text()

            if (response.status === 200 ) {
                toast.success("Log In Successful", { id: toastId });
                setUserAuthData(response.data)
                navigate("/dashboard");

                // console.log("json response",  )

            } else {
                toast.remove()
                toast.error("Something went wrong")
            }
        } catch (error: any) {
            toast.remove()
            if (error.message === 'Failed to fetch') toast.error('Network Error. Try again')
            else toast.error('Error encountered. Try again')
            console.log(error.message)
        }

        

        // reset()
        // Add your form submission logic here
    };

    if (userAuthData !== null) {
        return <Navigate to='/dashboard' />;
    }



    return(
        <div className="bg-[#F5F5F5] py-5 px-4 md:px-8 w-[rem] h-[vh] mx-3 my-3 md:my-0 md:mx-0">
            <div className="flex__center bg-primary mb-3 py-2">
                <img src={wolfgangLogo} className="" alt="" />
            </div>
            <h3 className="text-primary text-[1.4rem] md:text-[1.7rem] font-bold text-center ">Log In</h3>
            <p className="text-center mb-6">Don’t have an account? <Link to="/register" className="text-primary">Create an Account</Link></p>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex items-center justify-center flex-col gap-4 md:mx-4 lg:mx-0">
                    <div className="flex flex-col w-full">
                        <label className="font-bold">Email</label>
                        {/* <CustomInput placeholder="Enter password" /> */}
                        <input {...register('email')}  type="text"  placeholder="enter your email" className="inputCls focus:outline-primary" /> 
                        {errors.email && (
                            <p className="text-red-600">{errors.email.message}</p>
                        )}
                    </div>
                    <div className="flex flex-col w-full">
                        <label className="font-bold">Password</label>
                        {/* <CustomInput placeholder="Confirm Password" /> */}
                        <input {...register('password')}  type="text"  placeholder="enter your password" className="inputCls focus:outline-primary" /> 
                        {errors.password && (
                            <p className="text-red-600">{errors.password.message}</p>
                        )}
                    </div>
                </div>

                <p className="my-3"><span>*</span> This field is mandatory</p>
                {/* {backToLogin &&<div className="flex justify-end"><p className="text-primary">Back to Log In</p></div>} */}

                {/* <div className=" flex__center mt-6 mb-3 text-center">                
                    <Link to="/login" className="btnLg text-center">Register</Link>
                </div> */}

                <div className=" flex__center mt-6 mb-3">                
                    {/* <Link to="/create_password " className="btnLg ">Continue</Link> */}
                    <button disabled={isSubmitting} type="submit" className="btnLg">{ isSubmitting ? "Loading..." : "Log In"}</button>
                </div>
            </form>

        </div>
    )
}
    
export default Login;




    // <CustomAuthPage
    //     title="Log In"
    //     description="Don’t have an account? Create an Account"
    //     firstInputName="Email"
    //     firstInputPlaceholder="Enter email"
    //     secondInputName="Password "
    //     secondInputPlaceholder="Enter password"
    //     footerText
    //     forgotYourPassword
    //     route="/forgot_password"
    //     btnText="Log In"        
    // />