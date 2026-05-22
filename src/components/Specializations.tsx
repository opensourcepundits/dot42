import { useState } from "react";
import {
  Focus,
  Eye,
  Network,
  LineChart,
  Cpu,
  FileText,
  Terminal,
  CircuitBoard,
  X,
  ChevronLeft,
  ChevronRight,
  Search,
  Brain,
  Target
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const MedicalGraphic = () => (
  <div className="relative w-full h-full border border-outline-variant/30 rounded-lg bg-surface-container-lowest flex items-center justify-center overflow-hidden min-h-[250px] md:min-h-[300px]">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-container/5 via-transparent to-transparent opacity-50" />
    
    {/* Grid Background */}
    <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:20px_20px]" />

    <svg viewBox="0 0 100 100" className="w-[90%] h-[90%] md:w-[75%] md:h-[75%] z-10 drop-shadow-[0_0_12px_rgba(0,229,255,0.2)]">
      {/* Lungs outline - more organic and larger */}
      <path d="M 44 15 C 32 8, 12 25, 12 55 C 12 80, 35 95, 46 88 C 42 75, 40 60, 48 40 C 49 30, 47 20, 44 15 Z" fill="rgba(0,229,255,0.05)" stroke="#00e5ff" strokeWidth="1"/>
      <path d="M 56 15 C 68 8, 88 25, 88 55 C 88 80, 65 95, 54 88 C 55 70, 57 50, 52 40 C 51 30, 53 20, 56 15 Z" fill="rgba(0,229,255,0.05)" stroke="#00e5ff" strokeWidth="1"/>
      
      {/* Trachea */}
      <line x1="50" y1="2" x2="50" y2="25" stroke="#bac9cc" strokeWidth="2.5" strokeLinecap="round" />
      
      {/* Primary Bronchi */}
      <path d="M 50 25 Q 45 35 38 42" fill="none" stroke="#bac9cc" strokeWidth="2" strokeLinecap="round" />
      <path d="M 50 25 Q 55 35 62 42" fill="none" stroke="#bac9cc" strokeWidth="2" strokeLinecap="round" />

      {/* Internal bronchioles - Left */}
      <path d="M 42 35 Q 35 38 30 45" fill="none" stroke="#bac9cc" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M 38 42 Q 32 48 25 55" fill="none" stroke="#bac9cc" strokeWidth="1" strokeLinecap="round" />
      <path d="M 38 42 Q 38 52 35 60" fill="none" stroke="#bac9cc" strokeWidth="1" strokeLinecap="round" />
      <path d="M 35 60 Q 30 65 24 68" fill="none" stroke="#bac9cc" strokeWidth="0.8" strokeLinecap="round" />

      {/* Internal bronchioles - Right */}
      <path d="M 58 35 Q 65 38 70 45" fill="none" stroke="#bac9cc" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M 62 42 Q 68 48 75 55" fill="none" stroke="#bac9cc" strokeWidth="1" strokeLinecap="round" />
      <path d="M 62 42 Q 62 52 65 60" fill="none" stroke="#bac9cc" strokeWidth="1" strokeLinecap="round" />
      <path d="M 65 60 Q 70 65 76 68" fill="none" stroke="#bac9cc" strokeWidth="0.8" strokeLinecap="round" />
      
      {/* Scanning effect */}
      <motion.line 
        x1="5" y1="0" x2="95" y2="0" 
        stroke="#00e5ff" strokeWidth="0.5" 
        filter="drop-shadow(0 0 4px #00e5ff)"
        animate={{ y1: [5, 95, 5], y2: [5, 95, 5] }} 
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Anomaly Detection Box */}
      <motion.g
        animate={{ opacity: [0, 0, 1, 1, 0] }}
        transition={{ duration: 4, repeat: Infinity, times: [0, 0.4, 0.5, 0.9, 1] }}
      >
        <rect x="20" y="55" width="16" height="16" stroke="#ffb4ab" strokeWidth="1.2" fill="rgba(255,180,171,0.15)" />
        <circle cx="28" cy="63" r="2" fill="#ffb4ab" />
        <line x1="36" y1="63" x2="52" y2="63" stroke="#ffb4ab" strokeWidth="0.5" strokeDasharray="2 2" />
        <text x="53" y="64.5" fill="#ffb4ab" fontSize="4.5" fontFamily="monospace" letterSpacing="0.5" fontWeight="bold">MALIGNANT_0.98</text>
      </motion.g>
    </svg>
  </div>
);

const GestureGraphic = () => (
  <div className="relative w-full h-full border border-outline-variant/30 rounded-lg bg-surface-container-lowest flex items-center justify-center overflow-hidden min-h-[250px] md:min-h-[300px]">
    {/* Dot grid Background */}
    <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:16px_16px]" />

    <svg viewBox="0 0 100 100" className="w-[80%] h-[80%] md:w-[60%] md:h-[60%] z-10 overflow-visible drop-shadow-[0_0_8px_rgba(0,229,255,0.15)]">
      {/* Palm Frame & Base Connections */}
      <path d="M 50 90 L 20 60 L 40 50 L 52 48 L 64 50 L 75 60 Z" fill="rgba(0,229,255,0.05)" stroke="#3b494c" strokeWidth="1" strokeDasharray="2 2"/>
      
      {/* Wrist */}
      <circle cx="50" cy="90" r="3" fill="#00daf3" />
      {/* Palm Nodes (MCPs) */}
      <circle cx="20" cy="60" r="2.5" fill="#00daf3" />
      <circle cx="40" cy="50" r="2.5" fill="#00daf3" />
      <circle cx="52" cy="48" r="2.5" fill="#00daf3" />
      <circle cx="64" cy="50" r="2.5" fill="#00daf3" />
      <circle cx="75" cy="60" r="2.5" fill="#00daf3" />

      {/* Thumb */}
      <g>
        <animateTransform attributeName="transform" type="rotate" values="0 20 60; 15 20 60; 0 20 60" keyTimes="0; 0.5; 1" dur="4s" repeatCount="indefinite" />
        <line x1="20" y1="60" x2="12" y2="45" stroke="#00e5ff" strokeWidth="1.5" />
        <circle cx="12" cy="45" r="2" fill="#bac9cc" />
        <line x1="12" y1="45" x2="5" y2="35" stroke="#00e5ff" strokeWidth="1.5" />
        <circle cx="5" cy="35" r="2" fill="#bac9cc" />
      </g>

      {/* Index */}
      <g>
        <animateTransform attributeName="transform" type="rotate" values="0 40 50; 35 40 50; 0 40 50" keyTimes="0; 0.5; 1" dur="4s" repeatCount="indefinite" begin="0.4s" />
        <line x1="40" y1="50" x2="35" y2="30" stroke="#00e5ff" strokeWidth="1.5" />
        <circle cx="35" cy="30" r="2" fill="#bac9cc" />
        <line x1="35" y1="30" x2="32" y2="18" stroke="#00e5ff" strokeWidth="1.5" />
        <circle cx="32" cy="18" r="2" fill="#bac9cc" />
        <line x1="32" y1="18" x2="30" y2="8" stroke="#00e5ff" strokeWidth="1.5" />
        <circle cx="30" cy="8" r="2" fill="#fff" />
        
        {/* Track tip heartbeat */}
        <motion.circle cx="30" cy="8" r="4" fill="none" stroke="#00e5ff" strokeWidth="0.5" 
          animate={{ scale: [1, 2.5], opacity: [1, 0] }} transition={{ duration: 1.5, repeat: Infinity }} />
      </g>

      {/* Middle */}
      <g>
        <animateTransform attributeName="transform" type="rotate" values="0 52 48; 45 52 48; 0 52 48" keyTimes="0; 0.5; 1" dur="4s" repeatCount="indefinite" begin="0.8s" />
        <line x1="52" y1="48" x2="52" y2="25" stroke="#00e5ff" strokeWidth="1.5" />
        <circle cx="52" cy="25" r="2" fill="#bac9cc" />
        <line x1="52" y1="25" x2="52" y2="12" stroke="#00e5ff" strokeWidth="1.5" />
        <circle cx="52" cy="12" r="2" fill="#bac9cc" />
        <line x1="52" y1="12" x2="52" y2="2" stroke="#00e5ff" strokeWidth="1.5" />
        <circle cx="52" cy="2" r="2" fill="#fff" />
      </g>

      {/* Ring */}
      <g>
        <animateTransform attributeName="transform" type="rotate" values="0 64 50; 40 64 50; 0 64 50" keyTimes="0; 0.5; 1" dur="4s" repeatCount="indefinite" begin="1.2s" />
        <line x1="64" y1="50" x2="66" y2="30" stroke="#00e5ff" strokeWidth="1.5" />
        <circle cx="66" cy="30" r="2" fill="#bac9cc" />
        <line x1="66" y1="30" x2="68" y2="17" stroke="#00e5ff" strokeWidth="1.5" />
        <circle cx="68" cy="17" r="2" fill="#bac9cc" />
        <line x1="68" y1="17" x2="70" y2="7" stroke="#00e5ff" strokeWidth="1.5" />
        <circle cx="70" cy="7" r="2" fill="#fff" />
      </g>

      {/* Pinky */}
      <g>
        <animateTransform attributeName="transform" type="rotate" values="0 75 60; 30 75 60; 0 75 60" keyTimes="0; 0.5; 1" dur="4s" repeatCount="indefinite" begin="1.6s" />
        <line x1="75" y1="60" x2="83" y2="44" stroke="#00e5ff" strokeWidth="1.5" />
        <circle cx="83" cy="44" r="2" fill="#bac9cc" />
        <line x1="83" y1="44" x2="88" y2="33" stroke="#00e5ff" strokeWidth="1.5" />
        <circle cx="88" cy="33" r="2" fill="#bac9cc" />
        <line x1="88" y1="33" x2="91" y2="25" stroke="#00e5ff" strokeWidth="1.5" />
        <circle cx="91" cy="25" r="2" fill="#fff" />
      </g>
    </svg>
    
    {/* Data Overlay */}
    <div className="absolute top-4 left-4 font-label-caps text-[8px] md:text-[10px] text-primary-container opacity-60">
      <p>KINEMATIC_CHAIN: ACTIVE</p>
      <p>JOINTS: 21</p>
      <p className="animate-pulse">LATENCY: 1.2ms</p>
    </div>
  </div>
);

