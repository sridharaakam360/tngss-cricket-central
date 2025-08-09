import SEO from "@/components/seo/SEO";

const EventLaunch = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    name: "TNGSS Startup Cricket League - Grand Launch",
    startDate: "2025-08-12T10:00:00+05:30",
    location: {
      "@type": "Place",
      name: "Sri Shanmugha Educational Institutions",
      address: "Sankari, Salem, Tamil Nadu, India",
    },
    eventStatus: "EventScheduled",
    sport: "Cricket",
  };

  return (
    <main>
      <SEO
        title="Event Launch - TNGSS Startup Cricket League"
        description="Join us for the grand launch of Tamil Nadu's first-ever startup-inclusive statewide cricket league. August 12, 2025 at Sri Shanmugha Educational Institutions, Sankari, Salem."
        canonical="/event-launch"
        jsonLd={jsonLd}
      />

      {/* Header */}
      <section className="container max-w-[1200px] mx-auto py-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            TNGSS Startup Cricket League – Grand Launch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Kickstarting Tamil Nadu's First-Ever Startup-Inclusive Statewide Cricket League!
          </p>
        </div>
      </section>

      {/* Launch Details */}
      <section className="container max-w-[1200px] mx-auto py-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-semibold mb-6 text-primary">Launch Details</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Launch Date</h3>
                <p className="text-lg text-muted-foreground">August 12, 2025</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Venue</h3>
                <p className="text-lg text-muted-foreground">Sri Shanmugha Educational Institutions, Sankari, Salem</p>
              </div>
            </div>
          </div>

          {/* Chief Guest */}
          <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-semibold mb-6 text-primary">Chief Guest</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Thiru. Neeraj Mittal, IAS</h3>
                <p className="text-muted-foreground">Additional Chief Secretary, Department of MSME, Govt. of TN</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guests */}
      <section className="container max-w-[1200px] mx-auto py-8">
        <h2 className="text-3xl font-bold text-center mb-8">Distinguished Guests</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-primary">Guest of Honour</h3>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Dr. Sudha Seshayyan</h4>
              <p className="text-muted-foreground">Former VC, The Tamil Nadu Dr. MGR Medical University</p>
            </div>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-primary">Special Guests</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• StartupTN CEO</li>
              <li>• College Management</li>
              <li>• Investor Delegates</li>
              <li>• Startup Founders</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Launch Highlights */}
      <section className="container max-w-[1200px] mx-auto py-8">
        <h2 className="text-3xl font-bold text-center mb-8">Launch Highlights</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Official Trophy Reveal",
              description: "Witness the unveiling of the prestigious TNGSS Startup Cricket League trophy"
            },
            {
              title: "Team Jersey Unveiling",
              description: "Get a first look at the official team jerseys and merchandise"
            },
            {
              title: "Startup-Founder Cricket Showcase",
              description: "Watch startup founders showcase their cricket skills in a friendly match"
            }
          ].map((highlight) => (
            <div key={highlight.title} className="bg-card border border-border rounded-lg p-6 shadow-sm text-center">
              <h3 className="text-xl font-semibold mb-3 text-primary">{highlight.title}</h3>
              <p className="text-muted-foreground">{highlight.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="container max-w-[1200px] mx-auto py-8">
        <h2 className="text-3xl font-bold text-center mb-8">Photos & Videos</h2>
        <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground">Photo {item}</span>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <span className="text-muted-foreground">Video Embed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="container max-w-[1200px] mx-auto py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Follow Us On</h2>
          <div className="flex justify-center gap-6">
            {[
              { name: "Instagram", icon: "📷", url: "#" },
              { name: "LinkedIn", icon: "💼", url: "#" },
              { name: "YouTube", icon: "▶️", url: "#" }
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition-colors font-medium"
              >
                <span>{social.icon}</span>
                <span>{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default EventLaunch;
