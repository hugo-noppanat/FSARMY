export default function Import(){
  return(
    <>
      <h1>Import</h1>
    </>
  )
}

import { getServerSession } from 'next-auth';
import { authOptions } from "../api/auth/[...nextauth]";
export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions)
  if(!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false
      }
    }
  }

  return {
    props: {

    }
  }
}