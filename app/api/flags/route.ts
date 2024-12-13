import { NextResponse } from 'next/server';
import { Flag } from '@/app/lib/definitions';
import { fetchFlags } from '@/app/lib/data';

export async function GET() {
  try {
    const data = await fetchFlags();
    return NextResponse.json(data);
  } catch (dbError) {
    console.warn('🎅-dbError Try Fallback Read JSON, dbError:', dbError);
    const combinedFallbackFlags = [...fallbackErrHead, ...fallbackFlags];
    return NextResponse.json(combinedFallbackFlags);
  }
}

// export async function GET() {
//   const combinedFallbackFlags = [...fallbackErrHead, ...fallbackFlags];
//   return NextResponse.json(combinedFallbackFlags);
// }

const fallbackErrHead: Flag[] = [
  {
    "id": 20241203,
    "name": "수괴 Not Found 추진 선봉대",
    "img_url": "https://i.ibb.co/xsR4z0f/40444.png"
  },
]

const fallbackFlags: Flag[] = [
  {
    "id": 104,
    "name": "진격의 묘다이",
    "img_url": "https://i.ibb.co/jRndQrJ/1734062722477.png"
  },
  {
    "id": 103,
    "name": "하야하그라 한국 고산지 발기부전 연구회",
    "img_url": "https://i.ibb.co/L8PLCz5/ba.jpg"
  },
  {
    "id": 102,
    "name": "전국 춘전 협회",
    "img_url": "https://i.ibb.co/6tRV0Rt/gg.jpg"
  },
  {
    "id": 101,
    "name": "전국 얼죽아 협회 서울지부",
    "img_url": "https://i.ibb.co/Wkh0K6n/ia.jpg"
  },
  {
    "id": 100,
    "name": "It's NOT X 트위터라 부르는 사람들",
    "img_url": "https://i.ibb.co/tb0h7XW/nt.jpg"
  },
  {
    "id": 99,
    "name": "非 시네필 연합회 아진짜시네필아니라고",
    "img_url": "https://i.ibb.co/8r678s1/cn.jpg"
  },
  {
    "id": 98,
    "name": "전국 웹소 읽기 연합회",
    "img_url": "https://i.ibb.co/ns8Cs8W/wrr.jpg"
  },
  {
    "id": 97,
    "name": "웹소 작가 마감하기도 급한데",
    "img_url": "https://i.ibb.co/16WJKcw/ma.webp"
  },
  {
    "id": 96,
    "name": "원고하다 뛰쳐나온 로판 작가 모임회",
    "img_url": "https://i.ibb.co/c31LxW5/wr.jpg"
  },
  {
    "id": 95,
    "name": "전국 인공지능 순애 추진 위원회",
    "img_url": "https://i.ibb.co/6sHFbm1/ai.jpg"
  },
  {
    "id": 94,
    "name": "구국의 서태웅 친위대 전국 연합",
    "img_url": "https://i.ibb.co/hfYZGx9/ss.jpg"
  },
  {
    "id": 93,
    "name": "국제 유니콘 보호협회 한국지부",
    "img_url": "https://i.ibb.co/PGttR73/uc.jpg"
  },
  {
    "id": 92,
    "name": "칼데아 한국 지부 마스터 노동조합",
    "img_url": "https://i.ibb.co/xjvSkpH/kku.jpg"
  },
  {
    "id": 91,
    "name": "내일의 지구를 모른 척할 수 없기에",
    "img_url": "https://i.ibb.co/5FdbXyf/eee.png"
  },
  {
    "id": 90,
    "name": "범야옹연대",
    "img_url": "https://i.ibb.co/sRg41nr/2.webp"
  },
  {
    "id": 89,
    "name": "집보는 햄스터노조 하야~츄!",
    "img_url": "https://i.ibb.co/3yKrkHs/18.jpg"
  },
  {
    "id": 88,
    "name": "은하열차개척자연합",
    "img_url": "https://i.ibb.co/KzRCpDB/17.jpg"
  },
  {
    "id": 87,
    "name": "M78 우주경비대 한국지부",
    "img_url": "https://i.ibb.co/ZWyGGcT/16.jpg"
  },
  {
    "id": 86,
    "name": "볼트론 저항군 연합",
    "img_url": "https://i.ibb.co/BcfNh4r/15.jpg"
  },
  {
    "id": 85,
    "name": "어메이징 두족류연합 한국지부",
    "img_url": "https://i.ibb.co/mzThFM4/14.jpg"
  },
  {
    "id": 84,
    "name": "ㄷㄷㄷ 고양 민주 오징어당",
    "img_url": "https://i.ibb.co/y8bCdZQ/2.png"
  },
  {
    "id": 83,
    "name": "읏 전국 가능충 연합회",
    "img_url": "https://i.ibb.co/wp64W2J/1.webp"
  },
  {
    "id": 82,
    "name": "전국 콜드플레이 예매 성공자 연합",
    "img_url": "https://i.ibb.co/fHyXnLg/13.jpg"
  },
  {
    "id": 81,
    "name": "빛의 전사 연합",
    "img_url": "https://i.ibb.co/2y0rG46/12.jpg"
  },
  {
    "id": 80,
    "name": "개구리도 침략독재를 꿈꾸던 지난날을 반성했다",
    "img_url": "https://i.ibb.co/t8rfmmM/11.jpg"
  },
  {
    "id": 79,
    "name": "고양이를 국회로 고양이당",
    "img_url": "https://i.ibb.co/3yxcqYr/10.jpg"
  },
  {
    "id": 78,
    "name": "사과해요 나한테",
    "img_url": "https://i.ibb.co/vHJQYz3/9.jpg"
  },
  {
    "id": 77,
    "name": "전국 D점멸 협회",
    "img_url": "https://i.ibb.co/Z1zyKVc/8.jpg"
  },
  {
    "id": 76,
    "name": "전국 시민 밤샘 위원회",
    "img_url": "https://i.ibb.co/QDxK36g/7.jpg"
  },
  {
    "id": 75,
    "name": "전국 게으름뱅이 연합",
    "img_url": "https://i.ibb.co/2twyBXW/6.jpg"
  },
  {
    "id": 74,
    "name": "피크민 하는 시위 나온 사람들",
    "img_url": "https://i.ibb.co/yP0GNkM/image.webp"
  },
  {
    "id": 73,
    "name": "한국인 밥상머리 예절 연구소",
    "img_url": "https://i.ibb.co/qDVQJFd/5.jpg"
  },
  {
    "id": 72,
    "name": "신지, 에바에서 내려라 연합",
    "img_url": "https://i.ibb.co/rp9WNTb/1.png"
  },
  {
    "id": 71,
    "name": "아모로트 창조물 관리국 노동시민 연합",
    "img_url": "https://i.ibb.co/nkjkdyk/image.png"
  },
  {
    "id": 70,
    "name": "걷는 버섯 동호회",
    "img_url": "https://i.ibb.co/bRMNYGq/4.jpg"
  },
  {
    "id": 69,
    "name": "하오문 대한민국 서울지부",
    "img_url": "https://i.ibb.co/6yFjdTr/3.jpg"
  },
  {
    "id": 68,
    "name": "전국설명충연합회",
    "img_url": "https://i.ibb.co/PZw29Q4/Gd64-Eo1a0-AEf-y-G.jpg"
  },
  {
    "id": 67,
    "name": "샬레이안 마법대학 장작모으기학과",
    "img_url": "https://i.ibb.co/rvsnfqH/2.jpg"
  },
  {
    "id": 66,
    "name": "뜬눈 편집자들",
    "img_url": "https://i.ibb.co/1mfjfTr/images-4.jpg"
  },
  {
    "id": 65,
    "name": "수능 끝난 고3 영역 탄핵형",
    "img_url": "https://i.ibb.co/0KgDQTf/Screenshot-20241213-025045-Chrome.jpg"
  },
  {
    "id": 64,
    "name": "최애 귀여움학회",
    "img_url": "https://i.ibb.co/S63Xc0w/images-3.jpg"
  },
  {
    "id": 63,
    "name": "계엄? 이것 뭐에요~???",
    "img_url": "https://i.ibb.co/rZpBjmp/images-2.jpg"
  },
  {
    "id": 62,
    "name": "만두노총 새우만두노조",
    "img_url": "https://i.ibb.co/ZWdKcB6/images-1.jpg"
  },
  {
    "id": 61,
    "name": "한총련",
    "img_url": "https://i.ibb.co/CPMsnh6/20241213-023019.jpg"
  },
  {
    "id": 60,
    "name": "의혈중앙",
    "img_url": "https://i.ibb.co/nLBgT8v/20241213-022944.jpg"
  },
  {
    "id": 59,
    "name": "전대협 동우회",
    "img_url": "https://i.ibb.co/6YwY9Ls/content-750f56140f.jpg"
  },
  {
    "id": 58,
    "name": "대한버추얼싱어권익위원회",
    "img_url": "https://i.ibb.co/dcC3QMY/1004-913-5315.jpg"
  },
  {
    "id": 57,
    "name": "안보리(안주보장이사회)",
    "img_url": "https://i.ibb.co/R2SxXxJ/20241213-020737.jpg"
  },
  {
    "id": 56,
    "name": "토요폭식회 프로참석자 모임",
    "img_url": "https://i.ibb.co/v3WM6VH/20241213-020802.jpg"
  },
  {
    "id": 55,
    "name": "선호외계인 보호협회",
    "img_url": "https://i.ibb.co/fXy8pD2/20241213-020924.jpg"
  },
  {
    "id": 54,
    "name": "걸을 때 휴대폰 안 보기 운동본부",
    "img_url": "https://i.ibb.co/QvqC9xS/20241213-020900.jpg"
  },
  {
    "id": 53,
    "name": "말이되는소리연합",
    "img_url": "https://i.ibb.co/YD0H8J2/20241213-020832.jpg"
  },
  {
    "id": 52,
    "name": "우정팔찌연합",
    "img_url": "https://i.ibb.co/611KB4x/images.jpg"
  },
  {
    "id": 51,
    "name": "전국민주노동조합총연맹",
    "img_url": "https://i.ibb.co/wJv4sqX/5985-17711-388.jpg"
  },
  {
    "id": 50,
    "name": "전국 가상 아이돌 노동조합",
    "img_url": "https://i.ibb.co/7VXnmw8/10.png"
  },
  {
    "id": 49,
    "name": "전국 혈당 스파이크 방지 협회",
    "img_url": "https://i.ibb.co/SvLzshr/9.png"
  },
  {
    "id": 48,
    "name": "제로칼로리스팸추진협회",
    "img_url": "https://i.ibb.co/NnsDG5q/8.png"
  },
  {
    "id": 47,
    "name": "전국거북목협회",
    "img_url": "https://i.ibb.co/5vS0Rj8/7.png"
  },
  {
    "id": 46,
    "name": "먹을까말까고민되면먹기운동본부",
    "img_url": "https://i.ibb.co/CK6D4KG/6.png"
  },
  {
    "id": 45,
    "name": "전국얼죽아연합회",
    "img_url": "https://i.ibb.co/Tk1ZX6g/5.png"
  },
  {
    "id": 44,
    "name": "전국삼각김밥미식가협회",
    "img_url": "https://i.ibb.co/52W6cg1/4.png"
  },
  {
    "id": 43,
    "name": "제발 아무것도 안 하고 싶은 사람들의 모임",
    "img_url": "https://i.ibb.co/fH52vRn/3.png"
  },
  {
    "id": 42,
    "name": "전국쿼카보호협회",
    "img_url": "https://i.ibb.co/W5n2Q9m/2.png"
  },
  {
    "id": 41,
    "name": "푸바오의 행복을 바라는 모임",
    "img_url": "https://i.ibb.co/Krvxc66/1.png"
  },
  {
    "id": 40,
    "name": "트위터 고양이 사랑회",
    "img_url": "https://i.ibb.co/6rtrrLk/twitter-cat.jpg"
  },
  {
    "id": 39,
    "name": "트윈테일 결사단",
    "img_url": "https://i.ibb.co/MDYhxhT/twin-tail.jpg"
  },
  {
    "id": 38,
    "name": "턱시도 고양이 사랑단",
    "img_url": "https://i.ibb.co/y0KvJL8/tuxedo-cat.jpg"
  },
  {
    "id": 37,
    "name": "전국 과체중 고양이 연합",
    "img_url": "https://i.ibb.co/zX8K41X/overweight-cat.jpg"
  },
  {
    "id": 36,
    "name": "행운을 주는 검은 고양이 연합",
    "img_url": "https://i.ibb.co/Hdv8hVg/lucky-cat.jpg"
  },
  {
    "id": 35,
    "name": "전국 치즈냥 연구회",
    "img_url": "https://i.ibb.co/qnSL330/cheese-cat.jpg"
  },
  {
    "id": 34,
    "name": "캔따개 노동조합",
    "img_url": "https://i.ibb.co/mh7Myfz/can.jpg"
  },
  {
    "id": 33,
    "name": "전국냥아치혈맹",
    "img_url": "https://i.ibb.co/pwp2sZD/blood-blind-cat.jpg"
  },
  {
    "id": 32,
    "name": "전국계란은완숙협회",
    "img_url": "https://i.ibb.co/JQYpvqH/egg.jpg"
  },
  {
    "id": 31,
    "name": "메탈 야옹",
    "img_url": "https://i.ibb.co/Ssr33cT/metal-cat.jpg"
  },
  {
    "id": 30,
    "name": "국제 연합우주 고양이 위원회",
    "img_url": "https://i.ibb.co/BKjNSRL/space-cat.jpg"
  },
  {
    "id": 29,
    "name": "스타워즈 저항군 서울지부",
    "img_url": "https://i.ibb.co/cJVqGM1/starwars.jpg"
  },
  {
    "id": 28,
    "name": "우리나라 정상영업 합니다",
    "img_url": "https://i.ibb.co/BghqQgj/normal-operation.jpg"
  },
  {
    "id": 27,
    "name": "OTT 뭐볼지 못고르는 사람들 연합회",
    "img_url": "https://i.ibb.co/yRP30qy/ott.jpg"
  },
  {
    "id": 26,
    "name": "민주묘총",
    "img_url": "https://i.ibb.co/f93HBG9/Democratic-Cat.jpg"
  },
  {
    "id": 25,
    "name": "동식물 쓰다듬기 연구회",
    "img_url": "https://i.ibb.co/fNDTDBF/333831733725834567.jpg"
  },
  {
    "id": 24,
    "name": "날아다니는 스파게티 괴물연맹",
    "img_url": "https://i.ibb.co/pLZNCHh/fsm.jpg"
  },
  {
    "id": 23,
    "name": "전국 집에누워있기 연합",
    "img_url": "/img/flags/f23.jpg"
  },
  {
    "id": 22,
    "name": "직장인 점심메뉴추천 조합",
    "img_url": "/img/flags/f22.jpg"
  },
  {
    "id": 21,
    "name": "전국드래곤보존협회",
    "img_url": "/img/flags/f21.jpg"
  },
  {
    "id": 20,
    "name": "내향인 입니다",
    "img_url": "/img/flags/f20.jpg"
  },
  {
    "id": 19,
    "name": "응원봉연대",
    "img_url": "/img/flags/f19.jpg"
  },
  {
    "id": 18,
    "name": "다음주 시험임",
    "img_url": "/img/flags/f18.jpg"
  },
  {
    "id": 17,
    "name": "전국 머머리 민머리 연합",
    "img_url": "/img/flags/f17.jpg"
  },
  {
    "id": 16,
    "name": "이단원탁연합",
    "img_url": "/img/flags/f16.jpg"
  },
  {
    "id": 15,
    "name": "전국 여미새 모임",
    "img_url": "/img/flags/f15.jpg"
  },
  {
    "id": 14,
    "name": "전국 눈사람 안아주기 운동본부",
    "img_url": "/img/flags/f14.jpg"
  },
  {
    "id": 13,
    "name": "강아지발냄새연구회",
    "img_url": "/img/flags/f13.jpg"
  },
  {
    "id": 12,
    "name": "화분안죽이기실천시민연합",
    "img_url": "/img/flags/f12.png"
  },
  {
    "id": 11,
    "name": "전국 까만 고양이 연합회",
    "img_url": "/img/flags/f11.png"
  },
  {
    "id": 10,
    "name": "전국수족낸증연합",
    "img_url": "/img/flags/f10.png"
  },
  {
    "id": 9,
    "name": "혼자 나온 시민",
    "img_url": "/img/flags/f9.png"
  },
  {
    "id": 8,
    "name": "피크민 꽃심기 모임",
    "img_url": "/img/flags/f8.png"
  },
  {
    "id": 7,
    "name": "돈없고 병든 예술인 연합",
    "img_url": "https://i.ibb.co/1XjDyct/f7.png"
  },
  {
    "id": 6,
    "name": "전국 이선좌 피해자 연합",
    "img_url": "https://i.ibb.co/nnHgh7J/f6.png"
  },
  {
    "id": 5,
    "name": "전국고양이집사노동조합",
    "img_url": "https://i.ibb.co/S0F7S69/f5.png"
  },
  {
    "id": 4,
    "name": "K-승질머리 연맹 칷!",
    "img_url": "https://i.ibb.co/R6rXvW6/f4.png"
  },
  {
    "id": 3,
    "name": "전국 깃발 준비 못한 사람 동호회",
    "img_url": "https://i.ibb.co/QHd3RHK/f3.png"
  },
  {
    "id": 2,
    "name": "전국 뒤로 미루기 연합",
    "img_url": "/img/flags/f2.png"
  },
  {
    "id": 1,
    "name": "불꽃남자 정대만 팬클럽",
    "img_url": "https://i.ibb.co/hHBwh4d/f1.png"
  }
];
