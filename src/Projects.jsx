import React from "react";
import ProjectBox from "./ProjectBox";

export default function Projects() {
    return (
        // <div id="projectContent" className="top-[210vh] w-[100vw] h-auto px-6 pb-8 bg-gradient-to-b from-blue-500 to-blue-900 absolute white z-10">
        <div id="projectContent" className="w-[100vw] h-auto py-2 bg-gradient-to-b from-blue-500 to-blue-900 white z-10">
            <h1 className="text-gray-100 text-4xl m-5">Featured Projects</h1>
            <div className="flex flex-wrap justify-center">
                <ProjectBox 
                    title="Traffic Sign Detection"
                    text="A 94.78% accurate classifier trained on the GTSRB dataset of 50k+ images containing 43 unique traffic signs."
                    image="traffic.png"
                    footer="Python, Tensorflow, Keras, Scikit-learn, Matplotlib, Pandas, NumPy"
                    demo=""
                    github="https://github.com/aritrakar/TrafficSignDetection"
                />
                <ProjectBox 
                    title="WLP4 compiler"
                    text="Created a compiler for WLP4, a subset of C, which outputs a relocatable, executable MIPS binary file for CS241 (Foundations of Sequential Programs) at the University of Waterloo (Contact me for code.)"
                    image="compiler.png"
                    footer="C++"
                    demo=""
                    github="https://github.com/aritrakar/WLP4-compiler"
                />
                <ProjectBox 
                    title="Chess"
                    text="A chess emulator built for the final project of CS246 (Object-Oriented Programming) at the University of Waterloo. (Contact me for code.)"
                    image="knight.png"
                    footer="C++, X11 libraries"
                    demo=""
                    github=""
                />
                <ProjectBox
                    title="Pathfinding Visualizer"
                    text="A simple tool for visualizing common pathfinding algorithms, featuring Dijkstra's, A* search, DFS, and BFS algorithms."
                    image="path.gif"
                    footer="React.js, JavaScript, HTML5, CSS3"
                    demo="https://aritrakar.github.io/pathfinding_visualizer/"
                    github="https://github.com/aritrakar/pathfinding_visualizer"/>
                <ProjectBox
                    title="J.A.R.V.I.S."
                    text="A personal voice assistant that uses deep learning to classify and respond to various commands and perform 6 unique actions: search Google, get events from Google Calendar, play songs on Spotify, etc."
                    image="brain.png"
                    footer="Python, Tensorflow"
                    demo=""
                    github="https://github.com/aritrakar/Python-Projects/tree/master/Chatbot/Speech%20To%20Text"/>
                <ProjectBox
                    title="Spacetagram"
                    text="Image-sharing from the final frontier. My submission for Shopify Front End Developer Challenge 2022."
                    image="planet.png"
                    footer="React.js, JavaScript, Tailwind CSS, HTML5"
                    demo="https://spacetagram28.herokuapp.com/"
                    github="https://github.com/aritrakar/spacetagram"/>
            </div>

            <h1 className="text-gray-100 text-lg m-5">For my other projects, check out my <a href="https://github.com/aritrakar" target="_blank" rel="noopener noreferrer" className="p-0 m-0 no-underline hover:underline">GitHub</a>!</h1>
        </div>
    );
}
