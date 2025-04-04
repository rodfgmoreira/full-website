import Image from 'next/image'
import Space from '@/public/ images/space.jpg'

export default function Home() {
  return (
    <main>
      <section className="h-screen flex">
        <div className="max-w-1/2 p-4 py-0">
          <h1 className="text-[8.8rem] leading-none text-right font-bold">Dev Frontend</h1>
          <p className='text-right text-[1.2rem] max-w-[40rem] ml-auto pt-4'>
            Habilidades sólidas em desenvolvimento web, com proficiência em JavaScript, TypeScript e frameworks como React.js. Resolvo problemas e comprometido em aprender novas tecnologias para contribuir em projetos desafiadores.
          </p>
        </div>
        <div className="w-1/2 p-4 py-0 h-full relative">
          <Image
            src={Space}
            alt="Espaço"
            className="absolute p-4 py-0 inset-0 w-full h-3/4 object-cover rounded-4xl"
          />
        </div>
      </section>
      <section className='mt-[-9.5rem]'>
        <h1 className='font-bold leading-none text-center text-9xl'>Sobre . Sobre . Sobre . Sobre</h1>
      </section>
    </main>
  );
}
