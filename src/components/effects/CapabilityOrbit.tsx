"use client";

import { useRef, useSyncExternalStore } from "react";
import { motion, useScroll, useSpring, useTime, useTransform } from "motion/react";
import CortexMark from "@/components/brand/CortexMark";
import ScrollSection from "@/components/ui/ScrollSection";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const capabilities = [
  "AI Development",
  "ERP Development",
  "Flutter Apps",
  "Web Applications",
  "Cloud Solutions",
  "API Development",
  "Custom Software Development",
  "Mobile App Development",
  "SaaS Development",
  "UI/UX Design",
  "DevOps & CI/CD",
];

const orbitDuration = 22;
const subscribeToHydration = () => () => {};
const getClientHydrationSnapshot = () => true;
const getServerHydrationSnapshot = () => false;

function OrbitingCapability({ capability, index, reducedMotion, hydrated }: { capability: string; index: number; reducedMotion: boolean; hydrated: boolean }) {
  const phase = (index / capabilities.length) * Math.PI * 2;
  const time = useTime();
  const duration = (reducedMotion ? orbitDuration * 2 : orbitDuration) * 1000;
  const angle = useTransform(time, (milliseconds) => phase + (milliseconds / duration) * Math.PI * 2);
  const left = useTransform(angle, (value) => `${50 + Math.cos(value) * 41}%`);
  const top = useTransform(angle, (value) => `${50 + Math.sin(value) * 42}%`);
  const scale = useTransform(angle, (value) => .88 + ((Math.sin(value) + 1) / 2) * .16);
  const opacity = useTransform(angle, (value) => .68 + ((Math.sin(value) + 1) / 2) * .32);
  const initialLeft = `${(50 + Math.cos(phase) * 41).toFixed(4)}%`;
  const initialTop = `${(50 + Math.sin(phase) * 42).toFixed(4)}%`;
  const initialScale = Number((.88 + ((Math.sin(phase) + 1) / 2) * .16).toFixed(4));
  const initialOpacity = Number((.68 + ((Math.sin(phase) + 1) / 2) * .32).toFixed(4));

  return (
    <motion.div
      style={{
        left: hydrated ? left : initialLeft,
        top: hydrated ? top : initialTop,
        scale: hydrated ? scale : initialScale,
        opacity: hydrated ? opacity : initialOpacity,
      }}
      className="absolute -translate-x-1/2 -translate-y-1/2 will-change-transform"
    >
      <motion.div
        whileHover={reducedMotion ? undefined : { y: -5, rotateX: 8, rotateY: index % 2 ? -8 : 8, scale: 1.04 }}
        className="flex min-h-12 w-[clamp(5.5rem,14vw,7rem)] flex-col justify-center rounded-xl border border-white/15 bg-white/10 p-2 text-left shadow-2xl backdrop-blur-xl [transform-style:preserve-3d]"
      >
        <span className="mb-2 block size-1.5 rounded-full bg-[#b366ff] shadow-[0_0_10px_#b366ff]" />
        <p className="text-[9px] font-semibold leading-tight text-white lg:text-[10px]">{capability}</p>
      </motion.div>
    </motion.div>
  );
}

export default function CapabilityOrbit() {
  const ref = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const hydrated = useSyncExternalStore(
    subscribeToHydration,
    getClientHydrationSnapshot,
    getServerHydrationSnapshot,
  );
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const progress = useSpring(scrollYProgress, { stiffness: 70, damping: 25 });
  const rotate = useTransform(progress, [0, 1], [-24, 28]);
  const coreY = useTransform(progress, [0, 1], [40, -35]);

  return (
    <ScrollSection ref={ref} revealDirection="left" className="section relative m-4 overflow-hidden rounded-[clamp(2rem,4vw,4.5rem)] bg-[#0b0610] !py-[3.3rem] text-white max-md:m-2.5 max-md:!py-11">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(137,50,248,.4),transparent_28%),radial-gradient(circle_at_20%_10%,rgba(23,120,255,.18),transparent_35%)]" />
      <div className="section-container relative z-10 text-center">
        <p className="text-[10px] font-semibold uppercase tracking-[.24em] text-[#cfa8ff]">Insight. Innovation. Impact.</p>
        <h2 className="mx-auto mt-2 max-w-3xl text-2xl font-medium tracking-[-.04em] text-white md:text-3xl">What We Build</h2>
        <div className="relative mx-auto mt-6 hidden h-[308px] max-w-3xl [perspective:1100px] sm:block">
          <motion.div style={{ rotate, y: coreY }} className="absolute left-1/2 top-1/2 grid size-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[38%] bg-gradient-to-br from-[#1778ff] via-[#8932f8] to-[#c05cff] shadow-[inset_8px_8px_16px_rgba(255,255,255,.35),0_0_50px_rgba(137,50,248,.48)] [transform-style:preserve-3d] max-md:size-20">
            <div className="rounded-xl bg-white p-2 shadow-2xl [transform:translateZ(30px)]"><CortexMark size={44} /></div>
          </motion.div>
          <motion.div style={{ rotate }} className="absolute left-1/2 top-1/2 h-[62%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-white/15 [transform:rotateX(62deg)]" />
          {capabilities.map((capability, index) => (
            <OrbitingCapability
              key={capability}
              capability={capability}
              index={index}
              reducedMotion={reducedMotion}
              hydrated={hydrated}
            />
          ))}
        </div>

        <div className="mt-5 sm:hidden">
          <motion.div style={{ rotate }} className="mx-auto mb-5 grid size-20 place-items-center rounded-[38%] bg-gradient-to-br from-[#1778ff] via-[#8932f8] to-[#c05cff] shadow-[inset_7px_7px_14px_rgba(255,255,255,.35),0_0_38px_rgba(137,50,248,.45)] [transform-style:preserve-3d]">
            <div className="rounded-xl bg-white p-1.5 shadow-xl [transform:translateZ(22px)]"><CortexMark size={36} /></div>
          </motion.div>
          <div className="grid grid-cols-2 gap-2">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 120, damping: 19, delay: index * .025 }}
                className="flex min-h-10 items-center gap-2 rounded-xl border border-white/15 bg-white/[.08] px-2.5 py-2 text-left shadow-lg backdrop-blur-md"
              >
                <span className="size-1.5 shrink-0 rounded-full bg-[#b366ff] shadow-[0_0_8px_#b366ff]" />
                <p className="text-[9px] font-semibold leading-tight text-white">{capability}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </ScrollSection>
  );
}
