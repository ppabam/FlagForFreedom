import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";

interface InputFlagSearchProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function InputFlagSearch({ value, onChange }: InputFlagSearchProps) {
  const [placeholder, setPlaceholder] = useState("🔍");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      console.log(`window.innerWidth:${width}`);
      if (width >= 768) {
        setPlaceholder("🔍 검색 or 📤 업로드 이미지 🚩 이름 입력 ✍️");
      } else if (width >= 400) {
        setPlaceholder("🔍 계엄배 🏆천하제일깃발대회");
      } else if (width >= 350) {
        setPlaceholder("🔍 천하제일🏆깃발대회");
      } else {
        setPlaceholder("천하제일깃발대회");
      }
    };

    handleResize(); // 초기 설정
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="!placeholder-indigo-400"
    />
  );
}
