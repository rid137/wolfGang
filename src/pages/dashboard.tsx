import Heading from '../components/shared/heading';
import Disputes from '../components/dashboardContent/disputes';
import Scores from '../components/dashboardContent/scores';
import { Piechart } from '../components/dashboardContent/pie_chart';
import { UserAuth } from '../hooks/userAuthContext';
import axios from 'axios';
import { BASE_URL } from '../libs';
import { useEffect, useState } from 'react';
import { ClientScores, DisputeAccountType } from '../types/clientDetailsObj';







const Dashboard = () => {
    // const [clientInfo, setClientInfo] = useState<ClientDetailsType | null>(null)
    const {userAuthData, clientDetials, setClientDetials} = UserAuth()

    const [clientDisputeAccounts, setClientDisputeAccounts] = useState<DisputeAccountType[]>([])
    const [clientInquiries, setClientInquiries] = useState<any>()
    const [clientScores, setClientScores] = useState<ClientScores[]>([])


    const accessToken = userAuthData?.token
    const id = userAuthData?.userId
    // console.log("id", id)

    // const experianScoreValue = clientDetials?.experianScore as number

    const firstData: any = [
        { name: clientDetials?.experianScore, value: Number(clientDetials?.experianScore), bg: "#002A70" },
        { name: 1000 - Number(clientDetials?.experianScore), value: 1000 - Number(clientDetials?.experianScore), bg: "#9C9EA6" },
    ];
    
    const secondData: any = [
        { name: clientDetials?.equifaxScore, value: Number(clientDetials?.equifaxScore), bg: "#D92727" },
        { name: 1000 - Number(clientDetials?.experianScore), value: 1000 - Number(clientDetials?.experianScore), bg: "#9C9EA6" },
    ];
    
    const thirdData: any = [
        { name: clientDetials?.transunionScore, value: Number(clientDetials?.transunionScore), bg: "#1BA2D4" },
        { name: 1000 - Number(clientDetials?.transunionScore), value: 1000 - Number(clientDetials?.transunionScore), bg: "#9C9EA6" },
    ];


    const fetchDisputeAccounts = async () => {
        try {
          const response = await axios.get(
            `${BASE_URL}/account/findUnattendedAccounts/${id}`,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );
          const allAccountsData = response.data;

          setClientDisputeAccounts(allAccountsData);
      
          return allAccountsData;
        } catch (error) {
          console.error('Error fetching all clients:', error);
        }
    };

  const fetchAllInquiries = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/inquiry/getInquiry/${id}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            // 'Content-Type': 'application/json',
          },
        }
      );
      const allInquiriesData = response.data;

      setClientInquiries(allInquiriesData);
  
      return allInquiriesData;
    } catch (error) {
      console.error('Error fetching all inquiries:', error);
    }
  };


  const fetchAllScores = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/scores/getall/${id}?clientId=${id}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            // 'Content-Type': 'application/json',
          },
        }
      );
      const allScoresData = response.data;

      setClientScores(allScoresData);
  
      return allScoresData;
    } catch (error) {
      console.error('Error fetching all Scores:', error);
    }
  };

  useEffect(() => {

    // const fetchAllScoresInfo = async () => {
    //     await fetchAllScores();
    //     // console.log("allScoresInfo", allScoresInfo);
    // };

    const fetchClientDisputeAccountsInfo = async () => {
        await fetchDisputeAccounts();
        // console.log("allDisputeAccountsInfo", allDisputeAccountsInfo);
    };

    const fetchallInquiriesInfo = async () => {
        await fetchAllInquiries();
        // console.log("allInquiriesInfo", allInquiriesInfo);
    };


    const fetchClientScoresInfo = async () => {
      await fetchAllScores();
      // console.log("allScoresInfo ", allScoresInfo );
  };


      
    
    // accessToken && fetchAllScoresInfo();
    accessToken && fetchClientDisputeAccountsInfo();
    accessToken && fetchallInquiriesInfo();
    accessToken && fetchClientScoresInfo();
}, [accessToken]);


    // Example function to refresh access token
    // const getUserInfo = async () =>  {
    //     try {
    //     const response = await axios.post(`${BASE_URL}/auth/signin`, { accessToken },
    //     headers: {
    //         'Content-Type': 'application/json',
    //     }
    //     );
    //     const newAccessToken = response.data;
    
    //     // Store the new access token
    //     // localStorage.setItem('accessToken', newAccessToken);
    
    //     // Return the new access token
    //     return newAccessToken;
    //     } catch (error) {
    //     // Handle error, e.g., if refreshToken is expired
    //     console.error('Error refreshing access token:', error);
    //     // Redirect to login or handle authentication failure
    //     }
    // }

    // useEffect(() => {
    //     const userInfo = getUserInfo()

    //     console.log("userInfo", userInfo)
    // }, [])
  

    // const getUserInfo = async () => {
    //     try {
    //       const response = await axios.get(
    //         `${BASE_URL}/user/getUser/${id}`,
    //         { accessToken },
    //         // {
    //         //   headers: {
    //         //     'Content-Type': 'application/json',
    //         //   },
    //         // }
    //       );
    //       const newAccessToken = response.data;
      
    //       // Store the new access token
    //       // localStorage.setItem('accessToken', newAccessToken);
      
    //       // Return the new access token
    //       return newAccessToken;
    //     } catch (error) {
    //       // Handle error, e.g., if refreshToken is expired
    //       console.error('Error refreshing access token:', error);
    //       // Redirect to login or handle authentication failure
    //     }
    //   };
      
    //   useEffect(() => {
    //     const fetchUserInfo = async () => {
    //       const userInfo = await getUserInfo();
    //       console.log("userInfo", userInfo);
    //     };
      
    //     fetchUserInfo();
    //   }, []);
      

    const getUserInfo = async () => {
        try {
          const response = await axios.get(
            `${BASE_URL}/user/getUser/${id}`,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
                // 'Content-Type': 'application/json',
              },
            }
          );
          const res = response.data;
          setClientDetials(res)
      
          // Store the new access token
          // localStorage.setItem('accessToken', res);
      
          // Return the new access token
          return res;
        } catch (error) {
          // Handle error, e.g., if refreshToken is expired
          console.error('Error Fetching Client Info:', error);
          // Redirect to login or handle authentication failure
        }
      };

    //   const getManagerForClient = async () => {
    //     try {
    //       const response = await axios.get(
    //         `${BASE_URL}/user/getManagerForClient/${id}`,
    //         {
    //           headers: {
    //             Authorization: `Bearer ${accessToken}`,
    //             // 'Content-Type': 'application/json',
    //           },
    //         }
    //       );
    //       const newAccessToken = response.data;
      
    //       // Store the new access token
    //       // localStorage.setItem('accessToken', newAccessToken);
      
    //       // Return the new access token
    //       return newAccessToken;
    //     } catch (error) {
    //       // Handle error, e.g., if refreshToken is expired
    //       console.error('Error refreshing access token:', error);
    //       // Redirect to login or handle authentication failure
    //     }
    //   };
      
      
      useEffect(() => {
        const fetchUserInfo = async () => {
           await getUserInfo();
          // console.log("userInfo", userInfo);
        };

        // const fetchManagerForClient = async () => {
        //     const managerInfo = await getManagerForClient();
        //     console.log("managerInfo", managerInfo);
        //   };
      
        accessToken && fetchUserInfo();
        // accessToken && fetchManagerForClient();
      }, [accessToken]);

      
      




  return (
    <section className='overflow-y-auto overflow-x-hidden'>
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 w-full mt-6">
            <div className="bg-greyBg py-3 lg:px-5 px-3 md:w-1/2 w-full rounded-lg">
                <Heading label="Credit Score" />
                <div className="flex__center sm:gap-10 gap-2 md:py-2 lg:py-5 ">
                    <div className="flex__column gap-5">
                       <Piechart data={firstData} />
                        <p className="font-bold text-center text-sm md:text-[1rem]">Experian score</p>

                    </div>

                    <div className="flex__column gap-5">
                        <Piechart data={secondData} />
                        <p className="font-bold text-center text-sm md:text-[1rem]">Equifax score</p>

                    </div>

                    <div className="flex__column gap-5">
                        <Piechart data={thirdData} />
                        <p className="font-bold text-center text-sm md:text-[1rem]">Transunion score</p>

                    </div>     
                </div>

                
                <div className="text-center">
                <p className='mt-4 mb-2 text-sm'><span className='font-bold text-center'>Status :</span>  {clientDetials?.status !== null ? clientDetials?.status : "Client"}</p>
                <p className='text-sm'><span className='font-bold text-center'>Next Round Of Dispute :</span>  8th April 2023</p>

                </div>
            </div>

            <div className="bg-greyBg py-1 px-5 md:w-1/2 w-full rounded-lg">
                <Heading label="My Personal Details"/>
                <div className="my-2 ml-4">
                    <p><span className='font-bold'>Name :</span>  {clientDetials?.firstName} {clientDetials?.lastName}</p>
                    <p className='my-3'><span className='font-bold'>Phone Number :</span>  {clientDetials?.phone}</p>
                    <p><span className='font-bold'>Email :</span>  {clientDetials?.email}</p>

                </div>
               <div className="mt-1">
               <Heading label="Account Manager Details" />
                <div className="my-2 ml-4">
                    <p><span className='font-bold'>Name :</span>  {clientDetials?.manager?.firstName} {clientDetials?.manager?.lastName}</p>
                    <p className='my-3'><span className='font-bold'>Phone Number :</span>  {clientDetials?.manager?.phone}</p>
                    <p><span className='font-bold'>Email :</span>  {clientDetials?.manager?.email}</p>
                </div>
               </div>


            </div> 
        </div>

        <Disputes clientDisputeAccounts={clientDisputeAccounts} clientInquiries={clientInquiries} />
        <Scores clientScores={clientScores} />

    </section>
  )
}

export default Dashboard;
