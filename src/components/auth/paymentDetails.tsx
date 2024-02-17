import { Link, useNavigate } from "react-router-dom";
import CustomInput from "../../utils/customInput";
import wolfgangLogo from "../../assets/wolfgangLogo.png";
import { UserAuth } from "../../hooks/userAuthContext";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { BASE_URL } from "../../libs";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const registerSchema = z.object({
    // firstName: z.string().min(3, { message: "Must be 3 or more characters long" }),
    // middleName: z.string().min(3, { message: "Must be 3 or more characters long" }),
    // lastName: z.string().min(3, { message: "Must be 3 or more characters long" }),
    // phoneNumber: z.string().min(11, { message: "Must be 11 or more characters long" }),
    // email: z.string().email(),
    cardNumber: z.string().min(10, { message: "Please provide a valid card number" }),
    cardName: z.string(),
    cvc: z.string(),
    expiryDate: z.string().refine((value) => {
        // Use a regular expression to validate the "mm/yy" format
        const regex = /^(0[1-9]|1[0-2])\/\d{2}$/;
        return regex.test(value);
      }, {
        message: 'Invalid card expiry date format. Use "mm/yy".',
    }),
    
    

  });
  
  type FormFields = z.infer<typeof registerSchema>;

interface SubOptions {
    id: number
    isActive: boolean
    numberOfPayment: number
    paymentFrequency: string | null
    price: number
    subscriptionType: string
}


