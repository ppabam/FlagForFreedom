import { getFlags, Flag } from '@/app/lib/getFlags';
import Image from 'next/image'

export default async function Home() {
  const flags: Flag[] = await getFlags();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* top bar */}
      <header className="fixed top-0 left-0 w-full bg-gradient-to-r to-indigo-600 from-blue-500 text-white shadow-md z-10">
        <div className="container mx-auto flex items-center px-4 py-3 space-x-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="/sadness.webp" alt="Logo" className="h-11 w-11" />
            <h1 className="text-xl font-bold hidden md:flex">Flag 12.3</h1>
          </div>

          {/* Search Field */}
          <div className="flex-1">
            <input
              type="text"
              placeholder="끝내 움켜쥘 탄핵 깃발"
              className="w-full px-4 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          {/* Buttons */}
          <div className="flex-shrink-0">
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 w-11 rounded-lg text-white text-sm shadow-md">
              U
            </button>
          </div>
        </div>
      </header>




      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <section className="container mx-auto px-1 py-1">
          <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
