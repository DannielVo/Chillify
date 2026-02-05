interface SidebarItemProps {
  icon: string;
  label: string;
  isCollapsed: boolean;
  active?: boolean;
  danger?: boolean;
}

export default function SidebarItem({
  icon,
  label,
  isCollapsed,
  active,
  danger,
}: SidebarItemProps) {
  return (
    <div
      className={`
        flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer
        transition-colors
        ${
          active
            ? "bg-primary/10 text-primary"
            : "text-slate-400 hover:text-white hover:bg-white/5"
        }
        ${danger && "hover:text-red-500 hover:bg-red-500/5"}
      `}
    >
      <span className="material-symbols-outlined">{icon}</span>

      {!isCollapsed && <p className="text-sm font-medium">{label}</p>}
    </div>
  );
}
