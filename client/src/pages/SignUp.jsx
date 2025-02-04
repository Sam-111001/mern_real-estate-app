import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";

export default function SignUp() {
    //Initializing useState to maintain form, loading and error states
    const [formData, setFormData] = useState({})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const navigate = useNavigate()

    //Function to handle data entered in the form
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
    }

    //Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })  //Sending the form data to the server
            const data = await res.json()
            if (data.success === false) {
                setError(data.message)
                setLoading(false);
                return
            }
            setError(null)
            setLoading(false)
            navigate("/signin") //Redirecting to signin page after successful signup
        } catch (error) {
            setError(error.message)
            setLoading(false)
        }
    }

    return (
        <div className=" max-w-lg p-3 mx-auto">
            <h1 className=" text-3xl text-center font-semibold my-7">
                Sign Up
            </h1>
            <form onSubmit={handleSubmit} className=" flex flex-col gap-4">
                <input type="text" placeholder="username" className=" border border-slate-300 bg-slate-100 p-3 rounded-lg" id="username" onChange={handleChange} />
                <input type="email" placeholder="email" className=" border border-slate-300 bg-slate-100 p-3 rounded-lg" id="email" onChange={handleChange} />
                <input type="password" placeholder="password" className=" border border-slate-300 bg-slate-100 p-3 rounded-lg" id="password" onChange={handleChange} />
                <button disabled={loading} className=" bg-slate-700 rounded-lg p-3 text-white hover:opacity-90 disabled:opacity-80 uppercase">
                    {loading ? 'Loading...' : 'Sign Up'}
                </button>
                <OAuth />
            </form>
            <div className=" flex gap-2 mt-5">
                <p>Have an account?</p>
                <Link to="/signin">
                    <span className=" text-blue-700 hover:underline">Sign-in</span>
                </Link>
            </div>
            {error && <p className=" text-red-500">{error}</p>}
        </div>
    )
}
