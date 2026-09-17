import {
  FaReact,
  FaNodeJs,
  FaJs,
} from "react-icons/fa6";
import { SiExpress, SiMongodb, SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

const icons = [
  { Icon: FaReact, color: "text-sky-500", angle: 0 },
  { Icon: SiNextdotjs, color: "text-slate-900 dark:text-slate-50", angle: 45 },
  { Icon: FaNodeJs, color: "text-lime-500", angle: 90 },
  { Icon: SiTypescript, color: "text-blue-500", angle: 135 },
  { Icon: FaJs, color: "text-yellow-500", angle: 180 },
  { Icon: SiMongodb, color: "text-green-600", angle: 225 },
  { Icon: SiExpress, color: "text-slate-700 dark:text-slate-200", angle: 270 },
  { Icon: SiTailwindcss, color: "text-cyan-500", angle: 315 },
];

function OrbitIcon({ Icon, color, angle, radius, duration, reverse }) {
  return (
    <div
      style={{
        "--angle": angle,
        "--radius": radius,
        "--duration": duration,
      }}
      className={`absolute flex size-10 items-center justify-center rounded-full animate-orbit ${
        reverse ? "[animation-direction:reverse]" : ""
      }`}
    >
      <Icon className={`text-3xl lg:text-5xl ${color}`} />
    </div>
  );
}

export default function SkillsOrbit() {
  return (
    <div className="relative flex h-[280px] lg:h-[420px] w-full flex-col items-center justify-center overflow-hidden">
      <span className="pointer-events-none bg-gradient-to-b from-slate-900 to-slate-400 dark:from-white dark:to-slate-700 bg-clip-text text-5xl lg:text-7xl font-semibold text-transparent">
        Skills
      </span>

      {/* Outer ring */}
      <svg className="pointer-events-none absolute inset-0 size-full">
        <circle
          className="stroke-black/10 dark:stroke-white/10"
          cx="50%"
          cy="50%"
          r="140"
          fill="none"
        />
      </svg>
      {icons.map(({ Icon, color, angle }) => (
        <OrbitIcon
          key={`outer-${angle}`}
          Icon={Icon}
          color={color}
          angle={angle}
          radius={140}
          duration={20}
        />
      ))}

      {/* Inner ring, spinning the opposite way */}
      <svg className="pointer-events-none absolute inset-0 size-full">
        <circle
          className="stroke-black/10 dark:stroke-white/10"
          cx="50%"
          cy="50%"
          r="85"
          fill="none"
        />
      </svg>
      {icons.map(({ Icon, color, angle }) => (
        <OrbitIcon
          key={`inner-${angle}`}
          Icon={Icon}
          color={color}
          angle={angle}
          radius={85}
          duration={12}
          reverse
        />
      ))}
    </div>
  );
}