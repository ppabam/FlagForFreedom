import { getFlags } from "@/app/lib/getFlags";
import { fetchFlags } from "@/app/lib/data";
import SortableGallery from "@/app/ui/gallery/sortable-gallery";
import Gnb from "./ui/gnb/gnb";

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
    flags = await fetchFlags(query);
  } catch (error) {
    console.error('fetchFlags failed, using getFlags as fallback:', error);
    flags = await getFlags(); // Fallback to getFlags if fetchFlags fails
  }

  const totalFlags = flags.length;
  const totalLikes = flags.reduce((sum, flag) => sum + Number(flag.like_count), 0);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Gnb total_flags={totalFlags} total_likes={totalLikes} />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <SortableGallery filteredFlags={flags} />
      </main>
    </div>
  );
}
