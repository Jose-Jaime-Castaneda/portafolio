import { useState } from "react";
import ExtraProjects from "./ExtraProjects";

export default function Projects() {
    const [extraProjects, setExtraProjects] = useState(false)

    const handleButton = () => {
        setExtraProjects(!extraProjects)
    }


    return (
        <>
            <article className="mt-24 w-5/6">

                <h2 className="text-white text-4xl text-center uppercase">Proyectos</h2>

                <div className="mt-24 flex flex-col justify-center items-center">
                    {/**UpTask */}
                    <div className="flex gap-5 items-center max-w-[550px]">
                        <img src="/Proyectos/UpTask.svg" alt="UpTask" className="rounded-lg bg-container_bg w-24" />

                        <div className="">
                            <h4 className="text-white text-xl font-semibold">Full Stack Web Developer Jr - UpTask</h4>
                            <p className="text-white mt-1"><span className="text-gray-400 bg-container_bg rounded-lg p-0.5">Mayo 2023 - Julio 2023</span> Proyecto Personal</p>
                            <div className="text-white bg-container_bg rounded-lg p-2 mt-3">
                                <p>Es una aplicación web que sirve para addministrar proyectos. Se pueden agergar tareas y colaboradores.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4 items-center flex-wrap mt-3">
                        <img src="/react.svg" alt="React Logo" className="invert w-10" />
                        <img src="/typescript.svg" alt="TypeScript Logo" className="invert w-10" />
                        <img src="/tailwindcss.svg" alt="Tailwind Logo" className="invert w-10" />
                        <img src="/nodedotjs.svg" alt="Node Logo" className="invert w-10" />
                        <img src="/express.svg" alt="Express Logo" className="invert w-10" />
                        <p className="text-white"> | </p>
                        <a href="https://github.com/Jose-Jaime-Castaneda/UpTask-Frontend" target="_blank" className="transition duration-200 transform hover:scale-110"><img src="/github.svg" alt="Github" className="invert w-10" /></a>
                        <a href="https://github.com/Jose-Jaime-Castaneda/UpTask-Backend" target="_blank" className="transition duration-200 transform hover:scale-110"><img src="/github.svg" alt="Github" className="invert w-10" /></a>
                        <a href="https://vercel.live/link/uptask-eight.vercel.app/?via=team-dashboard-project-entity&p=1" target="_blank" className="transition duration-200 transform hover:scale-110"><img src="/web.svg" alt="LinkedIn" className="invert w-10" /></a>
                    </div>
                    {/**NDG */}
                    <div className="flex gap-5 items-center mt-16 max-w-[550px]">
                        <img src="/Proyectos/green-icon.ico" alt="NDG" className="rounded-lg w-24" />

                        <div className="">
                            <h4 className="text-white text-xl font-semibold">Full Stack Web Developer Jr - NDG</h4>
                            <p className="text-white mt-1"><span className="bg-container_bg rounded-lg p-0.5 text-gray-400">Febrero 2023 - Marzo 2023</span> Proyecto Freelance</p>
                            <div className="text-white bg-container_bg rounded-lg p-2 mt-3">
                                <p>Landing Page personalizada para una empresa mexicana que se dedica a la venta y reparación de equipo dental</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4 flex-wrap mt-3">
                        <img src="/react.svg" alt="React Logo" className="invert w-10" />
                        <img src="/typescript.svg" alt="TypeScript Logo" className="invert w-10" />
                        <img src="/bootstrap.svg" alt="Bootstrap Logo" className="invert w-10" />
                    </div>
                    {/**Adogtame */}
                    <div className="flex gap-5 items-center mt-16 max-w-[550px]">
                        <img src="Proyectos/adogtame-icon.png" alt="Adogtame" className="rounded-lg w-24" />

                        <div className="">
                            <h4 className="text-white text-xl font-semibold">Full Stack Movil Developer Jr - Adogtame</h4>
                            <p className="text-white mt-1"><span className="bg-container_bg rounded-lg p-0.5 text-gray-400">Marzo 2023 - Mayo 2023 </span> Proyecto Academico y Persona</p>
                            <div className="text-white bg-container_bg rounded-lg p-2 mt-3">
                                <p>El objetivo de la aplicación es facilitar el proceso de adopción de mascotas, tanto para usuarios indivuduales como para perreras.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4 flex-wrap mt-3">
                        <img src="/react.svg" alt="React Logo" className="invert w-10" />
                        <img src="/javascript.svg" alt="JavaScript Logo" className="invert w-10" />
                        <img src="/expo.svg" alt="Expo Logo" className="invert w-10" />
                        <img src="/firebase.svg" alt="Firebase Logo" className="invert w-10" />
                    </div>
                    {/**Extra Projects */}
                    {extraProjects && (
                        <ExtraProjects />
                    )}
                    {/**Button */}
                    <div className="mt-20">
                        <button
                            type="button"
                            className="bg-gray-200 px-10 py-2 rounded-lg hover:bg-slate-300 text-xl"
                            onClick={handleButton}
                        >
                            {extraProjects ? 'Ver menos' : 'Ver más'}
                        </button>
                    </div>
                </div>

            </article>
        </>
    );
};