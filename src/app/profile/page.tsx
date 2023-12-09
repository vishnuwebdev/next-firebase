"use client";
import SubmitButton from "@/components/Button";
import InputField from "@/components/InputField";
import useAuthentication from "@/hooks/useAuthentication";
import { AuthContext } from "@/provider/AuthProvider";
import { profilePasswordValidation, profileValidation } from "@/validationSchema/profile";
import { updatePassword, updateProfile } from "firebase/auth";
import { useState } from "react";

const Profile = () => {
    useAuthentication();
    const {handleSubmit,register, formState:{errors}} = profileValidation();

    const {handleSubmit:passwordHandleSubmit, register: registerPassword, formState:{errors:passwordErrors}} = profilePasswordValidation();
    const {user}:any = AuthContext();

    const [visibleForm, setVisibility] = useState<any>();

    const userInfo = user.user;

    const submitForm = async({name, photo}:{name ?:string | null, photo ?:string | null }) => {
        if(name && photo){
            updateProfile(userInfo,{
                displayName:name,
                photoURL:photo
            }).then((response)=>{
                console.log("profile updated");
                setVisibility("");
            }).catch((e)=>{
                console.log("failed to update profile ",e.message)
            })
        }
    }

    const submitPasswordForm  = ({password}:{password?:string|null}) =>{
        if(password){
            updatePassword(userInfo,password).then((response)=>{
                console.log("password changed");
                setVisibility("");
            }).catch((e)=>{
                console.log("failed to changes password ",e.message)
            })
        }
    }

    return (
        <div className="h-screen max:h-screen-auto flex justify-center items-center bg-gradient-to-br from-yellow-400/20 via-blue-300 to-purple-400/60">
            <div className="w-1/2 rounded-md bg-white/30 shadow-lg flex justify-between flex-col">
                <div className="h-28 w-full justify-center flex items-center">
                    <span className="text-3xl text-black font-mono font-semibold bg-yellow-300 p-3 rounded-lg">Welcome Back Vijay</span>
                </div>
                <div className="flex items-start justify-evenly flex-col w-1/2 self-center ">
                    <div className="text-black font-bold text-lg">Email: {userInfo?.email}</div>
                    <div className="text-black font-bold text-lg">Name: {userInfo?.displayName}</div>
                    <div className="text-black font-bold text-lg">Photo Url: {userInfo?.photoURL}</div>
                </div>

                <div className="flex w-full items-center justify-around my-4">
                    <span className=" cursor-pointer py-1 px-2 bg-yellow-400 rounded-md" onClick={()=>setVisibility("profile")}>Update Profile</span>
                    <span className=" cursor-pointer py-1 px-2 bg-yellow-400 rounded-md"  onClick={()=>setVisibility("password")}>Change Password</span>
                </div>

                {visibleForm === 'profile' &&
                    <>
                        <div className="h-28 w-full justify-center flex items-center">
                            <span className="text-3xl text-black font-mono font-semibold bg-yellow-300 p-3 rounded-lg">Update Profile</span>
                        </div>
                        
                        <form onSubmit={handleSubmit(submitForm)} className="h-full w-1/2 mx-auto ">
                            <InputField
                                register={register}
                                error={errors.name}
                                type="text"
                                placeholder="Enter Your Name Here..."
                                name="name"
                                label="Full Name"
                            />
                            <InputField
                                register={register}
                                error={errors.photo}
                                type="text"
                                placeholder="Enter Your Photo URL Here..."
                                name="photo"
                                label="Photo URL"
                            />
                            <SubmitButton label="Update" />
                        </form>
                    </>
                }
                {visibleForm === 'password' &&
                <>
                    <div className="h-28 w-full justify-center flex items-center">
                        <span className="text-3xl text-black font-mono font-semibold bg-yellow-300 p-3 rounded-lg">Change Password</span>
                    </div>
                    <form onSubmit={passwordHandleSubmit(submitPasswordForm)} className="h-full w-1/2 mx-auto ">
                        <InputField
                            register={registerPassword}
                            error={passwordErrors.password}
                            type="password"
                            placeholder="Enter Your Password Here..."
                            name="password"
                            label="Password"
                        />
                        <SubmitButton label="Update" />
                    </form>
                </>
                }
            </div>
        </div>
    )
}

export default Profile;