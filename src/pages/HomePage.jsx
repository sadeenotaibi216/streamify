import FAQ from "../components/Faq";
import Hero from "../components/Hero";
import MiddlePart from "../components/MiddlePart";
import Plan from "../components/Plan";

function HomePage({ user, language }) {
  return (
    <main className="min-h-screen bg-white text-black transition-colors dark:bg-black dark:text-white">
      {user?.username && (
        <div className="bg-green-400 px-6 py-3 text-center font-semibold text-black">
          {language === "en"
            ? `Hi ${user.username}!`
            : `مرحباً ${user.username}!`}
        </div>
      )}

      <Hero />

      <MiddlePart />

      <Plan />

      <FAQ />
    </main>
  );
}

export default HomePage;