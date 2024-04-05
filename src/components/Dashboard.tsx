import React, { useEffect, useState } from 'react'
import { Sentry } from "react-activity";
import Link from 'next/link'
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { SIGN_IN } from './routes';



export default function Dashboard() {


  const router = useRouter();
  const [fetching, setFetching] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const authState = window.localStorage.getItem("@test:auth");
    if (authState) {
      const { isLogged } = JSON.parse(authState);
      if (isLogged) setIsLogged(true);
    }
    setLoading(false);
  }, []);



  if (loading)
    return (
      <Sentry />
    );

  if (!isLogged) router.push(SIGN_IN);

  return (
    <div>
      Dashboard
    </div>
  )
}
