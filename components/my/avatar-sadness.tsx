import { Flag } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function AvatarSadness() {
  return (
    <Avatar className="hover:animate-bounce">
      <AvatarImage src="/sadness.webp" />
      <AvatarFallback><Flag /></AvatarFallback>
    </Avatar>
  )
}