import {
  FaJs,
  FaNodeJs,
  FaReact,
  FaAngular,
  FaWordpress,
} from "react-icons/fa6";
import {
  SiElementor,
  SiExpress,
  SiHostinger,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiWoo,
  SiYoast,
} from "react-icons/si";

const antiClockwiseIcons = [
  { Icon: FaReact, color: "text-sky-500" },
  { Icon: SiNextdotjs, color: "text-slate-900 dark:text-slate-50" },
  { Icon: SiTailwindcss, color: "text-cyan-500" },
  { Icon: FaJs, color: "text-yellow-500" },
  { Icon: SiMongodb, color: "text-green-600" },
  { Icon: SiTypescript, color: "text-blue-500" },
  { Icon: SiMysql, color: "text-blue-600" },
  { Icon: FaNodeJs, color: "text-lime-500" },
];

const clockwiseIcons = [
  { Icon: FaWordpress, color: "text-blue-600" },
  { Icon: SiElementor, color: "text-pink-500" },
  { Icon: SiYoast, color: "text-red-500" },
  { Icon: SiExpress, color: "text-slate-700 dark:text-slate-200" },
  { Icon: SiWoo, color: "text-purple-600" },
  { Icon: SiLaravel, color: "text-red-600" },
  { Icon: FaAngular, color: "text-red-500" },
  { Icon: SiHostinger, color: "text-purple-500" },
];

function withAngles(items) {
  return items.map((item, index) => ({
    ...item,
    angle: (360 / items.length) * index,
  }));
}

function OrbitIcon({ Icon, color, label, angle, radius, duration, reverse }) {
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
      <Icon
        className={`text-3xl lg:text-5xl ${color || "text-slate-700 dark:text-slate-200"}`}
        label={label}
      />
    </div>
  );
}

export default function SkillsOrbit() {
  return (
    <div className="relative flex h-[360px] w-full flex-col items-center justify-center overflow-hidden lg:h-[520px]">
      <span className="pointer-events-none bg-gradient-to-b from-slate-900 to-slate-400 dark:from-white dark:to-slate-700 bg-clip-text text-5xl lg:text-7xl font-semibold text-transparent">
        Skills
      </span>

      {/* Outer ring */}
      <svg className="pointer-events-none absolute inset-0 size-full">
        <circle
          className="stroke-black/10 dark:stroke-white/10"
          cx="50%"
          cy="50%"
          r="170"
          fill="none"
        />
      </svg>
      {withAngles(antiClockwiseIcons).map(({ Icon, color, label, angle }) => (
        <OrbitIcon
          key={`outer-${angle}`}
          Icon={Icon}
          color={color}
          angle={angle}
          radius={170}
          duration={20}
          reverse
          label={label}
        />
      ))}

      {/* Inner ring, spinning the opposite way */}
      <svg className="pointer-events-none absolute inset-0 size-full">
        <circle
          className="stroke-black/10 dark:stroke-white/10"
          cx="50%"
          cy="50%"
          r="105"
          fill="none"
        />
      </svg>
      {withAngles(clockwiseIcons).map(({ Icon, color, label, angle }) => (
        <OrbitIcon
          key={`inner-${angle}`}
          Icon={Icon}
          color={color}
          angle={angle}
          radius={105}
          duration={12}
          label={label}
        />
      ))}
    </div>
  );
}