import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import type { ComponentVariant, PropDetail } from "@/lib/components-data"

export const avatarProps: PropDetail[] = [
  {
    name: "src",
    type: "string",
    description: "The URL of the image to display.",
  },
  {
    name: "alt",
    type: "string",
    description: "Alternative text for the image.",
  },
  {
    name: "children",
    type: "React.ReactNode",
    description: "The content of the avatar (e.g., AvatarImage, AvatarFallback).",
  },
]

export const avatarVariants: ComponentVariant[] = [
  {
    title: "Default Avatar",
    description: "A basic avatar with an image and a fallback for when the image fails to load.",
    code: `import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function DefaultAvatar() {
  return (
    <Avatar>
      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}`,
    preview: (
      <Avatar>
        <AvatarImage src="/placeholder.svg?height=40&width=40" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    ),
  },
  {
    title: "Avatar with Initials",
    description: "An avatar displaying initials when no image is provided or available.",
    code: `import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function InitialsAvatar() {
  return (
    <Avatar>
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  )
}`,
    preview: (
      <Avatar>
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    ),
  },
]
