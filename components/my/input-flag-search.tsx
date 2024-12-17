import { Input } from "@/components/ui/input"

interface InputFlagSearchProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function InputFlagSearch({ value, onChange }: InputFlagSearchProps) {
  return (
    <Input
      value={value}
      onChange={onChange}
      placeholder="야발라바하야 야발라바탄핵"
      className="!placeholder-red-300"
    />
  )
}