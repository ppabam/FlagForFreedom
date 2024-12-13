import { NextResponse } from 'next/server';
import { Flag } from '@/app/lib/definitions';
import { fetchFlags } from '@/app/lib/data';

export async function GET() {
  try {
    const data = await fetchFlags();
    return NextResponse.json(data);
  } catch (dbError) {
    console.warn('🎅-dbError Try Fallback Read JSON, dbError:', dbError);
    return NextResponse.json(fallbackFlags);
  }
}

const fallbackFlags: Flag[] = [
  {
    "id": 1,
    "name": "불꽃남자 정대만 팬클럽",
    //"latitude": 37.5138849677504,
    //"longitude": 126.92862984221085,
    "img_url": "https:\/\/i.ibb.co\/hHBwh4d\/f1.png"
  },
  {
    "id": 2,
    "name": "전국 뒤로 미루기 연합",
    //"latitude": 37.500938038893295,
    //"longitude": 126.92989513099549,
    "img_url": "\/img\/flags\/f2.png"
  },
  {
    "id": 3,
    "name": "전국 깃발 준비 못한 사람 동호회",
    //"latitude": 37.50804823876406,
    //"longitude": 126.931138930737,
    "img_url": "https:\/\/i.ibb.co\/QHd3RHK\/f3.png"
  },
  {
    "id": 4,
    "name": "K-승질머리 연맹 칷!",
    //"latitude": 37.50891616122715,
    //"longitude": 126.93517726087975,
    "img_url": "https:\/\/i.ibb.co\/R6rXvW6\/f4.png"
  },
  {
    "id": 5,
    "name": "전국고양이집사노동조합",
    //"latitude": 37.50882472507087,
    //"longitude": 126.93512023797165,
    "img_url": "https:\/\/i.ibb.co\/S0F7S69\/f5.png"
  },
  {
    "id": 6,
    "name": "전국 이선좌 피해자 연합",
    //"latitude": 37.50648599362162,
    //"longitude": 126.92973830942933,
    "img_url": "https:\/\/i.ibb.co\/nnHgh7J\/f6.png"
  },
  {
    "id": 7,
    "name": "돈없고 병든 예술인 연합",
    //"latitude": 37.49655848552289,
    //"longitude": 126.92713592409058,
    "img_url": "https:\/\/i.ibb.co\/1XjDyct\/f7.png"
  },
  {
    "id": 8,
    "name": "피크민 꽃심기 모임",
    //"latitude": 37.507819640384525,
    //"longitude": 126.92922708085301,
    "img_url": "\/img\/flags\/f8.png"
  },
  {
    "id": 9,
    "name": "혼자 나온 시민",
    //"latitude": 37.49705515157919,
    //"longitude": 126.92794478477025,
    "img_url": "\/img\/flags\/f9.png"
  },
  {
    "id": 10,
    "name": "전국수족낸증연합",
    //"latitude": 37.50177390585746,
    //"longitude": 126.92556883276758,
    "img_url": "\/img\/flags\/f10.png"
  },
  {
    "id": 11,
    "name": "전국 까만 고양이 연합회",
    //"latitude": 37.50318105526448,
    //"longitude": 126.92407626698395,
    "img_url": "\/img\/flags\/f11.png"
  },
  {
    "id": 12,
    "name": "화분안죽이기실천시민연합",
    //"latitude": 37.51424206763406,
    //"longitude": 126.93248906380552,
    "img_url": "\/img\/flags\/f12.png"
  },
  {
    "id": 13,
    "name": "강아지발냄새연구회",
    //"latitude": 37.51203375313728,
    //"longitude": 126.92145584118309,
    "img_url": "\/img\/flags\/f13.jpg"
  },
  {
    "id": 14,
    "name": "전국 눈사람 안아주기 운동본부",
    //"latitude": 37.50244252250775,
    //"longitude": 126.93075115218542,
    "img_url": "\/img\/flags\/f14.jpg"
  },
  {
    "id": 15,
    "name": "전국 여미새 모임",
    //"latitude": 37.513424971937106,
    //"longitude": 126.93400107333997,
    "img_url": "\/img\/flags\/f15.jpg"
  },
  {
    "id": 16,
    "name": "이단원탁연합",
    //"latitude": 37.504041074526725,
    //"longitude": 126.93377694543568,
    "img_url": "\/img\/flags\/f16.jpg"
  },
  {
    "id": 17,
    "name": "전국 머머리 민머리 연합",
    //"latitude": 37.49783687483148,
    //"longitude": 126.9331329488412,
    "img_url": "\/img\/flags\/f17.jpg"
  },
  {
    "id": 18,
    "name": "다음주 시험임",
    //"latitude": 37.50706736124061,
    //"longitude": 126.93121675751466,
    "img_url": "\/img\/flags\/f18.jpg"
  },
  {
    "id": 19,
    "name": "응원봉연대",
    //"latitude": 37.50826688874798,
    //"longitude": 126.92720966336093,
    "img_url": "\/img\/flags\/f19.jpg"
  },
  {
    "id": 20,
    "name": "내향인 입니다",
    //"latitude": 37.51148599489162,
    //"longitude": 126.9311115204269,
    "img_url": "\/img\/flags\/f20.jpg"
  },
  {
    "id": 21,
    "name": "전국드래곤보존협회",
    //"latitude": 37.50938042572082,
    //"longitude": 126.93442135155941,
    "img_url": "\/img\/flags\/f21.jpg"
  },
  {
    "id": 22,
    "name": "직장인 점심메뉴추천 조합",
    //"latitude": 37.501110196543905,
    //"longitude": 126.92659017449964,
    "img_url": "\/img\/flags\/f22.jpg"
  },
  {
    "id": 23,
    "name": "전국 집에누워있기 연합",
    //"latitude": 37.511678063743275,
    //"longitude": 126.93175436933795,
    "img_url": "\/img\/flags\/f23.jpg"
  },
  {
    "id": 24,
    "name": "날아다니는 스파게티 괴물연맹",
    //"latitude": 37.502748608638754,
    //"longitude": 126.93389503909046,
    "img_url": "https:\/\/i.ibb.co\/pLZNCHh\/fsm.jpg"
  },
  {
    "id": 25,
    "name": "동식물 쓰다듬기 연구회",
    //"latitude": 37.530077,
    //"longitude": 126.918633,
    "img_url": "https:\/\/i.ibb.co\/fNDTDBF\/333831733725834567.jpg"
  },
  {
    "id": 26,
    "name": "민주묘총",
    //"latitude": 37.528622,
    //"longitude": 126.916311,
    "img_url": "https:\/\/i.ibb.co\/f93HBG9\/Democratic-Cat.jpg"
  },
  {
    "id": 27,
    "name": "OTT 뭐볼지 못고르는 사람들 연합회",
    //"latitude": 37.531721,
    //"longitude": 126.916117,
    "img_url": "https:\/\/i.ibb.co\/yRP30qy\/ott.jpg"
  },
  {
    "id": 28,
    "name": "우리나라 정상영업 합니다",
    //"latitude": 37.5318046,
    //"longitude": 126.9141547,
    "img_url": "https:\/\/i.ibb.co\/BghqQgj\/normal-operation.jpg"
  },
  {
    "id": 29,
    "name": "스타워즈 저항군 서울지부",
    //"latitude": 37.529300121437764,
    //"longitude": 126.92144527560721,
    "img_url": "https:\/\/i.ibb.co\/cJVqGM1\/starwars.jpg"
  },
  {
    "id": 30,
    "name": "국제 연합우주 고양이 위원회",
    //"latitude": 37.52627925756127,
    //"longitude": 126.92105390875624,
    "img_url": "https:\/\/i.ibb.co\/BKjNSRL\/space-cat.jpg"
  },
  {
    "id": 31,
    "name": "메탈 야옹",
    //"latitude": 37.52621124943236,
    //"longitude": 126.92154156958357,
    "img_url": "https:\/\/i.ibb.co\/Ssr33cT\/metal-cat.jpg"
  },
  {
    "id": 32,
    "name": "전국계란은완숙협회",
    //"latitude": 37.52792382322535,
    //"longitude": 126.92064627645321,
    "img_url": "https:\/\/i.ibb.co\/JQYpvqH\/egg.jpg"
  },
  {
    "id": 33,
    "name": "전국냥아치혈맹",
    //"latitude": 37.52748439571299,
    //"longitude": 126.92115622239004,
    "img_url": "https:\/\/i.ibb.co\/pwp2sZD\/blood-blind-cat.jpg"
  },
  {
    "id": 34,
    "name": "캔따개 노동조합",
    //"latitude": 37.527114017944776,
    //"longitude": 126.9204447252818,
    "img_url": "https:\/\/i.ibb.co\/mh7Myfz\/can.jpg"
  },
  {
    "id": 35,
    "name": "전국 치즈냥 연구회",
    //"latitude": 37.525347658894056,
    //"longitude": 126.91956920162885,
    "img_url": "https:\/\/i.ibb.co\/qnSL330\/cheese-cat.jpg"
  },
  {
    "id": 36,
    "name": "행운을 주는 검은 고양이 연합",
    //"latitude": 37.52806563842692,
    //"longitude": 126.9194892067607,
    "img_url": "https:\/\/i.ibb.co\/Hdv8hVg\/lucky-cat.jpg"
  },
  {
    "id": 37,
    "name": "전국 과체중 고양이 연합",
    //"latitude": 37.52712475486572,
    //"longitude": 126.9208984995288,
    "img_url": "https:\/\/i.ibb.co\/zX8K41X\/overweight-cat.jpg"
  },
  {
    "id": 38,
    "name": "턱시도 고양이 사랑단",
    //"latitude": 37.52843271528622,
    //"longitude": 126.91986462729183,
    "img_url": "https:\/\/i.ibb.co\/y0KvJL8\/tuxedo-cat.jpg"
  },
  {
    "id": 39,
    "name": "트윈테일 결사단",
    //"latitude": 37.52774711126671,
    //"longitude": 126.9222668398186,
    "img_url": "https:\/\/i.ibb.co\/MDYhxhT\/twin-tail.jpg"
  },
  {
    "id": 40,
    "name": "트위터 고양이 사랑회",
    //"latitude": 37.52611470432227,
    //"longitude": 126.92118065076603,
    "img_url": "https:\/\/i.ibb.co\/6rtrrLk\/twitter-cat.jpg"
  }

];
