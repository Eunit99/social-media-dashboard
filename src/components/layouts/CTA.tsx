import styles from "@/styles";
import Link from "next/link";
import { SIGN_IN } from "../routes";







const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow my-28`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Sign In To Enjoy All The Benefits!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        You will need to sign in or create an account to view and interact with posts and comments.

      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Link href={SIGN_IN}>
        <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
          Get Started
        </button>
      </Link>
    </div>
  </section>
);

export default CTA;