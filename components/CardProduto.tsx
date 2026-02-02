import Link from 'next/link';
import Image from 'next/image';

interface CardProdutoProps {
    nome: string;
    preco: string;
    imagem: string;
    id: string;
    }

export default function CardProduto({ nome, preco, imagem, id }: CardProdutoProps) {
    return (
       <Link href={`/descricao/${id}`} className="max-w-[20vw] group bg-white border border-stone-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            {/* Parte Superior: Imagem Ilustrativa */}
            <div className="h-[18vh] w-[30vw] relative bg-[#F9F7F5] overflow-hidden">
                <Image 
                    src={imagem} 
                    alt={nome}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 "
                />
                </div>
                {/* Parte Inferior: Caixa de Informações */}
                <div className="p-3 flex flex-col gap-1">
                    <h3 className="text-[#856551] font-serif text-sm uppercase tracking-wider">
                        {nome}
                    </h3>
                    <p className="text-stone-500 text-xs font-light">
                        R$ {preco}
                    </p>
                </div>
        </Link>
    );
}
