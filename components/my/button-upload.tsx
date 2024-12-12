'use client'

import { ImageUp, Loader2 } from "lucide-react";
import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { ToastAction } from "@/components/ui/toast"


export function ButtonUpload() {
  const { toast } = useToast();

  const [loading, setLoading] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
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

        toast({
          title: '까막 까치 울 때까지 올려라 탄핵 🚩 힘차게 ✊',
          description: result.imageUrl,
          duration: 5000,
        });

      } catch (err: unknown) {
        if (err instanceof Error) {
          toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          })
        } else {
          // setError('An unknown error occurred'); // Error 객체가 아닐 경우 처리
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
      <Button variant="ghost" disabled={loading} asChild >
        <label htmlFor="file-input" style={{ cursor: 'pointer' }}>
          {loading ? <Loader2 className="animate-spin" /> : <ImageUp />}
        </label>
      </Button>
    </>
  )
}