import { getFlags } from "@/app/lib/getFlags";
import { fetchFlags, fetchFilteredFlags } from "@/app/lib/data";
import FlagsPage from "@/components/my/flags-page";
import { FooterFlags } from "@/components/my/footer-flags";

export const fetchCache = 'force-no-store';

export default async function Home(props: {
  searchParams?: Promise<{
    query: string,
  }>
}) {

  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';

  let flags;

  try {
    flags = await fetchFilteredFlags(query);
  } catch (error) {
    console.error('fetchFlags failed, using getFlags as fallback:', error);
    flags = await getFlags(); // Fallback to getFlags if fetchFlags fails
  }

  // const flags = await fetchFlags();

  return (
    <>
      <FlagsPage initialFlags={flags} />

      <FooterFlags copyrightHref="/123" />
    </>
  );
}
