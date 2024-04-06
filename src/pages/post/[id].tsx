import Link from 'next/link';
import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import {usePosts, useUsers } from '@/helpers/useHelpers';
import { Sentry } from 'react-activity';
import { HOME } from '@/routes';
import { POSTS_API_URL, USERS_API_URL } from '@/constants';
import { AsideRight } from '@/components/dashboard/AsideRight';
import { MobileNavBar } from '@/components/dashboard/MobileNavBar';
import AsideLeft from '@/components/dashboard/AsideLeft';
import { Post } from '@/components/dashboard/Post';
import { useRouter } from 'next/router';






export default function SinglePost() {





  const router = useRouter();



  const {
    isLoading, postsList
  } = usePosts(`${POSTS_API_URL}/${router.query.id}`);


  const {
    usersList,
    isLoading: isUserLoading
  } = useUsers(USERS_API_URL);


  if (isLoading || isUserLoading)
    return (
      <Sentry />
    );





  return (
    <div>
      <MobileNavBar />

      <div className="flex justify-center px-5 sm:px-32 md:mt-4">
        <div className="flex h-screen w-screen">

          <AsideLeft />

          <main className="md:mx-4 w-full sm:basis-2/3">

            <header className="m-4 hidden sm:flex">
              <h1 className="text-xl font-semi-bold">Post: #{router.query.id}</h1>
            </header>

            <header className="text-xl font-bold flex py-4 text-blue-600 sm:hidden">
              <Link href={HOME} id="hero-logo"> Eunit </Link>
            </header>

            {/* single post */}

            <>


              {/* Show Posts */}

              {
                isLoading ? (
                  <div className="z-20">
                    <Sentry />
                  </div>
                ) : (
                  !postsList ?
                    <h1 className="text-2xl font-bold text-center mt-8">No Posts, Add one!</h1> :
                    <Post post={postsList as any} user={usersList[0]} />
                )
              }

            </>

          </main>

          <AsideRight />
          <a href="#">
            <AiOutlineArrowUp className="hidden sm:block fixed bottom-0 right-20 bg-blue-300 text-slate-50 text-5xl p-3 rounded-full mb-2 mr-20 hover:bg-blue-500" />
          </a>
        </div>
      </div>
    </div>
  )
}
