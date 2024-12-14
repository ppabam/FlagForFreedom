import { NextResponse } from 'next/server';
import { Flag } from '@/app/lib/definitions';
// import { fetchFlags } from '@/app/lib/data';

// export async function GET() {
//   try {
//     const data = await fetchFlags();
//     return NextResponse.json(data);
//   } catch (dbError) {
//     console.warn('🎅-dbError Try Fallback Read JSON, dbError:', dbError);
//     const combinedFallbackFlags = [...fallbackErrHead, ...fallbackFlags];
//     return NextResponse.json(combinedFallbackFlags);
//   }
// }

export async function GET() {
  const combinedFallbackFlags = [...fallbackErrHead, ...fallbackFlags];
  return NextResponse.json(combinedFallbackFlags);
}

const fallbackErrHead: Flag[] = [
  {
    "id": 20241203,
    "name": "수괴 Not Found 추진 선봉대",
    "img_url": "https://i.ibb.co/xsR4z0f/40444.png"
  },
]

const fallbackFlags: Flag[] = [{
  "id": 147,
  "name": "장수풍뎅이 연구회",
  //"latitude": 37.52885685292957,
  //"longitude": 126.9217445886799,
  "img_url": "https://i.ibb.co/YWJD2tG/pp.png"
}, {
  "id": 146,
  "name": "슬퍼할 겨를 없는 바쁜 벌꿀 모임",
  //"latitude": 37.527462486020355,
  //"longitude": 126.92135453143788,
  "img_url": "https://i.ibb.co/tPjxPB8/sb.png"
}, {
  "id": 145,
  "name": "미국 너구리연합 한국지부",
  //"latitude": 37.52738362473572,
  //"longitude": 126.91963554615513,
  "img_url": "https://i.ibb.co/wCfcR77/n.png"
}, {
  "id": 144,
  "name": "나는 선의의 순환을 원한다",
  //"latitude": 37.52771495649002,
  //"longitude": 126.9196524416661,
  "img_url": "https://i.ibb.co/vYC3JWH/ss.jpg"
}, {
  "id": 143,
  "name": "지중해판다패권주의자연합",
  //"latitude": 37.525435771449686,
  //"longitude": 126.92156192902173,
  "img_url": "https://i.ibb.co/jV6Ymdc/pd.jpg"
}, {
  "id": 142,
  "name": "햄버거 사랑 동호회",
  //"latitude": 37.52794541045768,
  //"longitude": 126.91987946478768,
  "img_url": "https://i.ibb.co/p1KdpPy/hb.jpg"
}, {
  "id": 141,
  "name": "전국새우잠연합회",
  //"latitude": 37.52597186007947,
  //"longitude": 126.92278273892619,
  "img_url": "https://i.ibb.co/7GCwbDH/14-777615.jpg"
}, {
  "id": 139,
  "name": "윤석열 퇴진 2차 대학생 시국회의",
  //"latitude": 37.52690585199593,
  //"longitude": 126.921663928221,
  "img_url": "https://i.ibb.co/S6RbZjF/20241214500609.jpg"
}, {
  "id": 138,
  "name": "전국 용기사 협회",
  //"latitude": 37.52538395789583,
  //"longitude": 126.92047259345416,
  "img_url": "https://i.ibb.co/x1Vmwvr/20241214-131433-471167235.png"
}, {
  "id": 137,
  "name": "방구석에서 귤 까먹고 싶은 사람들 모임",
  //"latitude": 37.52964471560286,
  //"longitude": 126.92137337869487,
  "img_url": "https://i.ibb.co/x8tsjkp/20241214-131310-471167235.png"
}, {
  "id": 136,
  "name": "핫 커피 연합",
  //"latitude": 37.52632811671721,
  //"longitude": 126.9218343024247,
  "img_url": "https://i.ibb.co/Rgt45gS/20241214500468.jpg"
}, {
  "id": 135,
  "name": "책 읽다가 뛰쳐나온 활자 중독자 모임",
  //"latitude": 37.52768080692158,
  //"longitude": 126.92090609746519,
  "img_url": "https://i.ibb.co/QMsnw5j/20241214500464.jpg"
}, {
  "id": 134,
  "name": "부모님 몰래 서울 온 티케이(TK)장녀 연합",
  //"latitude": 37.526933878991684,
  //"longitude": 126.92287814512814,
  "img_url": "https://i.ibb.co/1vPH6kv/20241214500466.jpg"
}, {
  "id": 133,
  "name": "전국 지방관극러 연합",
  //"latitude": 37.52872356679277,
  //"longitude": 126.92162173786564,
  "img_url": "https://i.ibb.co/HnXg3qJ/20241214-133411.jpg"
}, {
  "id": 132,
  "name": "전국 사교도 연합",
  //"latitude": 37.525491550475095,
  //"longitude": 126.92270942809802,
  "img_url": "https://i.ibb.co/J7qp4gF/20241214-133457.jpg"
}, {
  "id": 131,
  "name": "응원봉을 든 오타쿠 시민연대",
  //"latitude": 37.52896165988229,
  //"longitude": 126.92116193694461,
  "img_url": "https://i.ibb.co/f1ygwK5/Screenshot-20241214-133006-Chrome.jpg"
}, {
  "id": 130,
  "name": "ㄷㄷㄷ 고양 민주 오징어당",
  //"latitude": 37.529331661891725,
  //"longitude": 126.91979277683866,
  "img_url": "https://i.ibb.co/Y8sht20/2.png"
}, {
  "id": 129,
  "name": "고산병 연구회",
  //"latitude": 37.529275849394544,
  //"longitude": 126.9198528631302,
  "img_url": "https://i.ibb.co/x14jjqP/gr.jpg"
}, {
  "id": 128,
  "name": "이이덕 이게다 이승환 덕분이다",
  //"latitude": 37.52688140487717,
  //"longitude": 126.92151122366487,
  "img_url": "https://i.ibb.co/PtsJzF6/lsh.jpg"
}, {
  "id": 127,
  "name": "전국 뒤로 미루기 연합",
  //"latitude": 37.5277306743877,
  //"longitude": 126.92110225606739,
  "img_url": "https://i.ibb.co/5YZFPps/f2.webp"
}, {
  "id": 126,
  "name": "스타워즈 저항군 서울지부",
  //"latitude": 37.52755461119749,
  //"longitude": 126.92009501947727,
  "img_url": "https://i.ibb.co/bJ6gRYh/starwars.webp"
}, {
  "id": 125,
  "name": "화분안죽이기실천시민연합",
  //"latitude": 37.52599563615892,
  //"longitude": 126.92044035859033,
  "img_url": "https://i.ibb.co/kX1b4h9/f12.webp"
}, {
  "id": 124,
  "name": "사과해요 나한테",
  //"latitude": 37.527612215600264,
  //"longitude": 126.92261084724434,
  "img_url": "https://i.ibb.co/M1933Tq/9.webp"
}, {
  "id": 123,
  "name": "전국 치즈냥 연구회",
  //"latitude": 37.528746705425846,
  //"longitude": 126.9198908740072,
  "img_url": "https://i.ibb.co/zG5fvzk/cheese-cat.jpg"
}, {
  "id": 122,
  "name": "전국 집에누워있기 연합",
  //"latitude": 37.526695325396055,
  //"longitude": 126.92044493612028,
  "img_url": "https://i.ibb.co/GvH86L0/f23.jpg"
}, {
  "id": 116,
  "name": "포항공과대학교",
  //"latitude": 37.52979589974758,
  //"longitude": 126.92070899277542,
  "img_url": "https://i.ibb.co/rbrChKV/postech.png"
}, {
  "id": 115,
  "name": "조국혁신당 탄핵추진위원회",
  //"latitude": 37.525582875313646,
  //"longitude": 126.92248277678726,
  "img_url": "https://i.ibb.co/2nJmXw7/cho.jpg"
}, {
  "id": 104,
  "name": "진격의 묘다이",
  //"latitude": 37.52536062260822,
  //"longitude": 126.92219344636317,
  "img_url": "https://i.ibb.co/jRndQrJ/1734062722477.png"
}, {
  "id": 103,
  "name": "하야하그라 한국 고산지 발기부전 연구회",
  //"latitude": 37.527036230990866,
  //"longitude": 126.92040229590665,
  "img_url": "https://i.ibb.co/L8PLCz5/ba.jpg"
}, {
  "id": 102,
  "name": "전국 춘전 협회",
  //"latitude": 37.52820384555564,
  //"longitude": 126.92213372980008,
  "img_url": "https://i.ibb.co/6tRV0Rt/gg.jpg"
}, {
  "id": 101,
  "name": "전국 얼죽아 협회 서울지부",
  //"latitude": 37.52615583879107,
  //"longitude": 126.9219206689261,
  "img_url": "https://i.ibb.co/Wkh0K6n/ia.jpg"
}, {
  "id": 100,
  "name": "It's NOT X 트위터라 부르는 사람들",
  //"latitude": 37.529308434040864,
  //"longitude": 126.92146071620301,
  "img_url": "https://i.ibb.co/tb0h7XW/nt.jpg"
}, {
  "id": 99,
  "name": "非 시네필 연합회 아진짜시네필아니라고",
  //"latitude": 37.52584415301829,
  //"longitude": 126.92260235276888,
  "img_url": "https://i.ibb.co/8r678s1/cn.jpg"
}, {
  "id": 98,
  "name": "전국 웹소 읽기 연합회",
  //"latitude": 37.525476970808384,
  //"longitude": 126.9218589054837,
  "img_url": "https://i.ibb.co/ns8Cs8W/wrr.jpg"
}, {
  "id": 97,
  "name": "웹소 작가 마감하기도 급한데",
  //"latitude": 37.52661789184885,
  //"longitude": 126.91964816234011,
  "img_url": "https://i.ibb.co/16WJKcw/ma.webp"
}, {
  "id": 96,
  "name": "원고하다 뛰쳐나온 로판 작가 모임회",
  //"latitude": 37.52932780887299,
  //"longitude": 126.92106219198266,
  "img_url": "https://i.ibb.co/c31LxW5/wr.jpg"
}, {
  "id": 95,
  "name": "전국 인공지능 순애 추진 위원회",
  //"latitude": 37.52699369807616,
  //"longitude": 126.9212427625017,
  "img_url": "https://i.ibb.co/6sHFbm1/ai.jpg"
}, {
  "id": 94,
  "name": "구국의 서태웅 친위대 전국 연합",
  //"latitude": 37.526663243579584,
  //"longitude": 126.92219888823672,
  "img_url": "https://i.ibb.co/hfYZGx9/ss.jpg"
}, {
  "id": 93,
  "name": "국제 유니콘 보호협회 한국지부",
  //"latitude": 37.529802012575864,
  //"longitude": 126.92247996063682,
  "img_url": "https://i.ibb.co/PGttR73/uc.jpg"
}, {
  "id": 92,
  "name": "칼데아 한국 지부 마스터 노동조합",
  //"latitude": 37.529939042878006,
  //"longitude": 126.92069821345007,
  "img_url": "https://i.ibb.co/xjvSkpH/kku.jpg"
}, {
  "id": 91,
  "name": "내일의 지구를 모른 척할 수 없기에",
  //"latitude": 37.525553100957936,
  //"longitude": 126.920837492268,
  "img_url": "https://i.ibb.co/5FdbXyf/eee.png"
}, {
  "id": 90,
  "name": "범야옹연대",
  //"latitude": 37.52806361043039,
  //"longitude": 126.92126248845778,
  "img_url": "https://i.ibb.co/sRg41nr/2.webp"
}, {
  "id": 89,
  "name": "집보는 햄스터노조 하야~츄!",
  //"latitude": 37.529138032825635,
  //"longitude": 126.92180991716589,
  "img_url": "https://i.ibb.co/3yKrkHs/18.jpg"
}, {
  "id": 88,
  "name": "은하열차개척자연합",
  //"latitude": 37.52732397693333,
  //"longitude": 126.9225809205468,
  "img_url": "https://i.ibb.co/KzRCpDB/17.jpg"
}, {
  "id": 87,
  "name": "M78 우주경비대 한국지부",
  //"latitude": 37.52773688355439,
  //"longitude": 126.92282725051466,
  "img_url": "https://i.ibb.co/ZWyGGcT/16.jpg"
}, {
  "id": 86,
  "name": "볼트론 저항군 연합",
  //"latitude": 37.52817436061815,
  //"longitude": 126.92208074448287,
  "img_url": "https://i.ibb.co/BcfNh4r/15.jpg"
}, {
  "id": 85,
  "name": "어메이징 두족류연합 한국지부",
  //"latitude": 37.52786082318597,
  //"longitude": 126.92171851511814,
  "img_url": "https://i.ibb.co/mzThFM4/14.jpg"
}, {
  "id": 84,
  "name": "ㄷㄷㄷ 고양 민주 오징어당",
  //"latitude": 37.528994658666655,
  //"longitude": 126.92028271803676,
  "img_url": "https://i.ibb.co/y8bCdZQ/2.png"
}, {
  "id": 83,
  "name": "읏 전국 가능충 연합회",
  //"latitude": 37.52984270893591,
  //"longitude": 126.9214594833366,
  "img_url": "https://i.ibb.co/wp64W2J/1.webp"
}, {
  "id": 82,
  "name": "전국 콜드플레이 예매 성공자 연합",
  //"latitude": 37.5258163930013,
  //"longitude": 126.92168527291835,
  "img_url": "https://i.ibb.co/fHyXnLg/13.jpg"
}, {
  "id": 81,
  "name": "빛의 전사 연합",
  //"latitude": 37.52537678600944,
  //"longitude": 126.92023662363984,
  "img_url": "https://i.ibb.co/2y0rG46/12.jpg"
}, {
  "id": 80,
  "name": "개구리도 침략독재를 꿈꾸던 지난날을 반성했다",
  //"latitude": 37.52561975628095,
  //"longitude": 126.92200184331016,
  "img_url": "https://i.ibb.co/t8rfmmM/11.jpg"
}, {
  "id": 79,
  "name": "고양이를 국회로 고양이당",
  //"latitude": 37.52835040103146,
  //"longitude": 126.92183267095025,
  "img_url": "https://i.ibb.co/3yxcqYr/10.jpg"
}, {
  "id": 78,
  "name": "사과해요 나한테",
  //"latitude": 37.52736514516494,
  //"longitude": 126.92059938456407,
  "img_url": "https://i.ibb.co/vHJQYz3/9.jpg"
}, {
  "id": 77,
  "name": "전국 D점멸 협회",
  //"latitude": 37.52969864687596,
  //"longitude": 126.92142294893642,
  "img_url": "https://i.ibb.co/Z1zyKVc/8.jpg"
}, {
  "id": 76,
  "name": "전국 시민 밤샘 위원회",
  //"latitude": 37.52806557156004,
  //"longitude": 126.91979702355637,
  "img_url": "https://i.ibb.co/QDxK36g/7.jpg"
}, {
  "id": 75,
  "name": "전국 게으름뱅이 연합",
  //"latitude": 37.52749565077961,
  //"longitude": 126.92276045676559,
  "img_url": "https://i.ibb.co/2twyBXW/6.jpg"
}, {
  "id": 74,
  "name": "피크민 하는 시위 나온 사람들",
  //"latitude": 37.5281223832362,
  //"longitude": 126.9223324371372,
  "img_url": "https://i.ibb.co/yP0GNkM/image.webp"
}, {
  "id": 73,
  "name": "한국인 밥상머리 예절 연구소",
  //"latitude": 37.52823268865324,
  //"longitude": 126.92167762939539,
  "img_url": "https://i.ibb.co/qDVQJFd/5.jpg"
}, {
  "id": 72,
  "name": "신지, 에바에서 내려라 연합",
  //"latitude": 37.52656771763268,
  //"longitude": 126.92118082898611,
  "img_url": "https://i.ibb.co/rp9WNTb/1.png"
}, {
  "id": 71,
  "name": "아모로트 창조물 관리국 노동시민 연합",
  //"latitude": 37.52592317374263,
  //"longitude": 126.9217129325076,
  "img_url": "https://i.ibb.co/nkjkdyk/image.png"
}, {
  "id": 70,
  "name": "걷는 버섯 동호회",
  //"latitude": 37.527350268433175,
  //"longitude": 126.92118435968474,
  "img_url": "https://i.ibb.co/bRMNYGq/4.jpg"
}, {
  "id": 69,
  "name": "하오문 대한민국 서울지부",
  //"latitude": 37.52737261309929,
  //"longitude": 126.91998386075932,
  "img_url": "https://i.ibb.co/6yFjdTr/3.jpg"
}, {
  "id": 68,
  "name": "전국설명충연합회",
  //"latitude": 37.52691423961758,
  //"longitude": 126.92054421486515,
  "img_url": "https://i.ibb.co/PZw29Q4/Gd64-Eo1a0-AEf-y-G.jpg"
}, {
  "id": 67,
  "name": "샬레이안 마법대학 장작모으기학과",
  //"latitude": 37.53004263087899,
  //"longitude": 126.92175478288267,
  "img_url": "https://i.ibb.co/rvsnfqH/2.jpg"
}, {
  "id": 66,
  "name": "뜬눈 편집자들",
  //"latitude": 37.52537739456814,
  //"longitude": 126.92150822198687,
  "img_url": "https://i.ibb.co/1mfjfTr/images-4.jpg"
}, {
  "id": 65,
  "name": "수능 끝난 고3 영역 탄핵형",
  //"latitude": 37.52674696468,
  //"longitude": 126.91982638770007,
  "img_url": "https://i.ibb.co/0KgDQTf/Screenshot-20241213-025045-Chrome.jpg"
}, {
  "id": 64,
  "name": "최애 귀여움학회",
  //"latitude": 37.52905548126513,
  //"longitude": 126.92145585707534,
  "img_url": "https://i.ibb.co/S63Xc0w/images-3.jpg"
}, {
  "id": 63,
  "name": "계엄? 이것 뭐에요~???",
  //"latitude": 37.52807190985329,
  //"longitude": 126.91972042879884,
  "img_url": "https://i.ibb.co/rZpBjmp/images-2.jpg"
}, {
  "id": 62,
  "name": "만두노총 새우만두노조",
  //"latitude": 37.5287591595206,
  //"longitude": 126.92268171674996,
  "img_url": "https://i.ibb.co/ZWdKcB6/images-1.jpg"
}, {
  "id": 61,
  "name": "한총련",
  //"latitude": 37.52680815144601,
  //"longitude": 126.92213872458382,
  "img_url": "https://i.ibb.co/CPMsnh6/20241213-023019.jpg"
}, {
  "id": 60,
  "name": "의혈중앙",
  //"latitude": 37.527010615569615,
  //"longitude": 126.91988522454587,
  "img_url": "https://i.ibb.co/nLBgT8v/20241213-022944.jpg"
}, {
  "id": 59,
  "name": "전대협 동우회",
  //"latitude": 37.52659312943531,
  //"longitude": 126.92111595462862,
  "img_url": "https://i.ibb.co/6YwY9Ls/content-750f56140f.jpg"
}, {
  "id": 58,
  "name": "대한버추얼싱어권익위원회",
  //"latitude": 37.529248079589316,
  //"longitude": 126.92187950158642,
  "img_url": "https://i.ibb.co/dcC3QMY/1004-913-5315.jpg"
}, {
  "id": 57,
  "name": "안보리(안주보장이사회)",
  //"latitude": 37.52889060791167,
  //"longitude": 126.9210779225677,
  "img_url": "https://i.ibb.co/R2SxXxJ/20241213-020737.jpg"
}, {
  "id": 56,
  "name": "토요폭식회 프로참석자 모임",
  //"latitude": 37.52864406723908,
  //"longitude": 126.91974750469052,
  "img_url": "https://i.ibb.co/v3WM6VH/20241213-020802.jpg"
}, {
  "id": 55,
  "name": "선호외계인 보호협회",
  //"latitude": 37.52544329065267,
  //"longitude": 126.92288099842216,
  "img_url": "https://i.ibb.co/fXy8pD2/20241213-020924.jpg"
}, {
  "id": 54,
  "name": "걸을 때 휴대폰 안 보기 운동본부",
  //"latitude": 37.529958593173745,
  //"longitude": 126.92193943043351,
  "img_url": "https://i.ibb.co/QvqC9xS/20241213-020900.jpg"
}, {
  "id": 53,
  "name": "말이되는소리연합",
  //"latitude": 37.52552614096859,
  //"longitude": 126.92156781007431,
  "img_url": "https://i.ibb.co/YD0H8J2/20241213-020832.jpg"
}, {
  "id": 52,
  "name": "우정팔찌연합",
  //"latitude": 37.52561457903569,
  //"longitude": 126.92070010640396,
  "img_url": "https://i.ibb.co/611KB4x/images.jpg"
}, {
  "id": 51,
  "name": "전국민주노동조합총연맹",
  //"latitude": 37.52895763173544,
  //"longitude": 126.92217300397367,
  "img_url": "https://i.ibb.co/wJv4sqX/5985-17711-388.jpg"
}, {
  "id": 50,
  "name": "전국 가상 아이돌 노동조합",
  //"latitude": 37.52544192809258,
  //"longitude": 126.91991120281901,
  "img_url": "https://i.ibb.co/7VXnmw8/10.png"
}, {
  "id": 49,
  "name": "전국 혈당 스파이크 방지 협회",
  //"latitude": 37.52701236914018,
  //"longitude": 126.9207515924566,
  "img_url": "https://i.ibb.co/SvLzshr/9.png"
}, {
  "id": 48,
  "name": "제로칼로리스팸추진협회",
  //"latitude": 37.52839174684855,
  //"longitude": 126.92178369857099,
  "img_url": "https://i.ibb.co/NnsDG5q/8.png"
}, {
  "id": 47,
  "name": "전국거북목협회",
  //"latitude": 37.52944299156324,
  //"longitude": 126.9223953433321,
  "img_url": "https://i.ibb.co/5vS0Rj8/7.png"
}, {
  "id": 46,
  "name": "먹을까말까고민되면먹기운동본부",
  //"latitude": 37.526178792690935,
  //"longitude": 126.92230336946736,
  "img_url": "https://i.ibb.co/CK6D4KG/6.png"
}, {
  "id": 45,
  "name": "전국얼죽아연합회",
  //"latitude": 37.5300379811576,
  //"longitude": 126.91990021392465,
  "img_url": "https://i.ibb.co/Tk1ZX6g/5.png"
}, {
  "id": 44,
  "name": "전국삼각김밥미식가협회",
  //"latitude": 37.52714737162008,
  //"longitude": 126.92053332638929,
  "img_url": "https://i.ibb.co/52W6cg1/4.png"
}, {
  "id": 43,
  "name": "제발 아무것도 안 하고 싶은 사람들의 모임",
  //"latitude": 37.528708052254565,
  //"longitude": 126.92263989718019,
  "img_url": "https://i.ibb.co/fH52vRn/3.png"
}, {
  "id": 42,
  "name": "전국쿼카보호협회",
  //"latitude": 37.52619472816786,
  //"longitude": 126.92051717048398,
  "img_url": "https://i.ibb.co/W5n2Q9m/2.png"
}, {
  "id": 41,
  "name": "푸바오의 행복을 바라는 모임",
  //"latitude": 37.52827469588377,
  //"longitude": 126.9195394111099,
  "img_url": "https://i.ibb.co/Krvxc66/1.png"
}, {
  "id": 40,
  "name": "트위터 고양이 사랑회",
  //"latitude": 37.52611470432227,
  //"longitude": 126.92118065076603,
  "img_url": "https://i.ibb.co/6rtrrLk/twitter-cat.jpg"
}, {
  "id": 39,
  "name": "트윈테일 결사단",
  //"latitude": 37.52774711126671,
  //"longitude": 126.9222668398186,
  "img_url": "https://i.ibb.co/MDYhxhT/twin-tail.jpg"
}, {
  "id": 38,
  "name": "턱시도 고양이 사랑단",
  //"latitude": 37.52843271528622,
  //"longitude": 126.91986462729183,
  "img_url": "https://i.ibb.co/y0KvJL8/tuxedo-cat.jpg"
}, {
  "id": 37,
  "name": "전국 과체중 고양이 연합",
  //"latitude": 37.52712475486572,
  //"longitude": 126.9208984995288,
  "img_url": "https://i.ibb.co/zX8K41X/overweight-cat.jpg"
}, {
  "id": 36,
  "name": "행운을 주는 검은 고양이 연합",
  //"latitude": 37.52806563842692,
  //"longitude": 126.9194892067607,
  "img_url": "https://i.ibb.co/Hdv8hVg/lucky-cat.jpg"
}, {
  "id": 35,
  "name": "전국 치즈냥 연구회",
  //"latitude": 37.525347658894056,
  //"longitude": 126.91956920162885,
  "img_url": "https://i.ibb.co/qnSL330/cheese-cat.jpg"
}, {
  "id": 34,
  "name": "캔따개 노동조합",
  //"latitude": 37.527114017944776,
  //"longitude": 126.9204447252818,
  "img_url": "https://i.ibb.co/mh7Myfz/can.jpg"
}, {
  "id": 33,
  "name": "전국냥아치혈맹",
  //"latitude": 37.52748439571299,
  //"longitude": 126.92115622239004,
  "img_url": "https://i.ibb.co/pwp2sZD/blood-blind-cat.jpg"
}, {
  "id": 32,
  "name": "전국계란은완숙협회",
  //"latitude": 37.52792382322535,
  //"longitude": 126.92064627645321,
  "img_url": "https://i.ibb.co/JQYpvqH/egg.jpg"
}, {
  "id": 31,
  "name": "메탈 야옹",
  //"latitude": 37.52621124943236,
  //"longitude": 126.92154156958357,
  "img_url": "https://i.ibb.co/Ssr33cT/metal-cat.jpg"
}, {
  "id": 30,
  "name": "국제 연합우주 고양이 위원회",
  //"latitude": 37.52627925756127,
  //"longitude": 126.92105390875624,
  "img_url": "https://i.ibb.co/BKjNSRL/space-cat.jpg"
}, {
  "id": 29,
  "name": "스타워즈 저항군 서울지부",
  //"latitude": 37.529300121437764,
  //"longitude": 126.92144527560721,
  "img_url": "https://i.ibb.co/cJVqGM1/starwars.jpg"
}, {
  "id": 28,
  "name": "우리나라 정상영업 합니다",
  //"latitude": 37.5318046,
  //"longitude": 126.9141547,
  "img_url": "https://i.ibb.co/BghqQgj/normal-operation.jpg"
}, {
  "id": 27,
  "name": "OTT 뭐볼지 못고르는 사람들 연합회",
  //"latitude": 37.531721,
  //"longitude": 126.916117,
  "img_url": "https://i.ibb.co/yRP30qy/ott.jpg"
}, {
  "id": 26,
  "name": "민주묘총",
  //"latitude": 37.528622,
  //"longitude": 126.916311,
  "img_url": "https://i.ibb.co/f93HBG9/Democratic-Cat.jpg"
}, {
  "id": 25,
  "name": "동식물 쓰다듬기 연구회",
  //"latitude": 37.530077,
  //"longitude": 126.918633,
  "img_url": "https://i.ibb.co/fNDTDBF/333831733725834567.jpg"
}, {
  "id": 24,
  "name": "날아다니는 스파게티 괴물연맹",
  //"latitude": 37.502748608638754,
  //"longitude": 126.93389503909046,
  "img_url": "https://i.ibb.co/pLZNCHh/fsm.jpg"
}, {
  "id": 23,
  "name": "전국 집에누워있기 연합",
  //"latitude": 37.511678063743275,
  //"longitude": 126.93175436933795,
  "img_url": "/img/flags/f23.jpg"
}, {
  "id": 22,
  "name": "직장인 점심메뉴추천 조합",
  //"latitude": 37.501110196543905,
  //"longitude": 126.92659017449964,
  "img_url": "/img/flags/f22.jpg"
}, {
  "id": 21,
  "name": "전국드래곤보존협회",
  //"latitude": 37.50938042572082,
  //"longitude": 126.93442135155941,
  "img_url": "/img/flags/f21.jpg"
}, {
  "id": 20,
  "name": "내향인 입니다",
  //"latitude": 37.51148599489162,
  //"longitude": 126.9311115204269,
  "img_url": "/img/flags/f20.jpg"
}, {
  "id": 19,
  "name": "응원봉연대",
  //"latitude": 37.50826688874798,
  //"longitude": 126.92720966336093,
  "img_url": "/img/flags/f19.jpg"
}, {
  "id": 18,
  "name": "다음주 시험임",
  //"latitude": 37.50706736124061,
  //"longitude": 126.93121675751466,
  "img_url": "/img/flags/f18.jpg"
}, {
  "id": 17,
  "name": "전국 머머리 민머리 연합",
  //"latitude": 37.49783687483148,
  //"longitude": 126.9331329488412,
  "img_url": "/img/flags/f17.jpg"
}, {
  "id": 16,
  "name": "이단원탁연합",
  //"latitude": 37.504041074526725,
  //"longitude": 126.93377694543568,
  "img_url": "/img/flags/f16.jpg"
}, {
  "id": 15,
  "name": "전국 여미새 모임",
  //"latitude": 37.513424971937106,
  //"longitude": 126.93400107333997,
  "img_url": "/img/flags/f15.jpg"
}, {
  "id": 14,
  "name": "전국 눈사람 안아주기 운동본부",
  //"latitude": 37.50244252250775,
  //"longitude": 126.93075115218542,
  "img_url": "/img/flags/f14.jpg"
}, {
  "id": 13,
  "name": "강아지발냄새연구회",
  //"latitude": 37.51203375313728,
  //"longitude": 126.92145584118309,
  "img_url": "/img/flags/f13.jpg"
}, {
  "id": 12,
  "name": "화분안죽이기실천시민연합",
  //"latitude": 37.51424206763406,
  //"longitude": 126.93248906380552,
  "img_url": "/img/flags/f12.png"
}, {
  "id": 11,
  "name": "전국 까만 고양이 연합회",
  //"latitude": 37.50318105526448,
  //"longitude": 126.92407626698395,
  "img_url": "/img/flags/f11.png"
}, {
  "id": 10,
  "name": "전국수족낸증연합",
  //"latitude": 37.50177390585746,
  //"longitude": 126.92556883276758,
  "img_url": "/img/flags/f10.png"
}, {
  "id": 9,
  "name": "혼자 나온 시민",
  //"latitude": 37.49705515157919,
  //"longitude": 126.92794478477025,
  "img_url": "/img/flags/f9.png"
}, {
  "id": 8,
  "name": "피크민 꽃심기 모임",
  //"latitude": 37.507819640384525,
  //"longitude": 126.92922708085301,
  "img_url": "/img/flags/f8.png"
}, {
  "id": 7,
  "name": "돈없고 병든 예술인 연합",
  //"latitude": 37.49655848552289,
  //"longitude": 126.92713592409058,
  "img_url": "https://i.ibb.co/1XjDyct/f7.png"
}, {
  "id": 6,
  "name": "전국 이선좌 피해자 연합",
  //"latitude": 37.50648599362162,
  //"longitude": 126.92973830942933,
  "img_url": "https://i.ibb.co/nnHgh7J/f6.png"
}, {
  "id": 5,
  "name": "전국고양이집사노동조합",
  //"latitude": 37.50882472507087,
  //"longitude": 126.93512023797165,
  "img_url": "https://i.ibb.co/S0F7S69/f5.png"
}, {latitude
  "id": 4,
  "name": "K-승질머리 연맹 칷!",
  //"latitude": 37.50891616122715,
  //"longitude": 126.93517726087975,
  "img_url": "https://i.ibb.co/R6rXvW6/f4.png"
}, {
  "id": 3,
  "name": "전국 깃발 준비 못한 사람 동호회",
  //"latitude": 37.50804823876406,
  //"longitude": 126.931138930737,
  "img_url": "https://i.ibb.co/QHd3RHK/f3.png"
}, {
  "id": 2,
  "name": "전국 뒤로 미루기 연합",
  //"latitude": 37.500938038893295,
  //"longitude": 126.92989513099549,
  "img_url": "/img/flags/f2.png"
}, {
  "id": 1,
  "name": "불꽃남자 정대만 팬클럽",
  //"latitude": 37.5138849677504,
  //"longitude": 126.92862984221085,
  "img_url": "https://i.ibb.co/hHBwh4d/f1.png"
}];
