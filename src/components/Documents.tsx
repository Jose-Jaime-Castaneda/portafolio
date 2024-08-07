export default function Documents() {
    return (
        <>
            <article className="mt-24">

                <h2 className="text-white text-4xl text-center uppercase">Documentos</h2>

                <div className="mt-24 flex flex-wrap justify-center gap-5">

                    <div className="flex flex-col justify-center transition duration-200 transform hover:scale-110">
                        <p className="text-white mb-1 text-center">CV (Español)</p>
                        <a href="/Documentos/PDF/CV-Jose-Castañeda.pdf" download={true}><img src="/Documentos/CV-Español.png" alt="CV Español" className="w-40 rounded-lg hover:" /></a>
                    </div>

                    <div className="flex flex-col justify-center transition duration-200 transform hover:scale-110">
                        <p className="text-white mb-1 text-center">CV (English)</p>
                        <a href="/Documentos/PDF/CV-Jose-Castaneda.pdf" download={true}><img src="/Documentos/CV-English.png" alt="CV Ingles" className="w-40 rounded-lg" /></a>
                    </div>

                    <div className="flex flex-col justify-center transition duration-200 transform hover:scale-110">
                        <p className="text-white mb-1 text-center">Carta de Recomendación</p>
                        <a href="/Documentos/PDF/Carta-de-recomendacion.pdf" target="_blank"><img src="/Documentos/Carta-Recomendacion-CleverCloud.png" alt="Carte Recomendación" className="w-40 rounded-lg" /></a>
                    </div>

                </div>

            </article>
        </>
    );
};