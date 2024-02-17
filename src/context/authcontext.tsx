import { createContext, useEffect, useState, ReactNode } from 'react';
import { ClientDetailsType } from '../types/clientDetailsObj';


type UserType = {
  email?: string 
  firstName?: string
  middleName?: string
  lastName?: string
  phoneNumber?: string
  password?: string
  confirmPassword?: string
  gId?: string | null
  addPf?: string | null
  transactionId?: string
  ssn?: string
  state?: string
  zipCode?: string
  dob?: string

  // type?: 'Doctor' | 'Patient' | 'Pharmacy',
  // password?: string
}

interface UserAuthData {
  token: string
  refreshToken: string
  userId: number
  email: string
  role: string
}

interface AuthContextType {
  user: UserType | null
  setUser: React.Dispatch<React.SetStateAction<UserType | null>>

  clientDetials: ClientDetailsType | null
  setClientDetials: React.Dispatch<React.SetStateAction<ClientDetailsType | null>>

  userAuthData: UserAuthData | null
  setUserAuthData: React.Dispatch<React.SetStateAction<UserAuthData | null>>
  logout: () => void

}
    
interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);




    // useEffect(() => {
    //     const retrivedCarts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_CLIENTDETAILS_KEY) as string)
    //     console.log(retrivedCarts)

    //     if(retrivedCarts) setReturnedUserData(retrivedCarts)
    //     console.log(returnedUserData)

    // }, [])


    // useEffect(() => {
    //     // if(cart.length > 0) {
    //         localStorage.setItem(LOCAL_STORAGE_CLIENTDETAILS_KEY, JSON.stringify(returnedUserData))
    //     // }
    // }, [returnedUserData])


export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
    const [user, setUser] = useState<UserType | null>(null); 
    const [clientDetials, setClientDetials] = useState<any>(); // Work on the 'any' type later
    const [userAuthData, setUserAuthData] = useState<UserAuthData | null>(null)

    const LOCAL_STORAGE_CLIENTDETAILS_KEY = "clientDetials"
    const LOCAL_STORAGE_USERAUTHDATA_KEY = "userAuthData"

    // useEffect(() => {
    //     const retrivedUserData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_CLIENTDETAILS_KEY) as string)
    //     console.log(retrivedUserData)

    //     if(retrivedUserData) setReturnedUserData(retrivedUserData)
    //     console.log(returnedUserData)

    // }, [])

  useEffect(() => {
    if (clientDetials) {
        localStorage.setItem(LOCAL_STORAGE_CLIENTDETAILS_KEY, JSON.stringify(clientDetials));
    }
  }, [clientDetials]);

  useEffect(() => {
    if (userAuthData) {
        localStorage.setItem(LOCAL_STORAGE_USERAUTHDATA_KEY, JSON.stringify(userAuthData));
    }
  }, [userAuthData]);

  useEffect(() => {
    const retrivedUserAuthData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_USERAUTHDATA_KEY) as string);

    if(retrivedUserAuthData) setUserAuthData(retrivedUserAuthData);

  }, [])

  useEffect(() => {
    const retrivedUserAuthData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_USERAUTHDATA_KEY) as string);

    if(retrivedUserAuthData) setUserAuthData(retrivedUserAuthData);

  }, [])

  const logout = () => {
    localStorage.removeItem(LOCAL_STORAGE_USERAUTHDATA_KEY);
    setUserAuthData(null);
  };


  console.log("clientDetials", clientDetials)
  console.log("userAuthData", userAuthData)
  // console.log("user", user)
    
  
    return (
      <AuthContext.Provider value={{ user, setUser, clientDetials, setClientDetials, userAuthData, setUserAuthData, logout }}>
        {children}
      </AuthContext.Provider>
    )
};










// type UserContextType = {
//     user: UserType | null
//     setUser: React.Dispatch<React.SetStateAction<UserType | null>>
// }

// type SignUpContextProviderProps = {
//     children: React.ReactNode
// }

// export const SignUpContext = createContext({} as UserContextType)

// export const SignUpContextProvider = ({ children }: SignUpContextProviderProps) => {
//     const [user, setUser] = useState<UserType | null>(null)

//     return (
//         <SignUpContext.Provider value={{ user, setUser }}>
//             {children}
//         </SignUpContext.Provider>
//     )
// }


  