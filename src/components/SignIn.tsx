import React, { useEffect, useState } from 'react'
import { GoogleIcon } from './icons/Icons'
import { DASHBOARD, SIGN_UP } from './routes'
import { AuthLayout } from './layouts/Layout'
import Link from 'next/link'
import { toast } from 'react-toastify';
import { useRouter } from 'next/router'
import { Sentry } from "react-activity";



export default function SignIn() {


  const router = useRouter()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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



  const handleEmail = (e: any) => {
    const { type, value } = e.target;
    setEmail(value);
  };

  const handlePassword = (e: any) => {
    const { type, value } = e.target;
    setPassword(value);
  };


  const handleLogin = (e: any) => {
    e.preventDefault();
    if (!email) toast.error("Email is required.");
    if (!password) toast.error("Password is required.");


    // After validation make login Request
    else {
      setFetching(true);
      fetch("http://www.mocky.io/v3/08c2d38c-1959-427f-924c-23110af5ba2b", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
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
          window.localStorage.setItem(
            "@test:auth",
            JSON.stringify({ isLogged: true })
          );
          setIsLogged(true);
          router.push(DASHBOARD)

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

          <h1 className="text-xl text-gray-700 md:text-2xl font-bold">Log in to your account</h1>

          <form className="mt-6" action="#" method="POST">
            <div>
              <label className="block text-gray-700">Email Address</label>
              <input onChange={handleEmail} type="email" name="email" id="email" placeholder="Enter Email Address" className="w-full px-4 py-3 rounded-lg bg-white-300 text-gray-700 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus autoComplete="email" required />
            </div>

            <div className="mt-4">
              <label className="block text-gray-700">Password</label>
              <input onChange={handlePassword} type="password" name="password" id="password" placeholder="Enter Password" autoComplete="password" minLength={6} className="w-full px-4 py-3 rounded-lg bg-white-300 text-gray-700 mt-2 border focus:border-blue-500
                  focus:bg-white focus:outline-none" required />
            </div>

            <div className="text-right mt-2">
              <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
            </div>

            <button disabled={fetching} onClick={handleLogin} type="submit" className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
                px-4 py-3 mt-6">{fetching ? "Logging In..." : "Log In"} </button>
          </form>

          <hr className="my-6 border-gray-300 w-full" />

          <button disabled={fetching}  onClick={handleLogin} type="button" className="w-full block bg-white hover:bg-white-300 text-gray-700 focus:bg-white-300 font-semibold rounded-lg px-4 py-3 border border-gray-300">
            <div className="flex items-center justify-center">

              {/* Google Icon */}
              <GoogleIcon />

              <span className="ml-4">
                Log in
                with
                Google
              </span>
            </div>
          </button>

          <p className="mt-8 text-gray-500">
            Need an account? {" "}

            <Link href={SIGN_UP} className="text-blue-500 hover:text-blue-700 font-semibold">
              Create an account
            </Link>
          </p>

          <p className="text-sm text-gray-500 mt-16">&copy; Eunit - All Rights Reserved.</p>
        </div>

      </div>

    </AuthLayout>


  )
};
