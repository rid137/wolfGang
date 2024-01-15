import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import avatar from '../assets/avatar.jpg'



const EditProfile = () => {
    return(
        <>
            <Link to='/settings' className="flex items-center gap-2 my-4 cursor-pointer">
                <FaArrowLeft />
                <h2 className="font-bold mb-">Edit Profile</h2>           
            </Link>
            
            <div className="bg-greyBg px-7 py-10 mt-3 text-cente">
                <div className="flex items-center justify-center gap-6 mb-16">
                    <img src={avatar} className="rounded-full w-32 h-32" alt="profile image" />
                    <div className="flex flex-col gap-4">
                        <button className="bg-primary text-white px-6 py-2 rounded-md">Change Picture</button>
                        <button className="bg-transparent border-2 border-primary px-6 py-[.4rem] rounded-md">Delete Picture</button>

                    </div>
                </div>


                {/* <small>Credit / Debit Card Number  <span className="text-red-600">*</span></small>
                    <div className="bg-white flex justify-between p-3 rounded-md mt-2">
                        <input type="text" className="bg-transparent outline-none" placeholder="**** **** **** 5675" />
                        <img src={mastercardLogo} alt="mastercardLogo" />
                    </div> */}

                <form action="" >
                    <div className="flex justify-center items-center gap-4 w-full">
                        <div className="flex flex-col w-1/2">
                            <label htmlFor="">Full Name</label>
                            <input type="text" className="w-full rounded-md py-4 px-3 mt-2" value="Dianne Russell"  />
                        </div>

                        <div className=" flex flex-col w-1/2">
                            <label htmlFor="">Phone Number</label>
                            <input type="text" className="w-full rounded-md py-4 px-3 mt-2" value="(603) 555-0123" />
                        </div>
                    </div>

                    <div className=" w-full mt-2">
                        <div className="flex flex-col ">
                            <label htmlFor="">Email</label>
                            <input type="text" className="w-full rounded-md py-4 px-3 mt-2" value="Rusell7896@gmail.com"  />
                        </div>

                       
                    </div>

                    <div className="flex items-center mt-6">

                        <button className="bg-primary text-white px-32 py-3 rounded-md mx-auto">Save Changes</button>
                    </div>

                </form>
            </div>
        </>
    )
}

export default EditProfile;