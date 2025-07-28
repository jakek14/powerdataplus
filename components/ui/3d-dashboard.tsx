'use client'

import { Download } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'

const Dashboard3D: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false)
  
  const members = [
    { id: 1, name: "John Smith", email: "john@techcorp.com", address: "123 Main St, SF", phone: "+1 (555) 123-4567" },
    { id: 2, name: "Sarah Johnson", email: "sarah@design.com", address: "456 Oak Ave, NY", phone: "+1 (555) 234-5678" },
    { id: 3, name: "Mike Wilson", email: "mike@marketing.com", address: "789 Pine Rd, Austin", phone: "+1 (555) 345-6789" },
    { id: 4, name: "Emily Davis", email: "emily@startup.com", address: "321 Elm Blvd, Seattle", phone: "+1 (555) 456-7890" },
    { id: 5, name: "David Brown", email: "david@consulting.com", address: "654 Maple Dr, Boston", phone: "+1 (555) 567-8901" }
  ]

  const exportToCSV = () => {
    const headers = ['Name', 'Email', 'Address', 'Phone']
    const csvContent = [
      headers.join(','),
      ...members.map(member => [
        member.name,
        member.email,
        member.address,
        member.phone
      ].join(','))
    ].join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'member-list.csv'
    a.click()
    window.URL.revokeObjectURL(url)
  }

  return (
    <div className="relative w-full h-full max-w-lg mx-auto mt-8">
      {/* Remove radial gradient glow */}
      <div
        className="relative w-full max-w-[480px] h-auto bg-card rounded-xl border border-border/50 overflow-hidden"
        style={{
          transform: isHovered 
            ? 'perspective(800px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)'
            : 'perspective(800px) rotateX(8deg) rotateY(-3deg) rotateZ(1deg)',
          boxShadow: '0 15px 35px -8px rgba(29, 168, 79, 0.1), 0 0 0 1px rgba(29, 168, 79, 0.05)'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Spotlight Effect - Reduced size and intensity */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[180px] h-[120px] bg-gradient-to-b from-[#1da84f]/10 via-[#1da84f]/3 to-transparent rounded-full blur-xl pointer-events-none" />
        
        {/* Content */}
        <div className="relative p-4">
          {/* Header */}
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-xl font-bold text-white tracking-wide drop-shadow-sm">
              Dashboard
            </h3>
            <Button
              onClick={exportToCSV}
              variant="outline"
              size="sm"
              className="bg-black/40 border-[#1da84f]/30 text-[#1da84f] hover:bg-[#1da84f]/10 hover:border-[#1da84f]/40 transition-all duration-300 text-xs px-3 py-1"
            >
              <Download className="h-3 w-3 mr-1" />
              Export
            </Button>
          </div>

          {/* Table */}
          <div className="overflow-hidden rounded-lg border border-[#1da84f]/20">
            {/* Table Header */}
            <div className="bg-gradient-to-r from-[#1da84f]/20 to-[#1da84f]/10 grid grid-cols-2">
              <div className="px-3 py-2 text-sm font-semibold text-[#1da84f] uppercase tracking-wider drop-shadow-sm">
                Name
              </div>
              <div className="px-3 py-2 text-sm font-semibold text-[#1da84f] uppercase tracking-wider drop-shadow-sm">
                Phone
              </div>
            </div>
            
            {/* Table Content */}
            <div className="bg-black/40 divide-y divide-[#1da84f]/10">
              {members.map((member, index) => (
                <div 
                  key={member.id} 
                  className="grid grid-cols-2 hover:bg-[#1da84f]/5 transition-all duration-200"
                  style={{
                    animationDelay: `${index * 30}ms`
                  }}
                >
                  <div className="px-3 py-2 text-base text-white font-semibold drop-shadow-sm truncate">
                    {member.name}
                  </div>
                  <div className="px-3 py-2 text-base text-white/95 drop-shadow-sm truncate">
                    {member.phone}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard3D 