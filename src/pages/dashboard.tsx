import Example from '../components/dashboardContent/pie_chart';
import Heading from '../components/shared/heading';
import Disputes from '../components/dashboardContent/disputes';
import Scores from '../components/dashboardContent/scores';

const firstData: any = [
    { name: "778", value: 778, bg: "#002A70" },
    { name: "222", value: 222, bg: "#9C9EA6" },
];

const secondData: any = [
    { name: "793", value: 793, bg: "#D92727" },
    { name: "207", value: 207, bg: "#9C9EA6" },
];

const thirdData: any = [
    { name: "782", value: 782, bg: "#1BA2D4" },
    { name: "218", value: 218, bg: "#9C9EA6" },
];


const Dashboard = () => {
  return (
    <section className='overflow-y-auto overflow-x-hidden'>
        <div className="flex items-center justify-center gap-3 w-full mt-6">
            <div className="bg-greyBg py-3 px-5 w-1/2 rounded-lg">
                <Heading label="Credit Score" />
                <div className="flex__center">
                    <div className="flex__column">
                        <Example data={firstData} />
                        <p className="font-bold">Experian score</p>

                    </div>

                    <div className="flex__column">
                        <Example data={secondData} />
                        <p className="font-bold">Equifax score</p>

                    </div>

                    <div className="flex__column">
                        <Example data={thirdData} />
                        <p className="font-bold">Transunion score</p>

                    </div>     
                </div>

                
                <div className="text-center">
                <p className='mt-4 mb-2'><span className='font-bold text-center'>Status :</span>  Client</p>
                <p className='text-sm'><span className='font-bold text-center'>Next Round Of Dispute :</span>  8th April 2023</p>

                </div>
            </div>

            <div className="bg-greyBg py-1 px-5 w-1/2 rounded-lg">
                <Heading label="My Personal Details"/>
                <div className="my-2 ml-4">
                    <p><span className='font-bold'>Name :</span>  Dianne Russell</p>
                    <p className='my-3'><span className='font-bold'>Phone Number :</span>  (603) 555-0123</p>
                    <p><span className='font-bold'>Email :</span>  Russell7896@gmail.com</p>

                </div>
               <div className="mt-1">
               <Heading label="Account Manager Details" />
                <div className="my-2 ml-4">
                    <p><span className='font-bold'>Name :</span>  Cameron Williamson</p>
                    <p className='my-3'><span className='font-bold'>Phone Number :</span>  (704) 555-0127</p>
                    <p><span className='font-bold'>Email :</span>  Cameron2425@gmail.com</p>
                </div>
               </div>


            </div>
        </div>

        <Disputes />
        <Scores />

    </section>
  )
}

export default Dashboard;
