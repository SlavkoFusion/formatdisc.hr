"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"

export interface AuditEvent {
  id: string
  timestamp: string
  type: string
  data: Record<string, any>
  user?: string
  session?: string
}

interface AuditLogStore {
  events: AuditEvent[]
  logEvent: (type: string, data: Record<string, any>) => void
  clearEvents: () => void
  exportEvents: () => void
  replayEvents: () => void
}

const useAuditLogStore = create<AuditLogStore>()(
  persist(
    (set, get) => ({
      events: [],

      logEvent: (type: string, data: Record<string, any>) => {
        const event: AuditEvent = {
          id: `audit-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          timestamp: new Date().toISOString(),
          type,
          data,
          session: `session-${Date.now()}`,
        }

        set((state) => ({
          events: [...state.events, event],
        }))

        console.log("[v0] Audit event logged:", event)
      },

      clearEvents: () => {
        set({ events: [] })
      },

      exportEvents: () => {
        const { events } = get()
        const json = JSON.stringify(events, null, 2)
        const blob = new Blob([json], { type: "application/json" })
        const url = URL.createObjectURL(blob)
        const a = document.createElement("a")
        a.href = url
        a.download = `audit-log-${Date.now()}.json`
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        URL.revokeObjectURL(url)
      },

      replayEvents: () => {
        const { events } = get()
        console.log("[v0] Replaying audit events:", events)
        alert(`Replaying ${events.length} events. Check console for details.`)
      },
    }),
    {
      name: "nvidia-playground-audit-log",
    },
  ),
)

export const useAuditLog = () => {
  const store = useAuditLogStore()
  return store
}
