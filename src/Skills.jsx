import React from "react"

export default function Skills() {
    const skills = ["C/C++", "JavaScript", "Python", "Java", "Bash", "HTML5/CSS3", "R", "ReactJs", "Node.js", "Firebase", "MongoDB", "Scikit-learn", "Git", "Agile"];
    return (
        <div id="skills" className="top-[324vh] w-[100vw] h-auto px-6 pb-8 flex flex-col content-center items-center bg-gradient-to-b from-blue-900 to-slate-900 absolute white z-10">
            <h1 className="text-gray-100 text-4xl m-5">Skills</h1>
            <div className="flex flex-wrap justify-center w-[60vw]">
                {skills.map((item, key) => (
                <div key={key} className="bg-slate-100 text-gray-800 w-auto m-2 p-2 rounded-lg hover:scale-[1.03]">
                    {item}
                </div>))}
            </div>
        </div>
    );
}
