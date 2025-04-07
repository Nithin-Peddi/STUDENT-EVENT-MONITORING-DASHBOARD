import type { ReactNode } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { LogOut, User, Calendar, HelpCircle, FileText } from "lucide-react"

interface DashboardLayoutProps {
  children: ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/dashboard" className="flex items-center">
            <div className="relative h-10 w-10 mr-2 overflow-hidden rounded-full">
              <Image src="/placeholder.svg?height=40&width=40" alt="System Logo" fill className="object-cover" />
            </div>
            <span className="font-bold text-xl">Student Event Monitoring System</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/dashboard/help">
              <Button variant="ghost" size="sm">
                <HelpCircle className="h-4 w-4 mr-2" />
                Help
              </Button>
            </Link>
            <span className="text-sm text-gray-600 hidden md:inline">Welcome, Student</span>
            <Link href="/login">
              <Button variant="ghost" size="sm">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-50 border-r border-gray-200 hidden md:block">
          <nav className="p-4 space-y-2">
            <Link href="/dashboard">
              <Button variant="ghost" className="w-full justify-start">
                <Calendar className="h-4 w-4 mr-2" />
                Dashboard
              </Button>
            </Link>
            <Link href="/dashboard/student-details">
              <Button variant="ghost" className="w-full justify-start">
                <User className="h-4 w-4 mr-2" />
                Student Details
              </Button>
            </Link>
            <Link href="/dashboard/events">
              <Button variant="ghost" className="w-full justify-start">
                <Calendar className="h-4 w-4 mr-2" />
                Events
              </Button>
            </Link>
            <Link href="/dashboard/terms">
              <Button variant="ghost" className="w-full justify-start">
                <FileText className="h-4 w-4 mr-2" />
                Terms & Guidelines
              </Button>
            </Link>
          </nav>
        </aside>

        {/* Content */}
        <main className="flex-1 bg-gray-100">{children}</main>
      </div>
    </div>
  )
}

