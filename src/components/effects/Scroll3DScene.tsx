"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, animate, motion, useMotionValue, useScroll, useSpring, useTransform, type PanInfo } from "motion/react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { getAssetPath } from "@/lib/utils";

const showcases = [
  { id: "cgm", name: "CGM healthcare portal", src: "/projects/cgm-web-thumb.png" },
  { id: "erp", name: "AutoIVD ERP platform", src: "/projects/erp-thumb.png" },
  { id: "biogenix", name: "Biogenix analytics platform", src: "/projects/biogenix-thumb.png" },
];

export default function Scroll3DScene() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectionDirection, setSelectionDirection] = useState(1);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const progress = useSpring(scrollYProgress, { stiffness: 72, damping: 25 });
  const mockupRotateX = useTransform(progress, [0, 0.45, 1], [28, 2, -18]);
  const mockupRotateY = useTransform(progress, [0, 0.45, 1], [-13, 0, 13]);
  const mockupY = useTransform(progress, [0, 1], [84, -56]);
  const ribbonRotate = useTransform(progress, [0, 1], [-14, 20]);
  const leftCardY = useTransform(progress, [0, 1], [101, -96]);
  const rightCardY = useTransform(progress, [0, 1], [45, -135]);
  const dragRotateX = useMotionValue(0);
  const dragRotateY = useMotionValue(0);
  const interactiveRotateX = useTransform(() => (reducedMotion ? 0 : mockupRotateX.get()) + dragRotateX.get());
  const interactiveRotateY = useTransform(() => (reducedMotion ? 0 : mockupRotateY.get()) + dragRotateY.get());
  const leftIndex = (activeIndex + 1) % showcases.length;
  const rightIndex = (activeIndex + 2) % showcases.length;

  const selectShowcase = (index: number, direction: number) => {
    setSelectionDirection(direction);
    setActiveIndex(index);
  };

  const handlePan = (_event: PointerEvent, info: PanInfo) => {
    dragRotateY.set(Math.max(-28, Math.min(28, dragRotateY.get() + info.delta.x * .16)));
    dragRotateX.set(Math.max(-18, Math.min(18, dragRotateX.get() - info.delta.y * .12)));
  };

  const resetDragRotation = () => {
    animate(dragRotateX, 0, { type: "spring", stiffness: 150, damping: 18 });
    animate(dragRotateY, 0, { type: "spring", stiffness: 150, damping: 18 });
  };

  return (
    <section ref={sectionRef} className="relative -mt-12 h-[107vh] bg-white max-md:h-[85vh]" aria-label="Interactive project showcase">
      <div className="sticky top-0 flex h-[75svh] items-center justify-center overflow-hidden bg-white [perspective:1400px]">
        <motion.div
          className="pointer-events-none absolute left-1/2 top-[30%] h-[15.75vw] min-h-32 w-[100vw] -translate-x-1/2 rounded-[50%] bg-[conic-gradient(from_100deg_at_50%_50%,#1778ff,#30d5ff,#cab5ff,#8932f8,#3020d7,#1778ff)] opacity-95 blur-[1px] [box-shadow:inset_0_14px_26px_rgba(255,255,255,.7),inset_0_-19px_34px_rgba(29,13,153,.36),0_26px_60px_rgba(77,42,218,.24)]"
          style={reducedMotion ? undefined : { rotate: ribbonRotate }}
        >
          <div className="absolute inset-[13%_0] rounded-[50%] border-[6px] border-white/65 blur-[2px]" />
          <div className="absolute inset-[31%_-2%] rounded-[50%] bg-white/45 blur-xl" />
        </motion.div>

        <motion.div
          onPan={handlePan}
          onPanEnd={resetDragRotation}
          whileTap={reducedMotion ? undefined : { scale: .985 }}
          className="relative z-20 -mt-20 w-[min(40.5vw,550px)] touch-none cursor-grab select-none overflow-hidden rounded-2xl border border-[#8932f8]/55 bg-white shadow-[0_26px_62px_rgba(61,30,112,.28)] [transform-style:preserve-3d] active:cursor-grabbing max-md:-mt-10 max-md:w-[78vw] max-md:rounded-xl"
          style={{ rotateX: interactiveRotateX, rotateY: interactiveRotateY, y: reducedMotion ? 0 : mockupY }}
        >
          <div className="flex h-7 items-center gap-1 border-b border-black/10 bg-white/90 px-3">
            <span className="size-2 rounded-full bg-[#ff6b6b]" /><span className="size-2 rounded-full bg-[#ffd166]" /><span className="size-2 rounded-full bg-[#5bd89c]" />
            <div className="mx-auto h-3.5 w-2/5 rounded-full bg-[#f0edf3]" />
          </div>
          <div className="grid min-h-[236px] grid-cols-[124px_1fr] bg-[#fbfafd] max-md:min-h-[210px] max-md:grid-cols-[62px_1fr]">
            <div className="border-r border-black/10 bg-white p-3 max-md:p-1.5">
              <div className="mb-4 h-4 rounded-md bg-gradient-to-r from-[#1778ff] to-[#8932f8]" />
              {[72, 90, 58, 82, 66].map((width, index) => <div key={index} className="mb-2 h-1.5 rounded-full bg-[#e9e5ee]" style={{ width: `${width}%` }} />)}
            </div>
            <div className="relative overflow-hidden p-4 max-md:p-2">
              <div className="mb-3 h-4 w-1/2 rounded-md bg-[#dad5df]" />
              <div className="grid grid-cols-3 gap-2 max-md:gap-1.5">
                <div className="h-15 rounded-lg bg-gradient-to-br from-[#e8f2ff] to-[#d9c5ff] shadow-sm" />
                <div className="h-15 rounded-lg bg-gradient-to-br from-[#fff] to-[#ede5ff] shadow-sm" />
                <div className="h-15 rounded-lg bg-gradient-to-br from-[#e7fbff] to-[#d8e2ff] shadow-sm" />
              </div>
              <div className="relative mt-3 h-27 overflow-hidden rounded-lg border border-black/5 bg-white shadow-sm">
                <AnimatePresence initial={false} mode="wait">
                  <motion.div
                    key={showcases[activeIndex].id}
                    initial={reducedMotion ? false : { opacity: 0, x: selectionDirection * 55, scale: .9, filter: "blur(5px)" }}
                    animate={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
                    exit={reducedMotion ? undefined : { opacity: 0, x: selectionDirection * -35, scale: .94, filter: "blur(3px)" }}
                    transition={{ type: "spring", stiffness: 180, damping: 24 }}
                    className="absolute inset-0"
                  >
                    <Image src={getAssetPath(showcases[activeIndex].src)} alt={showcases[activeIndex].name} fill sizes="550px" className="object-cover object-top opacity-90" draggable={false} />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute bottom-2 right-2 z-20 rounded-full border border-black/10 bg-white/85 px-2 py-1 text-[8px] font-semibold text-black/55 shadow-sm backdrop-blur-md">Drag to rotate</div>
        </motion.div>

        <motion.button type="button" onClick={() => selectShowcase(leftIndex, -1)} whileHover={reducedMotion ? undefined : { y: -6, scale: 1.04 }} whileTap={reducedMotion ? undefined : { scale: .96 }} aria-label={`Show ${showcases[leftIndex].name} in the center`} className="absolute left-[9%] top-[25%] z-30 w-30 rotate-[-12deg] cursor-pointer rounded-xl border border-white bg-white p-2 text-left shadow-[0_15px_40px_rgba(54,26,95,.2)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8932f8] max-lg:hidden" style={reducedMotion ? undefined : { y: leftCardY }}>
          <div className="relative h-15 overflow-hidden rounded-lg"><AnimatePresence initial={false} mode="wait"><motion.div key={showcases[leftIndex].id} initial={{ opacity: 0, scale: .9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .9 }} className="absolute inset-0"><Image src={getAssetPath(showcases[leftIndex].src)} alt="" fill sizes="120px" className="object-cover" draggable={false} /></motion.div></AnimatePresence></div>
          <div className="mt-2 h-2 w-4/5 rounded-full bg-[#dcd6e2]" /><div className="mt-1.5 h-1.5 w-1/2 rounded-full bg-[#eeeaf1]" />
        </motion.button>
        <motion.button type="button" onClick={() => selectShowcase(rightIndex, 1)} whileHover={reducedMotion ? undefined : { y: -6, scale: 1.04 }} whileTap={reducedMotion ? undefined : { scale: .96 }} aria-label={`Show ${showcases[rightIndex].name} in the center`} className="absolute right-[8%] top-[36%] z-30 w-32 rotate-[11deg] cursor-pointer rounded-xl border border-white bg-white p-2 text-left shadow-[0_15px_40px_rgba(54,26,95,.2)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8932f8] max-lg:hidden" style={reducedMotion ? undefined : { y: rightCardY }}>
          <div className="relative h-18 overflow-hidden rounded-lg"><AnimatePresence initial={false} mode="wait"><motion.div key={showcases[rightIndex].id} initial={{ opacity: 0, scale: .9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .9 }} className="absolute inset-0"><Image src={getAssetPath(showcases[rightIndex].src)} alt="" fill sizes="128px" className="object-cover" draggable={false} /></motion.div></AnimatePresence></div>
          <div className="mt-2 h-2 w-3/4 rounded-full bg-[#dcd6e2]" /><div className="mt-1.5 h-1.5 w-3/5 rounded-full bg-[#eeeaf1]" />
        </motion.button>

        <div className="absolute bottom-3 left-1/2 z-50 flex -translate-x-1/2 gap-2 lg:hidden">
          {[leftIndex, rightIndex].map((index, position) => (
            <motion.button key={showcases[index].id} type="button" onClick={() => selectShowcase(index, position === 0 ? -1 : 1)} whileTap={reducedMotion ? undefined : { scale: .92 }} aria-label={`Show ${showcases[index].name} in the center`} className="relative size-12 overflow-hidden rounded-xl border-2 border-white bg-white shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8932f8]">
              <Image src={getAssetPath(showcases[index].src)} alt="" fill sizes="48px" className="object-cover" draggable={false} />
            </motion.button>
          ))}
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-40 h-24 bg-gradient-to-b from-transparent to-white" />
      </div>
    </section>
  );
}
