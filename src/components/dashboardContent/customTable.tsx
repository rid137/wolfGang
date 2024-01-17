import Heading from "../shared/heading";
import PaginationBtn from "../shared/paginationBtn";
import inquiryLine from "../../assets/inquiryLine.png";

export const CustomTable = () => {
    return (
        <section>
            <div className="bg-greyBg w-ful text-black pb-4 m-w-[90%] w-full overflow-x-scrol "> 
                <div className="flex justify-between items-center gap-[.4rem] md:gap-0  font-bold mb-3  mx-5 lg:mx-10 text-[.7rem] lg:text-[.9rem]">
                    <p>Account name</p>
                    <p>Account number</p>
                    <p>Bureau</p>
                    <p>Balance</p>
                </div>

                {Array(10)
                        .fill(10)
                        .map((_,) => (
                    <div className="bg-white mx-4 rounded-lg" >
                        <div className="flex justify-between items-center gap-2 md:gap-0 w-full  mb-2 py-3 lg:px-6 px-3 text-[.7rem] lg:text-[.9rem]">
                            <p>Dianne Russell</p>
                            <p>******* 7869</p>
                            <p>Experian</p>
                            <p>***</p>
                        </div>

                    </div>
                    ))
                }

                <div className="flex justify-center sm:justify-end mx-4">
                    <p>Latest actions (Showing 01 to 09 of 259)</p>
                </div>

                <PaginationBtn />
                <div className="w-full mx-auto flex items-center justify-center">
                    <img src={inquiryLine} className="w-[70%]" alt="" />
                </div>

                <div className="text-center mb-8 mt-4">
                    <Heading label="Inquiries Disputed By Month (2022)" />
                    <p className="mx-4 my-2">Listed below are the account we identified  to be challenged in each  month</p>
                </div>

                <div className="flex justify-between items-center gap-[.4rem] md:gap-0  font-bold mb-3  mx-7 lg:mx-10 text-[.7rem] lg:text-[.9rem]">
                    <p>Name</p>
                    <p>Date Of Inquiry</p>
                    <p>Bureau</p>
                </div>

                {Array(10)
                        .fill(10)
                        .map((_,) => (
                    <div className="bg-white mx-4 rounded-lg" >
                        <div className="flex justify-between items-center gap-2 md:gap-0 w-full  mb-2 py-3 lg:px-6 px-3 text-[.7rem] lg:text-[.9rem]">
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