const SegmentationGraphic = () => (
  <div className="relative w-full h-full border border-outline-variant/30 rounded-lg bg-surface-container-lowest flex items-center justify-center overflow-hidden p-8 min-h-[250px] md:min-h-[300px]">
     <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <motion.path
          initial={{ fill: "transparent", strokeDasharray: "0 1000" }}
          animate={{ fill: "rgba(0, 229, 255, 0.15)", strokeDasharray: "1000 0" }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          d="M10,90 L40,65 L55,80 L90,20 L95,90 Z"
          stroke="#00e5ff" strokeWidth="1"
        />
        <motion.path
          initial={{ fill: "transparent", strokeDasharray: "0 1000" }}
          animate={{ fill: "rgba(186, 201, 204, 0.1)", strokeDasharray: "1000 0" }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", delay: 1, ease: "easeInOut" }}
          d="M10,90 L20,30 L55,50 L40,65 Z"
          stroke="#bac9cc" strokeWidth="1"
        />
     </svg>
     <motion.div
       className="absolute w-20 h-8 border border-primary-container bg-primary-container/10 backdrop-blur-md flex items-center justify-center font-label-caps text-[10px] text-primary-container"
       animate={{ x: [-30, 40, -30], y: [-20, 20, -20] }} transition={{duration: 6, repeat: Infinity, ease: "easeInOut"}}
     >
      CONF: 99%
     </motion.div>
  </div>
);

const DefectGraphic = () => (
  <div className="relative w-full h-full border border-outline-variant/30 rounded-lg bg-surface-container-lowest flex items-center justify-center overflow-hidden min-h-[250px] md:min-h-[300px]">
    <div className="flex gap-4 md:gap-6 relative">
       {Array.from({length: 4}).map((_, i) => (
          <div key={i} className="relative w-12 h-12 md:w-16 md:h-16 border-2 border-outline-variant/50 rounded-full flex items-center justify-center">
             {i === 2 && (
                <motion.div
                  animate={{ scale: [1, 1.4, 1], opacity: [0, 1, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut"}}
                  className="absolute inset-0 border-2 border-error rounded-full"
                />
             )}
             <div className={`w-3 h-3 md:w-4 md:h-4 rounded-full ${i === 2 ? 'bg-error shadow-[0_0_10px_#ffb4ab]' : 'bg-outline-variant'}`} />
          </div>
       ))}
    </div>
    <motion.div
       animate={{ x: ["-150%", "150%", "-150%"] }}
       transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
       className="absolute top-0 bottom-0 w-[1px] bg-primary-container shadow-[0_0_15px_#00daf3]"
    />
  </div>
);

const SupplyChainMazeGraphic = () => (
  <div className="relative w-full h-full border border-outline-variant/30 rounded-lg bg-surface-container-lowest flex items-center justify-center overflow-hidden min-h-[250px] md:min-h-[300px]">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,180,216,0.05)_1px,transparent_1px)] bg-[length:16px_16px]" />
    <svg viewBox="0 0 100 100" className="w-[80%] h-[80%] md:w-[60%] md:h-[60%] z-10 overflow-visible drop-shadow-[0_0_8px_rgba(0,229,255,0.15)]">
      {/* Maze structure lines */}
      <path d="M 10 10 L 40 10 L 40 30 L 70 30 L 70 10 L 90 10" fill="none" stroke="#bac9cc" strokeWidth="0.5" strokeDasharray="1 1" />
      <path d="M 10 90 L 30 90 L 30 50 L 50 50 L 50 70 L 90 70" fill="none" stroke="#bac9cc" strokeWidth="0.5" strokeDasharray="1 1" />
      <path d="M 10 50 L 20 50 L 20 20 L 60 20 L 60 60 L 80 60 L 80 90" fill="none" stroke="#bac9cc" strokeWidth="0.5" strokeDasharray="1 1" />
      
      {/* Active optimized route */}
      <motion.path 
        d="M 10 10 L 20 10 L 20 50 L 30 50 L 30 90 L 90 90 L 90 70 L 80 70 L 80 60 L 60 60 L 60 20 L 90 20" 
        fill="none" stroke="#00e5ff" strokeWidth="1.5" 
        initial={{ pathLength: 0 }} 
        animate={{ pathLength: 1 }} 
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }} 
      />
      
      {/* Target Nodes */}
      <circle cx="10" cy="10" r="2.5" fill="#00daf3" />
      <motion.circle cx="90" cy="20" r="3" fill="#00daf3" animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }} transition={{ duration: 2, repeat: Infinity }} />
      <circle cx="30" cy="50" r="2" fill="#bac9cc" />
      <circle cx="60" cy="60" r="2" fill="#bac9cc" />
      <circle cx="80" cy="70" r="2" fill="#bac9cc" />
      <circle cx="30" cy="90" r="2" fill="#bac9cc" />
    </svg>
    <div className="absolute top-4 left-4 font-label-caps text-[8px] md:text-[10px] text-primary-container opacity-60">
      <p>ROUTE_COMPUTE: ACTIVE</p>
      <p>BOTTLENECKS: BYPASSED</p>
    </div>
  </div>
);

