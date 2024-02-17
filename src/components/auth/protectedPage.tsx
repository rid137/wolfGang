import React, {  useState } from 'react';
// import { AdminAuth } from '../../hooks/useAdminAuthContext';
import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../../hooks/userAuthContext';

interface ProtectedPageProps {
  children: ReactNode;
}

const ProtectedPage: React.FC<ProtectedPageProps> = ({ children }) => {
  const { userAuthData } = UserAuth();
  const [isLoading, ] = useState(true)

  // useEffect(() => {
  //   setTimeout(() => {
  //     if (!userAuthData) {
  //       return <Navigate to='/login' />;
  //     }
  //   }, 1000)
  // },[userAuthData])

  if (isLoading) {
    // Optionally, you can render a loading indicator here while waiting for data
    return <div>Loading...</div>;
  }

  if (userAuthData === null) {
    // setIsLoading(false)
    return <Navigate to='/login' />;
  }

  return <>{children}</>;
};

export default ProtectedPage;