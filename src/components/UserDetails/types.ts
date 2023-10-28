export type ComponentProps = {
  saveStep: (data: Record<string, string | number | File | undefined>) => void;
  toggleResume: Dispatch<SetStateAction<boolean>>;
  visibility: boolean;
}