const NetworkNodesGraphic = () => (
  <div className="relative w-full h-full border border-outline-variant/30 rounded-lg bg-surface-container-lowest flex items-center justify-center overflow-hidden min-h-[250px] md:min-h-[300px]">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,180,216,0.05)_1px,transparent_1px)] bg-[length:16px_16px]" />
    <svg viewBox="0 0 100 100" className="w-[80%] h-[80%] md:w-[60%] md:h-[60%] z-10 overflow-visible drop-shadow-[0_0_8px_rgba(0,229,255,0.15)]">
      <motion.line x1="20" y1="50" x2="50" y2="20" stroke="#00e5ff" strokeWidth="1" strokeDasharray="2 2" animate={{ strokeDashoffset: [0, 20] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
      <motion.line x1="50" y1="20" x2="80" y2="50" stroke="#00e5ff" strokeWidth="1" strokeDasharray="2 2" animate={{ strokeDashoffset: [0, -20] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
      <motion.line x1="80" y1="50" x2="50" y2="80" stroke="#00e5ff" strokeWidth="1" strokeDasharray="2 2" animate={{ strokeDashoffset: [0, 20] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
      <motion.line x1="50" y1="80" x2="20" y2="50" stroke="#00e5ff" strokeWidth="1" strokeDasharray="2 2" animate={{ strokeDashoffset: [0, -20] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
      <motion.line x1="50" y1="20" x2="50" y2="80" stroke="#bac9cc" strokeWidth="0.5" />
      <motion.line x1="20" y1="50" x2="80" y2="50" stroke="#bac9cc" strokeWidth="0.5" />

      <motion.circle cx="50" cy="50" r="4" fill="#00daf3" animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }} transition={{ duration: 2, repeat: Infinity }} />
      <circle cx="20" cy="50" r="3" fill="#bac9cc" />
      <circle cx="50" cy="20" r="3" fill="#bac9cc" />
      <circle cx="80" cy="50" r="3" fill="#bac9cc" />
      <circle cx="50" cy="80" r="3" fill="#bac9cc" />
      
      <circle cx="35" cy="35" r="1.5" fill="#fff" />
      <circle cx="65" cy="35" r="1.5" fill="#fff" />
      <circle cx="65" cy="65" r="1.5" fill="#fff" />
      <circle cx="35" cy="65" r="1.5" fill="#fff" />
    </svg>
    <div className="absolute top-4 left-4 font-label-caps text-[8px] md:text-[10px] text-primary-container opacity-60">
      <p>AGENT_TOPOLOGY: ACTIVE</p>
      <p>NODES: OPTIMIZED</p>
    </div>
  </div>
);

const PipelineGraphic = () => (
  <div className="relative w-full h-full border border-outline-variant/30 rounded-lg bg-surface-container-lowest flex items-center justify-center overflow-hidden min-h-[250px] md:min-h-[300px]">
    <div className="flex gap-4 items-center">
      <motion.div className="w-12 h-16 border border-primary-container/50 bg-primary-container/10 flex items-center justify-center rounded" animate={{ borderColor: ["var(--color-primary-container)", "rgba(0,229,255,0.2)", "var(--color-primary-container)"] }} transition={{ duration: 2, repeat: Infinity, delay: 0 }}>
        <div className="w-4 h-1 bg-primary-container rounded-full" />
      </motion.div>
      <motion.div className="w-8 h-[1px] bg-primary-container/30" animate={{ scaleX: [0, 1], originX: 0 }} transition={{ duration: 2, repeat: Infinity }} />
      <motion.div className="w-12 h-16 border border-primary-container/50 bg-primary-container/10 flex items-center justify-center rounded" animate={{ borderColor: ["rgba(0,229,255,0.2)", "var(--color-primary-container)", "rgba(0,229,255,0.2)"] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}>
        <div className="w-4 h-1 bg-primary-container rounded-full" />
      </motion.div>
      <motion.div className="w-8 h-[1px] bg-primary-container/30" animate={{ scaleX: [0, 1], originX: 0 }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} />
      <motion.div className="w-12 h-16 border border-primary-container/50 bg-primary-container/10 flex flex-col items-center justify-center gap-1 rounded" animate={{ borderColor: ["rgba(0,229,255,0.2)", "rgba(0,229,255,0.2)", "var(--color-primary-container)"] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }}>
        <div className="w-4 h-1 bg-primary-container rounded-full" />
        <div className="w-4 h-1 bg-primary-container rounded-full opacity-50" />
      </motion.div>
    </div>
  </div>
);

const ShieldGraphic = () => (
   <div className="relative w-full h-full border border-outline-variant/30 rounded-lg bg-surface-container-lowest flex items-center justify-center overflow-hidden min-h-[250px] md:min-h-[300px]">
     <svg viewBox="0 0 100 100" className="w-[60%] h-[60%] z-10 drop-shadow-[0_0_8px_rgba(0,229,255,0.2)]">
        <motion.path 
          d="M 50 10 L 80 25 L 80 55 C 80 75 50 90 50 90 C 50 90 20 75 20 55 L 20 25 Z" 
          fill="rgba(0,229,255,0.05)" stroke="#00e5ff" strokeWidth="2" 
          animate={{ strokeDasharray: ["0 300", "300 0"] }} transition={{ duration: 3, repeat: Infinity }} 
        />
        <path d="M 50 10 L 80 25 L 80 55 C 80 75 50 90 50 90 C 50 90 20 75 20 55 L 20 25 Z" fill="rgba(0,229,255,0.02)" stroke="#bac9cc" strokeWidth="0.5" />
        
        <rect x="40" y="40" width="20" height="15" rx="2" fill="#bac9cc" />
        <path d="M 45 40 V 35 A 5 5 0 0 1 55 35 V 40" fill="none" stroke="#bac9cc" strokeWidth="2" />
        <circle cx="50" cy="47.5" r="2" fill="#00daf3" />
        
        <motion.circle cx="50" cy="50" r="40" fill="none" stroke="#00daf3" strokeWidth="0.5" animate={{ scale: [0.8, 1.2], opacity: [0.5, 0] }} transition={{ duration: 2, repeat: Infinity }} />
     </svg>
   </div>
);

const ChartGraphic = () => (
  <div className="relative w-full h-full border border-outline-variant/30 rounded-lg bg-surface-container-lowest flex items-end justify-center overflow-hidden min-h-[250px] md:min-h-[300px] p-8">
     <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <motion.path d="M 0 80 Q 20 70 40 50 T 80 30 L 100 20" fill="none" stroke="#bac9cc" strokeWidth="1" strokeDasharray="2 2" />
        <motion.path 
          d="M 0 90 Q 20 80 40 40 T 80 20 L 100 10" 
          fill="none" stroke="#00e5ff" strokeWidth="2" 
          initial={{ pathLength: 0 }} 
          animate={{ pathLength: 1 }} 
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} 
        />
        <path d="M 0 90 Q 20 80 40 40 T 80 20 L 100 10 L 100 100 L 0 100 Z" fill="rgba(0,229,255,0.1)" />
        <circle cx="40" cy="40" r="3" fill="#00daf3" />
        <circle cx="80" cy="20" r="3" fill="#00daf3" />
        
        <motion.line x1="40" y1="40" x2="40" y2="100" stroke="#00e5ff" strokeWidth="0.5" strokeDasharray="1 1" animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 1.5, repeat: Infinity }} />
        <motion.line x1="80" y1="20" x2="80" y2="100" stroke="#00e5ff" strokeWidth="0.5" strokeDasharray="1 1" animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }} />
     </svg>
  </div>
);

const MatrixGraphic = () => (
  <div className="relative w-full h-full border border-outline-variant/30 rounded-lg bg-surface-container-lowest flex items-center justify-center overflow-hidden min-h-[250px] md:min-h-[300px]">
     <div className="grid grid-cols-5 gap-2 p-8 w-full h-full">
        {Array.from({length: 25}).map((_, i) => (
           <motion.div 
             key={i} 
             className="bg-primary-container/20 rounded-sm"
             animate={{ opacity: [0.2, 0.8, 0.2] }}
             transition={{ duration: Math.random() * 2 + 1, repeat: Infinity, delay: Math.random() * 2 }}
           />
        ))}
     </div>
  </div>
);

const RiskMatrixGraphic = () => (
  <div className="relative w-full h-full border border-outline-variant/30 rounded-lg bg-surface-container-lowest flex items-center justify-center overflow-hidden min-h-[250px] md:min-h-[300px]">
     <div className="grid grid-cols-5 gap-2 p-8 w-full h-full">
        {Array.from({length: 25}).map((_, i) => {
           let colorClass = "bg-primary-container/20";
           if (i === 7 || i === 18) colorClass = "bg-red-500/60 shadow-[0_0_8px_rgba(239,68,68,0.4)]";
           else if (i === 12 || i === 23) colorClass = "bg-yellow-400/60 shadow-[0_0_8px_rgba(250,204,21,0.4)]";
           return (
             <motion.div 
               key={i} 
               className={`${colorClass} rounded-sm`}
               animate={{ opacity: [0.2, 0.8, 0.2] }}
               transition={{ duration: Math.random() * 2 + 1, repeat: Infinity, delay: Math.random() * 2 }}
             />
           );
        })}
     </div>
  </div>
);

const AtomGraphic = () => (
  <div className="relative w-full h-full border border-outline-variant/30 rounded-lg bg-surface-container-lowest flex items-center justify-center overflow-hidden min-h-[250px] md:min-h-[300px]">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,229,255,0.05)_1px,transparent_1px)] bg-[length:16px_16px]" />
    <svg viewBox="0 0 100 100" className="w-[80%] h-[80%] md:w-[60%] md:h-[60%] z-10 overflow-visible drop-shadow-[0_0_8px_rgba(0,229,255,0.2)]">
      {/* Central nucleus */}
      <motion.circle cx="50" cy="50" r="4" fill="#00daf3" animate={{ scale: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} />
      <circle cx="50" cy="50" r="2" fill="#fff" />
      
      {/* Orbits */}
      <ellipse cx="50" cy="50" rx="35" ry="12" fill="none" stroke="rgba(0,229,255,0.3)" strokeWidth="0.5" transform="rotate(0 50 50)" />
      <ellipse cx="50" cy="50" rx="35" ry="12" fill="none" stroke="rgba(0,229,255,0.3)" strokeWidth="0.5" transform="rotate(60 50 50)" />
      <ellipse cx="50" cy="50" rx="35" ry="12" fill="none" stroke="rgba(0,229,255,0.3)" strokeWidth="0.5" transform="rotate(120 50 50)" />
      
      {/* Electrons */}
      <g transform="rotate(0 50 50)">
        <circle r="2" fill="#00e5ff">
          <animateMotion path="M15,50 A35,12 0 1,1 85,50 A35,12 0 1,1 15,50" dur="3s" repeatCount="indefinite" />
        </circle>
      </g>
      <g transform="rotate(60 50 50)">
        <circle r="2" fill="#00e5ff">
          <animateMotion path="M15,50 A35,12 0 1,1 85,50 A35,12 0 1,1 15,50" dur="4s" repeatCount="indefinite" begin="0.5s" />
        </circle>
      </g>
      <g transform="rotate(120 50 50)">
        <circle r="2" fill="#00e5ff">
          <animateMotion path="M15,50 A35,12 0 1,1 85,50 A35,12 0 1,1 15,50" dur="3.5s" repeatCount="indefinite" begin="1s" />
        </circle>
      </g>
    </svg>
  </div>
);

