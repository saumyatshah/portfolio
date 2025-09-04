import React from "react";


export default function Home() {
return (
<section id="home" className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-gray-900 via-black to-gray-950">
<h1 className="text-4xl md:text-6xl font-bold text-blue-400">
RTL Design & Verification Engineer
</h1>
<p className="mt-4 text-lg md:text-xl max-w-2xl">
Passionate about building efficient, verifiable, and robust digital
designs. Let’s turn logic into silicon reality.
</p>
<a
href="#projects"
className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition"
>
View My Work
</a>
</section>
);
}