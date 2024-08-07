export default function Intro() {
    return (
        <>
            <article className="flex justify-center w-5/6 gap-16 sm:gap-16 mt-24 flex-wrap sm:flex-nowrap">

                <div className="flex flex-col gap-6 items-center">
                    <p className="bg-container_bg rounded-full text-white text-center text-4xl p-10">JC</p>
                    <p className="text-white text-base sm:text-xl lg:text-2xl bg-container_bg rounded-lg p-2 whitespace-nowrap">José Catañeda</p>
                </div>

                <div className="flex gap-3 flex-wrap">
                    <div className="bg-container_bg rounded-lg">
                        <p className="text-sm sm:text-lg lg:text-xl p-3 text-white">Soy un <span className="text-azulito text-base sm:text-xl lg:text-2xl">Desarrollador Web Full Stack Jr</span> que trabaja mayormente con el MERN stack agregando TypeScript y Tailwind CSS.
                            <br />
                            <br />
                            Estoy constantemente buscando cosas nuevas para aprender y crecer profesionalmente. Lo último que aprendí fue a usar la API de Google Drive para un proyecto interno en mi trabajo.
                        </p>
                    </div>
                    <div className="flex flex-row gap-4 mt-3">
                        <a href="https://www.linkedin.com/in/jose-jaime-casta%C3%B1eda-ruiz/" target="_blank" className="transition duration-200 transform hover:scale-110"><img src="/linkedin.svg" alt="LinkedIn" className="invert w-10" /></a>
                        <a href="https://github.com/Jose-Jaime-Castaneda" target="_blank" className="transition duration-200 transform hover:scale-110"><img src="/github.svg" alt="Github" className="invert w-10" /></a>
                    </div>
                </div>

            </article>
        </>
    );
};