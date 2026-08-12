import { useEffect, useRef, useState } from 'react'

interface DonateModalProps {
  isOpen: boolean
  onClose: () => void
}

const mpesaSteps = [
  'Open M-Pesa on your phone.',
  'Select "Lipa na M-Pesa".',
  'Select "Pay Bill".',
  'Enter Business Number: 714888.',
  'Enter Account Number: 215097.',
  'Enter the amount you want to donate.',
  'Enter your M-Pesa PIN and confirm the payment.',
]

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement('textarea')
      textarea.value = text
      textarea.style.position = 'fixed'
      textarea.style.opacity = '0'
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <button
      onClick={handleCopy}
      className="text-xs font-semibold text-primary hover:text-primary-dark transition-colors focus:outline-none focus:underline"
      aria-label={`Copy ${text}`}
    >
      {copied ? 'Copied' : 'Copy'}
    </button>
  )
}

export default function DonateModal({ isOpen, onClose }: DonateModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  // Focus the close button when modal opens
  useEffect(() => {
    if (isOpen) {
      closeButtonRef.current?.focus()
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Handle Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  // Trap focus inside modal
  useEffect(() => {
    if (!isOpen) return

    const modal = modalRef.current
    if (!modal) return

    const focusableElements = modal.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault()
          lastElement.focus()
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault()
          firstElement.focus()
        }
      }
    }

    modal.addEventListener('keydown', handleTab)
    return () => modal.removeEventListener('keydown', handleTab)
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="donate-modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        ref={modalRef}
        className="relative bg-white rounded-xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          ref={closeButtonRef}
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-surface-muted transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Close donation modal"
        >
          <svg className="w-5 h-5 text-on-surface-variant" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-6 sm:p-8">
          {/* Header */}
          <h2
            id="donate-modal-title"
            className="font-display text-[24px] sm:text-[28px] font-bold text-primary mb-3 pr-8"
          >
            Support CTC-Kenya
          </h2>
          <p className="text-[15px] leading-6 text-on-surface-variant mb-6">
            Your contribution helps us support communities through mental health, education, food security, youth empowerment, and other community development initiatives.
          </p>

          {/* M-Pesa Section */}
          <div className="bg-surface-muted rounded-lg p-5 mb-6">
            <h3 className="font-display text-[18px] font-semibold text-primary mb-4">
              Donate via M-Pesa
            </h3>

            <div className="space-y-3">
              {/* PayBill Number */}
              <div className="flex items-center justify-between bg-white rounded-lg px-4 py-3 border border-outline-variant">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-0.5">
                    PayBill Number
                  </p>
                  <p className="font-display text-[22px] sm:text-[26px] font-bold text-primary tracking-wide">
                    714888
                  </p>
                </div>
                <CopyButton text="714888" />
              </div>

              {/* Account Number */}
              <div className="flex items-center justify-between bg-white rounded-lg px-4 py-3 border border-outline-variant">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-0.5">
                    Account Number
                  </p>
                  <p className="font-display text-[22px] sm:text-[26px] font-bold text-primary tracking-wide">
                    215097
                  </p>
                </div>
                <CopyButton text="215097" />
              </div>
            </div>
          </div>

          {/* M-Pesa Instructions */}
          <div className="mb-6">
            <h4 className="font-display text-[16px] font-semibold text-primary mb-3">
              How to Pay
            </h4>
            <ol className="space-y-2">
              {mpesaSteps.map((step, index) => (
                <li key={index} className="flex gap-3 text-[14px] leading-5 text-on-surface-variant">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Footer Note */}
          <p className="text-[13px] leading-5 text-on-surface-variant/70 text-center border-t border-outline-variant pt-4">
            Every contribution helps support CTC-Kenya's community development work.
          </p>
        </div>
      </div>
    </div>
  )
}