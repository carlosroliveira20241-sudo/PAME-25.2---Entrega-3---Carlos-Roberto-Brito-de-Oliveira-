import Link from 'next/link';
interface MenuButtonProps {
    titulo: string;
    imagem: string;
    destino: string;
}

export default function MenuButton({ titulo, imagem, destino}: MenuButtonProps) {
    return (
        <Link href={destino} className="relative w-[70%] h-[25%] overflow-hidden rounded-lg group">
            <img 
                src={imagem} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
            />
            {/* Overlay Escuro */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
            {/* Texto */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
                <span className="text-white font-serif text-2xl tracking-widest uppercase">
                    {titulo}
                </span>
            </div>
        </Link>
    );
}
