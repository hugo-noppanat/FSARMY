import React from 'react';
import { getServerSession } from 'next-auth';
import { authOptions } from "../api/auth/[...nextauth]";
export default function Performance(){
  return(
    <>
      <h1>Performance</h1>
    </>
  )
}

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