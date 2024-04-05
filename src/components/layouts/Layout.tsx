import Navbar from './Navbar'
import Footer from './Footer'
import { ReactNode } from 'react'
import { AuthAside } from './AuthAside';



type IProps = {
  children: ReactNode
};



export const Layout = ({ children }: IProps) => {
  return (
    <>
      <div className="bg-primary w-full overflow-hidden">
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  )
};

export const AuthLayout = ({ children }: IProps) => {
  return (
    <>
      <section className="flex flex-col md:flex-row h-screen items-center">
        <AuthAside />
        {children}
      </section>
    </>

  )
};