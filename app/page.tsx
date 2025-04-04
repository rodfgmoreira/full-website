import Image from 'next/image'
import Space from '@/public/ images/space.jpg'
import { Github } from "lucide-react"
import { Youtube } from "lucide-react"
import { Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Home() {
  return (
    <main>
      <section className="h-screen flex bg-background">
        <div className="max-w-1/2 p-4 py-0">
          <h1 className="text-[8.8rem] leading-none text-right font-bold">Dev Frontend</h1>
          <p className='text-right text-[1.2rem] max-w-[40rem] ml-auto pt-4'>
            Habilidades sólidas em desenvolvimento web, com proficiência em JavaScript, TypeScript e frameworks como React.js. Resolvo problemas e comprometido em aprender novas tecnologias para contribuir em projetos desafiadores.
          </p>
          <div className='flex items-center p-4 gap-0'>
            <Button variant="outlineHome" size="iconlg">
              <Github className="size-40" />
            </Button>
            <Button variant="outlineHome" size="iconlg">
              <Youtube className="size-40" />
            </Button>
            <Button variant="outlineHome" size="iconlg">
              <Linkedin className="size-40" />
            </Button>
          </div>
        </div>
        <div className="w-1/2 p-4 py-0 h-full relative">
          <Image
            src={Space}
            alt="Espaço"
            className="absolute p-4 py-0 inset-0 w-full h-3/4 object-cover rounded-4xl"
          />
        </div>
      </section>
      <section className='relative mt-[-9.5rem] bg-[var(--secundary-bg)]'>
        <h1 className='absolute top-[-20px] font-bold leading-none text-center text-9xl text-background uppercase whitespace-nowrap'>Sobre . Sobre . Sobre . Sobre</h1>
        <div className="p-4 py-0 h-full relative">
          <h1 className='pt-40 flex justify-center items-center text-6xl font-bold mb-8'>Sobre<span className='text-primary pl-2'>mim</span></h1>
          <div>
            <div className='flex justify-center items-center mb-8'>
              <p className='border rounded-[100%] p-32'>asdsasR</p>
            </div>
            <h1 className='flex justify-center items-center text-4xl font-bold mb-8'>Desenvolvedor<span className='text-primary pl-2'>front-end</span></h1>
            <p className='text-2xl text-center px-96'>Atuo como desenvolvedor frontend há 2 anos, prestando serviços como freelancer e criando interfaces modernas e intuitivas. Minha experiência anterior como designer aprimorou minha capacidade de desenvolver soluções visuais atraentes e funcionais. Fiz a transição definitiva para o desenvolvimento de software, expandindo meu conhecimento para me tornar um desenvolvedor fullstack. Minhas principais tecnologias incluem JavaScript, TypeScipt, React, TailwindCSS e Node.js. Estou sempre aprimorando minhas habilidades para entregar produtos de alta qualidade, com código limpo e performance otimizada.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
