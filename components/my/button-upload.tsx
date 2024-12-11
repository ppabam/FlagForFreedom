'use client'

import { ImageUp } from "lucide-react";
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

export function ButtonUpload() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setSelectedFile(file);
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
      {/* {selectedFile && <p>Selected file: {selectedFile.name}</p>} */}
    </>
  )
}