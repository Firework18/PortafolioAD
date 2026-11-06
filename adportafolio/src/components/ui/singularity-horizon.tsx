"use client"

import * as React from "react"

export type SingularityState = {
  title: string
  status: string
  accent: string
  velocity: string
  morph: number
  compression: number
  intensity: number
  orbit: number
  spin: number
  camDistance: number
  camHeight: number
}

export type SingularityHorizonProps = {
  height?: string
  states?: SingularityState[]
  interval?: number
  hud?: boolean
  mass?: string
  lensing?: string
  radiation?: string
  particles?: number
  interactive?: boolean
  className?: string
}

export { default, DEFAULT_SINGULARITY_STATES } from "./singularity-horizon.jsx"

