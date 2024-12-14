// import { getFlags } from "@/app/lib/getFlags";
import { fetchFlags } from "@/app/lib/data";
import Flags from "@/components/my/flags";
import { FooterFlags } from "@/components/my/footer-flags";

export const fetchCache = 'force-no-store';

export default async function Home() {
  // let flags;

  // try {
  //   flags = await fetchFlags();
  // } catch (error) {
  //   console.error('fetchFlags failed, using getFlags as fallback:', error);
  //   flags = await getFlags(); // Fallback to getFlags if fetchFlags fails
  // }

  const flags = await fetchFlags();

  return (
    <>
      <Flags initialFlags={flags} />

      <FooterFlags copyrightHref="/123" />
    </>
  );
}
