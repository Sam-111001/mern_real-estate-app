import { Link } from "react-router-dom";

export default function SignUp() {
    return (
        <div className=" max-w-lg p-3 mx-auto">
            <h1 className=" text-3xl text-center font-semibold my-7">
                SignUp
            </h1>
            <form className=" flex flex-col gap-4">
                <input type="text" placeholder="username" className=" border border-slate-300 bg-slate-100 p-3 rounded-lg" id="username" />
                <input type="email" placeholder="email" className=" border border-slate-300 bg-slate-100 p-3 rounded-lg" id="email" />
                <input type="password" placeholder="password" className=" border border-slate-300 bg-slate-100 p-3 rounded-lg" id="password" />
                <button className=" bg-slate-700 rounded-lg p-3 text-white hover:opacity-90 disabled:opacity-80 uppercase">Sign Up</button>
            </form>
            <div className=" flex gap-2 mt-5">
                <p>Have an account?</p>
                <Link to="/signin">
                    <span className=" text-blue-700 hover:underline">Sign-in</span>
                </Link>
            </div>
        </div>
    )
}
