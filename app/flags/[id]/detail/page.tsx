import { fetchFlagById } from "@/app/lib/data";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;
  const flag = await fetchFlagById(id);
  return (
    <>
      <h1>{flag.id}</h1>
      <h1>{flag.name}</h1>
      <h1>{flag.img_url}</h1>
      <h1>{flag.like_count}</h1>
      <h1>{flag.latitude}</h1>
      <h1>{flag.longitude}</h1>
    </>
  );

}