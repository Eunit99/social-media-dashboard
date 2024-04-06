import { USERS_API_URL, storageItems } from "@/constants";
import { SIGN_IN } from "@/routes";
import { IPostsList, IUserData, IUsersList } from "@/types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import useSWR from "swr";





export const useUserDetails = () => {



  const [userData, setUserData] = useState<IUserData | undefined>();

  useEffect(() => {
    const profileData = window.localStorage.getItem(storageItems.userData);

    if (profileData) {
      const { userData } = JSON.parse(profileData);
      if (userData) setUserData(userData);
    };

  }, []);

  return {
    userData
  }

};



export const useAuthState = () => {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const authState = window.localStorage.getItem(storageItems.auth);
    if (authState) {
      const { isLogged } = JSON.parse(authState);
      if (isLogged) setIsLogged(true);
    };


    setLoading(false);
  }, [isLogged]);

  return {
    loading,
    isLogged
  }

};

export const handleLogout = () => {


  window.localStorage.removeItem(storageItems.auth);
  window.localStorage.removeItem(storageItems.userData);
  toast.success("Logout successful");
}

export const fetcher = (url: string) => fetch(url).then((res) => res.json());




export const useUsers = (url: string) => {
  const [usersList, setUsersList] = useState<IUsersList[]>([]);



  const { data, error, isLoading } = useSWR(url, fetcher)


  useEffect(() => {

    if (!isLoading && data) {
      setUsersList(data)
    }
  }, [data, isLoading]);



  if (error) toast.error("Something went wrong");
  if (error) console.error(error);

  return {
    error, isLoading, usersList
  }
}

export const usePosts = (url: string) => {
  const [postsList, setPostsList] = useState<IPostsList[]>([]);



  const { data, error, isLoading } = useSWR(url, fetcher)


  useEffect(() => {

    if (!isLoading && data) {
      setPostsList(data)
    }
  }, [data, isLoading]);



  if (error) toast.error("Something went wrong");
  if (error) console.error(error);

  return {
    error, isLoading, postsList
  }
}