import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-zinc-200/80 bg-white/70 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/70">
      <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="font-semibold tracking-tight text-zinc-900 transition-colors hover:text-zinc-700 dark:text-zinc-100 dark:hover:text-zinc-300"
        >
          PR Forge
        </Link>
        <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
          Draft PR titles &amp; descriptions
        </span>
      </div>
    </header>
  );
}
