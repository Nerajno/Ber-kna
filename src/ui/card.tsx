import React from 'react'

// Card component wrapper
export const Card = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={`bg-white shadow-lg rounded-lg p-4 ${className}`}>
    {children}
  </div>
)

// CardHeader component for headers inside a Card
export const CardHeader = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={`border-b border-gray-200 pb-2 mb-4 ${className}`}>
    {children}
  </div>
)

// CardTitle component for titles in CardHeader
export const CardTitle = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <h2 className={`text-lg font-semibold ${className}`}>
    {children}
  </h2>
)

// CardContent component for main content area of Card
export const CardContent = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={`py-2 ${className}`}>
    {children}
  </div>
)
