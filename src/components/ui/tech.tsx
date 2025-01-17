export default function Tech() {
  return (
    <div className="flex flex-col items-center bg-background gap-2 border border-grey px-2 py-3 rounded-xl group hover:bg-muted/40">
      <img
        src="icons/javascript-logo.svg"
        className="size-8 filter grayscale group-hover:grayscale-0 group-hover:-translate-y-1 transition-all"
      />
      <div>name</div>
    </div>
  );
}
