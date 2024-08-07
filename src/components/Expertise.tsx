export default function Expertise() {
    return (
        <>
            <div className="mt-24 w-5/6">

                <h2 className="text-white text-4xl text-center uppercase">Experiencia</h2>

                {/**SUDISA*/}
                <div className="mb-24 mt-24 border-l pl-5">
                    <div className="flex gap-2">

                        <div>
                            <img src="/Experiencia/sudisa.jpg" alt="SUDISA Logo" className="w-24 rounded-lg"/>
                        </div>

                        <div>
                            <h3 className="text-white font-semibold text-lg">Project Leader Jr - SUDISA, México (Presencial)</h3>
                            <p className="text-gray-400">Diciembre  2024 -  Presente</p>
                        </div>

                    </div>

                    <div className="flex flex-col justify-center gap-3">
                        <article className="bg-container_bg rounded-lg mt-5 p-5">
                            <p className="text-white font-semibold">Responsabilidades:</p>

                            <ul className="text-white list-disc pl-5">
                                <li className="pt-2">Dar mantenimiento al sistema y arreglar errores que surjan.</li>
                                <li>Diseñar y desarrollar nuevas características para mejorar el sistema y su calidad.</li>
                                <li>Comunicación constante con diferentes áreas para proveer soluciones prácticas.</li>
                            </ul>

                            <br />
                            <p className="text-white font-semibold">Logros:</p>

                            <ul className="text-white list-disc pl-5">
                                <li className="pt-2">Implemente un sistema de consulta de documentos para agilizar el proceso un 30% usando Google Drive.</li>
                                <li>Desarrollé una nueva funcionalidad para guardar información en Google Sheets un 20% más rápido.</li>
                            </ul>
                        </article>

                        <div className="flex flex-wrap gap-4 mt-3">
                            <img src="/python.svg" alt="Python Logo" className="invert w-10" />
                            <img src="/django.svg" alt="Django Logo" className="invert w-10" />
                            <img src="/postgresql.svg" alt="PostgreSQL Logo" className="invert w-10" />
                            <img src="/sencha.svg" alt="Sencha/Ext JS Logo" className="invert w-10" />
                            <img src="/react.svg" alt="React Logo" className="invert w-10" />
                            <img src="/nodedotjs.svg" alt="Node Logo" className="invert w-10" />
                            <img src="/express.svg" alt="Express Logo" className="invert w-10" />
                            <img src="/typescript.svg" alt="TypeScript Logo" className="invert w-10" />
                        </div>
                    </div>
                </div>
                {/**Clever Cloud*/}
                <div className="border-l pl-5">
                    <div className="flex gap-3">

                        <div>
                            <img src="/Experiencia/clever-cloud.jpeg" alt="Clever Cloud Logo" className="w-24 rounded-lg" />
                        </div>

                        <div>
                            <h3 className="text-white font-semibold text-lg">Full Stack Web Developer Jr - Clever Cloud, México (Remoto)</h3>
                            <p className="text-gray-400">Junio 2023 - Noviembre 2023</p>
                        </div>

                    </div>

                    <div className="flex flex-col justify-center gap-3">
                        <article className="bg-container_bg rounded-lg mt-5 p-5">
                            <p className="text-white font-semibold">Responsabilidades:</p>

                            <ul className="text-white list-disc pl-5">
                                <li className="pt-2">Trabajar con RESTful APIs para crear endpoints que interactúen con la base de datos.</li>
                                <li>Crear nuevas funcionalidades usando el modelo MVC y SCRUM.</li>
                                <li>Juntas diarias con el líder de equipo  y algunas juntas con el cliente.</li>
                                <li>Crear interfaces responsive, arreglar errores y actualizar módulos viejos.</li>
                            </ul>

                            <br />
                            <p className="text-white font-semibold">Logros:</p>

                            <ul className="text-white list-disc pl-5">
                                <li className="pt-2">Desarrollé un sistema para el registro de visitas en un fraccionamiento agilizando el proceso un 20%.</li>
                            </ul>
                        </article>

                        <div className="flex flex-wrap gap-4 mt-3">
                            <img src="/vuedotjs.svg" alt="Vue Logo" className="invert w-10" />
                            <img src="/javascript.svg" alt="JavaScript Logo" className="invert w-10" />
                            <img src="/php.svg" alt="PHP Logo" className="invert w-10" />
                            <img src="/mysql.svg" alt="MySQL Logo" className="invert w-10" />
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};