import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { signInStart, signInSuccess, signInFailure } from "../redux/user/userSlice";
import OAuth from "../components/OAuth";

export default function SignIn() {
    const [formData, setFormData] = useState({})
    const { loading, error } = useSelector((state) => state.user)

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(signInStart())
        try {
            const res = await fetch("/api/auth/signin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })
            const data = await res.json()
            if (data.success === false) {
                dispatch(signInFailure(data.message))
                return
            }
            dispatch(signInSuccess(data))
            navigate("/")
        } catch (error) {
            dispatch(signInFailure(error.message))
        }
    }

    return (
        <div className=" max-w-lg mx-auto p-3">
            <h1 className=" text-3xl text-center font-semibold my-7">
                Sign In
            </h1>
            <form onSubmit={handleSubmit} className=" flex flex-col gap-4">
                <input className=" border border-slate-300 bg-slate-100 p-3 rounded-lg" type="email" placeholder="email" id="email" onChange={handleChange} />
                <input className=" border border-slate-300 bg-slate-100 p-3 rounded-lg" type="password" placeholder="password" id="password" onChange={handleChange} />
                <button disabled={loading} className=" bg-slate-700 rounded-lg p-3 text-white hover:opacity-90 disabled:opacity-80 uppercase">
                    {loading ? 'Loading...' : 'Sign In'}
                </button>
                <OAuth />
            </form>
            <div className=" flex gap-2 mt-5">
                <p>{"Don't"} have an account?</p>
                <Link to="/signup">
                    <span className=" text-blue-700 hover:underline">Sign Up</span>
                </Link>
            </div>
            {error && <p className=" text-red-500">{error}</p>}
        </div >
    )
}
