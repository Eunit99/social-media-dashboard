


export type INavLinks = {
    id: string;
    title: string;
}[];


export type IFooterLinks = {
    title: string;
    links: {
        name: string;
        link: string;
    }[];
}[];

export type ISocialMedia = {
    id: string;
    icon: any;
    link: string;
}[];


export type IStorageItems = {
    userData: string;
    auth: string;
};


export interface IUserData {
    token: string;
    userData: User;
}

interface User {
    _id: string;
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    createdAt: string;
    updatedAt: string;
    bio: string;
    website: string;
    profilePicture: string;
    followers: any[];
    following: any[];
    bookmarks: any[];
    id: string;
};



export interface ICommentsList {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
};


export interface IUsersList {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}

interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

interface Geo {
    lat: string;
    lng: string;
};



export interface IPostsList {
    userId: number;
    id: number;
    title: string;
    body: string;
}