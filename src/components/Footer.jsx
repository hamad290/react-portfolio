import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const socials = [
  { href: "https://github.com/hamad290", icon: FaGithub, label: "GitHub" },
  { href: "https://www.linkedin.com/in/hammad-ur-rehman-544095198/", icon: FaLinkedin, label: "LinkedIn" },
  { href: "https://twitter.com/", icon: FaXTwitter, label: "Twitter" },
  { href: "mailto:hamad290k@gmail.com", icon: Mail, label: "Email" },
];

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-500/10 dark:border-slate-50/[0.06]">
      <div className="container-page flex flex-col items-center gap-4 py-8 md:flex-row md:justify-between">
        <p className="text-sm text-slate-600 dark:text-slate-400">
          &copy; {new Date().getFullYear()} Hammad Ur Rehman. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          {socials.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="text-slate-500 hover:text-accent transition-colors"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}