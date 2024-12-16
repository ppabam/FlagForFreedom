"use client";

export const Form = () => {
  return (
    <input
      type="file"
      name="+"
      onChange={async (e) => {
        if (e.target.files) {
          const formData = new FormData();
          Object.values(e.target.files).forEach((file) => {
            formData.append("file", file);
          });

          const response = await fetch("/api/flags/upload", {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${process.env.NEXT_PUBLIC_F123_API_KEY}`, // 헤더에 API_KEY 추가
            },
            body: formData,
          });

          const result = await response.json();
          if (result.success) {
            alert("Upload ok : " + result.name);
          } else {
            alert("Upload failed");
          }
        }
      }}
    />
  );
};