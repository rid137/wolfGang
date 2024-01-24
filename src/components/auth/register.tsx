import CustomInput from "../../utils/customInput";
import wolfgangLogo from "../../assets/wolfgangLogo.png";
import { Link } from "react-router-dom";

const Register = () => {
    return(
        <div className="bg-[#F5F5F5] py-5 px-4 md:px-8 h-[vh] mx-3 my-3 md:my-0 md:mx-0">
            <div className="flex__center bg-primary mb-3 py-2">
                <img src={wolfgangLogo} className="" alt="" />
            </div>
            <h3 className="text-primary text-[1.4rem] md:text-[1.7rem] font-bold text-center">Create An Account</h3>
            <p className="text-center mb-6">Already have an account? <Link to="/login" className="text-primary">Log In</Link></p>

            <form action="">
                <div className="flex items-center justify-center md:flex-row flex-col gap-4 md:mx-4 lg:mx-0">
                    <div className="flex flex-col w-full md:w-1/3">
                        <label className="font-bold">First Name <span>*</span></label>
                        <CustomInput placeholder="Enter first name" />
                    </div>
                    <div className="flex flex-col w-full md:w-1/3">
                        <label className="font-bold">Middle Name <span>*</span></label>
                        <CustomInput placeholder="Enter middle" />
                    </div>
                    <div className="flex flex-col w-full md:w-1/3">
                        <label className="font-bold">Last Name <span>*</span></label>
                        <CustomInput placeholder="Enter last name" />
                    </div>
                </div>

                <div className="flex items-center justify-center md:flex-row flex-col gap-4 mt-3 ">
                    <div className="flex flex-col w-full md:w-1/2">
                        <label className="font-bold">Phone Number <span>*</span></label>
                        <CustomInput placeholder="Enter your phone number" />
                    </div>
                    <div className="flex flex-col w-full md:w-1/2">
                        <label className="font-bold">Email Address <span>*</span></label>
                        <CustomInput placeholder="Enter your email address" />
                    </div>
                </div>

                <div className="flex flex-col w-full  mt-3">
                    <label className="font-bold">Street Address <span>*</span></label>
                    <CustomInput placeholder="Enter your street address" />
                </div>

                <div className="flex items-center justify-center md:flex-row flex-col gap-4 mt-3">
                    <div className="flex flex-col w-full md:w-1/4">
                        <label className="font-bold">State <span>*</span></label>
                        <CustomInput placeholder="Enter details" />
                    </div>
                    <div className="flex flex-col w-full md:w-1/4">
                        <label className="font-bold">Zip code <span>*</span></label>
                        <CustomInput placeholder="Enter details" />
                    </div>
                    <div className="flex flex-col w-full md:w-2/4">
                        <label className="font-bold">Date Of Birth <span>*</span></label>
                        <CustomInput placeholder="Enter your date of birth" />
                    </div>
                </div>

                <div className="flex items-center justify-center md:flex-row flex-col gap-4 mt-3">
                    <div className="flex flex-col w-full md:w-1/2">
                        <label className="font-bold">Preffered Credit Consult Method</label>
                        <select name="" id="" className="bg-white py-3 px-4 shadow-md rounded-xl mt-2">
                            <option value="">Select one</option>
                            <option value="">Method 1</option>
                            <option value="">Method 1</option>
                            <option value="">Method 1</option>
                        </select>
                    </div>
                    <div className="flex flex-col w-full md:w-1/2">
                        <label className="font-bold">Referral source <span>*</span></label>
                        <select name="" id="" className="bg-white py-3 px-4 shadow-md rounded-xl mt-2">
                            <option value="">Select one</option>
                            <option value="">Method 1</option>
                            <option value="">Method 1</option>
                            <option value="">Method 1</option>
                        </select>

                    </div>
                </div>

                <p className="my-3"><span>*</span> This field is mandatory</p>
 
                <div className="flex items-center gap-4">
                    <input type="checkbox" name="" id="" className="w-5 h-5 rounded-md" />
                    <p>I agree to the terms and conditions provided by the company</p>
                </div>

                <div className=" flex__center mt-6 mb-3">                
                    <Link to="/payment_details" className="btnLg ">Continue</Link>
                </div>
            </form>

        </div>
    )
}

export default Register;