'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from 'axios'

const LoginPage = () => {
    const router = useRouter();

    const [user, setUser] = useState({
        email: "",
        password: "",
    })

    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [loading, setLoading] = useState(false);
    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/login", user);
            console.log("login success", response.data);
            router.push("/profile");
        } catch (error: any) {
            console.log("Signup failed", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-center text-white">Login</h1>
            <hr />

            <label htmlFor="email">email</label>
            <input className="text-black p-2 border border-gray-300 rounded-lg mb-4" placeholder="email" id="email" type="text" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />

            <label htmlFor="username">Password</label>
            <input className="text-black p-2 border border-gray-300 rounded-lg mb-4" placeholder="Password" id="Password" type="text" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />

            <button onClick={onLogin} className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">Login</button>
            <Link href="/signup">SignUP</Link>
        </div>
    )
}

export default LoginPage