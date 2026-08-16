
import Hero from "../components/Hero";

import FAQ from "../components/faq";
import MiddlePart from "../components/middlepart";
import Plan from "../components/plan";
function HomePage(
  props: {
    user: { username: string } | null;
    theme: "light" | "dark";
    language: "en" | "ar";
  }
) {
  const { user, theme, language } = props;

  return (
    <main
      className={`min-h-screen transition-colors ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
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

      {/* <NewPost theme={theme} /> */}

      <MiddlePart theme={theme} />

      <Plan theme={theme} />

      <FAQ />
    </main>
  );
}

export default HomePage;