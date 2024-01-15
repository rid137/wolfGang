import Heading from "../components/shared/heading";
import PaginationBtn from "../components/shared/paginationBtn";
import { paymentData } from "../utils/dummy";
import mastercardLogo from "../assets/mastercardLogo.svg"
import exclaim from "../assets/exclaim.svg"


const Payment = () => {
    return(
        <section>
            <h2 className="font-bold mb-3">Payment</h2>
            <div className="flex justify-between items-center gap-[2%]">
                    <div className="px-6 py-6 bg-greyBg w-[49%] rounded-md">
                        <div className="flex justify-between items-center mb-3">
                            <Heading label="Primary Card Details" />
                            <button className="py-1 rounded-md px-7 bg-primary text-white">Edit Card</button>
                        </div>

                        <div className="mx-10">
                                <small>Credit / Debit Card Number  <span className="text-red-600">*</span></small>
                                <div className="bg-white flex justify-between p-3 rounded-md mt-2">
                                    <input type="text" className="bg-transparent outline-none" placeholder="**** **** **** 5675" />
                                    <img src={mastercardLogo} alt="mastercardLogo" />
                                </div>

                                <div className="flex items-center justify-between gap-3 mt-4">
                                    <div className="flex flex-col w-1/2">
                                        <small className="mb-2">Expiration Date  <span className="text-red-600">*</span></small>
                                            <input type="text" className=" outline-none  p-3 rounded-md" placeholder="02/25" />
                                       
                                    </div>

                                    <div className="flex flex-col w-1/2">
                                        <small className="flex mb-2">CVV<span className="text-red-600">*</span><img src={exclaim} alt="" /></small>
                                            <input type="text" className=" outline-none  p-3 rounded-md" placeholder="***" />
                                        
                                    </div>
                                </div>

                        </div>
                   </div>

                   <div className="px-6 py-6 bg-greyBg w-[49%] rounded-md">
                        <div className="flex justify-between items-center mb-3">
                            <Heading label="Primary Card Details" />
                            <button className="py-1 rounded-md px-7 bg-primary text-white">Add Card</button>
                        </div>

                        <div className="mx-10">
                                <small>Credit / Debit Card Number  <span className="text-red-600">*</span></small>
                                <div className="bg-white flex justify-between p-3 rounded-md mt-2">
                                    <input type="text" className="bg-transparent outline-none" placeholder="---- ---- ---- ----" />
                                    <img src={mastercardLogo} alt="mastercardLogo" />
                                </div>

                                <div className="flex items-center justify-between gap-3 mt-4">
                                    <div className="flex flex-col w-1/2">
                                        <small className="mb-2">Expiration Date  <span className="text-red-600">*</span></small>
                                            <input type="text" className=" outline-none  p-3 rounded-md" placeholder="mm/yy" />
                                       
                                    </div>

                                    <div className="flex flex-col w-1/2">
                                        <small className="flex mb-2">CVV<span className="text-red-600">*</span><img src={exclaim} alt="" /></small>
                                            <input type="text" className=" outline-none  p-3 rounded-md" placeholder="---" />
                                        
                                    </div>
                                </div>

                        </div>
                        </div>
            </div>

            <div className="bg-greyBg text-black text-center py-6 mt-5"> 
                <Heading label="Payment  Schedule" />
                <p>Should you have initiated a payment with us, it will be documented and visible below.</p>
                <div className="flex justify-between items-center  font-bold mb-3  mx-10 mt-8">
                    <p>Date</p>
                    <p>Amount</p>
                    <p>Status</p>
                </div>

                {   
                    paymentData?.map((item, index) => (

                    <div className="bg-white mx-4 rounded-lg" key={index} >
                        <div className="flex justify-between items-center w-full  mb-2 py-3 px-6">
                            <p>{item.date}</p>
                            <p>{item.amount}</p>
                            <p style={{color: item.statusColor}}>{item.status}</p>
                        </div>

                    </div>
                    ))
                    
                    
                }

                <div className="flex justify-end mx-4">
                    <p>Latest actions (Showing 01 to 09 of 259)</p>
                </div>

                <PaginationBtn />
            </div>
        </section>
    );
};

export default Payment;