import { Flag } from './definitions';

export async function getFlags(): Promise<Flag[]> {
  // const response = await fetch(`/api/flags`, { cache: 'no-store' });
  // const response = await fetch(`${process.env.BASE_URL}/api/flags`, { cache: 'no-store' });
  const response = await fetch(`${process.env.BASE_URL}/api/flags`, { next: { revalidate: 60 } });
  // const response = await fetch(`http://localhost:3000/api/flags`, { cache: 'no-store' });
  if (!response.ok) {
    throw new Error('Failed to fetch flags');
  }
  return response.json();
}