import { Link } from "react-router-dom";
import SEO from "@/components/seo/SEO";
import heroImg from "@/assets/hero-cricket.jpg";

const Index = () => {
  return (
    <main>
      <SEO
        title="Home"
        description="TNGSS Startup Cricket League — schedule, teams, live scores, points, gallery, and registrations."
        canonical="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "TNGSS Startup Cricket League",
          url: "/",
        }}
      />

      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Cricket stadium with crowd and green pitch"
            className="w-full h-[420px] md:h-[520px] object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-foreground/70" aria-hidden="true" />
        </div>
        <div className="container max-w-[1200px] mx-auto relative z-10 flex items-center h-[420px] md:h-[520px]">
          <div className="max-w-2xl text-primary-foreground">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">TNGSS Startup Cricket League</h1>
            <p className="text-base md:text-lg opacity-90 mb-6">Two categories. One champion. Professional, high-energy cricket for startups and pros in Tamil Nadu.</p>
            <div className="flex gap-3">
              <Link to="/event-launch" className="inline-flex items-center px-5 py-2.5 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition-colors">Event Launch</Link>
              <Link to="/schedule" className="inline-flex items-center px-5 py-2.5 rounded-md border border-border bg-background text-foreground hover:bg-card transition-colors">View Schedule</Link>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="container max-w-[1200px] mx-auto py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <article className="bg-card border border-border rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-2">About the League</h2>
            <p className="text-muted-foreground">TNGSS Startup Cricket League brings together entrepreneurs and professionals for a competitive, well-run tournament with fair play and great fan experiences.</p>
          </article>
          <article className="bg-card border border-border rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-2">Categories</h2>
            <p className="text-muted-foreground">Two divisions: Startup and Professional. Balanced fixtures, clear rules, and transparent standings throughout the season.</p>
          </article>
        </div>
      </section>

      {/* Featured Live Match */}
      <section className="container max-w-[1200px] mx-auto pb-4">
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-foreground">Featured Live Match</h3>
            <p className="text-muted-foreground">No live match at the moment. Check the schedule for upcoming fixtures.</p>
          </div>
          <div className="flex gap-3">
            <Link to="/live" className="inline-flex px-4 py-2 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition-colors">Watch Live</Link>
            <Link to="/schedule" className="inline-flex px-4 py-2 rounded-md border border-border bg-background text-foreground hover:bg-card transition-colors">Scorecard</Link>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="container max-w-[1200px] mx-auto py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            ["16", "Teams"],
            ["2", "Categories"],
            ["30+", "Matches"],
            ["1", "Grand Finale"],
          ].map(([val, label]) => (
            <div key={label} className="bg-card border border-border rounded-lg p-5 text-center shadow-sm">
              <div className="text-3xl font-bold text-foreground">{val}</div>
              <div className="text-sm text-muted-foreground">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="container max-w-[1200px] mx-auto py-8">
        <h2 className="text-2xl font-semibold mb-4">Timeline</h2>
        <ol className="grid md:grid-cols-5 gap-4">
          {["Registration", "Team Reveal", "League Start", "Knockouts", "Grand Finale"].map((stage, i) => (
            <li key={stage} className="bg-card border border-border rounded-lg p-4 text-center shadow-sm">
              <span className="text-sm text-muted-foreground">Step {i + 1}</span>
              <div className="font-medium text-foreground">{stage}</div>
            </li>
          ))}
        </ol>
      </section>

      {/* Partners */}
      <section className="container max-w-[1200px] mx-auto py-12">
        <h2 className="text-2xl font-semibold mb-6">Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-muted-foreground">
          {['StartupTN', 'Aakam360', 'Aakam Shine', 'Tech Partners'].map((p) => (
            <div key={p} className="bg-card border border-border rounded-lg p-6 shadow-sm">{p}</div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Index;