const PaymentDetails = () => {
    const { user, setUser } = UserAuth();
    const [subOptions, setSubOptions] = useState<SubOptions[]>([])
    
    const [isCheckedMonthlyInput, setIsCheckedMonthlyInput] = useState(false);
    const [monthlyInputValue, setMonthlyInputValue] = useState(''); // State to store the value 'Monthly'

    const [isCheckedYearlyInput, setIsCheckedYearlyInput] = useState(false);
    const [yearlyInputValue, setYearlyInputValue] = useState('');

    const [isCheckedLifeTimeInput, setIsCheckedLifeTimeInput] = useState(false);
    const [lifeTimeInputValue, setLifeTimeInputValue] = useState('');

    const navigate = useNavigate();
    const [subType, setSubType] = useState<string>("")
    const [couponCode, setCouponCode] = useState<string>("")



    const handleMonthlyCheckboxChange = () => {
        setIsCheckedMonthlyInput(!isCheckedMonthlyInput); // Toggle the checkbox value
        setMonthlyInputValue(isCheckedMonthlyInput ? '' : 'MONTHLY'); // Set 'Monthly' when checked, otherwise set an empty string
        setSubType(isCheckedMonthlyInput ? '' : 'MONTHLY')
    };

    const handleYearlyCheckboxChange = () => {
        setIsCheckedYearlyInput(!isCheckedYearlyInput); // Toggle the checkbox value
        setYearlyInputValue(isCheckedYearlyInput ? '' : 'ANNUAL'); // Set 'Monthly' when checked, otherwise set an empty string
        setSubType(isCheckedYearlyInput ? '' : 'ANNUAL')
    };

    const handleLifeTimeCheckboxChange = () => {
        setIsCheckedLifeTimeInput(!isCheckedLifeTimeInput); // Toggle the checkbox value
        setLifeTimeInputValue(isCheckedLifeTimeInput ? '' : 'LIFETIME'); // Set 'Monthly' when checked, otherwise set an empty string
        setSubType(isCheckedLifeTimeInput ? '' : 'LIFETIME')
    };

    // console.log("monthly", monthlyInputValue)
    // console.log("yearly", yearlyInputValue)
    // console.log("lifetime", lifeTimeInputValue)
    console.log("subType", subType)



    // console.log("user", user)


    const fetchSub = async () => {
        try {
          const response = await axios.get(
            `${BASE_URL}/subscription/getAll`,
            {
              headers: {
                // Authorization: `Bearer ${accessToken}`,
              },
            }
          );
          const allSubsData = response.data;

          setSubOptions(allSubsData);
      
          return allSubsData;
        } catch (error) {
          console.error('Error fetching all subscription:', error);
        }
    };

    useEffect(() => {

    
        const fetchallSubsInfo = async () => {
            const allSubsInfo = await fetchSub();
            // console.log("allSubsInfo", allSubsInfo);
        };

        fetchallSubsInfo();
    }, []);

    const applyCoupon = async () => {
        try {
          const response = await axios.get(
            `${BASE_URL}/auth/applyCoupon?code=${couponCode}&SubscriptionType=${subType}`,
            {
              headers: {
                // Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
              },
            }
          );

          if(response?.status === 200) {
            toast.success(`Successfull!!!... You will now be charged $${response.data} for you subscription`)
          }
        //   const allInquiriesData = response.data;
    
        //   setClientInquiries(allInquiriesData);
            console.log("response", response)
      
          return
        } catch (error: any) {
            toast.error(`${error.response.data.message}`)
          console.error('Error Applying Coupon Code:', error.response.data.message);
        }
    };
    

    const {
        control,
        handleSubmit,
        register,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<FormFields>({
        // defaultValues: {
        //     firstName: user?.firstName,
        //     middleName: user?.middleName,
        //     lastName: user?.lastName,
        //     phoneNumber: user?.phoneNumber,
        //     email: user?.email
            
        // },
    resolver: zodResolver(registerSchema),
    });


    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        console.log(data);
        if(!isCheckedMonthlyInput && !isCheckedYearlyInput && !isCheckedLifeTimeInput) {
            toast.error("You have to subscribe to a plan")
            return
        }

        if(isCheckedMonthlyInput && isCheckedYearlyInput) {
            toast.error("You cannot subscribe for two plan at a time")
            return
        }

        if(isCheckedMonthlyInput && isCheckedLifeTimeInput) {
            toast.error("You cannot subscribe for two plan at a time")
            return
        }

        if(isCheckedLifeTimeInput && isCheckedYearlyInput) {
            toast.error("You cannot subscribe for two plan at a time")
            return
        }

        // console.log("user", user)
        
        const formData = new FormData();
        
        formData.append('cardName', data.cardName);
        formData.append('cardNumber', data.cardNumber);
        formData.append('cardCvv', data.cvc);
        formData.append('expiryDate', data.expiryDate);
        formData.append('subscriptionType', subType);
        formData.append('couponCode', couponCode);
        formData.append('email', user?.email as string);
        // "amount": 0,
        //   "cardName": "string",
        //   "cardNumber": "string",
        //   "cardCvv": "string",
        //   "expiryDate": "string",
        //   "subscriptionType": "MONTHLY",
        //   "couponCode": "string",
        //   "email": "string"
        
        const toastId = toast.loading("Submitting Card Details");
        
        
        try {        
            const response = await axios.post(`${BASE_URL}/payment/payOnRegister`, formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            
            console.log("response", response);
            
            if (response.status === 200) {
                setUser({ ...user, transactionId: response?.data?.transactionId })
                // console.log("json response", response.data);
                // setManagerObj(response.data);
                if(response?.data?.success) {
                    navigate("/document_upload");
                }
                // await fetchAllManagers()
                toast.success("Card Details Submitted successfully", { id: toastId });
            } else {
                toast.remove();
                toast.error(response.data.message);
            }
        } catch (error: any) {
            toast.remove();
            if (error.message === 'Failed to fetch') {
                toast.error('Network Error. Try again');
            } else {
                toast.error('Error encountered. Try again');
            }
            // console.log(error.message);
        }

        // toast.remove();

        // navigate("/login");
        


        // navigate("/document_upload");
        

        reset()
        // Add your form submission logic here
    };


    return(
        <div className="bg-[#F5F5F5] py-5 px-4 md:px-8 h-[vh] mx-3 my-3 md:my-0 md:mx-0">
            <div className="flex__center bg-primary mb-3 py-2">
                <img src={wolfgangLogo} className="" alt="" />
            </div>
            <h3 className="text-primary text-[1.4rem] md:text-[1.7rem] font-bold text-center">Payment Details</h3>
            <p className="text-center mb-6">Please ensure all details are correct</p>

            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex items-center justify-center md:flex-row flex-col gap-4 md:mx-4 lg:mx-0">
                    <div className="flex flex-col w-full md:w-1/3">
                        <label className="font-bold">First Name <span>*</span></label>
                        {/* <CustomInput placeholder="Enter first name" /> */}
                        <input  value={user?.firstName} readOnly type="text"  placeholder="enter your first name" className="inputCls focus:outline-primary"   /> 
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
                        <label className="font-bold">Email</label>
                        {/* <CustomInput placeholder="Enter your SSN" /> */}
                        <input value={user?.email} readOnly  type="text"  placeholder="enter your email" className="inputCls focus:outline-primary" /> 
                    </div>
                </div>

                <p className="font-bold mt-2">Plan</p>

                <div className="flex justify-between items-center gap-3 sm:gap-0 border-y-2 border-black py-2 my-2 text-[.7rem] sm:text-[1rem]">
                    <div className="">
                        <div className="flex__center gap-1 xs:gap-3 mb-2 md:mb-0">
                            <input 
                                type="checkbox" 
                                name="" 
                                id="" 
                                checked={isCheckedMonthlyInput}
                                onChange={handleMonthlyCheckboxChange}
                                className="xs:size-5 size-3 rounded-md" 
                            />
                            <p>Monthly Credit Disputing</p>
                        </div>
                        
                        <div className="flex__center gap-1 xs:gap-3 mb-2 md:mb-0">
                            <input 
                                type="checkbox"
                                name="" 
                                id="" 
                                checked={isCheckedYearlyInput}
                                onChange={handleYearlyCheckboxChange}
                                className="xs:size-5 size-3 rounded-md" 
                            />
                            <p>Annuall Credit Disputing</p>
                        </div>
                        <div className="flex__center gap-1 xs:gap-3">
                            <input 
                                type="checkbox" 
                                name="" 
                                id="" 
                                checked={isCheckedLifeTimeInput}
                                onChange={handleLifeTimeCheckboxChange}
                                className="xs:size-5 size-3 rounded-md" 
                            />
                            <p>Lifetime Credit Disputing</p>
                        </div>
                    </div>

                    <div className="">
                        <p className="mb-2 md:mb-0">Per month : ${subOptions && subOptions[0]?.price}</p>
                        <p className="mb-2 md:mb-0">Per year : ${subOptions && subOptions[1]?.price}</p>
                        <p>Only Once : ${subOptions && subOptions[2]?.price}</p>
                    </div>

                    <div className="">
                        <p className="mb-2 md:mb-0"> {subOptions && subOptions[0]?.numberOfPayment} x ${subOptions && subOptions[0]?.price}</p>
                        <p className="mb-2 md:mb-0">{subOptions && subOptions[1]?.numberOfPayment} x ${subOptions && subOptions[1]?.price}</p>
                        <p>{subOptions && subOptions[2]?.numberOfPayment} x ${subOptions && subOptions[2]?.price}</p>
                    </div>

                </div>

                <div className="flex items-center justify-center md:flex-row flex-col gap-4 mt-3">
                    <div className="flex flex-col w-full md:w-2/4">
                        {/* <label className="font-bold">Credit / Debit Card Number <span>*</span></label>
                        <CustomInput placeholder="Enter card number" /> */}

                        <label className="font-bold">Credit / Debit Card Number <span>*</span></label>
                        {/* <CustomInput placeholder="Enter your phone number" /> */}
                        <input {...register('cardNumber')}  type="text" required  placeholder="enter your card number" className="inputCls focus:outline-primary"  /> 
                        {errors.cardNumber && (
                        <p className="text-red-600">{errors.cardNumber.message}</p>)}

                    </div>

                    <div className="flex flex-col w-full md:w-2/4">
                        {/* <label className="font-bold">Credit / Debit Card Number <span>*</span></label>
                        <CustomInput placeholder="Enter card number" /> */}

                        <label className="font-bold">Credit / Debit Card Name <span>*</span></label>
                        {/* <CustomInput placeholder="Enter your phone number" /> */}
                        <input {...register('cardName')}  type="text" required  placeholder="enter your card Name" className="inputCls focus:outline-primary"  /> 
                        {errors.cardName && (
                        <p className="text-red-600">{errors.cardName.message}</p>)}

                    </div>
                    
                </div>

                <div className="flex items-center justify-center md:flex-row flex-col gap-4 mt-3">
                    
                    <div className="flex flex-col w-full md:w-2/4">
                        {/* <label className="font-bold">Exp date <span>*</span></label>
                        <CustomInput placeholder="mm/yy" /> */}
                        <label className="font-bold">Exp date <span>*</span> </label>
                        {/* <CustomInput placeholder="Enter your phone number" /> */}
                        <input {...register('expiryDate')}  type="text" required  placeholder="mm/yy" className="inputCls focus:outline-primary"  /> 
                        {errors.expiryDate && (
                        <p className="text-red-600">{errors.expiryDate.message}</p>)}
                    </div>
                    <div className="flex flex-col w-full md:w-2/4">
                        {/* <label className="font-bold">CVC <span>*</span></label>
                        <CustomInput placeholder="Enter cvc" /> */}
                        <label className="font-bold">CVC <span>*</span> </label>
                        <input {...register('cvc')}  type="text" required  placeholder="Enter cvc" className="inputCls focus:outline-primary"  /> 
                        {errors.cvc && (
                        <p className="text-red-600">{errors.cvc.message}</p>)}
                    </div>
                </div>


                <div className="flex items-center justify-start md:flex-row flex-col gap-5 mt-3">
                    <div className="flex flex-col w-full md:w-1/3">
                        <label className="font-bold">Coupon</label>
                        <input
                            type='text'
                            className="bg-[#E7E7E7] py-3 px-4 shadow-md rounded-xl mt-2 focus:outline-primary"
                            placeholder="Enter Coupon Code"
                            onChange={(e) => setCouponCode(e.target.value)}
                        />

                    </div>


                    <div className="">
                        <p className="btnSm cursor-pointer" onClick={applyCoupon}>Apply</p>
                    </div>
                </div>

                <p className="my-3"><span>*</span> This field is mandatory</p>

                <div className=" flex__center mt-6 mb-3">                
                    {/* <Link to="/document_upload" className="btnLg ">Continue</Link> */}
                    <button disabled={isSubmitting} type="submit" className="btnLg">{ isSubmitting ? "Loading..." : "Continue"}</button>

                </div>
            </form>

        </div>
    )
}

export default PaymentDetails;