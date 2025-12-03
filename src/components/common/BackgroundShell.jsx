export default function BackgroundShell({
  bg = "/image.png",
  overlay = "from-black/60 via-black/80 to-black/95",
  children,
}) {
  return (
    <div className="relative min-h-screen">
      <img
        src={bg}
        alt=""
        aria-hidden="true"
        className="fixed inset-0 -z-10 h-full w-full object-cover"
      />
      <div className={`fixed inset-0 -z-10 bg-gradient-to-b ${overlay}`} />
      {children}
    </div>
  );
}
