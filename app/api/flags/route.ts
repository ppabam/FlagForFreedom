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
  { id: 13, name: '강아지발냄새연구회', imageUrl: '/img/flags/f13.jpg' },
  { id: 14, name: '전국 눈사람 안아주기 운동본부', imageUrl: '/img/flags/f14.jpg' },
  { id: 15, name: '전국 여미새 모임', imageUrl: '/img/flags/f15.jpg' },
  { id: 16, name: '이단원탁연합', imageUrl: '/img/flags/f16.jpg' },
  { id: 17, name: '전국 머머리 민머리 연합', imageUrl: '/img/flags/f17.jpg' },
  { id: 18, name: '다음주 시험임', imageUrl: '/img/flags/f18.jpg' },
  { id: 19, name: '응원봉연대', imageUrl: '/img/flags/f19.jpg' },
  { id: 20, name: '내향인 입니다', imageUrl: '/img/flags/f20.jpg' },
  { id: 21, name: '전국드래곤보존협회', imageUrl: '/img/flags/f21.jpg' },
  { id: 22, name: '직장인 점심메뉴추천 조합', imageUrl: '/img/flags/f22.jpg' },
  { id: 23, name: '전국 집에누워있기 연합', imageUrl: '/img/flags/f23.jpg' },

];

export async function GET() {
  return NextResponse.json(flags);
}
