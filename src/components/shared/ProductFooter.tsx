import React from "react"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Send } from "lucide-react"

export default function ProductFooter() {
  return (
    <footer className="w-full bg-[#2E8F8A] pt-16 pb-8 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Info */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold tracking-tight">DoUndo</span>
            </div>
            <p className="text-sm leading-relaxed max-w-[280px] text-white/90 font-light">
              Design amazing digital experiences that create more happy in the world.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors">
                <Twitter className="w-5 h-5 fill-current" />
              </Link>
              <Link href="#" className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors">
                <Facebook className="w-5 h-5 fill-current" />
              </Link>
              <Link href="#" className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              {/* Skype icon replacement (simpler placeholder) */}
              <Link href="#" className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors">
                <Send className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Product Links */}
          <div className="flex flex-col gap-6">
            <h4 className="text-sm font-bold uppercase tracking-widest">Product</h4>
            <nav className="flex flex-col gap-4 text-sm font-light text-white/80">
              <Link href="#" className="hover:text-white transition-colors">Home</Link>
              <Link href="#" className="hover:text-white transition-colors">About us</Link>
              <Link href="#" className="hover:text-white transition-colors">Games</Link>
              <Link href="#" className="hover:text-white transition-colors">Merchendies</Link>
              <Link href="#" className="hover:text-white transition-colors">Fortune telling</Link>
              <Link href="#" className="hover:text-white transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Resources Links */}
          <div className="flex flex-col gap-6">
            <h4 className="text-sm font-bold uppercase tracking-widest">Resources</h4>
            <nav className="flex flex-col gap-4 text-sm font-light text-white/80">
              <Link href="#" className="hover:text-white transition-colors">Cart</Link>
              <Link href="#" className="hover:text-white transition-colors">Blog</Link>
              <Link href="#" className="hover:text-white transition-colors">Privacy policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms and condition</Link>
              <Link href="#" className="hover:text-white transition-colors">Shipping policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Disclaimer</Link>
            </nav>
          </div>

          {/* Subscribe */}
          <div className="flex flex-col gap-6">
            <h4 className="text-sm font-bold uppercase tracking-widest">Stay up to date</h4>
            <div className="relative">
              <div className="flex p-1 bg-white rounded-full items-center">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-5 py-2 text-sm text-[#333333] placeholder:text-[#AFAFAF] bg-transparent outline-none"
                />
                <button className="bg-black text-white text-xs font-bold px-6 py-2.5 rounded-full hover:bg-[#111111] transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] font-light text-white/60">
          <p>© 2025 Amir Imani. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
