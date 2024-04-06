import React, { useEffect, useState } from 'react'
import { Sentry } from "react-activity";
import { useRouter } from 'next/router';
import { SIGN_IN } from '../../routes';
import DashBoardHome from './DashBoardHome';
import { useAuthState } from '@/helpers/useHelpers';




export default function Dashboard() {


  const router = useRouter();

  const {
    loading,
    isLogged
  } = useAuthState();



  if (loading)
    return (
      <Sentry />
    );

  if (!isLogged) router.push(SIGN_IN);

  return (
    <>
      <DashBoardHome />
    </>
  )
}
