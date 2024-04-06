import { PrismaClient,} from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

const prisma = new PrismaClient();


const getUser = async ()  => {

    const user = await prisma.user.findFirst({
      where : {
        id : 1
      },select : {
        account : {select : { balance : true}}
      }
      
    })
    if(user){
      return user
    }
}

// console.log(getUser())
async function fun(){

  const balance = await getUser();
  
  const bal  = balance?.account?.balance;
  console.log(bal);
}
// fun()

const main = async () => {
  try {
    const allUsers = await prisma.user.create({
      data : {
          userName : "after@gmail.com",
          firstName : 'Test', 
          lastName : 'lastName',
          password : 'password',
          account : {

              create : {
                  balance : 8000
              }
          }
      },
      include : {
          account : true
      }
  });
    console.log(allUsers);
  }catch(err)
  {
    if(err instanceof PrismaClientKnownRequestError){
      
      console.error("Already user with this name exists")
    }
  }
  
};
// main();

interface Update {
  passowrd? : string
  name? : string
}

const updateUser = async (obj : Update) => {

  const update = await prisma.test.update({
    where : {
      id : 7
    },
    data : obj
  })
  console.log(update)
}

// updateUser({name : 'test2'})

const updataBalance = async () => {
  
  const updateBalance = await prisma.account.update({
    where : {
      userName : 'after@gmail.com'
    },
    data : {
      balance : {increment : 2000}
    }
  })
  console.log(updataBalance)
}

updataBalance()