import React from "react";


const skills = [
"Verilog",
"SystemVerilog",
"UVM",
"VHDL",
"ModelSim",
"Cadence",
"Synopsys",
"Git",
"Linux",
];


export default function Skills() {
return (
<section id="skills" className="py-20 px-6 md:px-20 bg-gray-900">
<h2 className="text-3xl font-bold text-green-400 mb-6">Skills</h2>
<div className="flex flex-wrap gap-4">
{skills.map((s, i) => (
<span
key={i}
className="bg-gray-800 text-gray-200 px-4 py-2 rounded-full shadow hover:shadow-lg transition"
>
{s}
</span>
))}
</div>
</section>
);
}