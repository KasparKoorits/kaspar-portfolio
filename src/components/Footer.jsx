import { memo } from "react";

function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="text-sm text-white/60">
          © {new Date().getFullYear()} Kaspar Koorits
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);
