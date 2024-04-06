import { HOME, SIGN_IN, DASHBOARD, SIGN_UP } from "@/routes";
import { IFooterLinks, INavLinks, ISocialMedia, IStorageItems } from "@/types";

export const API_URL: string = "https://run.mocky.io/v3/7d805b00-6ec4-4b13-be89-054270619674";
export const USERS_API_URL: string = "https://jsonplaceholder.typicode.com/users";
export const POSTS_API_URL: string = "https://jsonplaceholder.typicode.com/posts";
const APP_NAME: string= "Eunit";


const instagram = '/icons/instagram.svg';
const linkedin = '/icons/linkedin.svg';
const twitter = '/icons/twitter.svg';
const facebook = '/icons/facebook.svg';



export const navLinks: INavLinks = [
  {
    id: HOME,
    title: "Home",
  },
  {
    id: DASHBOARD,
    title: "Dashboard",
  },
  {
    id: SIGN_UP,
    title: "Sign Up",
  },

  {
    id: SIGN_IN,
    title: "Sign In",
  },
];


export const footerLinks: IFooterLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://eunit.me",
      },
      {
        name: "How it Works",
        link: "https://eunit.me",
      },
      {
        name: "Create",
        link: "https://eunit.me",
      },
      {
        name: "Explore",
        link: "https://eunit.me",
      },
      {
        name: "Terms & Services",
        link: "https://eunit.me",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://eunit.me",
      },
      {
        name: "Partners",
        link: "https://eunit.me",
      },
      {
        name: "Suggestions",
        link: "https://eunit.me",
      },
      {
        name: "Blog",
        link: "https://eunit.me",
      },
      {
        name: "Newsletters",
        link: "https://eunit.me",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://eunit.me",
      },
      {
        name: "Become a Partner",
        link: "https://eunit.me",
      },
    ],
  },
];


export const socialMedia: ISocialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/eunit99",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/eunit99",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/eunit99",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/in/eunit99",
  },
];



export const storageItems: IStorageItems = {
  userData: `@${APP_NAME}:userData`,
  auth: `@${APP_NAME}:auth`,
};
