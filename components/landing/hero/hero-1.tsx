import Link from 'next/link'
import Image from 'next/image'
import heroImg from '../../../public/hero.jpg' // Ensure path is correct
import { ArrowRight, PlayCircle, ShieldCheck, Zap, Bell, TrendingUp } from 'lucide-react'

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900 overflow-hidden">
      
      {/* 1. BACKGROUND: Grid Pattern + Subtle Glows (The "Tech" Look) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        {/* Radial Fade for Grid */}
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-400 opacity-20 blur-[100px]"></div>
        <div className="absolute right-0 bottom-0 -z-10 h-[400px] w-[400px] rounded-full bg-purple-400 opacity-10 blur-[120px]"></div>
      </div>

      {/* 2. NAVBAR: Clean, Minimal, Sticky */}
      <nav className="sticky top-0 z-50 w-full border-b border-gray-200/50 bg-white/70 backdrop-blur-xl supports-[backdrop-filter]:bg-white/40">
        <div className="max-w-7xl mx-auto flex justify-between h-20 items-center px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 cursor-pointer">
            <span className="text-xl font-bold tracking-tight text-slate-900">Booking<span className="text-blue-600">Go</span></span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {['Features', 'Solutions', 'Pricing', 'Resources'].map((item) => (
              <Link key={item} href="/" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
                {item}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link href="/login" className="hidden md:block text-sm font-medium text-slate-600 hover:text-slate-900 px-4">Log in</Link>
            <Link href="/Register" className="px-5 py-2.5 text-sm font-semibold bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20 ring-1 ring-slate-900/5">
              Get Started
            </Link>
          </div>
        </div> 
      </nav> 

      {/* 3. HERO SECTION */}
      <div className="relative z-10 pt-16 pb-24 lg:pt-32 lg:pb-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* LEFT: Copywriting */}
          <div className="flex-1 text-center lg:text-left">
            
            {/* Animated Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wide mb-8 shadow-sm hover:shadow-md transition-all cursor-default">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
              v2.0 is now live
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter text-slate-900 leading-[1.1] mb-6">
              Streamline your <br className="hidden lg:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 animate-gradient-x">
                entire workflow.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              The all-in-one platform to manage appointments, customers, and payments. 
              Beautifully designed to make your business look professional.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link href="/" className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all shadow-[0_10px_40px_-10px_rgba(37,99,235,0.4)] hover:shadow-[0_20px_40px_-10px_rgba(37,99,235,0.5)] hover:-translate-y-1">
                Start Free Trial <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link href="/" className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-slate-700 bg-white border border-slate-200 rounded-full hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm">
                <PlayCircle className="w-4 h-4 text-slate-400 group-hover:text-slate-600" /> Watch Demo
              </Link>
            </div>

            <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 text-sm font-medium text-slate-500">
              <span className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-blue-600"/> SOC2 Certified</span>
              <span className="flex items-center gap-2"><Zap className="w-5 h-5 text-yellow-500"/> Setup in 2 min</span>
            </div>
          </div>
          
          {/* RIGHT: The "3D" Visual */}
          <div className="flex-1 w-full relative lg:perspective-[2000px]">
             {/* Ambient Glow behind image */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-100 to-purple-100 blur-3xl -z-10 rounded-full opacity-60"></div>
             
             {/* The Container with 3D Tilt Effect */}
             <div className="relative transform transition-transform duration-700 hover:rotate-y-[-2deg] hover:rotate-x-[2deg] lg:rotate-y-[-6deg] lg:rotate-x-[6deg]">
                
                {/* Browser Frame */}
                <div className="relative rounded-xl bg-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15),0_0_0_1px_rgba(0,0,0,0.05)] overflow-hidden">
                  <div className="h-10 bg-white border-b border-slate-100 flex items-center px-4 space-x-2">
                    <div className="w-3 h-3 rounded-full bg-slate-200/80"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-200/80"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-200/80"></div>
                    <div className="ml-4 h-4 w-64 bg-slate-50 rounded-md border border-slate-100"></div>
                  </div>
                  
                  {/* IMAGE */}
                  <Image 
                    src={heroImg} 
                    alt="Dashboard" 
                    className="w-full h-auto object-cover bg-slate-50"
                  />
                </div>

                {/* FLOATING CARD 1 (Top Right) */}
                <div className="absolute -right-6 -top-8 bg-white p-4 rounded-xl shadow-[0_20px_40px_-12px_rgba(0,0,0,0.2)] border border-slate-100 w-48 hidden sm:block animate-bounce-slow">
                   <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-green-100 rounded-lg">
                         <TrendingUp className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                         <div className="text-xs text-slate-500">Revenue</div>
                         <div className="text-sm font-bold text-slate-900">+24.5%</div>
                      </div>
                   </div>
                   <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 w-[70%]"></div>
                   </div>
                </div>

                {/* FLOATING CARD 2 (Bottom Left) */}
                <div className="absolute -left-8 bottom-12 bg-white p-3 rounded-xl shadow-[0_20px_40px_-12px_rgba(0,0,0,0.2)] border border-slate-100 flex items-center gap-3 hidden sm:flex animate-bounce-delayed">
                   <div className="relative">
                     <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
                       <Bell className="w-5 h-5" />
                     </div>
                     <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 border-2 border-white rounded-full"></span>
                   </div>
                   <div>
                      <div className="text-xs font-semibold text-slate-900">New Booking</div>
                      <div className="text-[10px] text-slate-500">Just now • Sarah J.</div>
                   </div>
                </div>

             </div>
          </div>

        </div>

        {/* 4. SOCIAL PROOF: Logos (Faded) */}
        <div className="mt-24 pt-10 border-t border-slate-100">
           <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-wider mb-6">Trusted by innovative teams at</p>
           <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              {/* Placeholders for logos - You can replace text with SVGs */}
              <span className="text-xl font-bold text-slate-600">ACME Corp</span>
              <span className="text-xl font-bold text-slate-600">GlobalBank</span>
              <span className="text-xl font-bold text-slate-600">Stripe</span>
              <span className="text-xl font-bold text-slate-600">Linear</span>
              <span className="text-xl font-bold text-slate-600">Vercel</span>
           </div>
        </div>

      </div>
    </div>
  )
}

export default Hero