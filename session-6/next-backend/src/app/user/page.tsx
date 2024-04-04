import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient();

const fetchData = async () => {

    const user = await prisma.user.findFirst();

    return (
        user
    )
}

const renderFun = async () => {
    const user = await fetchData();

    return (
        <div>
            <div>{user?.email}</div>
            <div>{user?.passowrd}</div>
        </div>
    )
}

export default renderFun;