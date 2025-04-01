type Props = {
  width?: number;
  height?: number;
};

export function Skeleton({ width: w, height: h }: Props) {
  const width = w ? `w-[${w}]` : `w-full`;
  const height = h ? `h-[${h}]` : `h-full`;
  return (
    <div
      className={`${width} ${height} flex items-center justify-center rounded bg-gray-800/30 transition-colors`}
    ></div>
  );
}
