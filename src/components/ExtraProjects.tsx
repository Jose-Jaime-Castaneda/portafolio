export default function ExtraProjects() {
    return (
        <>
            <article className="w-5/6">

                <div className="flex flex-col justify-center items-center">
                    {/**Cotizador Cripto */}
                    <div className="flex gap-5 items-center mt-16 max-w-[550px]">
                        <img src="/Proyectos/CriptoCotzador.png" alt="NDG" className="rounded-lg w-24" />

                        <div className="">
                            <h4 className="text-white text-xl font-semibold">Full Stack Web Developer Jr - Cotizador Criptomonedas</h4>
                            <p className="text-white mt-1"><span className="bg-container_bg rounded-lg p-0.5 text-gray-400">Junio 2024 - Junio 2024</span> Proyecto Personal</p>
                            <div className="text-white bg-container_bg rounded-lg p-2 mt-3">
                                <p>Aplicación que utiliza una API de terceros para mostrar información de una criptomoneda seleccioanda y su valor en la moneda nacional seleccioanda.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4 items-center flex-wrap mt-3">
                        <img src="/react.svg" alt="React Logo" className="invert w-10" />
                        <img src="/typescript.svg" alt="TypeScript Logo" className="invert w-10" />
                        <img src="/tailwindcss.svg" alt="TailwindCSS Logo" className="invert w-10" />
                        <p className="text-white"> | </p>
                        <a href="https://github.com/Jose-Jaime-Castaneda/cotizador-critptomoneda" target="_blank" className="transition duration-200 transform hover:scale-110"><img src="/github.svg" alt="Github" className="invert w-10" /></a>
                        <a href="https://cotizador-precio-cripto.netlify.app/" target="_blank" className="transition duration-200 transform hover:scale-110"><img src="/web.svg" alt="LinkedIn" className="invert w-10" /></a>
                    </div>
                    {/**Presupuseto */}
                    <div className="flex gap-5 items-center mt-16 max-w-[550px]">
                        <img src="Proyectos/GestorPresupuesto.png" alt="Adogtame" className="rounded-lg w-24" />

                        <div className="">
                            <h4 className="text-white text-xl font-semibold">Full Stack Movil Developer Jr - Gestor de Presupuesto</h4>
                            <p className="text-white mt-1"><span className="bg-container_bg rounded-lg p-0.5 text-gray-400">Mayo 2024 - Junio 2024</span> Proyecto Personal</p>
                            <div className="text-white bg-container_bg rounded-lg p-2 mt-3">
                                <p>Aplicación para gestionar un presupuesto inicial, se puede agregar un gasto junto a una categoría y filtrar los gastos, además cuenta con un visualizador del presupuesto dinámico.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4 items-center flex-wrap mt-3">
                        <img src="/react.svg" alt="React Logo" className="invert w-10" />
                        <img src="/typescript.svg" alt="TypeScript Logo" className="invert w-10" />
                        <img src="/tailwindcss.svg" alt="TailwindCSS Logo" className="invert w-10" />
                        <p className="text-white"> | </p>
                        <a href="https://github.com/Jose-Jaime-Castaneda/control-de-gastos" target="_blank" className="transition duration-200 transform hover:scale-110"><img src="/github.svg" alt="Github" className="invert w-10" /></a>
                        <a href="https://gestion-presupuesto.netlify.app/" target="_blank" className="transition duration-200 transform hover:scale-110"><img src="/web.svg" alt="Web" className="invert w-10" /></a>
                    </div>
                </div>

            </article>
        </>
    );
};