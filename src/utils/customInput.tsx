// import { UseFormRegisterReturn } from "react-hook-form";

// interface CustomInputProps {
//     placeholder?: string;
//     type?: string
//     // register?: UseFormRegisterReturn;
// }

// const CustomInput: React.FC<CustomInputProps> = ({placeholder, type}) => {
//     return(
//         <input 
//             type={type ? type : "text"} 
//             className="bg-[#E7E7E7] py-3 px-4 shadow-md rounded-xl mt-2" 
//             placeholder={placeholder} 
//             // {...register}

//         />
//     )
// }

import React from 'react';
import { UseFormRegister } from 'react-hook-form';

interface CustomInputProps {
  placeholder?: string;
  type?: string;
  register?: UseFormRegister<any>

  name?: string
}

const CustomInput: React.FC<CustomInputProps> = ({ placeholder, type}) => {
  return (
    <input
      type={type ? type : 'text'}
      className="bg-[#E7E7E7] py-3 px-4 shadow-md rounded-xl mt-2"
      placeholder={placeholder}
      // {...register(name)}  
    />
  );
};



// export default CustomInput;

// import React from 'react';
// import { UseFormRegisterReturn } from 'react-hook-form';

// interface CustomInputProps {
//   placeholder?: string;
//   type?: string;
//   name?: string; // Add name attribute
//   register?: UseFormRegisterReturn;
// }

// const CustomInput: React.FC<CustomInputProps> = ({ placeholder, type, name, register }) => {
//   return (
//     <input
//       type={type ? type : 'text'}
//       className="bg-[#E7E7E7] py-3 px-4 shadow-md rounded-xl mt-2"
//       placeholder={placeholder}
//       {...register(name)} // Pass the name to register
//     />
//   );
// };

export default CustomInput;
