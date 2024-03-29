import { useNavigate } from "react-router-dom";
import wolfgangLogo from "../../assets/wolfgangLogo.png";
import fileUploads from "../../assets/fileUploads.jpg";
import { UserAuth } from "../../hooks/userAuthContext";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import toast from "react-hot-toast";

// Define Zod schema for form validation
const registerSchema = z.object({
    // firstName: z.string().min(3, { message: "Must be 3 or more characters long" }),
    // middleName: z.string().min(3, { message: "Must be 3 or more characters long" }),
    // lastName: z.string().min(3, { message: "Must be 3 or more characters long" }),
    // phoneNumber: z.string().min(11, { message: "Must be 11 or more characters long" }),
    socialSecurityNumber: z.string().min(5, { message: "Must be 5 or more characters long" }),
  });
  
  type FormFields = z.infer<typeof registerSchema>;

const DocumentUpload = () => {
    // const [placeholderImg, setPlaceholderImg] = useState<File | null>()
    // const [addPfImg, setAddPfImg] = useState<File | null>()

    const [uploadIdThumbnail, setUploadIdThumbnail] = useState(fileUploads)
    const [uploadPfThumbnail, setUploadPfThumbnail] = useState(fileUploads)
    // const [addPfImg, setAddPfImg] = useState(fileUploads)
    const { user, setUser } = UserAuth();
    const navigate = useNavigate();

    // console.log("placeholderImg", placeholderImg)
    // console.log("addPfImg", addPfImg)


    const uploadId = (e: React.ChangeEvent<HTMLInputElement>) => {  // to upload ID
        const file = e.target.files && e.target.files[0];
        // setPlaceholderImg(file);
        if(file && file?.type !== "image/jpeg") {
            toast.error('Only images are allowed');
            return;
        }
            if (file && file?.size > 419434) {
                toast.error('File too large');
                return;
            }
            const reader = new FileReader();
            reader.onload = () => {
                const thumbnail = reader.result as string;
                setUploadIdThumbnail(thumbnail);
                setUser({ ...user, gId: thumbnail})
            };
            reader.readAsDataURL(file as File);
            // image/jpeg
        //     // else {
        //     //     setId(file);
        //     //     setIsIdPDF(file.type === 'application/pdf');
        //     //     if (file.type !== 'application/pdf') {
        //     //         const reader = new FileReader();
        //     //         reader.onload = () => {
        //     //             const thumbnail = reader.result as string;
        //     //             setIdThumbnail(thumbnail);
        //     //         };
        //     //         reader.readAsDataURL(file);
        //     //     }

            // }
        // }
    }

    const uploadAddPf = (e: React.ChangeEvent<HTMLInputElement>) => {  // to upload ID
        const file = e.target.files && e.target.files[0];
        // setAddPfImg(file);
        // setUser({...user, addPf: addPfImg})
        console.log("file", file)

        // if (file) {
        //     setAddPfImg(file);
        //     // Rest of your code
        // }
        if(file && file?.type !== "image/jpeg") {
            toast.error('Only images are allowed');
            return;
        };

        if (file && file?.size > 4194) {
            toast.error('File too large');
            return;
        };
            const reader = new FileReader();
                    reader.onload = () => {
                        const thumbnail = reader.result as string;
                        setUploadPfThumbnail(thumbnail);
                        setUser({ ...user, addPf: thumbnail})
                    };
                    reader.readAsDataURL(file as File);

        //     // else {
        //     //     setId(file);
        //     //     setIsIdPDF(file.type === 'application/pdf');
        //     //     if (file.type !== 'application/pdf') {
        //     //         const reader = new FileReader();
        //     //         reader.onload = () => {
        //     //             const thumbnail = reader.result as string;
        //     //             setIdThumbnail(thumbnail);
        //     //         };
        //     //         reader.readAsDataURL(file);
        //     //     }

            // }
        // }
    }

    console.log("user", user)


    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm<FormFields>({
        // defaultValues: {
        //     firstName: user?.firstName,
        //     middleName: user?.middleName,
        //     lastName: user?.lastName,
        //     phoneNumber: user?.phoneNumber
            
        // },
    resolver: zodResolver(registerSchema),
    });


    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        // const getName = user?.firstName

        console.log(data);

        setUser({ ...user, ssn: data.socialSecurityNumber})
        // console.log("user", user)
        // console.log("hghghh", placeholderImg)
        // console.log("hghghhjwhjwhjwh", addPfImg)

        

//         const formData = new FormData();
        
//         formData.append('email', user?.email as string);
//         formData.append('firstName', user?.firstName as string);
//         formData.append('lastName', user?.lastName as string);
//         formData.append('password', 'passsjdhghjword');
//         formData.append("gId", user?.govtID as Blob);
//         formData.append("addPf", user?.addPf as Blob);
//         // formData.append('gId', placeholderImg as Blob );
//         // formData.append("addPf", addPfImg as Blob);
//         // formData.append('addPf', addPfImg as Blob);
//         // formData.append("lastName", user?.lastName as string);
//         // formData.append("lastName", user?.lastName as string);
//         console.log("formData", formData)
//         console.log("FormData contents:");
// for (let pair of formData.entries()) {
//     console.log(pair[0] + ": " + pair[1]);
// }


        // try {
        //     // toast.loading('Loading...')
        //     // const response = await fetch(`${BASE_URL}/auth/signup`, {
        //     //     method: 'POST',
        //     //     // headers: {
        //     //     //     'Content-Type': 'multipart/form-data'
        //     //     //     // 'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
        //     //     // },
        //     //     body: formData
        //     // })
        //     // .then((res) => {
        //     //     console.log("res", res)
        //     // })
        //      const response = await axios.post(`${BASE_URL}/auth/signup`, formData, {
        //         headers: {
        //                     'Content-Type': 'multipart/form-data'
        //         }
        //     })
        //     // .then((res) => {
        //     //     console.log("res", res)
        //     // })
        //     console.log("response", response.data)

        //     // const json = await response.text()

        //     // if (response.ok ) {
        //     //     console.log("json response", json )

        //     // } else {
        //     //     // toast.remove()
        //     //     // toast.error(json.message)
        //     // }
        // } catch (error: any) {
        //     // toast.remove()
        //     // if (error.message === 'Failed to fetch') toast.error('Network Error. Try again')
        //     // else toast.error('Error encountered. Try again')
        //     console.log(error.message)
        // }

        navigate("/create_password");
        

        // reset()
        // Add your form submission logic here
    };



    return(
        <div className="bg-[#F5F5F5] py-5 px-4 md:px-8 w-[rem] h-[vh] mx-3 my-3 md:my-0 md:mx-0">
            <div className="flex__center bg-primary mb-3 py-2">
                <img src={wolfgangLogo} className="" alt="" />
            </div>
            <h3 className="text-primary text-[1.4rem] md:text-[1.7rem] font-bold text-center">ID Documents Upload</h3>
            <p className="text-center mb-6">Please ensure all details are correct</p>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex items-center justify-center md:flex-row flex-col gap-4 md:mx-4 lg:mx-0">
                    <div className="flex flex-col w-full md:w-1/3">
                        <label className="font-bold">First Name <span>*</span></label>
                        {/* <CustomInput placeholder="Enter first name" /> */}
                        <input value={user?.firstName} readOnly  type="text"  placeholder="enter your first name" className="inputCls focus:outline-primary"   /> 
                    </div>
                    <div className="flex flex-col w-full md:w-1/3">
                        <label className="font-bold">Middle Name <span>*</span></label>
                        {/* <CustomInput placeholder="Enter middle" /> */}
                        <input value={user?.middleName} readOnly  type="text"  placeholder="enter your middle name" className="inputCls focus:outline-primary"  /> 
                    </div>
                    <div className="flex flex-col w-full md:w-1/3">
                        <label className="font-bold">Last Name <span>*</span></label>
                        {/* <CustomInput placeholder="Enter last name" /> */}
                        <input value={user?.lastName} readOnly  type="text"  placeholder="enter your last name" className="inputCls focus:outline-primary"  /> 
                        
                    </div>
                </div>

                <div className="flex items-center justify-center md:flex-row flex-col gap-4 mt-3 ">
                    <div className="flex flex-col w-full md:w-1/2">
                        <label className="font-bold">Phone Number <span>*</span></label>
                        {/* <CustomInput placeholder="Enter your phone number" /> */}
                        <input value={user?.phoneNumber} readOnly  type="text"  placeholder="enter your phone number" className="inputCls focus:outline-primary"  /> 
                
                    </div>
                    <div className="flex flex-col w-full md:w-1/2">
                        <label className="font-bold">Social Security Number</label>
                        {/* <CustomInput placeholder="Enter your SSN" /> */}
                        <input {...register('socialSecurityNumber')}  type="text"  placeholder="enter your ssn" className="inputCls focus:outline-primary" /> 
                        {errors.socialSecurityNumber && (
                        <p className="text-red-600">{errors.socialSecurityNumber.message}</p>)}
                    </div>
                </div>

                <div className="flex items-center justify-center md:flex-row flex-col gap-4 mt-3">
                    {/* <div className="flex flex-col w-full md:w-1/2">
                        <p className="font-bold">Driving license or Government ID *</p>
                        <img src={fileUploads} className="h-48" alt="" />
                    </div> */}

                    <div className="flex flex-col w-full md:w-1/2">
                        <p className="font-bold">Driving license or Government ID *</p>
                        <label htmlFor="id_upload" className="w-full" >
                            {/* <div className="" role="button" title="click to upload ID"> */}
                                <img src={uploadIdThumbnail} className="h-48 w-full" alt="" role="button" title="click to upload ID" />
                                {/* <img src={placeholderImg !== null ? placeholderImg : avatar} className="h-48" alt="" /> */}
                            {/* </div> */}
                        </label>
                        <input type="file" id="id_upload" onChange={uploadId} className="hidden" />
                        
                    </div>

                    <div className="flex flex-col w-full md:w-1/2">
                        <p className="font-bold text-[.83rem]">Address Verification Document* <small>(utility bill phone bill etc)</small></p>
                        <label htmlFor="addPf_upload" className="w-full" >
                            {/* <div className="" role="button" title="click to upload ID"> */}
                                <img src={uploadPfThumbnail} className="h-48 w-full" alt="" role="button" title="click to upload ID" />
                                {/* <img src={imageUrl !== "" ? imageUrl : bag2} className="h-48" alt="" /> */}
                            {/* </div> */}
                        </label>
                        <input type="file" id="addPf_upload" onChange={uploadAddPf} className="hidden" />
                        
                    </div>

                    {/* <div className="flex flex-col w-full md:w-1/2">
                        <p className="font-bold">Address Verification Document* <small>(utility bill phone bill etc)</small></p>
                        <img src={fileUploads} className="h-48" alt="" />
                    </div> */}
                    
                </div>

                <p className="my-3"><span>*</span> This field is mandatory</p>

                {/* <div className="flex items-center gap-4">
                    <input type="checkbox" name="" id="" className="w-5 h-5 rounded-md" />
                    <p>I agree to the terms and conditions provided by the company</p>
                </div> */}

                <div className=" flex__center mt-6 mb-3">                
                    {/* <Link to="/create_password " className="btnLg ">Continue</Link> */}
                    <button disabled={isSubmitting} type="submit" className="btnLg">{ isSubmitting ? "Loading..." : "Continue"}</button>
                </div>
            </form>

        </div>
    )
}

export default DocumentUpload;