// import { getFlags } from '@/app/lib/getFlags';
import { fetchFlags } from './lib/data';
import Flags from '@/components/my/flags';


export default async function Home() {
  // const flags = await getFlags();
  const flags = await fetchFlags();

  return (
    <>
      <Flags initialFlags={flags} />

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p className="text-sm">
          &copy; 12.3, <a href="/123" className="text-blue-500">포고령</a>
        </p>
      </footer>
    </>
  );
}
