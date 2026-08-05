"use client";

import { useSyncExternalStore, type ComponentType, type CSSProperties, type PointerEvent as ReactPointerEvent } from "react";
import { animate, motion, useMotionTemplate, useMotionValue, useTime, useTransform, type MotionValue, type PanInfo } from "motion/react";
import { Braces, TestTube2 } from "lucide-react";
import { FaAws } from "react-icons/fa6";
import { TbBrandCSharp } from "react-icons/tb";
import { VscAzure } from "react-icons/vsc";
import {
  SiAngular, SiBootstrap, SiCss, SiCypress, SiDjango, SiDotnet, SiExpress,
  SiFastapi, SiFastify, SiFlask, SiGin, SiGo, SiGooglecloud, SiHtml5,
  SiJavascript, SiJest, SiLaravel, SiMongodb, SiMui, SiMysql, SiNestjs,
  SiNextdotjs, SiNodedotjs, SiOpenjdk, SiPhp, SiPostgresql, SiPython,
  SiRailway, SiReact, SiRedis, SiRedux, SiShadcnui, SiSpringboot, SiSvelte,
  SiTailwindcss, SiTypescript, SiVercel, SiVite, SiVuedotjs, SiWebpack,
} from "react-icons/si";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import ScrollSection from "@/components/ui/ScrollSection";

type TechIcon = ComponentType<{ className?: string; style?: CSSProperties }>;
type Technology = { name: string; icon: TechIcon; color: string; deploy?: boolean };

