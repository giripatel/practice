import React from 'react'

// const Input = (
//     label? : string,
//     width : string = 'w-50',
//     height : string = 'h-10',
//     className? : string,
//     type = 'text'
// ) => {
//   return (
//     <div>
//         {label && <label htmlFor={label}>{label}</label>}
//       <input className={`${width} ${height} ${className} rounded-md p-1`} id={label} type={type} />
//     </div>
//   )
// }   
interface Props {
    label :string,
    width : string,
    height : string,
    clasName? : string,
    type : string
}
const Input = ({
    label,
    width = 'w-50',
    height = 'h-10',
    className?,
    type= 'text'
    ) => {
        return (
            <div>
        {label && <label htmlFor={label}>{label}</label>}
        <input
          className={`${width} ${height} ${className} rounded-md p-1`}
          id={label}
          type={type}
          />
      </div>
    );
};
// export default Input
  
