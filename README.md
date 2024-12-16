# Flag123
- Martial law was declared in the Republic of Korea on Dec. 3, 2025, but lightly marched through the country, armed with cheerful energy. Awesome

## Initial Data 
- [use vercel-postgres](https://vercel.com/docs/storage/vercel-postgres)
```sql
CREATE TABLE flags (
    id SERIAL PRIMARY KEY,               -- 자동 증가 ID
    name TEXT NOT NULL,                  -- 위치 이름
    img_url TEXT NOT NULL,                  -- 이미지 데이터 (바이너리 형태)
    latitude DOUBLE PRECISION NOT NULL,  -- 위도
    longitude DOUBLE PRECISION NOT NULL  -- 경도
);

\dt;

\d flags;


INSERT INTO flags (name, latitude, longitude, img_url) VALUES
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

INSERT INTO flags (name, img_url, latitude, longitude)
VALUES ('국제 연합우주 고양이 위원회','https://i.ibb.co/BKjNSRL/space-cat.jpg',37.525307 + (37.530139 - 37.525307) * RANDOM(), 126.919467 + (126.922896 - 126.919467) * RANDOM());
```

### Ref
- https://medium.com/@alexandre.penombre/file-upload-with-next-js-14-app-router-6cb0e594e778
- https://nextjs.org/docs/14/app/api-reference/functions/unstable_cache
- https://nextjs.org/docs/app/api-reference/config/next-config-js/headers
- https://medium.com/@aleksej.gudkov/how-to-disable-cache-in-next-js-a-comprehensive-guide-a1603559483e
- https://nextjs.org/docs/pages/building-your-application/configuring/debugging
- https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadata-fields

