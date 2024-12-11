import { getFlags, Flag } from '@/app/lib/getFlags';
import Image from 'next/image'

export default async function Home() {
  const flags: Flag[] = await getFlags();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="bg-blue-500 text-white py-4 w-full">
        <div className="w-full text-center">
          <h1 className="text-2xl font-bold">123 Flag Gallery</h1>
          {/* <p className="text-sm mt-2">계엄에 대응하는 유쾌 깃발들</p> */}
        </div>
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <section className="container mx-auto px-4 py-8">
          <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {flags.map((flag) => (
              <li key={flag.id} className="text-center">
                <div className="relative w-full overflow-hidden rounded-lg shadow-lg bg-gray-800 aspect-square">
                  <Image
                    src={flag.imageUrl}
                    alt={flag.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <p className="mt-2 text-lg font-medium">{flag.name}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p className="text-sm">
          &copy; 12.3, <a href="/" className="text-blue-500">flagless regiment.</a>
        </p>
      </footer>
    </div>
  );
}
