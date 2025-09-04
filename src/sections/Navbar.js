import React from "react";


export default function Navbar() {
const links = ["home", "about", "projects", "skills", "resume", "contact"];


return (
<nav className="fixed top-0 w-full bg-gray-900 bg-opacity-90 backdrop-blur-md shadow-lg z-50">
<div className="container mx-auto flex justify-between items-center px-6 py-4">
<span className="text-xl font-bold text-blue-400">Your Name</span>
<div className="space-x-6">
{links.map((link) => (
<a
key={link}
href={`#${link}`}
className="text-gray-300 hover:text-blue-400 transition-colors font-medium"
>
{link.charAt(0).toUpperCase() + link.slice(1)}
</a>
))}
</div>
</div>
</nav>
);
}