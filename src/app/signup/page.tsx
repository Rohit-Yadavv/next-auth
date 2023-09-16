'use client'
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from 'axios'

const page = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
        username: ""
    })
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-center text-white">SIGN UP</h1>
            <hr />

            <label htmlFor="username">UserName</label>
            <input className="p-2 border border-gray-300 rounded-lg mb-4" placeholder="username" id="username" type="text" value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} />

            <label htmlFor="username">Password</label>
            <input className="p-2 border border-gray-300 rounded-lg mb-4" placeholder="Password" id="Password" type="text" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />

            <label htmlFor="email">email</label>
            <input className="p-2 border border-gray-300 rounded-lg mb-4" placeholder="email" id="email" type="text" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />

            <label htmlFor="username">UserName</label>
            <input className="p-2 border border-gray-300 rounded-lg mb-4" placeholder="username" id="username" type="text" value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} />

        </div>
    )
}

export default page