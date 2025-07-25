"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

const members = [
  {
    id: 1,
    name: "John Smith",
    email: "john@techcorp.com",
    address: "123 Main St, SF, CA",
    phone: "+1 (555) 123-4567"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah@design.com",
    address: "456 Oak Ave, NY, NY",
    phone: "+1 (555) 234-5678"
  },
  {
    id: 3,
    name: "Mike Wilson",
    email: "mike@marketing.com",
    address: "789 Pine Rd, Austin, TX",
    phone: "+1 (555) 345-6789"
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily@startup.com",
    address: "321 Elm Blvd, Seattle, WA",
    phone: "+1 (555) 456-7890"
  },
  {
    id: 5,
    name: "David Brown",
    email: "david@consulting.com",
    address: "654 Maple Dr, Boston, MA",
    phone: "+1 (555) 567-8901"
  },
  {
    id: 6,
    name: "Lisa Garcia",
    email: "lisa@digital.com",
    address: "987 Cedar Ln, Miami, FL",
    phone: "+1 (555) 678-9012"
  },
  {
    id: 7,
    name: "Alex Chen",
    email: "alex@innovate.com",
    address: "147 Birch Way, Denver, CO",
    phone: "+1 (555) 789-0123"
  },
  {
    id: 8,
    name: "Maria Rodriguez",
    email: "maria@creative.com",
    address: "258 Spruce Ct, Portland, OR",
    phone: "+1 (555) 890-1234"
  },
  {
    id: 9,
    name: "James Wilson",
    email: "james@tech.com",
    address: "369 Oak St, Chicago, IL",
    phone: "+1 (555) 901-2345"
  }
]

const exportToCSV = () => {
  const csvContent = "data:text/csv;charset=utf-8," 
    + "Name,Email,Address,Phone\n"
    + members.map(member => 
        `${member.name},${member.email},${member.address},${member.phone}`
      ).join("\n")
  
  const encodedUri = encodeURI(csvContent)
  const link = document.createElement("a")
  link.setAttribute("href", encodedUri)
  link.setAttribute("download", "members.csv")
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

export function HeroMemberList() {
  return (
    <div className="relative w-full h-full bg-black/40 backdrop-blur-md border border-[#1da84f]/20 rounded-xl shadow-xl">
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1da84f]/5 via-transparent to-[#1da84f]/5 rounded-xl blur-sm" />
      
      {/* Content */}
      <div className="relative p-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-white tracking-wide">
            Dashboard
          </h3>
          <Button
            onClick={exportToCSV}
            variant="outline"
            size="sm"
            className="bg-black/30 border-[#1da84f]/20 text-[#1da84f] hover:bg-[#1da84f]/5 hover:border-[#1da84f]/30 transition-all duration-300 text-xs"
          >
            <Download className="h-3 w-3 mr-1" />
            Export
          </Button>
        </div>

        {/* Table */}
        <div className="overflow-hidden rounded-lg border border-[#1da84f]/15">
          {/* Table Header */}
          <div className="bg-gradient-to-r from-[#1da84f]/15 to-[#1da84f]/5 grid grid-cols-2 lg:grid-cols-4">
            <div className="px-3 py-2 text-xs font-semibold text-[#1da84f] uppercase tracking-wider">
              Name
            </div>
            <div className="px-3 py-2 text-xs font-semibold text-[#1da84f] uppercase tracking-wider lg:block hidden">
              Email
            </div>
            <div className="px-3 py-2 text-xs font-semibold text-[#1da84f] uppercase tracking-wider lg:block hidden">
              Address
            </div>
            <div className="px-3 py-2 text-xs font-semibold text-[#1da84f]/70 uppercase tracking-wider">
              Phone
            </div>
          </div>
          
          {/* Table Content */}
          <div className="bg-black/30 divide-y divide-[#1da84f]/5">
            {members.map((member, index) => (
              <div 
                key={member.id} 
                className="grid grid-cols-2 lg:grid-cols-4 hover:bg-[#1da84f]/3 transition-all duration-200"
              >
                <div className="px-3 py-2 text-xs text-white/90 font-medium">
                  {member.name}
                </div>
                <div className="px-3 py-2 text-xs text-white/70 lg:block hidden">
                  {member.email}
                </div>
                <div className="px-3 py-2 text-xs text-white/70 lg:block hidden">
                  {member.address}
                </div>
                <div className="px-3 py-2 text-xs text-white/70">
                  {member.phone}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 