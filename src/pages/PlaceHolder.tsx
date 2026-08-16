function Placeholder(
  { title, theme }: {
    title: string;
    theme: "light" | "dark";
  }
) {
  return (
    <div className="flex min-h-[500px] items-center justify-center">
      <h1
        className={`text-3xl font-bold ${
          theme === "light" ? "text-black" : "text-white"
        }`}
      >
        {title}
      </h1>
    </div>
  );
}

export default Placeholder;
