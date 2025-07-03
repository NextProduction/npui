"use client"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import type { PropDetail } from "@/lib/components-data"

interface PropControlsProps {
  prop: PropDetail
  value: any
  onChange: (newValue: any) => void
}

export function PropControls({ prop, value, onChange }: PropControlsProps) {
  const { name, type, default: defaultValue } = prop

  // Helper to parse string literal union types (e.g., "default" | "destructive")
  const parseEnumOptions = (typeString: string): string[] => {
    const matches = typeString.match(/"([^"]*)"/g)
    return matches ? matches.map((m) => m.replace(/"/g, "")) : []
  }

  const enumOptions = parseEnumOptions(type)

  const renderControl = () => {
    if (type.includes("boolean")) {
      return (
        <Switch
          id={`prop-${name}`}
          checked={value === undefined ? defaultValue === "true" : value}
          onCheckedChange={onChange}
        />
      )
    } else if (type.includes("number") && !type.includes("[]")) {
      // Simple number input
      return (
        <Input
          id={`prop-${name}`}
          type="number"
          value={value === undefined ? (defaultValue ? Number(defaultValue) : "") : value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full"
        />
      )
    } else if (type.includes("number[]")) {
      // Slider for number arrays (assuming max/min/step are handled by component defaults or specific logic)
      // This is a simplified slider control, assuming a single value or a range of two.
      // More complex sliders would need more specific prop details (min, max, step).
      const sliderValue = Array.isArray(value) ? value : defaultValue ? [Number(defaultValue)] : [0]
      return (
        <Slider
          id={`prop-${name}`}
          value={sliderValue}
          onValueChange={(val) => onChange(val)}
          max={100} // Default max, can be overridden if prop detail includes it
          step={1} // Default step
          className="w-full"
        />
      )
    } else if (enumOptions.length > 0) {
      // Select for string literal union types
      return (
        <Select value={value || defaultValue} onValueChange={onChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder={`Select ${name}`} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {enumOptions.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      )
    } else if (type.includes("string")) {
      return (
        <Input
          id={`prop-${name}`}
          type="text"
          value={value === undefined ? defaultValue || "" : value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full"
        />
      )
    }
    // Fallback for complex types like React.ReactNode, functions, objects
    return <span className="text-npui-muted-foreground italic">Unsupported type: {type}</span>
  }

  return (
    <div className="flex items-center justify-between gap-4 py-2 border-b border-npui-border last:border-b-0">
      <Label htmlFor={`prop-${name}`} className="text-npui-foreground text-sm font-medium">
        {name}
        {defaultValue && <span className="text-xs text-npui-muted-foreground ml-2">(Default: {defaultValue})</span>}
      </Label>
      <div className="flex-1 max-w-[200px]">{renderControl()}</div>
    </div>
  )
}
