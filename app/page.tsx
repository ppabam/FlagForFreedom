// app/page.tsx
import { getFlags } from '@/app/lib/getFlags';
import Flags from '@/components/my/flags';

export default async function Home() {
  const flags = await getFlags();

  return (
    <div>
      <header className="fixed top-0 left-0 w-full bg-gradient-to-r to-indigo-600 from-blue-500 text-white shadow-md z-10">
        {/* Header content */}
      </header>

      <main className="container mx-auto px-1 py-1">
        <Flags initialFlags={flags} />
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p className="text-sm">
          &copy; 12.3, <a href="/123" className="text-blue-500">포고령</a>
        </p>
      </footer>
    </div>
  );
}