const ChipGraphic = () => (
  <div className="relative w-full h-full border border-outline-variant/30 rounded-lg bg-surface-container-lowest flex items-center justify-center overflow-hidden min-h-[250px] md:min-h-[300px]">
    <svg viewBox="0 0 100 100" className="w-[60%] h-[60%] z-10 drop-shadow-[0_0_8px_rgba(0,229,255,0.2)]">
      <rect x="30" y="30" width="40" height="40" rx="4" fill="rgba(0,229,255,0.05)" stroke="#00e5ff" strokeWidth="1.5" />
      <rect x="35" y="35" width="30" height="30" rx="2" fill="none" stroke="#bac9cc" strokeWidth="0.5" />
      
      {/* Pins top */}
      <line x1="40" y1="20" x2="40" y2="30" stroke="#bac9cc" strokeWidth="1" />
      <line x1="50" y1="20" x2="50" y2="30" stroke="#bac9cc" strokeWidth="1" />
      <line x1="60" y1="20" x2="60" y2="30" stroke="#bac9cc" strokeWidth="1" />
      {/* Pins bottom */}
      <line x1="40" y1="70" x2="40" y2="80" stroke="#bac9cc" strokeWidth="1" />
      <line x1="50" y1="70" x2="50" y2="80" stroke="#bac9cc" strokeWidth="1" />
      <line x1="60" y1="70" x2="60" y2="80" stroke="#bac9cc" strokeWidth="1" />
      {/* Pins left */}
      <line x1="20" y1="40" x2="30" y2="40" stroke="#bac9cc" strokeWidth="1" />
      <line x1="20" y1="50" x2="30" y2="50" stroke="#bac9cc" strokeWidth="1" />
      <line x1="20" y1="60" x2="30" y2="60" stroke="#bac9cc" strokeWidth="1" />
      {/* Pins right */}
      <line x1="70" y1="40" x2="80" y2="40" stroke="#bac9cc" strokeWidth="1" />
      <line x1="70" y1="50" x2="80" y2="50" stroke="#bac9cc" strokeWidth="1" />
      <line x1="70" y1="60" x2="80" y2="60" stroke="#bac9cc" strokeWidth="1" />

      <motion.circle cx="50" cy="50" r="8" fill="#00daf3" stroke="none" animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }} transition={{ duration: 1.5, repeat: Infinity }} />
      <motion.circle cx="50" cy="50" r="16" fill="none" stroke="#00e5ff" strokeWidth="0.5" animate={{ scale: [1, 2], opacity: [1, 0] }} transition={{ duration: 1.5, repeat: Infinity }} />
    </svg>
  </div>
);

const EquipmentGearGraphic = () => (
  <div className="relative w-full h-full border border-outline-variant/30 rounded-lg bg-surface-container-lowest flex items-center justify-center overflow-hidden min-h-[250px] md:min-h-[300px]">
    <svg viewBox="0 0 100 100" className="w-[60%] h-[60%] z-10 drop-shadow-[0_0_8px_rgba(0,229,255,0.15)]">
      {/* Main Gear */}
      <motion.g 
        animate={{ rotate: 360 }} 
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        style={{ originX: 0.5, originY: 0.5 }}
      >
        <circle cx="50" cy="50" r="25" fill="none" stroke="#bac9cc" strokeWidth="4" />
        {Array.from({length: 8}).map((_, i) => (
          <line 
            key={i}
            x1="50" y1="20" x2="50" y2="10" 
            stroke="#bac9cc" strokeWidth="6" strokeLinecap="round"
            transform={`rotate(${i * 45} 50 50)`} 
          />
        ))}
        <circle cx="50" cy="50" r="12" fill="none" stroke="#bac9cc" strokeWidth="2" />
      </motion.g>
      
      {/* Target/Scan overlay */}
      <motion.circle 
        cx="50" cy="50" r="30" 
        fill="none" stroke="#00e5ff" strokeWidth="0.5" strokeDasharray="2 4"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      
      {/* Warning highlight (predictive part) */}
      <motion.g
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
      >
        <path d="M 68 32 L 80 20" stroke="#ffb4ab" strokeWidth="1" strokeDasharray="1 2" />
        <circle cx="68" cy="32" r="3" fill="none" stroke="#ffb4ab" strokeWidth="1" />
        <text x="82" y="18" fill="#ffb4ab" fontSize="6" fontFamily="monospace">STRESS_DETECTED</text>
      </motion.g>
    </svg>
    <div className="absolute top-4 left-4 font-label-caps text-[8px] md:text-[10px] text-primary-container opacity-60">
      <p>VIBRATION_ANALYSIS: ON</p>
      <p>MAINTENANCE: PREDICTED</p>
    </div>
  </div>
);

const TerminalGraphic = () => (
  <div className="relative w-full h-full border border-outline-variant/30 rounded-lg bg-surface-container-lowest flex flex-col p-6 overflow-hidden min-h-[250px] md:min-h-[300px]">
     <div className="flex gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-outline-variant/50" />
        <div className="w-3 h-3 rounded-full bg-outline-variant/50" />
        <div className="w-3 h-3 rounded-full bg-outline-variant/50" />
     </div>
     <div className="font-mono text-xs md:text-sm text-primary-container/80 flex flex-col gap-2">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>&gt; Initializing MCP server...</motion.p>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }}>&gt; Binding protocol to local standard...</motion.p>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>&gt; Connect: PostgreSQL Database</motion.p>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.0 }} className="text-[#ffb4ab]">&gt; ENFORCING RBAC POLICIES</motion.p>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }} className="flex items-center gap-2">&gt; Status: OK <motion.span animate={{ opacity: [0, 1] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-2 h-4 bg-primary-container inline-block" /></motion.p>
     </div>
  </div>
);

const ServerRackGraphic = () => (
  <div className="relative w-full h-full border border-outline-variant/30 rounded-lg bg-surface-container-lowest flex items-center justify-center overflow-hidden min-h-[250px] md:min-h-[300px] p-8">
     <div className="w-[80%] max-w-[200px] flex flex-col gap-3">
        {[1,2,3].map((i) => (
           <div key={i} className="h-12 border border-primary-container/30 rounded bg-surface-container flex items-center px-4 gap-4 relative overflow-hidden">
              <div className="w-2 h-2 rounded-full bg-[#00daf3] shadow-[0_0_8px_#00daf3]" />
              <div className="w-2 h-2 rounded-full bg-outline-variant" />
              <div className="flex-1" />
              <div className="w-16 h-2 bg-primary-container/20 rounded overflow-hidden">
                 <motion.div className="h-full bg-primary-container" animate={{ width: ["20%", "80%", "40%"] }} transition={{ duration: 2 + i, repeat: Infinity, ease: "linear" }} />
              </div>
           </div>
        ))}
     </div>
  </div>
);

const LifetimeValueGraphic = () => (
  <div className="relative w-full h-full border border-outline-variant/30 rounded-lg bg-surface-container-lowest flex items-center justify-center overflow-hidden min-h-[250px] md:min-h-[300px]">
    <svg viewBox="0 0 100 100" className="w-[80%] h-[80%] md:w-[60%] md:h-[60%] z-10 overflow-visible drop-shadow-[0_0_8px_rgba(0,229,255,0.15)]">
       <line x1="10" y1="90" x2="90" y2="90" stroke="#bac9cc" strokeWidth="0.5" />
       <path d="M 10 90 Q 40 50 90 20" fill="none" stroke="#bac9cc" strokeWidth="1" strokeDasharray="2 2" />
       <motion.path 
         d="M 10 90 Q 40 50 90 20" 
         fill="none" stroke="#00e5ff" strokeWidth="2" 
         initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
         transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
       />
       <g>
          <motion.circle cx="35" cy="70" r="3" fill="#00daf3" animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} />
          <line x1="35" y1="70" x2="35" y2="90" stroke="#00e5ff" strokeWidth="0.5" strokeDasharray="1 1" />
       </g>
       <g>
          <motion.circle cx="60" cy="45" r="3" fill="#00daf3" animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }} />
          <line x1="60" y1="45" x2="60" y2="90" stroke="#00e5ff" strokeWidth="0.5" strokeDasharray="1 1" />
       </g>
       <g>
          <motion.circle cx="85" cy="24" r="4" fill="#fff" animate={{ scale: [1, 1.3, 1], filter: ["blur(0px)", "blur(2px)", "blur(0px)"] }} transition={{ duration: 2, repeat: Infinity, delay: 1.5 }} />
          <line x1="85" y1="24" x2="85" y2="90" stroke="#00e5ff" strokeWidth="0.5" strokeDasharray="1 1" />
       </g>
    </svg>
    <div className="absolute top-4 left-4 font-label-caps text-[8px] md:text-[10px] text-primary-container opacity-60">
      <p>LTV_PROJECTION: MODELING</p>
    </div>
  </div>
);

