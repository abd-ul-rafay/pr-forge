/** Length preset for generated PR descriptions (wired to AI later). */
export type DescriptionLength = "short" | "medium" | "long";

/** Form values passed to the generator API when implemented. */
export type PRDraftFormValues = {
  issueContext: string;
  resolutionDetails: string;
  descriptionLength: DescriptionLength;
};
