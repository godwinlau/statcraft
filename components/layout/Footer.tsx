export default function Footer() {
  return (
    <footer className="py-9 border-t border-white/[.06] bg-d">
      <div className="container flex justify-between items-center">
        <p className="text-[13px] text-white/20">{"\u00A9"} 2026 StatCraft</p>
        <p className="text-[13px] text-white/20">
          <a href="mailto:hello@statcraft.ph" className="text-o no-underline">
            hello@statcraft.ph
          </a>
        </p>
      </div>
    </footer>
  );
}