const SegmentationGraphicGroup = () => (
  <div className="relative w-full h-full border border-outline-variant/30 rounded-lg bg-surface-container-lowest flex items-center justify-center overflow-hidden min-h-[250px] md:min-h-[300px]">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,180,216,0.05)_1px,transparent_1px)] bg-[length:16px_16px]" />
    <svg viewBox="0 0 100 100" className="w-[80%] h-[80%] md:w-[60%] md:h-[60%] z-10 overflow-visible drop-shadow-[0_0_8px_rgba(0,229,255,0.15)]">
       {/* Central amorphous group */}
       <motion.circle cx="30" cy="50" r="18" fill="rgba(186,201,204,0.1)" stroke="#bac9cc" strokeWidth="0.5" strokeDasharray="2 2" />
       <circle cx="25" cy="45" r="2" fill="#bac9cc" />
       <circle cx="35" cy="55" r="2" fill="#bac9cc" />
       <circle cx="30" cy="48" r="2" fill="#bac9cc" />
       <circle cx="28" cy="53" r="2" fill="#bac9cc" />
       <circle cx="33" cy="43" r="2" fill="#bac9cc" />
       <circle cx="22" cy="52" r="2" fill="#bac9cc" />
       <circle cx="38" cy="48" r="2" fill="#bac9cc" />
       <circle cx="27" cy="57" r="2" fill="#bac9cc" />
       <circle cx="34" cy="50" r="1.5" fill="#bac9cc" />
       <circle cx="24" cy="49" r="1.5" fill="#bac9cc" />
       <circle cx="31" cy="41" r="1.5" fill="#bac9cc" />
       <circle cx="29" cy="59" r="1.5" fill="#bac9cc" />
       <circle cx="21" cy="47" r="1.5" fill="#bac9cc" />
       <circle cx="39" cy="52" r="1.5" fill="#bac9cc" />
       
       {/* Splitting lines */}
       <motion.line x1="45" y1="50" x2="65" y2="25" stroke="#00e5ff" strokeWidth="1" strokeDasharray="2 2" animate={{ strokeDashoffset: [0, -20] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
       <motion.line x1="48" y1="50" x2="65" y2="50" stroke="#00e5ff" strokeWidth="1" strokeDasharray="2 2" animate={{ strokeDashoffset: [0, -20] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
       <motion.line x1="45" y1="50" x2="65" y2="75" stroke="#00e5ff" strokeWidth="1" strokeDasharray="2 2" animate={{ strokeDashoffset: [0, -20] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
       
       {/* Segment 1 */}
       <circle cx="75" cy="25" r="12" fill="rgba(0,229,255,0.1)" stroke="#00daf3" strokeWidth="1" />
       <circle cx="72" cy="22" r="2.5" fill="#00daf3" />
       <circle cx="78" cy="28" r="2" fill="#00daf3" />
       <circle cx="76" cy="21" r="1.5" fill="#00daf3" />
       <circle cx="71" cy="26" r="1.5" fill="#00daf3" />
       <circle cx="79" cy="24" r="1.5" fill="#00daf3" />
       
       {/* Segment 2 */}
       <circle cx="75" cy="50" r="10" fill="rgba(255,180,171,0.05)" stroke="#ffb4ab" strokeWidth="1" />
       <circle cx="73" cy="48" r="2" fill="#ffb4ab" />
       <circle cx="77" cy="52" r="2" fill="#ffb4ab" />
       <circle cx="72" cy="53" r="1.5" fill="#ffb4ab" />
       <circle cx="78" cy="47" r="1.5" fill="#ffb4ab" />
       <circle cx="76" cy="51" r="1.5" fill="#ffb4ab" />
       
       {/* Segment 3 */}
       <circle cx="75" cy="75" r="14" fill="rgba(0,229,255,0.05)" stroke="#00e5ff" strokeWidth="1" />
       <circle cx="73" cy="73" r="2.5" fill="#fff" />
       <circle cx="77" cy="76" r="2" fill="#fff" />
       <circle cx="75" cy="80" r="2" fill="#fff" />
       <circle cx="71" cy="78" r="1.5" fill="#fff" />
       <circle cx="79" cy="72" r="1.5" fill="#fff" />
       <circle cx="72" cy="81" r="1.5" fill="#fff" />
       <circle cx="78" cy="79" r="1.5" fill="#fff" />
    </svg>
    <div className="absolute top-4 left-4 font-label-caps text-[8px] md:text-[10px] text-primary-container opacity-60">
      <p>CLUSTERING: ACTIVE</p>
      <p>GROUPS: 4 IDENTIFIED</p>
    </div>
  </div>
);

const LeadRoutingGraphic = () => (
  <div className="relative w-full h-full border border-outline-variant/30 rounded-lg bg-surface-container-lowest flex items-center justify-center overflow-hidden min-h-[250px] md:min-h-[300px]">
     <svg viewBox="0 0 100 100" className="w-[80%] h-[80%] md:w-[60%] md:h-[60%] z-10 overflow-visible drop-shadow-[0_0_8px_rgba(0,229,255,0.15)]">
        {/* Inbound leads */}
        <circle cx="10" cy="20" r="2" fill="#bac9cc" />
        <circle cx="10" cy="50" r="2" fill="#bac9cc" />
        <circle cx="10" cy="80" r="2" fill="#bac9cc" />
        <motion.circle cx="10" cy="50" r="3" fill="#ffb4ab" animate={{ cx: [10, 40], cy: [50, 50], opacity: [1, 0] }} transition={{ duration: 1.5, repeat: Infinity }} />
        <motion.circle cx="10" cy="20" r="3" fill="#00daf3" animate={{ cx: [10, 40], cy: [20, 50], opacity: [1, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }} />
        <motion.circle cx="10" cy="80" r="3" fill="#fff" animate={{ cx: [10, 40], cy: [80, 50], opacity: [1, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 1 }} />
        
        {/* Scoring Engine (Central Node) */}
        <polygon points="40,35 60,50 40,65" fill="rgba(0,229,255,0.1)" stroke="#00e5ff" strokeWidth="1.5" />
        <motion.circle cx="45" cy="50" r="8" fill="none" stroke="#00daf3" strokeWidth="0.5" animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} strokeDasharray="4 2" />
        
        {/* Routing Options */}
        <line x1="60" y1="50" x2="80" y2="20" stroke="#bac9cc" strokeWidth="1" strokeDasharray="1 1" />
        <line x1="60" y1="50" x2="80" y2="50" stroke="#bac9cc" strokeWidth="1" strokeDasharray="1 1" />
        <line x1="60" y1="50" x2="80" y2="80" stroke="#bac9cc" strokeWidth="1" strokeDasharray="1 1" />
        
        <circle cx="85" cy="20" r="5" fill="none" stroke="#00daf3" strokeWidth="1" />
        <circle cx="85" cy="50" r="5" fill="none" stroke="#ffb4ab" strokeWidth="1" />
        <circle cx="85" cy="80" r="5" fill="none" stroke="#fff" strokeWidth="1" />
        
        {/* Outbound high value lead */}
        <motion.circle cx="60" cy="50" r="3" fill="#00daf3" animate={{ x: [0, 20], y: [0, -30] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }} />
     </svg>
    <div className="absolute top-4 left-4 font-label-caps text-[8px] md:text-[10px] text-primary-container opacity-60">
      <p>LEAD_SCORE: CALCULATING</p>
      <p>HIGH_VALUE: ROUTED</p>
    </div>
  </div>
);

const CampaignOrchestrationGraphic = () => (
  <div className="relative w-full h-full border border-outline-variant/30 rounded-lg bg-surface-container-lowest flex items-center justify-center overflow-hidden min-h-[250px] md:min-h-[300px]">
     <div className="flex flex-col gap-4 w-[70%]">
       {[1,2,3].map((i) => (
         <div key={i} className="flex items-center gap-3 w-full">
           <div className={`w-6 h-6 rounded-sm ${i === 2 ? 'bg-primary-container' : 'bg-surface-container-high border border-outline-variant/50'} shrink-0 flex items-center justify-center`}>
             {i===2 && <motion.div animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1.5, repeat: Infinity}} className="w-2 h-2 bg-on-primary rounded-full" />}
           </div>
           <div className="flex-1 h-2 bg-surface-container-high rounded-full overflow-hidden relative">
             <motion.div className="absolute top-0 bottom-0 left-0 bg-primary-container" initial={{ width: "20%" }} animate={{ width: i===1 ? "40%" : i===2 ? "85%" : "30%" }} transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }} />
           </div>
           <div className="w-12 text-right font-label-caps text-[8px] text-on-surface-variant">CH_0{i}</div>
         </div>
       ))}
     </div>
     <div className="absolute bottom-6 font-label-caps text-[10px] text-primary-container blur-[0.5px]">REALLOCATING_BUDGET...</div>
  </div>
);

const ComposedModelGraphic = () => (
   <div className="relative w-full h-full border border-outline-variant/30 rounded-lg bg-surface-container-lowest flex items-center justify-center overflow-hidden min-h-[250px] md:min-h-[300px]">
     <div className="flex items-center gap-2 md:gap-3">
        <div className="w-8 h-12 md:w-12 md:h-16 border border-outline-variant/30 bg-surface-container flex flex-col gap-1 p-1 md:p-2 rounded shrink-0">
           <div className="w-full h-1 bg-outline-variant/50" />
           <div className="w-full h-1 bg-outline-variant/50" />
           <div className="w-3/4 h-1 bg-outline-variant/50" />
        </div>
        
        <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.5, repeat: Infinity }} className="shrink-0">
           <div className="w-3 md:w-4 h-[1px] bg-primary-container" />
        </motion.div>
        
        <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full border border-primary-container flex items-center justify-center shrink-0">
           <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: 'linear' }} className="w-full h-full absolute border-t-2 border-primary-container rounded-full" />
           <div className="w-6 h-6 md:w-6 md:h-6 rounded-full bg-primary-container/20 flex flex-wrap gap-1 p-1">
              <div className="w-1.5 h-1.5 md:w-1.5 md:h-1.5 bg-primary-container rounded-sm" />
              <div className="w-1.5 h-1.5 md:w-1.5 md:h-1.5 bg-primary-container rounded-sm" />
              <div className="w-1.5 h-1.5 md:w-1.5 md:h-1.5 bg-primary-container rounded-sm" />
           </div>
        </div>

        <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }} className="shrink-0">
           <div className="w-2 md:w-3 h-[1px] bg-primary-container" />
        </motion.div>
        
        <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full border border-[#00e5ff] flex items-center justify-center shrink-0">
           <motion.div animate={{ rotate: -360 }} transition={{ duration: 3, repeat: Infinity, ease: 'linear' }} className="w-full h-full absolute border-t-2 border-[#00e5ff] rounded-full" />
           <div className="w-6 h-6 md:w-6 md:h-6 rounded-full bg-[#00e5ff]/20 flex flex-wrap gap-1 p-1">
              <div className="w-1.5 h-1.5 md:w-1.5 md:h-1.5 bg-[#00e5ff] rounded-sm" />
              <div className="w-1.5 h-1.5 md:w-1.5 md:h-1.5 bg-[#00e5ff] rounded-sm" />
           </div>
        </div>

        <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.75 }} className="shrink-0">
           <div className="w-2 md:w-3 h-[1px] bg-[#00daf3]" />
        </motion.div>

        <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full border border-[#ffb4ab] flex items-center justify-center shrink-0">
           <motion.div animate={{ rotate: 360 }} transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }} className="w-full h-full absolute border-t-2 border-[#ffb4ab] rounded-full" />
           <div className="w-6 h-6 md:w-6 md:h-6 rounded-full bg-[#ffb4ab]/20 flex flex-wrap gap-1 p-1">
              <div className="w-1.5 h-1.5 md:w-1.5 md:h-1.5 bg-[#ffb4ab] rounded-sm" />
              <div className="w-1.5 h-1.5 md:w-1.5 md:h-1.5 bg-[#ffb4ab] rounded-sm" />
              <div className="w-1.5 h-1.5 md:w-1.5 md:h-1.5 bg-[#ffb4ab] rounded-sm" />
              <div className="w-1.5 h-1.5 md:w-1.5 md:h-1.5 bg-[#ffb4ab] rounded-sm" />
           </div>
        </div>

        <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.5, repeat: Infinity, delay: 1 }} className="shrink-0">
           <div className="w-2 md:w-3 h-[1px] bg-[#ffb4ab]" />
        </motion.div>
        
        <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full border border-primary-container flex items-center justify-center shrink-0">
           <motion.div animate={{ rotate: -360 }} transition={{ duration: 5, repeat: Infinity, ease: 'linear' }} className="w-full h-full absolute border-t-2 border-primary-container rounded-full" />
           <div className="w-6 h-6 md:w-6 md:h-6 rounded-full bg-primary-container/20 flex flex-wrap gap-1 p-1">
              <div className="w-1.5 h-1.5 md:w-1.5 md:h-1.5 bg-primary-container rounded-sm" />
           </div>
        </div>

        <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.5, repeat: Infinity, delay: 1.25 }} className="shrink-0">
           <div className="w-2 md:w-3 h-[1px] bg-primary-container" />
        </motion.div>
        
        <div className="w-10 md:w-12 flex flex-col gap-1 shrink-0">
           <div className="w-full h-2 bg-primary-container/40 rounded-sm" />
           <div className="w-full h-2 bg-primary-container/40 rounded-sm" />
           <div className="w-3/4 h-2 bg-primary-container/40 rounded-sm" />
        </div>
     </div>
   </div>
);

