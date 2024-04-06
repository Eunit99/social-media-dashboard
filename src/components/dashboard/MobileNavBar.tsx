import { GrEdit } from "react-icons/gr";
import { AiOutlineHome, AiFillHome } from "react-icons/ai";
import { MdOutlineExplore, MdExplore, MdOutlineBookmarkBorder, MdOutlineBookmark } from "react-icons/md";
import { FaRegUser, FaUser } from "react-icons/fa";
import Link from "next/link";
import { toast } from "react-toastify";
import { PROFILE } from "@/routes";
import { useAuthState, useUserDetails } from "@/helpers/useHelpers";





export const MobileNavBar = () => {

  const userData = useUserDetails();

  const {
    isLogged
  } = useAuthState();

  return (
    <nav className="block sm:hidden">

      <div className="fixed bottom-20 right-5 w-100 h-100 p-3 text-2xl rounded-full block xl:hidden cursor-pointer
                bg-blue-600 hover:bg-blue-800 z-10">
        <GrEdit
          onClick={() => toast.info("Coming soon ...")}>
        </GrEdit>
      </div>

      <ul className="fixed bottom-0 w-full sm:pl-2 flex justify-around bg-slate-300 z-10">
        <li >
          <Link href="/home" className="flex py-4 gap-3 px-3 cursor-pointer hover:bg-slate-200 rounded-[15rem] active:bg-slate-300">
            {
              isLogged ? (
                <>
                  <AiFillHome className="text-[1.6rem] font-bold" />
                </>
              ) : (
                <>
                  <AiOutlineHome className="text-[1.6rem]" />
                </>
              )}
          </Link>
        </li>
        <li>
          <Link href="/explore" className="flex py-4 gap-3 px-3 cursor-pointer hover:bg-slate-200 rounded-[15rem] active:bg-slate-100">
            {
              isLogged ? (
                <>
                  <MdExplore className="text-[1.6rem] font-bold" />
                </>
              ) : (
                <>
                  <MdOutlineExplore className="text-[1.6rem]" />
                </>
              )}
          </Link>
        </li>
        <li>
          <Link href="/bookmarks" className="flex py-4 gap-3 px-3 cursor-pointer hover:bg-slate-200 rounded-[15rem] active:bg-slate-100">
            {
              isLogged ? (
                <>
                  <MdOutlineBookmark className="text-[1.6rem] font-bold" />
                </>
              ) : (
                <>
                  <MdOutlineBookmarkBorder className="text-[1.6rem]" />
                </>
              )}
          </Link>
        </li>
        <li>
          <Link href={`${PROFILE}/${userData?.userData?.username}`} className="flex py-4 gap-3 px-3 cursor-pointer hover:bg-slate-200 rounded-[15rem] active:bg-slate-100">
            {
              isLogged ? (
                <>
                  <FaUser className="text-[1.6rem] font-bold" />
                </>
              ) : (
                <>
                  <FaRegUser className="text-[1.6rem]" />
                </>
              )}
          </Link>
        </li>
      </ul>
    </nav>
  )
};