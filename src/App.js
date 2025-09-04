import React from "react";
import Navbar from "./sections/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Resume from "./sections/Resume";
import Contact from "./sections/Contact";


export default function App() {
return (
<>
<Navbar />
<Home />
<About />
<Projects />
<Skills />
<Resume />
<Contact />
</>
);
}