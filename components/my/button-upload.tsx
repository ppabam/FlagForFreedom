'use client'

import { ImageUp } from "lucide-react";
import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"


export function ButtonUpload() {
  const { toast } = useToast();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setSelectedFile(file);

      toast({
        title: '까막 까치 울 때까지 올려라 탄핵 🚩 힘차게 ✊',
        description: file.name,
        duration: 5000,
      });
    }
  };
  return (
    <>
      {/* 숨겨진 파일 입력 */}
      <input
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleFileChange}
        id="file-input"
      />

      {/* ShadCN Button을 클릭하면 파일 선택 창 열리게 하기 */}
      <Button variant="ghost" asChild>
        <label htmlFor="file-input" style={{ cursor: 'pointer' }}>
          <ImageUp />
        </label>
      </Button>

      {/* 선택된 파일이 있으면 파일 이름 표시 */}
      {selectedFile && <p className="hidden">Selected file: {selectedFile.name}</p>}
    </>
  )
}