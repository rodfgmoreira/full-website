import Link from 'next/link';
import ThemeSwitcher from "@/components/theme-switcher";

export default function Header() {
  return (
    <header className='flex justify-between items-center border-t-1 border-b-1 m-4 p-2'>
      <Link href="/" className='text-3xl font-bold'>Rodrigo.</Link>
      <nav className='flex justify-center items-center gap-8 text-base'>
        <Link href="/">Home</Link>
        <Link href="/">Sobre</Link>
        <Link href="/">Educação</Link>
        <Link href="/">Projetos</Link>
        <Link href="/">Contato</Link>
      </nav>
      <div className='flex items-center'>
        <ThemeSwitcher />
      </div>
    </header>
  );
}
