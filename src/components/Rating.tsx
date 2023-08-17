import { Star } from './Star.tsx';

type RatingProps = { mark: number };
export function Rating({ mark }: RatingProps) {
  return (
    <div className="flex items-center">
      <Star active={mark >= 1} />
      <Star active={mark >= 2} />
      <Star active={mark >= 3} />
      <Star active={mark >= 4} />
      <Star active={mark >= 5} />

      <span className="ml-3 mr-2 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
        {mark}
      </span>
    </div>
  );
}
