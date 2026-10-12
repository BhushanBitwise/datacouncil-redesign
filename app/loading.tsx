
import { GraduationCap } from "lucide-react";

export default function Loading() {
  return (
    <main
      className="container-main flex min-h-[70vh] flex-col items-center justify-center py-24"
      role="status"
      aria-live="polite"
      aria-label="Loading Data Council"
    >
      <div className="relative flex size-16 items-center justify-center rounded-2xl bg-[#c9ff3b]">
        <div className="absolute inset-0 animate-pulse rounded-2xl bg-[#c9ff3b]" />
        <GraduationCap
          size={30}
          strokeWidth={1.8}
          className="relative text-[#101010]"
        />
      </div>

      <p className="mt-6 text-sm font-bold tracking-[0.2em]">
        DATA COUNCIL
      </p>

      <p className="mt-2 text-sm text-black/50">
        Preparing your next step...
      </p>

      <div className="mt-6 h-1 w-36 overflow-hidden rounded-full bg-black/10">
        <div className="h-full w-1/2 animate-pulse rounded-full bg-[#101010]" />
      </div>
    </main>
  );
}
