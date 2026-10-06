// A phone drawn with CSS, with a real screenshot of the app on its screen.
// Deliberately our own drawing, not Apple's product photography: Apple's
// device images may only be used under its marketing guidelines, and the app
// is not in the App Store yet. The screenshots show the app's own sample data
// ("Look around with sample data"), never a real account.
export default function PhoneFrame({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={`relative mx-auto w-full max-w-[250px] rounded-[2.6rem] border border-white/15 bg-[#1b1c20] p-[7px] shadow-[0_50px_120px_-40px_rgba(0,0,0,0.9),inset_0_0_0_1px_rgba(255,255,255,0.06)] ${className}`}
    >
      {/* side buttons */}
      <span aria-hidden="true" className="absolute top-[22%] -left-[3px] h-7 w-[3px] rounded-l bg-white/15" />
      <span aria-hidden="true" className="absolute top-[31%] -left-[3px] h-11 w-[3px] rounded-l bg-white/15" />
      <span aria-hidden="true" className="absolute top-[28%] -right-[3px] h-16 w-[3px] rounded-r bg-white/15" />
      <div className="relative overflow-hidden rounded-[2.2rem] bg-black" style={{ aspectRatio: "720 / 1558" }}>
        {/* eslint-disable-next-line @next/next/no-img-element -- static export, images are not optimized (see next.config.ts) */}
        <img
          src={src}
          alt={alt}
          width={720}
          height={1558}
          loading="lazy"
          decoding="async"
          className="block h-full w-full object-cover"
        />
        <span
          aria-hidden="true"
          className="absolute top-[1.6%] left-1/2 h-[3.1%] w-[30%] -translate-x-1/2 rounded-full bg-black"
        />
      </div>
    </div>
  );
}
