import { getFlags } from '@/app/lib/getFlags';
import Flags from '@/components/my/flags';
import { FooterFlags } from '@/components/my/footer-flags';

export const revalidate = 60;

export default async function Home() {
  const flags = await getFlags();
  return (
    <>
      <Flags initialFlags={flags} />

      <FooterFlags copyrightHref='/123' />
    </>
  );
}
