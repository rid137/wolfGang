import { Link } from "react-router-dom";
import CustomInput from "../../utils/customInput";
import wolfgangLogo from "../../assets/wolfgangLogo.png";
import fileUploads from "../../assets/fileUploads.jpg";


const DocumentUpload = () => {
    return(
        <div className="bg-[#F5F5F5] py-5 px-4 md:px-8 w-[rem] h-[vh] mx-3 my-3 md:my-0 md:mx-0">
            <div className="flex__center bg-primary mb-3 py-2">
                <img src={wolfgangLogo} className="" alt="" />
            </div>
            <h3 className="text-primary text-[1.4rem] md:text-[1.7rem] font-bold text-center">ID Documents Upload</h3>
            <p className="text-center mb-6">Please ensure all details are correct</p>

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
                        <label className="font-bold">Social Security Number</label>
                        <CustomInput placeholder="Enter your SSN" />
                    </div>
                </div>

                <div className="flex items-center justify-center md:flex-row flex-col gap-4 mt-3">
                    <div className="flex flex-col w-full md:w-1/2">
                        <p className="font-bold">Driving license or Government ID *</p>
                        <img src={fileUploads} className="h-48" alt="" />
                    </div>
                    <div className="flex flex-col w-full md:w-1/2">
                        <p className="font-bold">Address Verification Document* <small>(utility bill phone bill etc)</small></p>
                        <img src={fileUploads} className="h-48" alt="" />
                    </div>
                    
                </div>

                <p className="my-3"><span>*</span> This field is mandatory</p>

                <div className="flex items-center gap-4">
                    <input type="checkbox" name="" id="" className="w-5 h-5 rounded-md" />
                    <p>I agree to the terms and conditions provided by the company</p>
                </div>

                <div className=" flex__center mt-6 mb-3">                
                    <Link to="/create_password " className="btnLg ">Continue</Link>
                </div>
            </form>

        </div>
    )
}

export default DocumentUpload;