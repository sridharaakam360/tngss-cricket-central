import { Link } from "react-router-dom";
import SEO from "@/components/seo/SEO";
import logo from "@/assets/Asset 2@4x (3).png";

const Index = () => {
  return (
    <main>
      <SEO
        title="Home"
        description="TNGSS Cricket Central — schedule, teams, live scores, points, gallery, and registrations."
        canonical="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "TNGSS Cricket Central",
          url: "/",
        }}
      />

      {/* Hero Banner */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background" />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        <div className="container max-w-[1200px] mx-auto relative z-10 text-center px-4">
          <div className="max-w-4xl mx-auto">
            {/* Logo */}
            <div className="mb-8 flex justify-center">
              <img 
                src={logo} 
                alt="TNGSS Cricket Central Logo" 
                className="h-24 md:h-32 w-auto drop-shadow-2xl"
              />
            </div>
            
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-foreground to-accent bg-clip-text text-transparent leading-tight">
              TNGSS Cricket Central
            </h1>
            
            {/* Subheading */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
              Where Innovation Meets Cricket Excellence
            </p>
            
            {/* Description */}
            <p className="text-base md:text-lg text-muted-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join the ultimate startup cricket league that brings together Tamil Nadu's most innovative companies 
              for an electrifying tournament experience.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/event-launch" 
                className="group inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:from-primary/90 hover:to-primary/70 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-primary/25 hover:scale-105"
              >
                <span>Register Your Team</span>
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              
              <Link 
                to="/live" 
                className="inline-flex items-center px-8 py-4 rounded-lg border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 font-semibold text-lg hover:scale-105"
              >
                Watch Live Matches
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* About the League */}
      <section className="container max-w-[1200px] mx-auto py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">About the League</h2>
          <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
            <p className="text-lg text-muted-foreground leading-relaxed">
              The TNGSS Startup Cricket League is an exciting initiative by Tamil Nadu Global Startup Summit 
              (TNGSS), combining innovation with cricket. This statewide league features two unique categories:
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Startup Category</strong> – for startup founders, co-founders, early team members, and ecosystem professionals.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Professional Category</strong> – for professional cricket players, corporate athletes, and startup mentors.
                </span>
              </li>
            </ul>
            <p className="text-lg text-muted-foreground leading-relaxed mt-6">
              Our mission is to promote startup energy, networking, and mentorship through the spirit of the sport.
            </p>
          </div>
        </div>
      </section>

      {/* League Categories */}
      <section className="container max-w-[1200px] mx-auto py-12">
        <h2 className="text-3xl font-bold text-center mb-8">League Categories</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <article className="bg-card border border-border rounded-lg p-8 shadow-sm">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Startup Category</h3>
            <p className="text-muted-foreground text-lg">
              For founders, co-founders, early-stage team members, and ecosystem enablers.
            </p>
          </article>
          <article className="bg-card border border-border rounded-lg p-8 shadow-sm">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Professional Category</h3>
            <p className="text-muted-foreground text-lg">
              For corporate teams, state-level players, and mentors to inspire the startup ecosystem.
            </p>
          </article>
        </div>
      </section>

      {/* Featured Live Match */}
      <section className="container max-w-[1200px] mx-auto pb-4">
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-foreground mb-2">Featured Live Match</h3>
              <div className="space-y-2">
                <p className="text-lg font-medium text-foreground">Team A vs Team B</p>
                <p className="text-muted-foreground">Live Now</p>
                <p className="text-2xl font-bold text-primary">135/4 (17.3)</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Link to="/live" className="inline-flex px-6 py-2 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition-colors font-medium">Watch Live</Link>
              <Link to="/schedule" className="inline-flex px-6 py-2 rounded-md border border-border bg-background text-foreground hover:bg-card transition-colors font-medium">Scorecard</Link>
            </div>
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
            <div key={label} className="bg-card border border-border rounded-lg p-6 text-center shadow-sm">
              <div className="text-4xl font-bold text-primary mb-2">{val}</div>
              <div className="text-sm text-muted-foreground font-medium">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="container max-w-[1200px] mx-auto py-8">
        <h2 className="text-3xl font-bold text-center mb-8">Timeline</h2>
        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2"></div>
          <ol className="grid md:grid-cols-5 gap-4">
            {["Registration", "Team Reveal", "League Start", "Knockouts", "Grand Finale"].map((stage, i) => (
              <li key={stage} className="bg-card border border-border rounded-lg p-4 text-center shadow-sm relative">
                <div className="hidden md:block absolute -top-2 left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 border-2 border-background"></div>
                <span className="text-sm text-muted-foreground">Step {i + 1}</span>
                <div className="font-medium text-foreground">{stage}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Partners */}
      <section className="container max-w-[1200px] mx-auto py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
          {['StartupTN', 'Aakam360', 'Aakam Shine', 'Sponsors', 'Institutional Partners', 'Tech Partners'].map((p) => (
            <div key={p} className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-muted-foreground font-medium">{p}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Index;
