import CustomInput from "../../utils/customInput";
import wolfgangLogo from "../../assets/wolfgangLogo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import OTPInput from "react-otp-input";


const inputList = Array.from(new Array(4), (_, index) => {
    return <div key={index} className="size-12 bg-[#E7E7E7]"></div>
});


const SecurityCode = () => {
    const [otp, setOtp] = useState('');

    const OtpInput = () => {
        return(
            <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            renderSeparator={<span> </span>}
            inputType="tel"
            onPaste={handlePaste}
            containerStyle={{ display: 'unset' }}
            inputStyle={{ width: "3rem", height: "3.5rem", color: "black " }}
            renderInput={(props) => <input {...props} className='' />}
          />
        )
    }

    const handlePaste: React.ClipboardEventHandler = (event) => {
        const data = event.clipboardData.getData('text');
        console.log(data)
    };
 
  const handleVerify = () => {
    alert(`Your otp is ${otp}`)
  };

    return(
        <div className="bg-[#F5F5F5] py-5 px-4 md:px-8  h-[vh] mx-3 my-3 md:my-0 md:mx-0 w-[32rem]">
            <div className="flex__center bg-primary mb-3 py-2">
                <img src={wolfgangLogo} className="" alt="" />
            </div>
            <h3 className="text-primary text-[1.4rem] md:text-[1.7rem] font-bold text-center">Security code to reset password</h3>
            <p className="text-center mb-6">Insert the security code sent to your email in order to proceed with the password reset.</p>

            <form action="">
                <div className="flex items-center justify-center flex-co gap-4 md:mx-4 lg:mx-0">
                    {/* {inputList} */}
                    <OtpInput />
                    
                   
                </div>

                <div className="flex justify-end my-3"><p className="text-primary cursor-pointer">Request a new code</p></div>
                
                <div className=" flex__center mt-6 mb-3 text-center">                
                    <Link to="/reset_password" className="btnLg" onClick={handleVerify}>Submit</Link>
                </div>

            </form>
        </div>
        

    )
}

export default SecurityCode;