import jwt from 'jsonwebtoken' 

export const createAuthToken =  (mail : string) => {
    
    const token =  jwt.sign(mail, 'JWT_SCRET');
    return token;

}


// const token =  createAuthToken('hello@gmail.com');
// console.log(token);

const validate = (token :string) => {
    
    try{
    const hasAccount = jwt.verify('eyJhbGciOiJIUzIJ9.aGVsbG9AZ21haWwuY29t.Gc4FamZPJ73uacUigp18XqpxDaX_w_CiA6XznxgoMxw','JWT_SCRET')
    }catch(error){
        console.log("invalid token");
        
    }
    // console.log(hasAccount);
    
}
validate('y')
