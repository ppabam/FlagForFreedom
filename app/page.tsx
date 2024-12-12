// import { getFlags } from '@/app/lib/getFlags';
import { fetchFlags } from './lib/data';
import Flags from '@/components/my/flags';
import { FooterFlags } from '@/components/my/footer-flags';

export default async function Home() {
  // const flags = await getFlags();
  const flags = await fetchFlags();

  return (
    <>
      <Flags initialFlags={flags} />

      <FooterFlags copyrightHref='/123' />
    </>
  );
}
