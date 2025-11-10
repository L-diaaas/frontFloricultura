import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <>
    <div className="flex">
      <nav className="w-230 size-16 bg-padrao shadow-md flex items-center gap-x-4 shrink-0"> 
        <img className="h-12 w-20 shrink-0 ml-4" src="/Floricultura.png" alt="Logo da Floricultura"/>
        <div>
          <div className="text-lg font-medium text-black ">Floricultura Paraíso</div>
          <p className="text-gray-500 text-xs">Seu buquê como uma carta de amor!</p>
        </div>
        <a href="#" className="ml-15 hover:text-verdesaja hover:underline hover:underline-offset-15 hover:decoration-2">Home</a>
        <a href="#" className="hover:text-verdesaja hover:underline hover:underline-offset-15 hover:decoration-2">Sobre nós</a>
        <a href="#" className="hover:text-verdesaja hover:underline hover:underline-offset-15 hover:decoration-2">Produtos</a>
        <a href="#" className="hover:text-verdesaja hover:underline hover:underline-offset-15 hover:decoration-2">Avaliações</a>
        

        <Link 
          href="/login" 
          className="ml-10 bg-verdesaja text-white h-10 w-20 rounded-full shadow-md hover:bg-verdeagua hover:text-white/75 flex items-center justify-center relative z-20"
        >
          Login
        </Link>
      </nav>
      

      <div style={{ background: 'linear-gradient(to bottom, #8BC4BF, #D3F0E3)' }} className="object-right h-100 w-196 rounded-l-lg">

        <img className="absolute top-[-35px] right-[-8px] h-115 w-150 z-10" src="/liriosGrandes.png" alt="Imagem dos lírios"></img>
      </div>
    </div>
    
    <div className="absolute w-220 h-83 top-[70px]">
      <div className="absolute content-start top-[35px] w-145 left-[75px] h-82">
        <p className="text-4xl font-bold text-left leading-snug">As flores são as cartas mais puras para demonstrar o verdadeiro amor.</p>
        <p className="text-lg">Presenteie agora quem você ama.</p>
      </div>
    </div>
    <button className="absolute bg-verdesaja text-white text-medium h-15 w-40 top-[320px] ml-100 rounded-lg shadow-md hover:bg-verdeagua hover:text-verdesaja">Contate-nos</button>
    <div className="border w-336 h-150 flex gap-x-4">
      <img className="content-start ml-3" src="/mesaFlores.png" alt="Imagem ilustrativa de montagem de um buquê."></img>
      <div className="w-120 ml-45">
        <p className="object-top font-medium text-lg">A Floricultura Paraíso está desde 2019 presenteando paixões e espalhando amor através de petalas...</p>
      </div>
    </div>
    </>
  );
}