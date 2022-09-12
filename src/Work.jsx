import React, {useEffect} from "react";
import * as THREE from "three";
import WorkCard from "./WorkCard"

export default function Work() {
    const getTorus = () => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
        );
        const myCanvas = document.getElementById("canvas2");
        console.log("myCanvas2: ", myCanvas)
        const renderer = new THREE.WebGLRenderer({canvas: myCanvas});
        renderer.setPixelRatio(window.devicePixelRatio);
        // renderer.setSize(300, 300);
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.position.setZ(5);
        document.body.appendChild(renderer.domElement);

        const am = new THREE.AmbientLight(0xff0000, 1)
        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(0, 1, 0);
        scene.add(am);
        scene.add(light);

        const backLight = new THREE.DirectionalLight(0xffffff, 1);
        backLight.position.set(0, 0, -1);
        scene.add(backLight);

        const geometry = new THREE.BoxGeometry(1,1,1);
        const material = new THREE.MeshStandardMaterial({color: 0xff0000})

        // const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
        // const material = new THREE.MeshBasicMaterial({color: 0xffff00});
        const torusKnot = new THREE.Mesh(geometry, material);
        scene.add(torusKnot);
    }

    useEffect(() => {
        getTorus();
    }, []);

    return (
        <div id="workContent" className="top-[100vh] w-[100vw] h-[110vh] px-6 pb-8 bg-gradient-to-b from-cyan-500 to-blue-500 absolute">
            <h1 className="text-gray-100 text-4xl m-5">Work Experience</h1>
            <WorkCard 
                company="BlackBerry Limited"
                position="Software Development Student"
                time="May 2022 - August 2022"
                roles={[
                        "Designed and implemented a JSON configuration file validator in C++ from scratch and integrated it into BlackBerry IVY Intelligent Vehicle Development Platform.",
                        "Implemented Permission Service callback feature to facilitate the interaction of clients with the camera service and aligned old code.",
                        "Created tools with Python, AWS Lambda, and S3 to automate uploading and downloading release packages.",
                        "Undertook voluntary documentation effort to improve code readability of IVY. Conducted extensive UX research on IVY and code reviews on code written by teammates. Participated in Agile ceremonies regularly."]}
                image="blackberry.svg"
                footer="C++, Python, Bash, Docker, AWS S3, AWS Lambda, Gitlab, Agile"/>
            <WorkCard 
                company="MindKraft Education Inc."
                position="Software Developer & Coding Instructor"
                time="May 2021 - September 2021"
                roles={[
                        "Developed curricula and lesson plans for teaching coding to kids through 6 Java, JavaScript & Python courses engagingly through exercises and games (Minecraft).",
                        "Conducted online classes and summer camps for 10+ students aged 7-12 and prepared visual aids to illustrate concepts.",
                        "Reviewed the existing UI of the company's two websites and suggested improvements and new features which, when implemented, would significantly improve website loading times, UX, and traffic."]}
                image="mindkraft.png"
                footer="JavaScript, Java, Python"/>
            <canvas id="canvas2" className="z-[200] top-[120vh] absolute"></canvas>
        </div>);
}
