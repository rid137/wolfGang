import Heading from "../shared/heading";
import PaginationBtn from "../shared/paginationBtn";
import inquiryLine from "../../assets/inquiryLine.png";

export const CustomTable = () => {
    return (
        <section>
            <div className="bg-greyBg w-ful text-black pb-4"> 
                <div className="flex justify-between items-center  font-bold mb-3  mx-10">
                    <p>Account name</p>
                    <p>Account number</p>
                    <p>Bureau</p>
                    <p>Balance</p>
                </div>

                {Array(10)
                        .fill(10)
                        .map((_,) => (
                    <div className="bg-white mx-4 rounded-lg" >
                        <div className="flex justify-between items-center w-full  mb-2 py-3 px-6">
                            <p>Dianne Russell</p>
                            <p>******* 7869</p>
                            <p>Experian</p>
                            <p>***</p>
                        </div>

                    </div>
                    ))
                }

                <div className="flex justify-end mx-4">
                    <p>Latest actions (Showing 01 to 09 of 259)</p>
                </div>

                <PaginationBtn />
                <div className="w-full mx-auto flex items-center justify-center gap-4 text-primary">
                    <img src={inquiryLine} alt="" />
                </div>

                <div className="text-center mb-8 mt-4">
                    <Heading label="Inquiries Disputed By Month (2022)" />
                    <p>Listed below are the account we identified  to be challenged in each  month</p>
                </div>

                <div className="flex justify-between items-center  font-bold mb-3  mx-10">
                    <p>Name</p>
                    <p>Date Of Inquiry</p>
                    <p>Bureau</p>
                </div>

                {Array(10)
                        .fill(10)
                        .map((_,) => (
                    <div className="bg-white mx-4 rounded-lg" >
                        <div className="flex justify-between items-center w-full  mb-2 py-3 px-6">
                            <p>Dianne Russell</p>
                            <p>06/02/2022</p>
                            <p>Experian</p>
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