const technologies: Technology[] = [
  { name: "HTML5", icon: SiHtml5, color: "#e34f26" },
  { name: "CSS3", icon: SiCss, color: "#1572b6" },
  { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
  { name: "React", icon: SiReact, color: "#61dafb" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "Angular", icon: SiAngular, color: "#dd0031" },
  { name: "Vue.js", icon: SiVuedotjs, color: "#42b883" },
  { name: "Svelte", icon: SiSvelte, color: "#ff3e00" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38bdf8" },
  { name: "Bootstrap", icon: SiBootstrap, color: "#7952b3" },
  { name: "Material UI", icon: SiMui, color: "#007fff" },
  { name: "Shadcn UI", icon: SiShadcnui, color: "#ffffff" },
  { name: "Redux Toolkit", icon: SiRedux, color: "#764abc" },
  { name: "Zustand", icon: Braces, color: "#c89b78" },
  { name: "Vite", icon: SiVite, color: "#bd34fe" },
  { name: "Webpack", icon: SiWebpack, color: "#8dd6f9" },
  { name: "Jest", icon: SiJest, color: "#c21325" },
  { name: "Cypress", icon: SiCypress, color: "#69d3a7" },
  { name: "Playwright", icon: TestTube2, color: "#45ba4b" },
  { name: "Node.js", icon: SiNodedotjs, color: "#5fa04e" },
  { name: "Express.js", icon: SiExpress, color: "#ffffff" },
  { name: "NestJS", icon: SiNestjs, color: "#e0234e" },
  { name: "Fastify", icon: SiFastify, color: "#ffffff" },
  { name: "Python", icon: SiPython, color: "#ffd43b" },
  { name: "Django", icon: SiDjango, color: "#44b78b" },
  { name: "FastAPI", icon: SiFastapi, color: "#009688" },
  { name: "Flask", icon: SiFlask, color: "#ffffff" },
  { name: "Java", icon: SiOpenjdk, color: "#f89820" },
  { name: "Spring Boot", icon: SiSpringboot, color: "#6db33f" },
  { name: "C#", icon: TbBrandCSharp, color: "#a179dc" },
  { name: "ASP.NET Core", icon: SiDotnet, color: "#512bd4" },
  { name: "Go (Golang)", icon: SiGo, color: "#00add8" },
  { name: "Gin", icon: SiGin, color: "#00add8" },
  { name: "PHP", icon: SiPhp, color: "#777bb4" },
  { name: "Laravel", icon: SiLaravel, color: "#ff2d20" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169e1" },
  { name: "MySQL", icon: SiMysql, color: "#4479a1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
  { name: "Redis", icon: SiRedis, color: "#ff4438" },
  { name: "Vercel", icon: SiVercel, color: "#ffffff", deploy: true },
  { name: "AWS", icon: FaAws, color: "#ff9900", deploy: true },
  { name: "Microsoft Azure", icon: VscAzure, color: "#0089d6", deploy: true },
  { name: "Google Cloud", icon: SiGooglecloud, color: "#4285f4", deploy: true },
  { name: "Railway", icon: SiRailway, color: "#ffffff", deploy: true },
];

const globeDuration = 34;
const subscribeToHydration = () => () => undefined;
const getClientHydrationSnapshot = () => true;
const getServerHydrationSnapshot = () => false;

function GlobeTechnology({ tech, index, rotation, hydrated }: { tech: Technology; index: number; rotation: MotionValue<number>; hydrated: boolean }) {
  const Icon = tech.icon;
  const vertical = 1 - (2 * (index + .5)) / technologies.length;
  const latitude = Math.asin(vertical);
  const phase = index * Math.PI * (3 - Math.sqrt(5));
  const horizontalRadius = Math.cos(latitude);
  const staticDepth = Math.cos(phase) * horizontalRadius;
  const staticStyle = {
    left: `${(50 + Math.sin(phase) * horizontalRadius * 46).toFixed(4)}%`,
    top: `${(50 - Math.sin(latitude) * 44).toFixed(4)}%`,
    scale: Number((.68 + ((staticDepth + 1) / 2) * .42).toFixed(5)),
    opacity: Number((.34 + ((staticDepth + 1) / 2) * .66).toFixed(5)),
    z: Number((staticDepth * 42).toFixed(4)),
    zIndex: Math.round((staticDepth + 1) * 50),
  };
  const left = useTransform(() => `${(50 + Math.sin(phase + rotation.get()) * horizontalRadius * 46).toFixed(4)}%`);
  const depth = useTransform(() => Math.cos(phase + rotation.get()) * horizontalRadius);
  const scale = useTransform(() => .68 + ((depth.get() + 1) / 2) * .42);
  const opacity = useTransform(() => .34 + ((depth.get() + 1) / 2) * .66);
  const z = useTransform(() => depth.get() * 42);
  const zIndex = useTransform(() => Math.round((depth.get() + 1) * 50));

  return (
    <motion.div
      style={hydrated ? { left, top: staticStyle.top, scale, opacity, z, zIndex } : staticStyle}
      className="group absolute -translate-x-1/2 -translate-y-1/2 [transform-style:preserve-3d]"
    >
      <div className="relative grid size-7 place-items-center rounded-full border border-white/20 bg-[#18121f]/90 shadow-[0_8px_24px_rgba(0,0,0,.45),inset_0_1px_rgba(255,255,255,.18)] backdrop-blur-xl sm:size-8 md:size-9">
        <Icon className="size-3.5 sm:size-4 md:size-5" style={{ color: tech.color }} />
        {tech.deploy && <span className="absolute right-0 top-0 size-1.5 rounded-full bg-[#b864ff] shadow-[0_0_8px_#b864ff]" />}
        <span className="pointer-events-none absolute top-full z-[120] mt-1.5 whitespace-nowrap rounded-md border border-white/10 bg-black/85 px-1.5 py-0.5 text-[7px] font-semibold text-white/80 opacity-0 shadow-xl transition-opacity group-hover:opacity-100 md:text-[8px]">{tech.name}</span>
      </div>
    </motion.div>
  );
}

export default function TechnologyUniverse() {
  const reducedMotion = useReducedMotion();
  const hydrated = useSyncExternalStore(subscribeToHydration, getClientHydrationSnapshot, getServerHydrationSnapshot);
  const time = useTime();
  const longitudeOffset = useMotionValue(0);
  const globeTiltX = useMotionValue(-4);
  const globeTiltZ = useMotionValue(0);
  const lightX = useMotionValue(36);
  const lightY = useMotionValue(28);
  const rotation = useTransform(() => longitudeOffset.get() + (reducedMotion ? 0 : (time.get() / 1000 / globeDuration) * Math.PI * 2));
  const movingHighlight = useMotionTemplate`radial-gradient(circle at ${lightX}% ${lightY}%, rgba(255,255,255,.34), rgba(190,120,255,.12) 18%, transparent 43%)`;

  const handleGlobePan = (_event: PointerEvent, info: PanInfo) => {
    longitudeOffset.set(longitudeOffset.get() + info.delta.x * .009);
    globeTiltX.set(Math.max(-18, Math.min(18, globeTiltX.get() - info.delta.y * .11)));
    globeTiltZ.set(Math.max(-5, Math.min(5, globeTiltZ.get() + info.delta.x * .018)));
  };

  const settleGlobeTilt = () => {
    animate(globeTiltX, -4, { type: "spring", stiffness: 135, damping: 18 });
    animate(globeTiltZ, 0, { type: "spring", stiffness: 135, damping: 18 });
  };

  const handleGlobePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    lightX.set(((event.clientX - bounds.left) / bounds.width) * 100);
    lightY.set(((event.clientY - bounds.top) / bounds.height) * 100);
  };

  return (
    <ScrollSection revealDirection="right" className="section relative m-4 overflow-hidden rounded-[clamp(2rem,4vw,4.5rem)] bg-[#0a0610] !py-14 max-md:m-2.5 max-md:!py-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_8%,rgba(137,50,248,.32),transparent_30%),radial-gradient(circle_at_5%_65%,rgba(23,120,255,.16),transparent_28%)]" />
      <div className="section-container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[8px] font-semibold uppercase tracking-[.24em] text-[#cfa8ff]">Technology universe</p>
          <h2 className="mt-2.5 text-2xl font-medium tracking-[-.045em] text-white md:text-4xl">Built with the right technology for every challenge</h2>
          <p className="mx-auto mt-3 max-w-xl text-xs leading-relaxed text-white/60 md:text-sm">A unified engineering stack spanning interfaces, platforms, data, testing, and deployment.</p>
        </div>

        <div className="relative mx-auto my-5 aspect-square w-full max-w-[460px] [perspective:1100px] md:my-7">
          <div className="pointer-events-none absolute bottom-[2%] left-[14%] h-[14%] w-[72%] rounded-[50%] bg-[#5f23bc]/25 blur-2xl" />
          <motion.div
            role="group"
            aria-label="Draggable technology globe"
            onPan={handleGlobePan}
            onPanEnd={settleGlobeTilt}
            onPointerMove={handleGlobePointerMove}
            whileHover={reducedMotion ? undefined : { scale: 1.018 }}
            whileTap={reducedMotion ? undefined : { scale: .992 }}
            style={{ rotateX: globeTiltX, rotateZ: globeTiltZ }}
            className="absolute inset-0 touch-none cursor-grab select-none [transform-style:preserve-3d] active:cursor-grabbing"
          >
            <div className="absolute inset-[7%] rounded-full bg-[radial-gradient(circle_at_36%_28%,rgba(255,255,255,.24),rgba(137,50,248,.38)_20%,rgba(23,120,255,.18)_48%,rgba(7,3,13,.96)_72%)] shadow-[inset_-38px_-30px_70px_rgba(0,0,0,.72),inset_18px_14px_40px_rgba(255,255,255,.1),0_0_100px_rgba(137,50,248,.34)] [transform:translateZ(-18px)]" />
            <div className="absolute inset-[7%] overflow-hidden rounded-full opacity-55 [transform:translateZ(-8px)]">
              <div className="absolute left-1/2 top-0 h-full w-[34%] -translate-x-1/2 rounded-[50%] border border-white/25" />
              <div className="absolute left-1/2 top-0 h-full w-[72%] -translate-x-1/2 rounded-[50%] border border-white/15" />
              <div className="absolute left-0 top-1/2 h-[34%] w-full -translate-y-1/2 rounded-[50%] border border-white/25" />
              <div className="absolute left-0 top-1/2 h-[72%] w-full -translate-y-1/2 rounded-[50%] border border-white/15" />
            </div>
            <motion.div style={{ background: movingHighlight }} className="pointer-events-none absolute inset-[7%] rounded-full [transform:translateZ(22px)]" />
            <div className="pointer-events-none absolute inset-[5.5%] rounded-full border border-[#d6aeff]/35 shadow-[inset_0_0_30px_rgba(255,255,255,.08),0_0_50px_rgba(137,50,248,.22)] [transform:translateZ(30px)]" />
            <div className="pointer-events-none absolute inset-x-[17%] top-[12%] h-[19%] rounded-[50%] border-t border-white/30 bg-white/[.025] blur-[1px] [transform:translateZ(38px)_rotateX(8deg)]" />

            {technologies.map((tech, index) => (
              <GlobeTechnology key={tech.name} tech={tech} index={index} rotation={rotation} hydrated={hydrated} />
            ))}
          </motion.div>
          <div className="pointer-events-none absolute bottom-[1%] left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-white/[.07] px-2.5 py-1 text-[8px] font-semibold uppercase tracking-[.16em] text-white/55 backdrop-blur-md">Drag to rotate</div>
        </div>
      </div>
    </ScrollSection>
  );
}
