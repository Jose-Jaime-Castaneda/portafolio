export default function NavBar() {
    return (
        <nav className=" w-full py-6 sticky top-0 z-10 bg-index_bg">
            <ul className="flex justify-center items-center gap-5 text-white">
                <li><a href="#home" className="hover:text-azulito">Inicio</a></li>
                <li><a href="#expertise" className="hover:text-azulito">Experiencia</a></li>
                <li><a href="#projects" className="hover:text-azulito">Proyectos</a></li>
                <li><a href="#documents" className="hover:text-azulito">CV</a></li>
                <li><a href="#Contact" className="hover:text-azulito">Contacto</a></li>
            </ul>
        </nav>
    );
};