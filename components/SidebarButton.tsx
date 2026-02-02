import Link from 'next/link';
import Image from 'next/image';

interface SidebarItemProps {
    titulo: string;
    icone: string;
    destino: string;
   }

export default function SidebarItem({ titulo, icone, destino }: SidebarItemProps) {
    return (
        <Link href={destino} className="flex flex-col items-center gap-2 group p-4">
            <div className="w-10 h-10 relative transition-transform group-hover:scale-110">
                <Image 
                    src={icone} 
                    alt={titulo}
                    fill
                    className="object-contain"
                    />
            </div>
            <span className="text-[#856551] text-xs font-serif uppercase tracking-widest opacity-80 group-hover:opacity-100 transition-opacity">
            {titulo}
            </span>
        </Link>
);
}
