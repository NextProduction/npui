"use client"

import type React from "react"

export interface HookDetail {
  name: string
  slug: string
  description: string
  code: string
  usageExample?: React.ReactNode
}



export interface UtilityDetail {
  name: string
  slug: string
  description: string
  code: string
  usageExample?: React.ReactNode // Optional React component for live usage example
}