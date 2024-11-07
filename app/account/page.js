import { auth } from "../_lib/auth"

export const metadata={
    title:"Login"
}

export default async function Page(){
    const session=await auth()

    return (
        <div>{session.user.name.split(' ')[0]}</div>
    )
}