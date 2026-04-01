import { PRDraftForm } from "@/components/pr-forge/pr-draft-form";
import { SiteHeader } from "@/components/pr-forge/site-header";

export default function Home() {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-zinc-50 dark:bg-zinc-950">
      <SiteHeader />
      <main className="relative flex flex-1 flex-col">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(139,92,246,0.12),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(139,92,246,0.18),transparent)]"
          aria-hidden
        />
        <div className="relative mx-auto w-full max-w-4xl flex-1 px-4 py-6 sm:px-6 sm:py-8">
          <div className="mb-4 space-y-1">
            <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-[1.65rem]">
              Turn context into a PR
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Paste context and what you did—get a title and description you can
              drop into your forge.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200/80 bg-white/80 p-4 shadow-xl shadow-zinc-200/40 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/60 dark:shadow-black/20 sm:p-5">
            <PRDraftForm />
          </div>
        </div>
      </main>
    </div>
  );
}
