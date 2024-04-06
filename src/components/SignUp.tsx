import React, { useEffect, useState } from 'react'
import { AuthLayout } from './layouts/Layout'
import { DASHBOARD, SIGN_IN, SIGN_UP } from '../routes'
import Link from 'next/link'
import { toast } from 'react-toastify';
import { useRouter } from 'next/router'
import { Sentry } from "react-activity";
import { API_URL, storageItems } from '@/constants';















export default function SignUp() {






  const router = useRouter()
  const [email, setEmail] = useState<string>("");;
  const [password, setPassword] = useState<string>("");;
  const [name, setName] = useState<string>("");;
  const [fetching, setFetching] = useState<boolean>(false);;
  const [isLogged, setIsLogged] = useState<boolean>(false);;
  const [loading, setLoading] = useState<boolean>(true);;



  useEffect(() => {
    const authState = window.localStorage.getItem(storageItems.auth);
    if (authState) {
      const { isLogged } = JSON.parse(authState);
      if (isLogged) setIsLogged(true);
    }
    setLoading(false);
  }, []);



  const handleEmail = (e: any) => {
    const { type, value } = e.target;
    setEmail(value);
  };

  const handlePassword = (e: any) => {
    const { type, value } = e.target;
    setPassword(value);
  };


  const handleName = (e: any) => {
    const { type, value } = e.target;
    setName(value);
  };




  const handleSignUp = (e: any) => {
    e.preventDefault();
    if (!name) toast.error("Full name is required.");
    if (!email) toast.error("Email is required.");
    if (!password) toast.error("Password is required.");

    // After validation make login Request
    else {
      setFetching(true);
      fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, name }),
      })
        .then((res) => {

          console.log(res)
          if (res.status >= 200 && res.status <= 300) return res.json();
          else {

            toast.error("Request Failed.");
            throw new Error("Request Failed ");
          }
        })
        .then((data) => {
          setFetching(false);
          toast.success("Sign Up Successful");

          router.push(SIGN_IN)


        })
        .catch((error) => {
          setFetching(false);
          toast.error(error.message);
          console.error(error);
        });
    }
  };




  if (loading)
    return (
      <Sentry />
    );

  if (isLogged) router.push(DASHBOARD);





  return (
    <AuthLayout>
      <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
          flex items-center justify-center">

        <div className="w-full h-100">

          <h1 className="text-xl text-gray-700 md:text-2xl font-bold">Create a new account</h1>

          <form className="mt-6" action="#" method="POST">

            <div>
              <label className="block text-gray-700">Full name</label>
              <input onChange={handleName} type="text" name="name" id="name" placeholder="Enter your full name" className="w-full px-4 py-3 rounded-lg bg-white-300 text-gray-700 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus autoComplete="name" required />
            </div>


            <div className="mt-4">
              <label className="block text-gray-700">Email Address</label>
              <input onChange={handleEmail} type="email" name="email" id="email" placeholder="Enter Email Address" className="w-full px-4 py-3 rounded-lg bg-white-300 text-gray-700 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus autoComplete="email" required />
            </div>

            <div className="mt-4">
              <label className="block text-gray-700">Password</label>
              <input onChange={handlePassword} type="password" name="password" id="password" placeholder="Enter Password" autoComplete="password" minLength={6} className="w-full px-4 py-3 rounded-lg bg-white-300 text-gray-700 mt-2 border focus:border-blue-500
                  focus:bg-white focus:outline-none" required />
            </div>



            <button onClick={handleSignUp} disabled={fetching} type="submit" className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
                px-4 py-3 mt-6"
            >Sign Up</button>
          </form>


          <p className="mt-8 text-gray-500">
            Already have an account? {" "}
            <Link href={SIGN_IN} className="text-blue-500 hover:text-blue-700 font-semibold">
              Sign in </Link>
          </p>

          <p className="text-sm text-gray-500 mt-16">&copy; Eunit - All Rights Reserved.</p>
        </div>

      </div>

    </AuthLayout>

  )
}