const DocScanGraphic = () => (
  <div className="relative w-full h-full border border-outline-variant/30 rounded-lg bg-surface-container-lowest flex items-center justify-center overflow-hidden min-h-[250px] md:min-h-[300px]">
    <svg viewBox="0 0 100 100" className="w-[50%] h-[50%] z-10 drop-shadow-[0_0_8px_rgba(0,229,255,0.2)]">
      <path d="M 30 20 L 60 20 L 70 30 L 70 80 L 30 80 Z" fill="rgba(0,229,255,0.05)" stroke="#bac9cc" strokeWidth="1" />
      <path d="M 60 20 L 60 30 L 70 30" fill="none" stroke="#bac9cc" strokeWidth="1" />
      
      <line x1="38" y1="40" x2="62" y2="40" stroke="#bac9cc" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="38" y1="50" x2="62" y2="50" stroke="#bac9cc" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="38" y1="60" x2="55" y2="60" stroke="#bac9cc" strokeWidth="1.5" strokeLinecap="round" />
      
      <motion.line 
        x1="20" y1="20" x2="80" y2="20" 
        stroke="#00e5ff" strokeWidth="1.5" 
        filter="drop-shadow(0 0 4px #00e5ff)"
        animate={{ y1: [20, 80, 20], y2: [20, 80, 20] }} 
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
    </svg>
  </div>
);

