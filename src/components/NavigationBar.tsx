"use client";
import {
  EDIT_IMAGE_ROUTE,
  FIRESTORE_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  PROFILE_ROUTE,
  REGISTER_ROUTE,
} from "@/constants/routes";
import { AuthContext } from "@/provider/AuthProvider";
import { auth } from "@/services/firebase";
import { signOut } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";

const NavigationBar = () => {
  const { user }: any = AuthContext();
  const router = useRouter();
  const logOut = () => {
    signOut(auth)
      .then((response) => {
        router.push(LOGIN_ROUTE);
      })
      .catch((e) => {
        console.log("Logout Catch ", e.message);
      });
  };

  return (
    <header className="h-20 bg-gradient-to-br from-yellow-400/20 via-blue-300 to-purple-400/60 flex px-10 drop-shadow-[0px_2px_10px_rgba(2,0,0) text-black">
      <nav className="w-full mx-auto flex justify-between items-center px-2 text-black font-serif text-xl">
        <Link href={HOME_ROUTE}>
          <div>Logo</div>
        </Link>
        <ul className="flex gap-4">
          <Link href={EDIT_IMAGE_ROUTE}>
            <li>File Storage</li>
          </Link>
          {!user?.isLogin && (
            <>
              <Link href={LOGIN_ROUTE}>
                <li>Login</li>
              </Link>
              <Link href={REGISTER_ROUTE}>
                <li>Register</li>
              </Link>
            </>
          )}
          {user?.isLogin && (
            <>
              <Link href={FIRESTORE_ROUTE}>
                <li>FireStore</li>
              </Link>
              <Link href={PROFILE_ROUTE}>
                <li>Profile</li>
              </Link>
              <li className=" cursor-pointer" onClick={logOut}>
                Logout
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default NavigationBar;
