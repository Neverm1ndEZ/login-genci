"use client";
import React, { useState } from "react";
import Image from "next/image";
import PageImage from "../../public/IMG1.jpg";

const Login = () => {
	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(email);
	};
	return (
		<section className="bg-gray-50 min-h-screen flex items-center justify-center">
			{/* login container */}
			<div className="bg-gray-100 flex flex-row-reverse rounded-2xl shadow-lg max-w-3xl p-5 items-center">
				{/* form */}
				<div className="md:w-1/2 px-8 md:px-12">
					<h2 className="font-bold text-2xl text-center text-[#002D74]">
						Welcome to Genci ✨
					</h2>
					<p className="text-xs mt-4 text-[#002D74]">
						Please sign-in to your account
					</p>

					<form action="" className="flex flex-col gap-4">
						<input
							className="p-4 mt-8 rounded-xl border border-blue-800 text-black"
							type="email"
							name="email"
							placeholder="Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<input
							className="p-4 rounded-xl border border-blue-800 text-black"
							type="password"
							name="password"
							placeholder="Password"
							value={pass}
							onChange={(e) => setPass(e.target.value)}
						/>
						<button className="bg-[#002D74] rounded-xl text-white py-2 hover:bg-green-500 hover:scale-105 duration-300">
							Login
						</button>
					</form>
				</div>
				{/* image */}
				<div className="md:block hidden w-1/2">
					<Image className="rounded-2xl" src={PageImage} alt="Page Image" />
				</div>
			</div>
		</section>
	);
};

export default Login;
