import { useSelector } from "react-redux"

export default function Profile() {
    const { currentUser } = useSelector((state) => state.user)
    return (
        <div className=" p-3 max-w-lg mx-auto">
            <h1 className=" text-3xl font-semibold text-center my-7">Profile</h1>
            <form className=" flex flex-col gap-4">
                <img className=" w-24 h-24 rounded-full self-center my-2 cursor-pointer" src={currentUser.avatar} alt="profile" />
                <input className=" border border-slate-300 bg-slate-100 p-3 rounded-lg" type="text" placeholder="username" id="username" />
                <input className=" border border-slate-300 bg-slate-100 p-3 rounded-lg" type="email" placeholder="email" id="email" />
                <input className=" border border-slate-300 bg-slate-100 p-3 rounded-lg" type="text" placeholder="password" id="password" />
                <button className=" rounded-lg bg-slate-700 p-3 hover:opacity-90 disabled:opacity-80 text-white uppercase">Update</button>
            </form>
            <div className=" flex justify-between mt-4">
                <span className=" text-red-700 hover:underline cursor-pointer">Delete Account</span>
                <span className=" text-red-700 hover:underline cursor-pointer">Sign Out</span>
            </div>
        </div>
    )
}
