'use client'

import { ImageUp, Loader2 } from "lucide-react";
import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { ToastAction } from "@/components/ui/toast"
import { getCacheTimeout } from '@/lib/utils';

interface ButtonUploadProps {
  searchTerm: string;
}

export function ButtonUpload({ searchTerm }: ButtonUploadProps) {
  const { toast } = useToast();

  const [loading, setLoading] = useState(false);


  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!searchTerm) {
      toast({
        variant: "destructive",
        title: '😚 need the name of the flag',
        description: "깃발 이미지🖼️를 업로드하려면 먼저 사용할 이름을 검색창🔍에 입력해 주세요.🤣",
        action: <ToastAction altText="OK">투쟁</ToastAction>,
        duration: 10000,
      });
      return;
    }

    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setLoading(true);

      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await fetch('/api/flags/imgbb', {
          method: 'POST',
          body: formData,
        });

        const result = await response.json();
        if (!response.ok) {
          throw new Error(result.error);
        }

        // Insert the flag data into the database via the new API
        const dbResponse = await fetch('/api/flags/insert', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name: searchTerm, img_url: result.imageUrl }),
        });

        if (!dbResponse.ok) {
          const dbError = await dbResponse.json();
          throw new Error(dbError.error || 'Failed to insert flag into the database.');
        }

        toast({
          title: '까막 까치 울 때까지 올려라 탄핵 🚩 힘차게 ✊',
          description: `깃발 업로드가 성공하였습니다.계엄 국무회의 심의 과정을 거쳐 ${getCacheTimeout()}초 안에 갱신됩니다.`,
          duration: 5000,
        });

      } catch (err: unknown) {
        if (err instanceof Error) {
          toast({
            variant: "destructive",
            title: "허접한 프로그램으로 불편을 드려 죄송합니다.",
            description: "❄️ 추운 겨울 날씨에 집회 참여 감사드리며, 불편 드려 죄송합니다. 🙇‍♂️",
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          })
        } else {
          console.warn("[123] 내란 우두머리");
        }
      } finally {
        setLoading(false);
      }

    } else {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      })
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
      <Button variant="ghost" disabled={loading} style={{ width: '30px', height: '30px' }} className="hover:text-blue-700">
        <label htmlFor="file-input" style={{ cursor: 'pointer' }}>
          {loading ? (
            <Loader2 className="animate-spin" style={{ width: '30px', height: '30px' }} />
          ) : (
            <ImageUp
              size={33}
              className="animate-pulse duration-1000"
              style={{
                width: '29px', // 이미지 크기
                height: '29px',
              }}
            />
          )}
        </label>
      </Button>
    </>
  )
}