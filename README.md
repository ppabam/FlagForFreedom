This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Table
```sql
CREATE TABLE flags (
    id SERIAL PRIMARY KEY,               -- 자동 증가 ID
    name TEXT NOT NULL,                  -- 위치 이름
    img BYTEA NOT NULL,                  -- 이미지 데이터 (바이너리 형태)
    latitude DOUBLE PRECISION NOT NULL,  -- 위도
    longitude DOUBLE PRECISION NOT NULL  -- 경도
);

\dt;

ALTER TABLE flags
    DROP COLUMN img,              -- img 컬럼 삭제
    ADD COLUMN img_url TEXT NOT NULL; -- img_url 컬럼 추가

\dt;

\d flags;


INSERT INTO flags (name, latitude, longitude, img_url) VALUES
('불꽃남자 정대만 팬클럽', 37.5138849677504, 126.92862984221085, 'https://i.ibb.co/hHBwh4d/f1.png'),
('전국 뒤로 미루기 연합', 37.500938038893295, 126.92989513099549, '/img/flags/f2.png'),
('전국 깃발 준비 못한 사람 동호회', 37.50804823876406, 126.931138930737, 'https://i.ibb.co/QHd3RHK/f3.png'),
('K-승질머리 연맹 칷!', 37.50891616122715, 126.93517726087975, 'https://i.ibb.co/R6rXvW6/f4.png'),
('전국고양이집사노동조합', 37.50882472507087, 126.93512023797165, 'https://i.ibb.co/S0F7S69/f5.png'),
('전국 이선좌 피해자 연합', 37.50648599362162, 126.92973830942933, 'https://i.ibb.co/nnHgh7J/f6.png'),
('돈없고 병든 예술인 연합', 37.49655848552289, 126.92713592409058, 'https://i.ibb.co/1XjDyct/f7.png'),
('피크민 꽃심기 모임', 37.507819640384525, 126.92922708085301, '/img/flags/f8.png'),
('혼자 나온 시민', 37.49705515157919, 126.92794478477025, '/img/flags/f9.png'),
('전국수족낸증연합', 37.50177390585746, 126.92556883276758, '/img/flags/f10.png'),
('전국 까만 고양이 연합회', 37.50318105526448, 126.92407626698395, '/img/flags/f11.png'),
('화분안죽이기실천시민연합', 37.51424206763406, 126.93248906380552, '/img/flags/f12.png'),
('강아지발냄새연구회', 37.51203375313728, 126.92145584118309, '/img/flags/f13.jpg'),
('전국 눈사람 안아주기 운동본부', 37.50244252250775, 126.93075115218542, '/img/flags/f14.jpg'),
('전국 여미새 모임', 37.513424971937106, 126.93400107333997, '/img/flags/f15.jpg'),
('이단원탁연합', 37.504041074526725, 126.93377694543568, '/img/flags/f16.jpg'),
('전국 머머리 민머리 연합', 37.49783687483148, 126.9331329488412, '/img/flags/f17.jpg'),
('다음주 시험임', 37.50706736124061, 126.93121675751466, '/img/flags/f18.jpg'),
('응원봉연대', 37.50826688874798, 126.92720966336093, '/img/flags/f19.jpg'),
('내향인 입니다', 37.51148599489162, 126.9311115204269, '/img/flags/f20.jpg'),
('전국드래곤보존협회', 37.50938042572082, 126.93442135155941, '/img/flags/f21.jpg'),
('직장인 점심메뉴추천 조합', 37.501110196543905, 126.92659017449964, '/img/flags/f22.jpg'),
('전국 집에누워있기 연합', 37.511678063743275, 126.93175436933795, '/img/flags/f23.jpg');


SELECT id,name,img_url FROM flags ORDER BY id DESC;
);

\dt;
```

### Ref
- https://medium.com/@alexandre.penombre/file-upload-with-next-js-14-app-router-6cb0e594e778
- https://nextjs.org/docs/14/app/api-reference/functions/unstable_cache

---
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
