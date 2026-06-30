"use client"

import React from "react"
import Link from "next/link"
import { Search, ShoppingCart, User } from "lucide-react"

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Game", href: "/game" },
  { name: "Contact", href: "/contact" },
  { name: "Merchendies", href: "/merchandise" },
  { name: "Fortune Telling", href: "/fortune-telling" },
]

export default function ProductNavbar() {
  return (
    <header className="fixed top-0 z-50 w-full bg-white border-b border-[#EFEFEF]">
      <div className="container mx-auto px-6 h-16 lg:h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="shrink-0">
          <Link href="/" className="flex items-center">
            {/* 
              Simplified logo implementation using text and circles to match the description 
              "rounded colorful wordmark with warm coral/orange and teal circles"
            */}
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1">
                <div className="w-5 h-5 rounded-full bg-[#FF7F50]" />
                <div className="w-5 h-5 rounded-full bg-[#2E8F8A]" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-[#111111]">
                DoUndo
              </span>
            </div>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-9">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-[13px] font-normal uppercase tracking-wider text-[#333333] hover:text-[#2E8F8A] transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Action Icons */}
        <div className="flex items-center space-x-6">
          <button className="text-[#D9B26A] hover:opacity-80 transition-opacity">
            <Search className="w-5 h-5 stroke-[1.5]" />
          </button>
          <button className="text-[#D9B26A] hover:opacity-80 transition-opacity">
            <ShoppingCart className="w-5 h-5 stroke-[1.5]" />
          </button>
          <button className="text-[#D9B26A] hover:opacity-80 transition-opacity">
            <User className="w-5 h-5 stroke-[1.5]" />
          </button>
        </div>
      </div>
    </header>
  )
}
