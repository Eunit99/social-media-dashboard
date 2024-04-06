import { useState } from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { GoComment } from "react-icons/go";
import { BsSuitHeart } from "react-icons/bs";
import { MdOutlineBookmarkBorder } from "react-icons/md";
import { IPostsList, IUsersList } from "@/types";
import { useRouter } from "next/router";
import CreatePostModal from "./CreatePostModal";
import Image from "next/image";
import { toast } from "react-toastify";





type IProps = {
  post: IPostsList,
  user: IUsersList
}

export const Post = ({ post, user }: IProps) => {



  const [showPostOptions, setShowPostOptions] = useState(false);

  const router = useRouter();



  return (
    <div
      className="flex border ml-0 sm:mr-0 sm:mx-3 pl-2 pr-1 sm:pr-0 sm:px-5 py-3 hover:bg-slate-100"
    >

      <CreatePostModal />

      <div className="mt-3 w-12 h-12 text-lg flex-none">


        <Image
          width={48}
          height={48}
          src={"https://xsgames.co/randomusers/avatar.php?g=pixel"}
          className="flex-none w-12 h-12 rounded-full cursor-pointer"
          alt={post.title}
          onClick={() => toast.info("Function not implemented yet")}
        />
      </div>

      <div className="w-full px-4 py-3">

        <div className="w-full flex justify-between relative">
          <h2
            onClick={() => toast.info("Function not implemented yet")}

            className="font-semibold cursor-pointer">
            {user.name}
            <span className="text-slate-500 font-normal pl-1.5">
              @{post.title}
            </span>
          </h2>

          <HiDotsHorizontal className="cursor-pointer mr-3" onClick={() => setShowPostOptions(prev => !prev)} />

          {/* Post Options Modal */}

          {showPostOptions && (
            <div
              className="w-30 h-22 px-1 shadow-xl bg-white border border-slate-300 text-slate-600 font-semibold
                                absolute right-7 top-0 z-20 rounded-xl">
              <ul className="p-0.5 cursor-pointer text-start">
                <li className="my-1 p-1 hover:bg-slate-200 rounded" onClick={() => toast.info("Function not implemented yet")}>Edit Post</li>
                <li className="my-1 p-1 hover:bg-slate-200 rounded" onClick={() => toast.info("Function not implemented yet")}>Delete Post</li>
              </ul>
            </div>

          )}




        </div>

        <p
          className="py-3 cursor-pointer max-w-lg break-words"
          onClick={() => router.push(`/post/${post.id}`)}>
          {post.body}
        </p>


        <div className="flex justify-between pt-8">
          <div className="flex">

            <BsSuitHeart className="text-xl cursor-pointer" />

            <span className="text-sm pl-4 font-semibold">
              1
            </span>
          </div>

          <div className="flex">
            <GoComment className="text-xl cursor-pointer" />
            <span className="text-sm pl-4 font-semibold">
              3
            </span>
          </div>



          <MdOutlineBookmarkBorder className="text-xl cursor-pointer mr-3" />


        </div>
      </div>
    </div>
  )
};