import Image from 'next/image'
import Space from '@/public/ images/space.jpg'

export default function Home() {
  return (
    <main>
      <section className="flex">
        <div className="max-w-1/2 p-4 py-0">
          <h1 className="text-[8.8rem] leading-none text-right font-bold">Dev FrontEnd</h1>
          <p></p>
        </div>
        <div className="max-w-1/2 p-4 py-0">
          <Image
            src={Space}
            alt=""
            className='rounded-4xl '
          />
        </div>
      </section>
    </main>
  );
}
