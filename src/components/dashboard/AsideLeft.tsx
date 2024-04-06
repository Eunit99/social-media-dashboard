import { BOOKMARKS, DASHBOARD, EXPLORE, HOME, PROFILE, SIGN_IN } from '@/routes'
import Link from 'next/link'
import React from 'react'
import CreatePostModal from "./CreatePostModal";
import { BiEditAlt } from "react-icons/bi";
import { AiOutlineHome, AiFillHome } from "react-icons/ai";
import { MdOutlineExplore, MdExplore, MdOutlineBookmarkBorder, MdOutlineBookmark } from "react-icons/md";
import { FaRegUser, FaUser } from "react-icons/fa";
import { handleLogout, useUserDetails } from '@/helpers/useHelpers';
import { usePathname } from 'next/navigation'
import { toast } from 'react-toastify';
import { GoSignOut } from "react-icons/go";
import { useRouter } from 'next/router';





export default function AsideLeft() {


  const { userData } = useUserDetails();


  const pathname = usePathname();
  const router = useRouter();

  return (
    <aside className="hidden sm:block basis-1/6 lg:basis-1/5">

      <header className="flex font-bold text-blue-600 mx-5 my-4 text-xl xl:text-2xl">
        <Link href={HOME}> Eunit </Link>
      </header>

      <CreatePostModal />

      <nav>
        <ul className="px-2 mr-1">
          <li >
            <Link href={DASHBOARD} className="flex py-4 gap-3 px-3 cursor-pointer hover:bg-slate-200 rounded-[15rem] active:bg-slate-100">
              {
                (pathname === HOME || pathname === DASHBOARD) ? (
                  <>
                    <AiFillHome className="text-[1.6rem] font-bold" />
                    <h2 className="text-xl px-1 hidden md:block font-bold"> Home </h2>
                  </>
                ) : (
                  <>
                    <AiOutlineHome className="text-[1.6rem]" />
                    <h2 className="text-xl px-1 hidden md:block"> Home </h2>
                  </>
                )}
            </Link>
          </li>
          <li>
            <Link href={EXPLORE} className="flex py-4 gap-3 px-3 cursor-pointer hover:bg-slate-200 rounded-[15rem] active:bg-slate-100">
              {
                pathname === EXPLORE ? (
                  <>
                    <MdExplore className="text-[1.6rem] font-bold" />
                    <h2 className="text-xl px-1 hidden md:block font-bold"> Explore </h2>
                  </>
                ) : (
                  <>
                    <MdOutlineExplore className="text-[1.6rem]" />
                    <h2 className="text-xl px-1 hidden md:block"> Explore </h2>
                  </>
                )}
            </Link>
          </li>
          <li>
            <Link href={BOOKMARKS} className="flex py-4 gap-3 px-3 cursor-pointer hover:bg-slate-200 rounded-[15rem] active:bg-slate-100">
              {
                pathname === BOOKMARKS ? (
                  <>
                    <MdOutlineBookmark className="text-[1.6rem] font-bold" />
                    <h2 className="text-xl px-1 hidden md:block font-bold"> Bookmarks </h2>
                  </>
                ) : (
                  <>
                    <MdOutlineBookmarkBorder className="text-[1.6rem]" />
                    <h2 className="text-xl px-1 hidden md:block"> Bookmarks </h2>
                  </>
                )}
            </Link>
          </li>
          <li>
            <Link href={`${PROFILE}/${userData?.userData?.username}`} className="flex py-4 gap-3 px-3 cursor-pointer hover:bg-slate-200 rounded-[15rem] active:bg-slate-100">
              {
                pathname === `${PROFILE}/${userData?.userData?.username}` ? (
                  <>
                    <FaUser className="text-[1.6rem] font-bold" />
                    <h2 className="text-xl px-1 hidden md:block"> Profile </h2>
                  </>
                ) : (
                  <>
                    <FaRegUser className="text-[1.6rem]" />
                    <h2 className="text-xl px-1 hidden md:block"> Profile </h2>
                  </>
                )}
            </Link>
          </li>

          <li
            onClick={() => {
              handleLogout();
              router.push(SIGN_IN);
            }}
          >
            <Link href="#" className="flex py-4 gap-3 px-3 cursor-pointer hover:bg-slate-200 rounded-[15rem] active:bg-slate-100">
              <>
                <GoSignOut className="text-[1.6rem]" />
                <h2 className="text-xl px-1 hidden md:block"> Log Out </h2>
              </>
            </Link>
          </li>


          <li className="my-2 mx-1">
            <button
              onClick={() => toast.info("Function not implemented yet!")}
              className="hidden md:block my-8 mx-0 p-2 rounded-[10rem] w-full text-x cursor-pointer text-center
                            font-semibold text-white bg-blue-600 hover:bg-blue-800"
            >
              Post
            </button>

            <BiEditAlt
              onClick={() => toast.info("Function not implemented yet!")}
              className="w-9 h-9 pl-0 rounded-full block md:hidden cursor-pointer"
            >
            </BiEditAlt>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
