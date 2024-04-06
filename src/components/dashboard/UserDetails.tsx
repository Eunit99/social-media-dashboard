import { PROFILE } from "@/routes";
import { IUsersList } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";




type IProps = {
    userDetails: IUsersList
}

export const UserDetails = ({
    userDetails
}: IProps) => {


    const router = useRouter();



    return (
        <div className="ml-5 mt-8 mb-4 flex w-10/12 justify-around ">

            <div className="flex ">
                <Image
                    src={"https://xsgames.co/randomusers/avatar.php?g=pixel"}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full cursor-pointer"
                    alt={`${userDetails.username}`}
                    onClick={() => router.push(`${PROFILE}/${userDetails.username}`)}
                />

                <div className="w-40 flex flex-col px-2 ">
                    <Link href={`${PROFILE}/${userDetails.username}`}>
                        <h2 className="font-semibold">{`${userDetails.name}`}</h2>
                        <h2> @{userDetails.username} </h2>
                    </Link>
                </div>
            </div>


        </div>
    )
};