const specializationData = [
  {
    id: "cv",
    index: "02",
    label: "SPATIAL INTEL",
    title: "Computer Vision & Spatial Intelligence",
    description: "We engineer high-fidelity vision pipelines using custom segmentation and spatial tracking models. From advanced kinetic analysis to automated industrial inspection, we transform raw pixels into deterministic operational data.",
    icon: Focus,
    colSpan: "md:col-span-4 md:order-2 min-h-[350px]",
    services: [
      {
        title: "Medical Image Analysis",
        description: "High-precision anomaly detection in complex medical imagery (MRI, CT, X-Ray) using custom segmentation architectures.",
        metrics: ["99.8% SENSITIVITY", "<2ms LATENCY"],
        Graphic: MedicalGraphic
      },
      {
        title: "Custom OCR (Optical Character Recognition)",
        description: "High-accuracy custom OCR architectures tailored specifically for your digitization and digitalisation tasks.",
        metrics: ["DOCUMENT PARSING", "DATA EXTRACTION"],
        Graphic: DocScanGraphic
      },
      {
        title: "Real-Time Gesture Recognition",
        description: "Low-latency spatial mapping and skeletal tracking for advanced human-computer interaction and intent prediction.",
        metrics: ["60fps+ TRACKING", "SUB-MM ACCURACY"],
        Graphic: GestureGraphic
      },
      {
        title: "Semantic Image Segmentation",
        description: "Pixel-perfect classification frameworks designed for autonomous navigation and complex scene understanding.",
        metrics: ["CUSTOM CLASSES", "EDGE-OPTIMIZED"],
        Graphic: SegmentationGraphic
      },
      {
        title: "Automated Defect Detection",
        description: "Industrial-grade visual inspection pipelines capable of identifying microscopic manufacturing flaws at production line speeds.",
        metrics: ["ZERO-DEFECT GOAL", "HIGH THROUGHPUT"],
        Graphic: DefectGraphic
      }
    ]
  },
  {
    id: "llm",
    index: "03",
    label: "FOUNDATION MODELS",
    title: "Fine-Tuning LLMs",
    description: "Move beyond standard models. We architect secure, private LLM pipelines fine-tuned on your proprietary intelligence with strict access controls and zero data leakage.",
    icon: Brain,
    colSpan: "md:col-span-4 md:order-3 min-h-[350px]",
    services: [
      {
        title: "Fine-Tuning LLMs",
        description: "Custom fine-tuning of foundation models on your proprietary datasets to achieve unparalleled domain-specific reasoning and accuracy.",
        metrics: ["DOMAIN ADAPTATION", "TASK SPECIALIZATION"],
        Graphic: AtomGraphic
      },
      {
        title: "Private Enterprise LLMs",
        description: "Locally hosted or securely siloed Foundation Models fine-tuned on your proprietary intelligence with strict access controls.",
        metrics: ["100% DATA PRIVACY", "ON-PREM DEPLOYMENT"],
        Graphic: ShieldGraphic
      },
      {
        title: "Deterministic RAG Pipelines",
        description: "Advanced Retrieval-Augmented Generation architectures that trace every output back to a verified, timestamped internal source document.",
        metrics: ["EXACT CITATIONS", "SEMANTIC SEARCH"],
        Graphic: PipelineGraphic
      }
    ]
  },
  {
    id: "agents",
    index: "04",
    label: "AUTONOMOUS SYSTEMS",
    title: "Agents",
    description: "Deploy autonomous multi-agent networks that execute complex, multi-step enterprise workflows with strict deterministic accuracy and robust tool-use constraints.",
    icon: Network,
    colSpan: "md:col-span-4 md:order-4 min-h-[350px]",
    services: [
      {
        title: "Autonomous Agentic Workflows",
        description: "Multi-agent systems that break down complex enterprise goals into executable, verifiable steps with distinct tool-use constraints.",
        metrics: ["ZERO HALLUCINATION", "CHAIN-OF-THOUGHT"],
        Graphic: ComposedModelGraphic
      }
    ]
  },
  {
    id: "finance",
    index: "05",
    label: "FINANCIAL INTELLIGENCE",
    title: "Financial & Risk Analytics",
    description: "We leverage advanced predictive models to safeguard your enterprise capital. Anticipate market shifts, detect fraudulent activities in real-time, and manage portfolio risks with validated confidence.",
    icon: LineChart,
    colSpan: "md:col-span-4 md:order-5 min-h-[350px]",
    services: [
      {
        title: "Real-Time Fraud & AML Detection",
        description: "Identifying anomalous financial patterns and potential fraud vectors in real-time to protect your business.",
        metrics: ["REAL-TIME AML", "FRAUD DETECTION"],
        Graphic: ShieldGraphic
      },
      {
        title: "Market Volatility Prediction",
        description: "Predicting financial market fluctuations and liquidity crises to provide early warnings for strategic planning.",
        metrics: ["VOLATILITY MODEL", "CRISIS PREDICTION"],
        Graphic: ChartGraphic
      },
      {
        title: "Portfolio Risk Management",
        description: "Isolating and mitigating risk events across your operational and financial portfolios.",
        metrics: ["RISK ISOLATION", "ASSET PROTECTION"],
        Graphic: RiskMatrixGraphic
      }
    ]
  },
  {
    id: "operations",
    index: "06",
    label: "OPERATIONS",
    title: "Supply Chain & Operational Analytics",
    description: "Optimize your global networks and manufacturing processes. We apply sophisticated models to balance energy loads, predict equipment failures, and minimize logistical latency.",
    icon: Network,
    colSpan: "md:col-span-4 md:order-6 min-h-[350px]",
    services: [
      {
        title: "Global Supply Chain Optimization",
        description: "Streamlining complex logistics networks and shipping routes to reduce costs and maximize efficiency.",
        metrics: ["ROUTE OPTIMIZATION", "LOGISTICS EFFICIENCY"],
        Graphic: SupplyChainMazeGraphic
      },
      {
        title: "Manufacturing Quality & Defect Prevention",
        description: "Analyzing production line data to identify root causes of microscopic defects and improve overall yield.",
        metrics: ["DEFECT PREVENTION", "YIELD IMPROVEMENT"],
        Graphic: DefectGraphic
      },
      {
        title: "Equipment Failure Prevention",
        description: "Continuous monitoring of operational metrics to predict and prevent system failures before they occur.",
        metrics: ["PREDICTIVE MAINT.", "UPTIME OPTIMIZATION"],
        Graphic: EquipmentGearGraphic
      },
      {
        title: "Smart Energy Management",
        description: "Balancing energy consumption and storage to ensure optimal distribution across your facilities.",
        metrics: ["LOAD BALANCING", "ENERGY EFFICIENCY"],
        Graphic: ServerRackGraphic
      }
    ]
  },
  {
    id: "customer",
    index: "07",
    label: "CUSTOMER INSIGHTS",
    title: "Customer & Behavioral Analytics",
    description: "Transform behavioral data into actionable foresight. Accurately predict customer actions, refine your target audience, and proactively intercept churn.",
    icon: Focus,
    colSpan: "md:col-span-4 md:order-7 min-h-[350px]",
    services: [
      {
        title: "Customer Churn Prevention",
        description: "Analyzing customer behavior patterns to accurately predict and proactively intercept churn events.",
        metrics: ["CHURN INTERCEPT", "RETENTION LIFT"],
        Graphic: ChartGraphic
      },
      {
        title: "Customer Lifetime Value (CLV)",
        description: "Creating highly accurate lifetime value projections based on nuanced transactional histories.",
        metrics: ["CLV PROJECTIONS", "VALUE ATTRIBUTION"],
        Graphic: LifetimeValueGraphic
      },
      {
        title: "Dynamic Audience Segmentation",
        description: "Grouping consumers by actual behavior to deliver highly targeted product recommendations.",
        metrics: ["MICRO-SEGMENTS", "BEHAVIORAL VARS"],
        Graphic: SegmentationGraphicGroup
      }
    ]
  },
  {
    id: "edge",
    index: "09",
    label: "HARDWARE_OPTIMIZED",
    title: "Edge AI & Embedded Machine Learning",
    description: "We optimize and compile custom neural networks for localized hardware environments (NVIDIA Jetson, embedded systems, mobile applications). Achieve sub-millisecond local inference speeds while eliminating cloud compute dependencies entirely.",
    icon: Cpu,
    colSpan: "md:col-span-4 md:order-9 min-h-[350px]",
    services: [
      {
        title: "Local Inference Optimization",
        description: "Model quantization (INT8/FP16) and pruning techniques to fit massive intelligence into constrained hardware profiles.",
        metrics: ["<1ms LATENCY", "LOW POWER DRAW"],
        Graphic: ChipGraphic
      },
      {
        title: "Air-Gapped Systems Setup",
        description: "Complete operational autonomy for critical infrastructure requiring zero external network pings.",
        metrics: ["ZERO DEPENDENCY", "MAX SECURITY"],
        Graphic: ServerRackGraphic
      }
    ]
  },
  {
    id: "document",
    index: "10",
    label: "SEMANTIC INFRASTRUCTURE",
    title: "Document Intelligence & Cognitive File Infrastructure",
    description: "We replace rigid, traditional folder hierarchies with semantic document intelligence pipelines. By parsing and vectorizing unstructured multi-format data at scale, we build custom knowledge infrastructure.",
    icon: FileText,
    colSpan: "md:col-span-4 md:order-10 min-h-[350px]",
    services: [
      {
        title: "Multimodal Layout Extraction & Spatial Decomposition",
        description: "Leveraging custom OCR algorithms to parse unstructured PDFs, separating interleaved text, multi-axis tables, complex mathematical equations, and charts into structured Markdown.",
        metrics: ["CUSTOM OCR", "SPATIAL MAPPING"],
        Graphic: DocScanGraphic
      },
      {
        title: "Semantic Document Chunking",
        description: "Preserving context using intelligent boundaries for advanced Retrieval-Augmented Generation (RAG) architectures, rather than naive token splitting.",
        metrics: ["RAG OPTIMIZED", "CONTEXT AWARE"],
        Graphic: MatrixGraphic
      },
      {
        title: "Automated Composed Model Pipelines",
        description: "Automated composed model invoice and receipt pipelines designed for high-accuracy extraction of line-item data and financial details from dense, variable layouts.",
        metrics: ["HIGH ACCURACY", "COMPOSED MODEL"],
        Graphic: ComposedModelGraphic
      },
      {
        title: "Data Residency-Compliant Ingestion",
        description: "Deploying containerized cognitive processing services directly inside secure on-premise Kubernetes clusters, completely ensuring that sensitive data undergoes zero exposure to external cloud frameworks.",
        metrics: ["ZERO EXPOSURE", "ON-PREM CLUSTER"],
        Graphic: ServerRackGraphic
      }
    ]
  },
  {
    id: "mcp",
    index: "11",
    label: "OPEN_STANDARDS",
    title: "Model Context Protocol (MCP) Frameworks",
    description: "We design and deploy open-standard MCP servers to anchor your agentic workflows. Standardizing the interface between foundational LLMs and your internal data layers while maintaining strict row-level access controls.",
    icon: Terminal,
    colSpan: "md:col-span-4 md:order-11 min-h-[350px]",
    services: [
      {
        title: "Custom MCP Server Deployment",
        description: "Bridging modern LLM agents directly to your PostgreSQL, internal APIs, or file systems through standard communication protocols.",
        metrics: ["SECURE BINDING", "API COMPLIANT"],
        Graphic: TerminalGraphic
      },
      {
        title: "Identity & Access Guardrails",
        description: "Ensuring AI agents operate strictly within the permissions of the authenticated user to prevent catastrophic escalation of privileges.",
        metrics: ["ROW-LEVEL RBAC", "AUDIT LOGGED"],
        Graphic: ShieldGraphic
      }
    ]
  },
  {
    id: "bespoke",
    index: "01",
    label: "BESPOKE SOLUTIONS",
    title: "Stop Burning Capital on Bloated LLM APIs",
    description: "We perform a robust forensic audit of your enterprise LLM logs to identify where expensive API calls are wasting funds on tasks that can be solved directly with targeted algorithms. We deliver a comprehensive cost-reduction report, then architect and deploy custom deterministic models that replace unnecessary API dependencies—drastically slashing your monthly AI bill while keeping your proprietary data strictly private.",
    icon: CircuitBoard,
    colSpan: "md:col-span-8 md:order-1 min-h-[350px]",
    services: [
      {
        title: "LLM Log & Architecture Auditing",
        description: "Comprehensive forensic analysis of your current API usage logs to identify redundant, costly LLM calls that can be replaced with efficient custom, deterministic models.",
        metrics: ["COST REDUCTION", "FORENSIC ANALYSIS"],
        Graphic: ChartGraphic
      },
      {
        title: "Novel Algorithm Development",
        description: "Designing from-scratch machine learning models tailored to unique, non-standard datasets.",
        metrics: ["CUSTOM MODELS", "PROPRIETARY DATA"],
        Graphic: AtomGraphic
      },
      {
        title: "Advanced Data Engineering",
        description: "Building robust, scalable data ingestion and processing pipelines for specialized analytical needs.",
        metrics: ["SCALABLE SYSTEMS", "DATA PIPELINES"],
        Graphic: PipelineGraphic
      }
    ]
  },
  {
    id: "growth",
    index: "08",
    label: "GROWTH AGENTS",
    title: "Customer Intelligence & Growth Marketing",
    description: "Orchestrate data-driven growth pipelines using predictive customer intelligence. We deploy autonomous marketing agents to personalize engagement at scale, optimizing acquisition and maximizing lifetime value.",
    icon: Target,
    colSpan: "md:col-span-4 md:order-8 min-h-[350px]",
    services: [
      {
        title: "Autonomous Campaign Orchestration",
        description: "Deploying multi-channel marketing agents that adjust creative messaging and spend based on real-time engagement data.",
        metrics: ["ROI OPTIMIZED", "DYNAMIC SPEND"],
        Graphic: CampaignOrchestrationGraphic
      },
      {
        title: "Predictive Lead Scoring & Routing",
        description: "Algorithmic scoring models to instantly qualify incoming volume and route high-value leads to the optimal conversion flow.",
        metrics: ["LEAD QUALIFICATION", "CONVERSION LIFT"],
        Graphic: LeadRoutingGraphic
      }
    ]
  }
];

