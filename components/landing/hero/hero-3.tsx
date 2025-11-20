"use client";

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { ArrowRight, Sparkles, Zap, TrendingUp, Play, CalendarCheck } from "lucide-react";

export default function ImmersiveHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  // Scroll Parallax Effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  // Mouse Tracking Spring Physics
  const mouseXSpring = useSpring(mouseX, { damping: 25, stiffness: 700 });
  const mouseYSpring = useSpring(mouseY, { damping: 25, stiffness: 700 });

  const handleMouseMove = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    // Calculate distance from center for 3D tilt
    mouseX.set(event.clientX - centerX);
    mouseY.set(event.clientY - centerY);
  };

  return (
    <section
      ref={containerRef}
      className="relative flex justify-center pt-32 pb-20 overflow-hidden min-h-screen bg-slate-950"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 1. BACKGROUND LAYERS */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950 z-0"></div>
      
      {/* Animated Gradient Mesh */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      {/* 2. MAIN CONTENT */}
      <motion.div
        className="container px-4 mx-auto relative z-20"
        style={{ opacity, scale, y }}
      >
        <div className="max-w-5xl mx-auto text-center perspective-[1000px]">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-blue-300 text-sm font-medium hover:bg-white/10 hover:scale-105 transition-all duration-300 cursor-default shadow-[0_0_20px_-5px_rgba(59,130,246,0.5)]">
              <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
              <span>AI Auto-Scheduling 2.0 is Live</span>
              <div className="w-px h-4 bg-white/20 mx-2"></div>
              <span className="text-white/60 text-xs">Read Update</span>
            </div>
          </motion.div>

          {/* 3D Tilt Title Container */}
          <motion.div
            className="mb-8"
            style={{
              transformStyle: "preserve-3d",
              transform: isHovered
                ? `perspective(1000px) rotateX(${mouseYSpring.get() * -0.01}deg) rotateY(${mouseXSpring.get() * 0.01}deg)`
                : "perspective(1000px)",
            }}
          >
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.1] text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <span className="block">Automate your</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 animate-gradient-x">
                entire workflow.
              </span>
            </motion.h1>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-lg md:text-2xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            The all-in-one platform for service businesses. Capture bookings, 
            manage customers, and process payments—all on autopilot.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Primary Button with Shine Effect */}
            <button className="group relative overflow-hidden rounded-full bg-blue-600 px-8 py-4 text-lg font-bold text-white shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_-15px_rgba(37,99,235,0.6)]">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:animate-[shimmer_1.5s_infinite]"></div>
              <span className="relative flex items-center gap-2">
                Get Started Free <ArrowRight className="w-5 h-5" />
              </span>
            </button>

            {/* Secondary Glass Button */}
            <button className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-lg font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:scale-105">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                <Play className="w-4 h-4 fill-current" />
              </div>
              Watch Demo
            </button>
          </motion.div>

          {/* 3. GLASS STATS CARD (The 3D Object) */}
          <motion.div
            className="relative max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 40, rotateX: 20 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
            style={{
              transformStyle: "preserve-3d",
              transform: isHovered
                ? `perspective(1000px) rotateX(${mouseYSpring.get() * 0.02}deg) rotateY(${mouseXSpring.get() * 0.02}deg)`
                : "perspective(1000px)",
            }}
          >
            {/* Back Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-[2rem] blur-3xl opacity-50"></div>

            {/* Glass Container */}
            <div className="relative backdrop-blur-2xl bg-slate-900/40 border border-white/10 rounded-[2rem] p-8 md:p-12 shadow-2xl ring-1 ring-white/5">
              
              {/* Inner Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    label: "Revenue Growth",
                    value: "+128%",
                    icon: TrendingUp,
                    color: "text-green-400",
                    bg: "bg-green-400/10",
                    desc: "Average year-one growth"
                  },
                  {
                    label: "Time Saved",
                    value: "24hrs",
                    icon: Zap,
                    color: "text-yellow-400",
                    bg: "bg-yellow-400/10",
                    desc: "Per week on admin tasks"
                  },
                  {
                    label: "Active Bookings",
                    value: "1.2M+",
                    icon: CalendarCheck,
                    color: "text-blue-400",
                    bg: "bg-blue-400/10",
                    desc: "Appointments scheduled"
                  },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    className="group relative overflow-hidden rounded-2xl bg-white/5 p-6 border border-white/5 hover:bg-white/10 transition-all duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <div className={`w-12 h-12 rounded-xl ${stat.bg} ${stat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <stat.icon className="w-6 h-6" />
                    </div>
                    <div className="text-4xl font-bold text-white mb-2 tracking-tight">{stat.value}</div>
                    <div className="text-lg font-semibold text-white/80 mb-1">{stat.label}</div>
                    <div className="text-sm text-slate-400">{stat.desc}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* 4. FLOATING BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large Moving Orbs */}
        <motion.div
          className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]"
          animate={{ x: [0, 100, 0], y: [0, 50, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]"
          animate={{ x: [0, -50, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * -100 - 50],
              opacity: [0, 0.8, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Mouse Follower Orb (Optional - Keep for 'Immersive' feel) */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-white/30 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{ x: mouseXSpring, y: mouseYSpring }}
      />
    </section>
  );
}