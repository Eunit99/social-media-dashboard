import useSWR from 'swr'
import { toast } from "react-toastify";
import { UserDetails } from "./UserDetails";
import { Sentry } from "react-activity";
import { IUsersList } from '@/types';
import { useEffect, useState } from 'react';
import { USERS_API_URL } from '@/constants';
import { fetcher, useUsers } from '@/helpers/useHelpers';










export const AsideRight = () => {


  const {
    isLoading, usersList
  } = useUsers(USERS_API_URL)



  if (isLoading)
    return (
      <Sentry />
    );







  return (
    <aside className="w-full basis-2/6 flex-col ml-7 hidden lg:flex md:mt-2">

      <div className="sticky mt-3 flex items-center pl-4 pr-10 w-full rounded-md">
        <div className="flex-1">
          <input
            onChange={() => toast.info("Feature not implemented yet")}
            className="w-full bg-slate-200 text-center p-2 rounded-3xl placeholder:text-black cursor-pointer text-md"
            type="search"
            placeholder="Search"
          />
        </div>
      </div>

      <div className="mt-2 ">

        <div>
          <h1 className="text-xl mt-6 text-center font-bold">Suggestions for you</h1>
          <ul className="">
            {usersList.map(userDetails => (
              <UserDetails key={userDetails.id} userDetails={userDetails} />
            ))}
          </ul>
        </div>
      </div>
    </aside>
  )
};