export function Specializations() {
  const [activeSpecId, setActiveSpecId] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const activeSpec = specializationData.find(s => s.id === activeSpecId);
  const services = activeSpec ? activeSpec.services : [];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % services.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);

  const openModal = (id: string) => {
    setActiveSpecId(id);
    setCurrentSlide(0);
  };

  return (
    <section className="px-10 pb-section-gap max-w-[1440px] mx-auto" id="specializations">
      <AnimatePresence>
        {activeSpec && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
          >
            <div 
              className="absolute inset-0 bg-background/80 backdrop-blur-sm cursor-pointer" 
              onClick={() => setActiveSpecId(null)} 
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-4xl bg-surface-container border border-outline-variant/30 rounded-lg shadow-2xl overflow-hidden flex flex-col max-h-[95vh] md:max-h-[90vh] min-h-[500px]"
            >
              <button 
                onClick={() => setActiveSpecId(null)} 
                className="absolute top-6 right-6 z-10 text-on-surface-variant hover:text-primary-container transition-colors bg-surface-container-low p-2 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex-1 flex flex-col bg-surface-container min-h-0">
                <div className="p-6 md:p-10 border-b border-outline-variant/20 flex items-center gap-3 bg-surface-container-low shrink-0">
                   {activeSpec.icon && <activeSpec.icon className="text-primary-container w-6 h-6" />}
                   <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                     {activeSpec.label} // APPLIED SERVICES
                   </span>
                </div>
                
                <div className="flex-1 relative overflow-hidden flex min-h-[300px] md:min-h-[400px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 p-6 md:p-10 overflow-y-auto flex flex-col md:flex-row gap-8 items-start md:items-center"
                    >
                      <div className="w-full md:w-1/2 flex flex-col md:h-full justify-center shrink-0 md:shrink">
                        <h3 className="font-headline-lg text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-6 text-on-surface leading-tight">
                          {services[currentSlide].title}
                        </h3>
                        <p className="font-body-lg text-on-surface-variant max-w-2xl mb-8 md:mb-10 leading-relaxed md:text-lg">
                          {services[currentSlide].description}
                        </p>
                        
                        <div className="flex gap-6 md:gap-8 mt-auto flex-wrap mb-4 md:mb-0">
                          {services[currentSlide].metrics.map((metric, i) => (
                            <div key={i}>
                              <p className="font-label-caps text-[10px] text-on-surface-variant/60 uppercase mb-2 tracking-wider">
                                METRIC 0{i + 1}
                              </p>
                              <p className="font-data-metric text-primary-container text-sm md:text-base">
                                {metric}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex w-full md:w-1/2 min-h-[250px] md:h-full items-center justify-center p-0 md:p-4 shrink-0 pb-8 md:pb-0">
                        {(() => {
                           const Graphic = services[currentSlide].Graphic;
                           return <Graphic />;
                        })()}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="p-6 border-t border-outline-variant/20 flex justify-between items-center bg-surface-container-low shrink-0">
                  <div className="flex gap-2">
                    {services.map((_, i) => (
                      <div 
                        key={i} 
                        className={`h-1 rounded-full transition-all duration-300 ${
                          currentSlide === i ? 'w-8 bg-primary-container' : 'w-2 bg-on-surface-variant/30'
                        }`}
                      />
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <button 
                      onClick={prevSlide}
                      className="p-3 border border-outline-variant/30 text-on-surface hover:text-primary-container hover:border-primary-container/50 transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button 
                      onClick={nextSlide}
                      className="p-3 border border-outline-variant/30 text-on-surface hover:text-primary-container hover:border-primary-container/50 transition-colors"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <header className="mb-20">
        <div className="font-label-caps text-label-caps tracking-widest text-primary-container mb-4 uppercase">
          01 // EXPERTISE
        </div>
        <h2 className="font-headline-lg text-headline-lg max-w-2xl text-on-surface">
          Our Functional Specializations
        </h2>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {specializationData.map((spec) => (
          <div 
            key={spec.id}
            className={`${spec.colSpan} bg-surface-container border border-outline-variant/30 p-8 md:p-10 hover:border-primary-container/50 transition-all group flex flex-col justify-between rounded-lg cursor-pointer relative overflow-hidden order-none`}
            onClick={() => openModal(spec.id)}
          >
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <spec.icon className="text-primary-container w-6 h-6" />
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                  {spec.label}
                </span>
              </div>
              <h3 className="font-headline-lg text-2xl md:text-3xl mb-4 text-on-surface">
                {spec.title}
              </h3>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                {spec.description}
              </p>
            </div>
            
            <div className="mt-8 flex justify-end relative z-10">
               <spec.icon className="text-primary-container/10 group-hover:text-primary-container/30 transition-all duration-300 w-16 h-16 group-hover:scale-105" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
