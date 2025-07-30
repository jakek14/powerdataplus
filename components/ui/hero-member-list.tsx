"use client"

import { Download } from "lucide-react"

import { Button } from "@/components/ui/button"

const members = [
  {
    id: 1,
    name: "John Smith",
    email: "john@techcorp.com",
    shortEmail: "john@tech.com",
    address: "123 Main St, SF, CA",
    phone: "+1 (555) 123-4567"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah@design.com",
    shortEmail: "sarah@design.com",
    address: "456 Oak Ave, NY, NY",
    phone: "+1 (555) 234-5678"
  },
  {
    id: 3,
    name: "Mike Wilson",
    email: "mike@marketing.com",
    shortEmail: "mike@marketing.com",
    address: "789 Pine Rd, Austin, TX",
    phone: "+1 (555) 345-6789"
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily@startup.com",
    shortEmail: "emily@startup.com",
    address: "321 Elm Blvd, Seattle, WA",
    phone: "+1 (555) 456-7890"
  },
  {
    id: 5,
    name: "David Brown",
    email: "david@consulting.com",
    shortEmail: "david@consult.com",
    address: "654 Maple Dr, Boston, MA",
    phone: "+1 (555) 567-8901"
  },
  {
    id: 6,
    name: "Lisa Garcia",
    email: "lisa@digital.com",
    shortEmail: "lisa@digital.com",
    address: "987 Cedar Ln, Miami, FL",
    phone: "+1 (555) 678-9012"
  },
  {
    id: 7,
    name: "Alex Chen",
    email: "alex@innovate.com",
    shortEmail: "alex@innovate.com",
    address: "147 Birch Way, Denver, CO",
    phone: "+1 (555) 789-0123"
  },
  {
    id: 8,
    name: "Maria Rodriguez",
    email: "maria@creative.com",
    shortEmail: "maria@creative.com",
    address: "258 Spruce Ct, Portland, OR",
    phone: "+1 (555) 890-1234"
  },
  {
    id: 9,
    name: "James Wilson",
    email: "james@tech.com",
    shortEmail: "james@tech.com",
    address: "369 Oak St, Chicago, IL",
    phone: "+1 (555) 901-2345"
  },
  {
    id: 10,
    name: "Christopher Lee",
    email: "chris@venture.com",
    shortEmail: "chris@venture.com",
    address: "852 Oak Ridge, Atlanta, GA",
    phone: "+1 (555) 123-4567"
  },

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
    <div className="relative w-full h-full bg-black/60 backdrop-blur-md border border-[#1da84f]/30 rounded-xl shadow-lg">
      {/* Content */}
      <div className="relative p-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide">
            Dashboard
          </h3>
          <Button
            onClick={exportToCSV}
            variant="outline"
            size="sm"
            className="bg-black/40 border-[#1da84f]/30 text-[#1da84f] hover:bg-[#1da84f]/10 hover:border-[#1da84f]/40 transition-all duration-300 text-xs md:text-sm"
          >
            <Download className="h-3 w-3 md:h-4 md:w-4 mr-1" />
            Export
          </Button>
        </div>

        {/* Table */}
        <div className="overflow-hidden rounded-lg border border-[#1da84f]/20">
          {/* Table Header */}
          <div className="bg-gradient-to-r from-[#1da84f]/20 to-[#1da84f]/10 grid grid-cols-2 lg:grid-cols-4">
            <div className="px-3 py-2 md:px-4 md:py-3 text-sm md:text-base font-semibold text-[#1da84f] uppercase tracking-wider">
              Name
            </div>
            <div className="px-3 py-2 md:px-4 md:py-3 text-sm md:text-base font-semibold text-[#1da84f] uppercase tracking-wider lg:block hidden">
              Email
            </div>
            <div className="px-3 py-2 md:px-4 md:py-3 text-sm md:text-base font-semibold text-[#1da84f] uppercase tracking-wider lg:block hidden">
              Address
            </div>
            <div className="px-3 py-2 md:px-4 md:py-3 text-sm md:text-base font-semibold text-[#1da84f] uppercase tracking-wider">
              Phone
            </div>
          </div>
          
          {/* Table Content */}
          <div className="bg-black/40 divide-y divide-[#1da84f]/10">
            {members.map((member) => (
              <div 
                key={member.id} 
                className="grid grid-cols-2 lg:grid-cols-4 hover:bg-[#1da84f]/5 transition-all duration-200"
              >
                <div className="px-3 py-2 md:px-4 md:py-3 text-sm md:text-lg text-white font-semibold truncate">
                  {member.name}
                </div>
                <div className="px-3 py-2 md:px-4 md:py-3 text-sm md:text-lg text-white/95 lg:block hidden truncate">
                  {member.email}
                </div>
                <div className="px-3 py-2 md:px-4 md:py-3 text-sm md:text-lg text-white/95 lg:block hidden truncate">
                  {member.address}
                </div>
                <div className="px-3 py-2 md:px-4 md:py-3 text-sm md:text-lg text-white/95 truncate">
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