"use client";

import { useCallback, useState } from "react";
import type { DescriptionLength, PRDraftFormValues } from "@/types/pr-forge";

const LENGTH_OPTIONS: { value: DescriptionLength; label: string }[] = [
  { value: "short", label: "Short" },
  { value: "medium", label: "Medium" },
  { value: "long", label: "Long" },
];

const textareaClass =
  "w-full min-h-[88px] resize-y rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm leading-snug text-zinc-900 shadow-sm outline-none transition-[border-color,box-shadow] placeholder:text-zinc-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 dark:border-zinc-700 dark:bg-zinc-900/50 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-violet-400 dark:focus:ring-violet-400/20";

const initialValues: PRDraftFormValues = {
  issueContext: "",
  resolutionDetails: "",
  descriptionLength: "short",
};

export function PRDraftForm() {
  const [values, setValues] = useState<PRDraftFormValues>(initialValues);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const update = useCallback(
    <K extends keyof PRDraftFormValues>(key: K, value: PRDraftFormValues[K]) => {
      setValues((prev) => ({ ...prev, [key]: value }));
    },
    []
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsSubmitting(true);
      await new Promise((r) => setTimeout(r, 400));
      setIsSubmitting(false);
    },
    []
  );

  const canSubmit =
    values.issueContext.trim().length > 0 &&
    values.resolutionDetails.trim().length > 0;

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4"
      noValidate
      aria-label="PR draft generator"
    >
      <div className="flex flex-col gap-4">
        <div className="space-y-1">
          <label
            htmlFor="issue-context"
            className="block text-xs font-medium uppercase tracking-wide text-zinc-600 dark:text-zinc-400"
          >
            Issue or request
          </label>
          <textarea
            id="issue-context"
            name="issueContext"
            value={values.issueContext}
            onChange={(e) => update("issueContext", e.target.value)}
            rows={4}
            placeholder="Ticket, bug, or ask—paste anything relevant."
            className={textareaClass}
            aria-describedby="issue-context-hint"
            autoComplete="off"
          />
        </div>

        <div className="space-y-1">
          <label
            htmlFor="resolution-details"
            className="block text-xs font-medium uppercase tracking-wide text-zinc-600 dark:text-zinc-400"
          >
            What you changed
          </label>
          <textarea
            id="resolution-details"
            name="resolutionDetails"
            value={values.resolutionDetails}
            onChange={(e) => update("resolutionDetails", e.target.value)}
            rows={4}
            placeholder="Fix, approach, risky areas—short notes are OK."
            className={textareaClass}
            aria-describedby="resolution-details-hint"
            autoComplete="off"
          />
        </div>
      </div>

      <fieldset className="flex flex-wrap items-center gap-3 border-0 p-0">
        <legend className="sr-only">PR description length</legend>
        <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
          Description length
        </span>
        <div
          className="inline-flex rounded-lg border border-zinc-200 bg-zinc-100/80 p-0.5 dark:border-zinc-700 dark:bg-zinc-800/80"
          role="radiogroup"
          aria-label="Description length"
        >
          {LENGTH_OPTIONS.map((opt) => {
            const selected = values.descriptionLength === opt.value;
            return (
              <label
                key={opt.value}
                className="cursor-pointer rounded-md px-2.5 py-1 text-xs font-medium transition-colors"
              >
                <input
                  type="radio"
                  name="descriptionLength"
                  value={opt.value}
                  checked={selected}
                  onChange={() => update("descriptionLength", opt.value)}
                  className="sr-only"
                />
                <span
                  className={
                    selected
                      ? "rounded-md bg-white px-2 py-0.5 text-zinc-900 shadow-sm dark:bg-zinc-900 dark:text-zinc-100"
                      : "px-2 py-0.5 text-zinc-600 dark:text-zinc-400"
                  }
                >
                  {opt.label}
                </span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="flex flex-wrap items-center justify-end gap-3 border-t border-zinc-200 pt-3 dark:border-zinc-800">
        {canSubmit ? (
          <p className="mr-auto text-xs text-zinc-500 dark:text-zinc-500">
            Ready to generate.
          </p>
        ) : null}
        <button
          type="submit"
          disabled={!canSubmit || isSubmitting}
          className="inline-flex h-9 shrink-0 items-center justify-center rounded-lg bg-zinc-900 px-4 text-sm font-semibold text-white shadow-sm transition-[background-color,transform,opacity] hover:bg-zinc-800 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-40 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
        >
          {isSubmitting ? "Working…" : "Generate PR draft"}
        </button>
      </div>
    </form>
  );
}
