import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { ComponentVariant, PropDetail } from "@/lib/components-data"

export const tabsProps: PropDetail[] = [
  {
    name: "defaultValue",
    type: "string",
    description: "The value of the tab that should be active when initially rendered.",
  },
  {
    name: "value",
    type: "string",
    description: "The controlled value of the active tab.",
  },
  {
    name: "onValueChange",
    type: "(value: string) => void",
    description: "Event handler called when the active tab changes.",
  },
  {
    name: "orientation",
    type: `"horizontal" | "vertical"`,
    description: "The orientation of the tabs.",
    default: `"horizontal"`,
  },
]

export const tabsVariants: ComponentVariant[] = [
  {
    title: "Default Tabs",
    description: "A basic set of tabs for organizing content.",
    code: `import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function DefaultTabs() {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="password">
        Change your password here.
      </TabsContent>
    </Tabs>
  )
}`,
    preview: (
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">Make changes to your account here.</TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    ),
  },
  {
    title: "Vertical Tabs",
    description: "Tabs arranged vertically.",
    code: `import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function VerticalTabs() {
  return (
    <Tabs defaultValue="profile" orientation="vertical" className="flex w-[400px] h-[200px]">
      <TabsList className="flex flex-col h-full">
        <TabsTrigger value="profile">Profile</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
      </TabsList>
      <TabsContent value="profile" className="flex-1 p-4">
        View and edit your profile information.
      </TabsContent>
      <TabsContent value="settings" className="flex-1 p-4">
        Adjust application settings.
      </TabsContent>
      <TabsContent value="notifications" className="flex-1 p-4">
        Manage your notification preferences.
      </TabsContent>
    </Tabs>
  )
}`,
    preview: (
      <Tabs defaultValue="profile" orientation="vertical" className="flex w-[400px] h-[200px]">
        <TabsList className="flex flex-col h-full">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>
        <TabsContent value="profile" className="flex-1 p-4">
          View and edit your profile information.
        </TabsContent>
        <TabsContent value="settings" className="flex-1 p-4">
          Adjust application settings.
        </TabsContent>
        <TabsContent value="notifications" className="flex-1 p-4">
          Manage your notification preferences.
        </TabsContent>
      </Tabs>
    ),
  },
]
