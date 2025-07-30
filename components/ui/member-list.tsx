'use client'

import React from 'react'
import { Button } from './button'
import { Download } from 'lucide-react'

const MemberList: React.FC = () => {
  const members = [
    { id: 1, name: "John Smith", email: "john@techcorp.com", address: "123 Main St, San Francisco, CA", phone: "+1 (555) 123-4567" },
    { id: 2, name: "Sarah Johnson", email: "sarah@design.com", address: "456 Oak Ave, New York, NY", phone: "+1 (555) 234-5678" },
    { id: 3, name: "Mike Wilson", email: "mike@marketing.com", address: "789 Pine Rd, Austin, TX", phone: "+1 (555) 345-6789" },
    { id: 4, name: "Emily Davis", email: "emily@startup.com", address: "321 Elm Blvd, Seattle, WA", phone: "+1 (555) 456-7890" },
    { id: 5, name: "David Brown", email: "david@consulting.com", address: "654 Maple Dr, Boston, MA", phone: "+1 (555) 567-8901" },
    { id: 6, name: "Lisa Chen", email: "lisa@innovate.com", address: "987 Cedar Ln, Portland, OR", phone: "+1 (555) 678-9012" },
    { id: 7, name: "Alex Chen", email: "alex@innovate.com", address: "147 Birch Way, Denver, CO", phone: "+1 (555) 789-0123" },
    { id: 8, name: "Maria Rodriguez", email: "maria@creative.com", address: "258 Spruce Ct, Portland, OR", phone: "+1 (555) 890-1234" },
    { id: 9, name: "James Wilson", email: "james@tech.com", address: "369 Oak St, Chicago, IL", phone: "+1 (555) 901-2345" },
    { id: 10, name: "Sophie Turner", email: "sophie@design.com", address: "741 Pine Ave, LA, CA", phone: "+1 (555) 012-3456" }
  ]

  return (
    <div className="w-full relative">
      {/* Desktop Table - Full columns */}
      <div className="hidden md:block">
        <div className="w-full border border-border rounded-lg overflow-hidden">
          {/* Header */}
          <div className="bg-muted grid grid-cols-4">
            <div className="py-1 text-xs font-medium text-muted-foreground uppercase tracking-wider flex justify-center">
              <div className="text-left text-xs">
                Name
              </div>
            </div>
            <div className="px-2 py-1 text-xs font-medium text-muted-foreground uppercase tracking-wider flex justify-center">
              <div className="text-left text-xs">
                Email
              </div>
            </div>
            <div className="px-2 py-1 text-xs font-medium text-muted-foreground uppercase tracking-wider flex justify-center">
              <div className="text-left text-xs">
                Address
              </div>
            </div>
            <div className="px-2 py-1 text-xs font-medium text-muted-foreground uppercase tracking-wider flex justify-center">
              <div className="text-left text-xs">
                Phone
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="bg-card divide-y divide-border">
            {members.map((member) => (
              <div key={member.id} className="grid grid-cols-4 hover:bg-muted/50">
                <div className="py-1 whitespace-nowrap text-xs font-medium text-foreground flex justify-center">
                  <div className="text-left text-xs">
                    {member.name}
                  </div>
                </div>
                <div className="px-2 py-1 whitespace-nowrap text-xs text-foreground flex justify-center">
                  <div className="text-left text-xs">
                    {member.email}
                  </div>
                </div>
                <div className="px-2 py-1 whitespace-nowrap text-xs text-foreground flex justify-center">
                  <div className="text-left text-xs">
                    {member.address}
                  </div>
                </div>
                <div className="px-2 py-1 whitespace-nowrap text-xs text-foreground flex justify-center">
                  <div className="text-left text-xs">
                    {member.phone}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Table - Names and Phones only */}
      <div className="md:hidden">
        <div className="w-full border border-border rounded-lg overflow-hidden">
          {/* Header */}
          <div className="bg-muted grid grid-cols-2">
            <div className="py-2 text-xs font-medium text-muted-foreground uppercase tracking-wider flex justify-center">
              <div className="text-left text-xs">
                Name
              </div>
            </div>
            <div className="px-2 py-2 text-xs font-medium text-muted-foreground uppercase tracking-wider flex justify-center">
              <div className="text-left text-xs">
                Phone
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="bg-card divide-y divide-border">
            {members.map((member) => (
              <div key={member.id} className="grid grid-cols-2 hover:bg-muted/50">
                <div className="py-2 whitespace-nowrap text-xs font-medium text-foreground flex justify-center">
                  <div className="text-left text-xs">
                    {member.name}
                  </div>
                </div>
                <div className="px-2 py-2 whitespace-nowrap text-xs text-foreground flex justify-center">
                  <div className="text-left text-xs">
                    {member.phone}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Export button positioned in top right corner */}
      <Button
        variant="outline"
        size="sm"
        className="absolute top-2 right-2 h-8 w-8 p-0 bg-card border-border opacity-50 cursor-not-allowed shadow-sm"
        disabled
      >
        <Download className="h-4 w-4" />
      </Button>
    </div>
  )
}

export default MemberList 