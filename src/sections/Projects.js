import React from "react";


const projects = [
{
title: "ALU in Verilog",
desc: "Designed and verified a 16-bit ALU with arithmetic and logical ops. Verified with testbenches and waveform analysis.",
tools: "Verilog, ModelSim",
},
{
title: "Simple Microprocessor",
desc: "Implemented instruction set, datapath, and control logic. Verified functionality and timing with simulations.",
tools: "Verilog, Synopsys VCS",
},
{
title: "UVM Verification Environment",
desc: "Developed reusable testbench architecture with sequences, drivers, monitors, and coverage metrics.",
tools: "SystemVerilog, UVM, Cadence Xcelium",
},
];


export default function Projects() {
return (
<section id="projects" className="py-20 px-6 md:px-20 bg-gray-950">
<h2 className="text-3xl font-bold text-blue-400 mb-10">Projects</h2>
<div className="grid gap-8 md:grid-cols-3">
{projects.map((p, i) => (
<div
key={i}
className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2"
>
<h3 className="text-xl font-bold text-green-400">{p.title}</h3>
<p className="mt-2 text-gray-300">{p.desc}</p>
<p className="mt-4 text-sm text-gray-400 italic">Tools: {p.tools}</p>
</div>
))}
</div>
</section>
);
}