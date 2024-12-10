'use client';

import { useState } from 'react';


// export const ImgbbForm = () => {
export function ImgbbForm() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile) {
      setError('Please select a file.');
      return;
    }

    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await fetch('/api/flags/imgbb', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error);
      }

      setImageUrl(result.imageUrl);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred'); // Error 객체가 아닐 경우 처리
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="border p-2"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded disabled:opacity-50"
        disabled={loading}
      >
        {loading ? 'Uploading...' : 'Upload'}
      </button>
      {imageUrl && (
        <div className="mt-4">
          <p className="text-green-500">Image uploaded successfully!</p>
          <img
            src={imageUrl}
            alt="Uploaded"
            className="mt-2 w-40 h-40 object-cover rounded"
          />
        </div>
      )}
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
}
