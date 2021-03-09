import { useState } from 'react'

interface ToggleState {
  isOpen: boolean
  open: () => void
  close: () => void
}

export function useToggle(): ToggleState {
  const [isOpen, setIsOpen] = useState(false)
  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)
  return { isOpen, open, close }
}
