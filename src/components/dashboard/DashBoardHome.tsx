import Link from 'next/link';
import React, { useState } from "react";
import { GiSettingsKnobs } from "react-icons/gi";
import { BsFillImageFill } from "react-icons/bs";
import { AiOutlineArrowUp } from "react-icons/ai";
import AsideLeft from './AsideLeft';
import { MobileNavBar } from './MobileNavBar';
import { usePosts, useUserDetails, useUsers } from '@/helpers/useHelpers';
import { Sentry } from 'react-activity';
import { toast } from 'react-toastify';
import { AsideRight } from './AsideRight';
import { Post } from './Post';
import { HOME } from '@/routes';
import Image from 'next/image';
import { POSTS_API_URL, USERS_API_URL } from '@/constants';






export default function DashBoardHome() {


  const {
    userData
  } = useUserDetails();

  const [showFilterPostModal, setShowFilterModal] = useState(false);
  const [sortPostBy, setSortPostBy] = useState("Latest");
  const [content, setContent] = useState<string>("");
  const [postImageUrl, setPostImageUrl] = useState<string>("");




  const {
    isLoading, postsList
  } = usePosts(POSTS_API_URL);

  const {
   isLoading: isUserLoading,
    usersList
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
              <h1 className="text-xl font-semi-bold">Home</h1>
            </header>

            <header className="text-xl font-bold flex py-4 text-blue-600 sm:hidden">
              <Link href={HOME} id="hero-logo"> Eunit </Link>
            </header>

            {/* create post */}

            <>
              <div className="border sm:ml-3 sm:mr-0 flex px-2 py-3">

                <div className="mt-3 w-12 h-12 text-lg flex-none">

                  <Image
                    width={48}
                    height={48}
                    src={userData?.userData?.profilePicture ?? "https://i.postimg.cc/T1QM953B/testimonial-2-2e933cde4ca3bd877a57.jpg"}
                    className="flex-none w-12 h-12 rounded-full" alt="avatar"
                  />

                </div>

                <div className="w-full px-4">
                  <textarea
                    value={content}
                    placeholder="What's happening?"
                    className="resize-none mt-3 pb-3 w-full h-28 bg-slate-100 focus:outline-none rounded-xl p-2"
                    onChange={(e) => setContent(e.target.value)} >
                  </textarea>
                  <div className="max-w-xl max-h-80 mx-auto rounded-md">

                    <Image
                      width={48}
                      height={48}
                      alt="avatar"
                      src={postImageUrl}
                      className={postImageUrl ? "block max-w-full max-h-20 rounded-md my-2 cursor-pointer" : "hidden"}
                    />

                  </div>

                  <div className="flex justify-between">
                    <label className="flex m-2">
                      <input
                        className="hidden"
                        type="file"
                        onChange={(e: any) => setPostImageUrl(e.target.files[0])}
                      />
                      <BsFillImageFill className="text-2xl mt-1 text-blue-700 cursor-pointer" />
                    </label>
                    <button
                      disabled={!content.trim().length && !postImageUrl}
                      className="p-2.5 bg-blue-600 hover:bg-blue-800 text-white rounded-xl shadow-md hover:shadow-lg transition duration-150 ease-in-out disabled:cursor-not-allowed"
                      onClick={() => toast.info("Coming soon")}>
                      Post
                    </button>
                  </div>
                </div>
              </div>


              {/* filter posts by date and trending */}

              <div className="flex pl-0.5 pr-0.5 sm:pr-6 sm:px-5 py-3 justify-between relative">

                <h1 className="text-xl">{sortPostBy} Posts</h1>

                <GiSettingsKnobs
                  className="fill-blue-600 stroke-0 hover:stroke-2 text-2xl cursor-pointer"
                  onClick={() => setShowFilterModal(prev => !prev)}>
                </GiSettingsKnobs>

                {/* filter modal */}

                {showFilterPostModal && <div className="w-30 h-22 px-1 shadow-xl bg-slate-100 border border-slate-300 text-slate-600 font-semibold absolute right-11 top-4 z-20 rounded-xl">
                  <ul className="p-2 cursor-pointer text-start">
                    <li className="p-1 hover:bg-slate-200 rounded" onClick={() => { setSortPostBy("Latest"); setShowFilterModal(false); }}>Latest</li>
                    <li className="p-1 hover:bg-slate-200 rounded" onClick={() => { setSortPostBy("Oldest"); setShowFilterModal(false); }}>Oldest</li>
                    <li className="p-1 hover:bg-slate-200 rounded" onClick={() => { setSortPostBy("Trending"); setShowFilterModal(false); }}>Trending</li>
                  </ul>
                </div>
                }
              </div>

              {/* Show Posts */}

              {
                isLoading ? (
                  <div className="z-20">
                    <Sentry />
                  </div>
                ) : (
                  !postsList.length ?
                    <h1 className="text-2xl font-bold text-center mt-8">No Posts, Add one!</h1> :
                    postsList?.map((post) => <Post key={post.id} post={post} user={usersList[0]} />
                    ))
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
