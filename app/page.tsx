"use client"
{/* eslint-disable react/no-unescaped-entities */}

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import HeroBackground3D from "@/components/hero-background-3d"

import bluebitLogo from "../public/bluebit_logo.png"
import mlscLogo from "../public/mlsc-logo.png"

export default function LandingPage() {
  // const [scrollY, setScrollY] = useState(0)

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrollY(window.scrollY)
  //   }

  //   window.addEventListener("scroll", handleScroll)
  //   return () => window.removeEventListener("scroll", handleScroll)
  // }, [])

  return (
    <div className="min-h-screen bg-[#0a0a1a] text-[#4c9eff] font-pip-boy cursor-pip-boy">
      {/* Navbar */}
      <header className="fixed top-0 w-full z-50 border-b border-[#4c9eff]/30 bg-[#0a0a1a]/90 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 flex items-center justify-center">
              <Image
                src={mlscLogo}
                alt="mlsc Logo"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <div className="w-12 h-12 flex items-center justify-center">
              <Image
                src={bluebitLogo}
                alt="BlueBit Logo"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
          </div>
          <nav>
            <ul className="flex gap-6">
              <li>
                <Link
                  href="#"
                  className="hover:text-[#a3d0ff] transition-colors uppercase text-sm tracking-wider pixelated-text"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#timeline"
                  className="hover:text-[#a3d0ff] transition-colors uppercase text-sm tracking-wider pixelated-text"
                >
                  Timeline
                </Link>
              </li>
              <li>
                <Link
                  href="#rules"
                  className="hover:text-[#a3d0ff] transition-colors uppercase text-sm tracking-wider pixelated-text"
                >
                  Rules
                </Link>
              </li>
              <li>
                <a
                  href="https://unstop.com/o/sWA39h2?utm_medium=Share&utm_source=shortUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#a3d0ff] transition-colors uppercase text-sm tracking-wider pixelated-text"
                >
                  Register
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>


      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        {/* 3D Background */}
        <div className="absolute inset-0 z-0">
          <HeroBackground3D />
        </div>

        <div className="container relative z-10 px-4 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <div className="inline-block px-4 py-1 border border-[#4c9eff] text-sm mb-4 pip-boy-border pixelated-text">
              <div className="text-[#a3d0ff] pip-boy-text">
                MICROSOFT LEARNER'S STUDENT CHAPTER PRESENTS
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter pip-boy-text pixelated-text"
          >
            BLUE<span className="text-[#a3d0ff]">BIT</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="max-w-2xl mx-auto text-lg mb-10 text-[#a3d0ff] tracking-tighter pip-boy-text pixelated-text"
          >
            The biggest hackathon by Microsoft Learners Student Chapter. Join us for an unforgettable coding experience
            and expand your tech horizons.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="https://unstop.com/o/sWA39h2?utm_medium=Share&utm_source=shortUrl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-[#4c9eff] text-black hover:bg-[#a3d0ff] hover:text-black transition-all duration-300 text-lg px-8 py-6 rounded-none border border-[#4c9eff] uppercase tracking-wider font-bold pip-boy-button pixelated-text">
                Register Now
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-20 relative">
        <div className="absolute inset-0 z-0 opacity-10">
          <Image src="/images/code-background.jpg" alt="Code Background" layout="fill" objectFit="cover" />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 inline-block border-b-2 border-[#4c9eff] pb-2 pip-boy-text pixelated-text">
              EVENT TIMELINE
            </h2>
            <p className="max-w-2xl mx-auto text-[#4c9eff]/80 pixelated-text">
              Mark your calendar for these important dates. Be prepared for each phase of BlueBit.
            </p>
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#4c9eff]/30" />

            {timelineEvents.map((event, index) => (
              <TimelineItem
                key={index}
                date={event.date}
                title={event.title}
                description={event.description}
                isLeft={index % 2 === 0}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Rules Section */}
      <section id="rules" className="py-20 bg-[#0f1a2a] relative">
        <div className="absolute inset-0 z-0 opacity-5">
          <Image src="/images/circuit-background.jpg" alt="Circuit Background" layout="fill" objectFit="cover" />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-10"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 pip-boy-text pixelated-text">EVENT RULEBOOK</h2>
            <p className="max-w-2xl mx-auto text-[#4c9eff]/80 mb-10 pixelated-text">
              Make sure you understand all the rules before participating in BlueBit. View our comprehensive
              rulebook.
            </p>

            <Button
              className="bg-transparent hover:bg-[#4c9eff] text-[#4c9eff] hover:text-black border-2 border-[#4c9eff] transition-all duration-300 text-lg px-8 py-6 rounded-none uppercase tracking-wider font-bold group pip-boy-button pixelated-text"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1dPGEpef90w1FPBvY6JDdUm4PdK-cuFGq/view?usp=drive_link",
                  "_blank",
                )
              }
            >
              <FileText className="mr-2 h-5 w-5 group-hover:animate-pulse" />
              View Rulebook
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold mb-6 pip-boy-text pixelated-text">READY TO PARTICIPATE?</h3>
            <a
              href="https://unstop.com/o/sWA39h2?utm_medium=Share&utm_source=shortUrl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-[#4c9eff] text-black hover:bg-[#a3d0ff] hover:text-black transition-all duration-300 text-lg px-8 py-6 rounded-none border border-[#4c9eff] uppercase tracking-wider font-bold pip-boy-button pixelated-text">
                Register Now
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a1a] border-t border-[#4c9eff]/30 py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <h3 className="text-xl font-bold mb-4 border-b border-[#4c9eff]/30 pb-2 pip-boy-text pixelated-text">
                BLUEBIT
              </h3>
              <p className="text-[#4c9eff]/70 pixelated-text">
                The biggest hackathon organized by Microsoft Learners Student Chapter. Join us for an unforgettable
                experience.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 border-b border-[#4c9eff]/30 pb-2 pip-boy-text pixelated-text">
                CONTACT
              </h3>
              <ul className="space-y-2 text-[#4c9eff]/70 pixelated-text">
                <li>Email: pawan.patil22@pccoepune.org</li>
                <li>Phone: +91 8381021200</li>
                <li>Location: PCCoE College Campus</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 border-b border-[#4c9eff]/30 pb-2 pip-boy-text pixelated-text">
                FOLLOW US
              </h3>
              <div className="flex gap-4">
                <Link href="#" className="text-[#4c9eff] hover:text-[#a3d0ff] transition-colors">
                  <span className="sr-only">Instagram</span>
                  <div className="w-10 h-10 border border-[#4c9eff] flex items-center justify-center hover:border-[#a3d0ff] pip-boy-border pixelated-text">
                    IG
                  </div>
                </Link>
                <Link href="#" className="text-[#4c9eff] hover:text-[#a3d0ff] transition-colors">
                  <span className="sr-only">Twitter</span>
                  <div className="w-10 h-10 border border-[#4c9eff] flex items-center justify-center hover:border-[#a3d0ff] pip-boy-border pixelated-text">
                    TW
                  </div>
                </Link>
                <Link href="#" className="text-[#4c9eff] hover:text-[#a3d0ff] transition-colors">
                  <span className="sr-only">Facebook</span>
                  <div className="w-10 h-10 border border-[#4c9eff] flex items-center justify-center hover:border-[#a3d0ff] pip-boy-border pixelated-text">
                    FB
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-[#4c9eff]/30 text-center text-[#4c9eff]/50 text-sm pixelated-text">
            &copy; {new Date().getFullYear()} BlueBit. All rights reserved. Microsoft Learners Student Chapter.
          </div>
        </div>
      </footer>

      <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden opacity-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#4c9eff]/5"></div>
        <div className="absolute inset-0 pip-boy-scanlines"></div>
      </div>

      <style jsx global>{`
        @font-face {
          font-family: 'PipBoy';
          src: url('/fonts/monofonto.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
        }
        
        @font-face {
          font-family: 'PixelFont';
          src: url('/fonts/pixelfont.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
        }
        
        html, body {
          cursor: url('/cursor/tech-cursor.png'), auto !important;
        }
        
        a, button, [role="button"], input[type="submit"], input[type="button"], input[type="reset"] {
          cursor: url('/cursor/tech-cursor-pointer.png'), pointer !important;
        }
        
        .pip-boy-text {
          font-family: 'PipBoy', monospace;
          text-shadow: 0 0 5px #4c9eff, 0 0 10px #4c9eff;
          letter-spacing: 1px;
        }
        
        .pixelated-text {
          font-family: 'PixelFont', 'PipBoy', monospace;
          image-rendering: pixelated;
        }
        
        .pip-boy-border {
          box-shadow: 0 0 5px #4c9eff, inset 0 0 5px #4c9eff;
        }
        
        .pip-boy-button {
          box-shadow: 0 0 5px #4c9eff;
          font-family: 'PipBoy', monospace;
        }
        
        .pip-boy-scanlines {
          background-image: 
            linear-gradient(rgba(76, 158, 255, 0.1) 50%, rgba(0, 0, 0, 0.1) 50%), 
            linear-gradient(90deg, rgba(255, 0, 0, 0.03), rgba(0, 255, 0, 0.03), rgba(0, 0, 255, 0.03));
          background-size: 100% 2px, 3px 100%;
          animation: pip-boy-scan 10s linear infinite;
        }
        
        @keyframes pip-boy-scan {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 0 100%;
          }
        }

        .code-rain {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to bottom, rgba(10, 10, 26, 0) 0%, rgba(10, 10, 26, 0.8) 80%);
          overflow: hidden;
        }

        .code-rain::before {
          content: "";
          position: absolute;
          top: -10px;
          left: 0;
          right: 0;
          height: 100%;
          background-image: url('/images/binary-code.png');
          animation: code-rain-fall 20s linear infinite;
          opacity: 0.2;
        }

        @keyframes code-rain-fall {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(100%);
          }
        }
      `}</style>
    </div>
  )
}

interface TimelineItemProps {
  date: string
  title: string
  description: string
  isLeft: boolean
  index: number
}

function TimelineItem({ date, title, description, isLeft, index }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={cn("relative mb-16 md:mb-24 flex", isLeft ? "flex-row" : "flex-row-reverse")}
    >
      <div className={cn("w-1/2 px-4", isLeft ? "text-right" : "text-left")}>
        <div className="inline-block px-3 py-1 border border-[#4c9eff] text-sm pip-boy-border pixelated-text">
          {date}
        </div>
      </div>

      <div className="absolute left-1/2 top-3 transform -translate-x-1/2 w-4 h-4 bg-[#4c9eff] rounded-full border-2 border-[#0a0a1a] z-10 pip-boy-border" />

      <div className={cn("w-1/2 px-4", isLeft ? "text-left" : "text-right")}>
        <h3 className="text-2xl font-bold pip-boy-text mb-2 pixelated-text">{title}</h3>
        <p className="text-[#4c9eff]/80 pixelated-text">{description}</p>
      </div>
    </motion.div>
  )
}

const timelineEvents = [
  {
    date: "MAR 12, 2025",
    title: "Registration Opens",
    description: "Sign up for BlueBit and secure your spot in this exciting hackathon.",
  },
  {
    date: "MAR 17, 2025 at 6:00 PM",
    title: "Round 1: PPT Submission starts",
    description: "Problem statements will be released. 3 days will be provided to create and submit a PPT.",
  },
  {
    date: "MAR 19, 2025 at 6:00 PM",
    title: "Round 1: PPT Submission deadline",
    description: "PPT must be submitted by 19th March 6 p.m.",
  },
  {
    date: "MAR 22, 2025 at 12:00 PM",
    title: "Round 2: 36 hours Online Hackathon",
    description: "The proposed solutions in the presentation have to be implemented in the given 36 hours.",
  },
  {
    date: "MAR 24, 2025 at 12:00 AM",
    title: "Round 2: Online Hackathon ends",
    description: "Submit your projects on the github repository provided.",
  },
  {
    date: "MAR 29, 2025 at 8:00 AM",
    title: "Final Round: 12 hours Offline Hackathon Starts",
    description: "Complete project implementation is expected to be completed in this round.",
  },
  {
    date: "MAR 29, 2025 at 8:00 PM",
    title: "Final Round Ends",
    description: "End of Submissions.",
  },
]

