export type Flag = {
  id: number;
  name: string;
  imageUrl: string;
};

export async function getFlags(): Promise<Flag[]> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/flags`, { cache: 'no-store' });
  if (!response.ok) {
    throw new Error('Failed to fetch flags');
  }
  return response.json();
}
