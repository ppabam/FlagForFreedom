import { NextResponse } from 'next/server';

type Flag = {
  id: number;
  name: string;
  imageUrl: string;
};

const flags: Flag[] = [
  { id: 1, name: '불꽃남자 정대만 팬클럽', imageUrl: 'https://i.ibb.co/hHBwh4d/f1.png' },
  // { id: 2, name: 'f2', imageUrl: 'https://i.ibb.co/M8JfYTp/f2.png' },
  { id: 2, name: '전국 뒤로 미루기 연합', imageUrl: '/img/flags/f2.png' },
  { id: 3, name: '전국 깃발 준비 못한 사람 동호회', imageUrl: 'https://i.ibb.co/QHd3RHK/f3.png' },
  { id: 4, name: 'K-승질머리 연맹 칷!', imageUrl: 'https://i.ibb.co/R6rXvW6/f4.png' },
  { id: 5, name: '전국고양이집사노동조합', imageUrl: 'https://i.ibb.co/S0F7S69/f5.png' },
  { id: 6, name: '전국 이선좌 피해자 연합', imageUrl: 'https://i.ibb.co/nnHgh7J/f6.png' },
  { id: 7, name: '돈없고 병든 예술인 연합', imageUrl: 'https://i.ibb.co/1XjDyct/f7.png' },
  { id: 8, name: '피크민 꽃심기 모임', imageUrl: '/img/flags/f8.png' },
  { id: 9, name: '혼자 나온 시민', imageUrl: '/img/flags/f9.png' },
  { id: 10, name: '전국수족낸증연합', imageUrl: '/img/flags/f10.png' },
  { id: 11, name: '전국 까만 고양이 연합회', imageUrl: '/img/flags/f11.png' },
  { id: 12, name: '화분안죽이기실천시민연합', imageUrl: '/img/flags/f12.png' },
  { id: 13, name: 'f13', imageUrl: '/img/flags/f13.jpg' },
  { id: 14, name: 'f14', imageUrl: '/img/flags/f14.jpg' },
  { id: 15, name: 'f15', imageUrl: '/img/flags/f15.jpg' },
  { id: 16, name: 'f16', imageUrl: '/img/flags/f16.jpg' },
  { id: 17, name: 'f17', imageUrl: '/img/flags/f17.jpg' },
  { id: 18, name: 'f18', imageUrl: '/img/flags/f18.jpg' },
  { id: 19, name: 'f19', imageUrl: '/img/flags/f19.jpg' },
  { id: 20, name: 'f20', imageUrl: '/img/flags/f20.jpg' },
  { id: 21, name: 'f21', imageUrl: '/img/flags/f21.jpg' },
  { id: 22, name: 'f22', imageUrl: '/img/flags/f22.jpg' },
  { id: 23, name: 'f23', imageUrl: '/img/flags/f23.jpg' },

];

export async function GET() {
  return NextResponse.json(flags);
}
