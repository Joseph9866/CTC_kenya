import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'
import DonateModal from './DonateModal'

interface DonateContextType {
  openDonate: () => void
}

const DonateContext = createContext<DonateContextType>({ openDonate: () => {} })

export function useDonate() {
  return useContext(DonateContext)
}

export function DonateProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const openDonate = useCallback(() => setIsOpen(true), [])
  const closeDonate = useCallback(() => setIsOpen(false), [])

  return (
    <DonateContext.Provider value={{ openDonate }}>
      {children}
      <DonateModal isOpen={isOpen} onClose={closeDonate} />
    </DonateContext.Provider>
  )
}