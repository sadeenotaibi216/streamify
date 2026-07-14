import FAQ from "../components/Faq";
import Hero from "../components/Hero";
import MiddlePart from "../components/MiddlePart";
import Plan from "../components/Plan";

function HomePage(props) {
  const { user, theme, language } = props;

  return (
    <main
      className={`min-h-screen transition-colors ${
        theme === "dark"
          ? "bg-black text-white"
          : "bg-white text-black"
      }`}
    >
      {user?.username && (
        <div className="bg-green-400 px-6 py-3 text-center font-semibold text-black">
          {language === "en"
            ? `Hi ${user.username}!`
            : `مرحباً ${user.username}!`}
        </div>
      )}

      <Hero theme={theme} />

      <MiddlePart theme={theme} />

      <Plan theme={theme} />

      <FAQ theme={theme} />
    </main>
  );
}

export default HomePage;