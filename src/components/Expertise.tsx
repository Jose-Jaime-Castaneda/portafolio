export default function Expertise() {
    return (
        <>
            <div className="mt-24 w-5/6">

                <h2 className="text-white text-4xl text-center uppercase">Experiencia</h2>

                {/**SUDISA*/}
                <div className="mb-24 mt-24 border-l pl-5">
                    <div className="flex gap-2">

                        <div>
                            <img src="/Experiencia/sudisa.jpg" alt="SUDISA Logo" className="w-24 rounded-lg" />
                        </div>

                        <div>
                            <h3 className="text-white font-semibold text-lg">Project Leader Jr - SUDISA, México (Presencial)</h3>
                            <p className="text-gray-400">Diciembre  2024 -  Presente</p>
                        </div>

                    </div>

                    <div className="flex flex-col justify-center gap-3">
                        <article className="bg-container_bg rounded-lg mt-5 p-5">
                            <p className="text-white font-semibold">Responsabilidades y Logros:</p>

                            <ul className="text-white list-disc pl-5">
                                <li>Reparé un script de envío de correos, logrando que los reportes incluyeran todas las
                                    estaciones, lo que aumentó la precisión de la información compartida en un 50%.
                                </li>
                                <li>Implementé una función de conteo automático de registros en el sistema de filtrado, lo que
                                    redujo el tiempo de revisión manual en un 40% y mejoró la eficiencia del equipo
                                    administrativo.
                                </li>
                                <li>Desarrollé desde cero un sistema digital para gestionar documentos de maquinaria, lo que
                                    eliminó el 100% de los costos de impresión y aceleró las actualizaciones en en un 60%.
                                </li>
                                <li>Añadí una funcionalidad adicional al sistema para digitalizar registros manuales utilizados
                                    en algunas estaciones, almacenándolos automáticamente en Google Sheets, lo que
                                    mejoró la accesibilidad y organización de los registros en un 50%.
                                </li>
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
                            <p className="text-white font-semibold">Responsabilidades y Logros:</p>

                            <ul className="text-white list-disc pl-5">
                                <li>Ajusté una vista en la aplicación para que se viera correctamente en dispositivos de
                                    diferentes tamaños.
                                </li>
                                <li>Corregí un endpoint para obtener y almacenar datos correctamente, y desarrollé un script
                                    para mostrarlos en el frontend, garantizando una visualización responsiva.
                                </li>
                                <li>Diseñé y desarrollé un sistema completo para la administración de visitas a un
                                    fraccionamiento mediante QR reutilizables. Incluí la creación de tablas de base de datos,
                                    endpoints y vistas, mejorando el control y eficiencia del proceso de registro de visitantes
                                    reduciendo el tiempo de registro de visitas en un 30%.
                                </li>
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