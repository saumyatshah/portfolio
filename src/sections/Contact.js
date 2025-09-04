import React from "react";


export default function Contact() {
return (
<section id="contact" className="py-20 px-6 md:px-20 bg-gray-900">
<h2 className="text-3xl font-bold text-green-400 mb-6">Contact</h2>
<p className="mb-4">Let’s collaborate! Reach out via:</p>
<div className="flex gap-6 text-xl">
<a href="mailto:your.email@example.com" className="hover:text-blue-400 transition">
Email
</a>
<a href="https://github.com/your-username" className="hover:text-blue-400 transition">
GitHub
</a>
<a href="https://linkedin.com/in/your-profile" className="hover:text-blue-400 transition">
LinkedIn
</a>
</div>
</section>
);
}