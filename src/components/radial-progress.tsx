interface RadialProgressProps {
  progress: number;
  total: number;
}

export const RadialProgress = ({ progress, total }: RadialProgressProps) => {
  const percentage = (progress / total) * 100;

  return (
    <div className="relative size-full">
      <svg
        className="size-full -rotate-90"
        viewBox="0 0 36 36"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="18"
          cy="18"
          r="16"
          fill="none"
          className="stroke-current text-gray-200 dark:text-neutral-700"
          stroke-width="3.5"
        ></circle>

        <circle
          cx="18"
          cy="18"
          r="16"
          fill="none"
          className="stroke-current text-red-500 dark:text-red-500"
          stroke-width="3.5"
          stroke-dasharray="100"
          stroke-dashoffset={100 - percentage}
          stroke-linecap="round"
        ></circle>
      </svg>

      <div className="absolute start-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center">
        <span className="text-center text-2xl font-bold text-red-500 dark:text-red-500">
          {progress}
        </span>
        <span className="text-center text-sm font-medium text-gray-500 dark:text-gray-500">
          /{total}
        </span>
      </div>
    </div>
  );
};
