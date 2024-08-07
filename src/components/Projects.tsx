export default function Projects() {
    return (
        <>
            <article className="mt-24 w-5/6">

                <h2 className="text-white text-4xl text-center uppercase">Proyectos</h2>

                <div className="mt-24">
                    {/**UpTask */}
                    <div className="flex gap-5 items-center">
                        <img src="/Proyectos/UpTask.svg" alt="UpTask" className="rounded-lg bg-container_bg w-24" />

                        <div className="">
                            <h4 className="text-white text-xl font-semibold">Full Stack Web Developer Jr - UpTask</h4>
                            <p className="text-white mt-1"><span className="text-gray-400 bg-container_bg rounded-lg p-0.5">Mayo 2023 - Julio 2023</span> Proyecto Personal</p>
                        </div>
                    </div>
                    <div className="flex gap-4 flex-wrap mt-3">
                        <img src="/react.svg" alt="React Logo" className="invert w-10" />
                        <img src="/typescript.svg" alt="TypeScript Logo" className="invert w-10" />
                        <img src="/tailwindcss.svg" alt="Tailwind Logo" className="invert w-10" />
                        <img src="/nodedotjs.svg" alt="Node Logo" className="invert w-10" />
                        <img src="/express.svg" alt="Express Logo" className="invert w-10" />
                    </div>
                    {/**NDG */}
                    <div className="flex gap-5 items-center mt-16">
                        <img src="/Proyectos/green-icon.ico" alt="NDG" className="rounded-lg w-24" />

                        <div className="">
                            <h4 className="text-white text-xl font-semibold">Full Stack Web Developer Jr - NDG</h4>
                            <p className="text-white mt-1"><span className="bg-container_bg rounded-lg p-0.5 text-gray-400">Febrero 2023 - Marzo 2023</span> Proyecto Freelance</p>
                        </div>
                    </div>
                    <div className="flex gap-4 flex-wrap mt-3">
                        <img src="/react.svg" alt="React Logo" className="invert w-10" />
                        <img src="/typescript.svg" alt="TypeScript Logo" className="invert w-10" />
                        <img src="/bootstrap.svg" alt="Bootstrap Logo" className="invert w-10" />
                    </div>
                    {/**Adogtame */}
                    <div className="flex gap-5 items-center mt-16">
                        <img src="Proyectos/adogtame-icon.png" alt="Adogtame" className="rounded-lg w-24" />

                        <div className="">
                            <h4 className="text-white text-xl font-semibold">Full Stack Movil Developer Jr - Adogtame</h4>
                            <p className="text-white mt-1"><span className="bg-container_bg rounded-lg p-0.5 text-gray-400">Marzo 2023 - Mayo 2023 </span> Proyecto Academico y Persona</p>
                        </div>
                    </div>
                    <div className="flex gap-4 flex-wrap mt-3">
                        <img src="/react.svg" alt="React Logo" className="invert w-10" />
                        <img src="/javascript.svg" alt="JavaScript Logo" className="invert w-10" />
                        <img src="/expo.svg" alt="Expo Logo" className="invert w-10" />
                        <img src="/firebase.svg" alt="Firebase Logo" className="invert w-10" />
                    </div>
                </div>

            </article>
        </>
    );
};