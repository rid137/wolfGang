import { FaAngleDown } from "react-icons/fa6";
import Heading from '../shared/heading';
import { CustomTable } from './customTable';


const Disputes = () => {
  return (
    <section>
        <div className="text-center bg-greyBg p-10 w-full mt-4 rounded-md pb-10">
            <Heading label="Disputes and  Inquiries" />
            <div className="flex flex-col mx-auto">
            <small>Please choose the year of dispute you wish to look at.</small>
            </div>

            <div className="flex items-center justify-center gap-3 mx-auto my-3">
                <div className="bg-white py-3 px-2 flex__center gap-1 w-24 ">
                    <p>Feb</p>
                    <FaAngleDown />
                </div>

                <div className="bg-white py-3 px-2 flex__center gap-1 w-24 ">
                    <p>2022</p>
                    <FaAngleDown />
                </div>
            </div>

            <Heading label="Disputes Account By Month (2022)" />
            <p>Listed below are the account we identified  to be challenged in each  month</p>
        </div>

        <CustomTable />
        
    </section>
  )
}

export default Disputes;
