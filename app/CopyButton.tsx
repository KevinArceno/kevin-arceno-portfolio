"use client"

import { useState, useRef } from "react"
import { ClipboardCopy, Check } from "lucide-react"

export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)
  const hiddenInputRef = useRef<HTMLTextAreaElement>(null)

  const handleCopy = () => {
    if (hiddenInputRef.current) {
      hiddenInputRef.current.select()
      document.execCommand("copy")
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="relative flex items-center">
      {/* Hidden textarea with the text to copy */}
      <textarea
        ref={hiddenInputRef}
        value={text}
        readOnly
        className="absolute left-[-9999px] top-0"
        aria-hidden="true"
      />

      {/* Copy button */}
      <button
        onClick={handleCopy}
        className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 transition-colors"
        title="Copy to clipboard"
      >
        {copied ? <Check className="h-5 w-5 text-green-600" /> : <ClipboardCopy className="h-5 w-5" />}
      </button>

      {/* Tooltip/Toast */}
      {copied && (
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-sm text-green-600 bg-white dark:bg-gray-800 border border-green-300 dark:border-green-600 rounded px-2 py-1 shadow">
          Copied!
        </div>
      )}
    </div>
  )
}
