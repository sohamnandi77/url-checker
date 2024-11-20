const Header = () => {
  return (
    <div className="flex h-16 w-full items-center justify-between bg-primary px-5">
      <div className="flex items-center gap-3">
        <img src="/url-checker.png" alt="logo" className="h-8 w-8" />
        <h1 className="text-base font-extrabold text-secondary">URL Checker</h1>
      </div>
    </div>
  );
};

export { Header };
