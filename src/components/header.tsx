const Header = () => {
  return (
    <div className="w-full flex justify-between items-center h-16 px-5 bg-primary">
      <div className="flex items-center gap-3">
        <img src="/url-checker.png" alt="logo" className="h-8 w-8" />
        <h1 className="text-base font-extrabold text-secondary">URL Checker</h1>
      </div>
    </div>
  );
};

export { Header };
