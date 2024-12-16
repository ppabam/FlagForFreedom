# 🚩 Flag123
- Martial law was declared in the Republic of Korea on Dec. 3, 2025, but lightly marched through the country, armed with cheerful energy. Awesome
- [for her intense poetic prose that confronts historical traumas and exposes the fragility of human life](https://www.nobelprize.org/prizes/literature/2024/press-release/)
- [I would like to share the meaning of this award, which is for literature, with you – standing here in opposition to violence together](https://www.nobelprize.org/prizes/literature/2024/han/speech/)
  
    <img src="https://github.com/user-attachments/assets/b3f29422-60b7-436d-b3eb-70035c1fdacb" width="777">
    
    <img src="https://github.com/user-attachments/assets/ef780ac4-a8d8-4bab-b426-48d4431f6540" width="777">



## 📝 Initial Dummy Data 
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
('#BRAT impeachment and it’s completely different but also still impeachment', 37.525307 + (37.530139 - 37.525307) * RANDOM(), 126.919467 + (126.922896 - 126.919467) * RANDOM(), '/dummy/d1.webp'),
('Korean branch of the Jedi Federation', 37.525307 + (37.530139 - 37.525307) * RANDOM(), 126.919467 + (126.922896 - 126.919467) * RANDOM(), '/dummy/d2.webp'),
('Rapping Rabbit Federation', 37.525307 + (37.530139 - 37.525307) * RANDOM(), 126.919467 + (126.922896 - 126.919467) * RANDOM(), '/dummy/d3.webp'),
('National Carrot Alliance Loving Rabbits', 37.525307 + (37.530139 - 37.525307) * RANDOM(), 126.919467 + (126.922896 - 126.919467) * RANDOM(), '/dummy/d4.webp');


SELECT id,name,img_url FROM flags ORDER BY id DESC;
);

\dt;
```
### 🌱 Env
- Rename env.dummy to .env.local. Make sure the file is not pushed to the public GitHub repository.
- To avoid using analytics and statistics by connecting to Google Firebase, delete analytics.ts.
- Refer to the [Vercel  CLI](https://vercel.com/docs/cli/env) to sync variables for database connection.
- I used https://api.imgbb.com/ for image uploads. In your case, you should obtain a new API key

### 💻 Local Run
- ested on WSL Ubuntu 22.04.4 LTS and macOS. ( node : v20.17.0 ||  v22.12.0, nextjs : 14.2.19)
```
$ npm install
$ npm run dev
```

### 🤝 Contribution
- Contributions are open, though I don’t expect anyone to take an interest. I’ll gratefully accept any small advice or help. Thank you. Best regards. 😊👍
- Data.ts has a UPDATA syntax to verify the caching of vercel. Most of the time, it's not necessary. If it's alive, you can delete it.
```javascript
// https://nextjs.org/docs/app/building-your-application/data-fetching/fetching
const getDbData = unstable_cache(
  async () => {

    // TODO DISABLE
    await sql`
        UPDATE select_count
        SET count = count + 1, last_updated = now()
        WHERE id = 1;
      `;

    const data = await sql<Flag>`SELECT id, name, img_url FROM flags ORDER BY id DESC`;
    return data.rows;
  },
  ['msi'],
  {
    revalidate: CACHE_TIMEOUT,
    tags: ['ism']
  }
)
```

### 🚀 Deploy & Connect DB
- https://vercel.com/docs/deployments/overview
- https://vercel.com/docs/storage/vercel-postgres#vercel-postgres
- https://vercel.com/docs/cli/env


### 🔖 Ref
- https://medium.com/@alexandre.penombre/file-upload-with-next-js-14-app-router-6cb0e594e778
- https://nextjs.org/docs/14/app/api-reference/functions/unstable_cache
- https://nextjs.org/docs/app/api-reference/config/next-config-js/headers
- https://medium.com/@aleksej.gudkov/how-to-disable-cache-in-next-js-a-comprehensive-guide-a1603559483e
- https://nextjs.org/docs/pages/building-your-application/configuring/debugging
- https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadata-fields

