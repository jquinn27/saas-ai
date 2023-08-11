const LandingLayou = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-full bg-neutral-900 ">
      <div className="mx-auto max-w-screen-xl h-full w-full">{children}</div>
    </main>
  );
};

export default LandingLayou;
