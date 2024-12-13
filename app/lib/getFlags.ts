import { Flag } from './definitions';

export async function getFlags(): Promise<Flag[]> {
  const response = await fetch(`${process.env.BASE_URL}/api/flags`,
    {
      next: {
        revalidate: Number(process.env.NEXT_PUBLIC_CACHE_TIMEOUT_SECONDS)
      }
    });

  if (!response.ok) {
    throw new Error('Failed to fetch flags');
  }
  return response.json();
}