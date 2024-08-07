import { useState } from "react";

export default function Contact() {
    const [copiedEmail, setCopiedEmail] = useState(false)
    const [copiedPhone, setCopiedPhone] = useState(false)

    const handleCopy = (x: string) => {
        if (x === 'email') {
            navigator.clipboard.writeText('josecastaneda.contact@gmail.com').then(() => {
                setCopiedEmail(true);
                setTimeout(() => setCopiedEmail(false), 1000)
            })
        } else if (x === 'phone') {
            navigator.clipboard.writeText('+523330203527').then(() => {
                setCopiedPhone(true);
                setTimeout(() => setCopiedPhone(false), 1000)
            })
        }
    }

    return (
        <>
            <article className="mt-24">

                <h2 className="text-white text-4xl text-center uppercase">Contacto</h2>

                <div className="mt-24 mb-20">

                    <div className="flex items-center flex-wrap">
                        <img src="/correo-electronico.png" alt="Correo Logo" className="invert w-12 mr-3" />
                        <p className="text-gray-300 bg-container_bg rounded-l p-2">josecastaneda.contact@gmail.com</p>
                        <a onClick={() => handleCopy('email')} className="bg-container_bg rounded-r p-2 hover:border-2"><img src="/copiar-archivos.png" alt="Copiar Logo" className="invert w-6" /></a>
                        {copiedEmail && <span className="ml-2 text-azulito">¡Copiado!</span>}
                    </div>

                    <div className="flex items-center mt-3">
                        <img src="/llamar.png" alt="Telefono Logo" className="invert w-12 mr-3" />
                        <p className="text-white mr-2"><span className="bg-container_bg rounded-lg p-1">+52</span> 33-30-20-35-27</p>
                        <a onClick={() => handleCopy('phone')} className="bg-container_bg rounded-lg p-1 hover:border-2"><img src="/copiar-archivos.png" alt="Copiar Logo" className="invert w-6" /></a>
                        {copiedPhone && <span className="ml-2 text-azulito">¡Copiado!</span>}
                    </div>

                    <div className="flex items-center gap-4  mt-5">
                        <a href="https://www.linkedin.com/in/jose-jaime-casta%C3%B1eda-ruiz/" target="_blank"><img src="/linkedin.svg" alt="LinkedIn Logo" className="invert w-10 transition duration-200 transform hover:scale-110" /></a>
                        <a href="https://github.com/Jose-Jaime-Castaneda" target="_blank"><img src="/github.svg" alt="Github Logo" className="invert w-10 transition duration-200 transform hover:scale-110" /></a>
                    </div>

                </div>

            </article>
        </>
    );
};