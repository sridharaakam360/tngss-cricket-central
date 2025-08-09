import SEO from "@/components/seo/SEO";

const EventLaunch = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    name: "TNGSS Startup Cricket League - Event Launch",
    startDate: "2025-01-01T10:00:00+05:30",
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
        title="Event Launch"
        description="Join us for the TNGSS Startup Cricket League launch event in Sankari, Salem. Date, time, venue, and highlights."
        canonical="/event-launch"
        jsonLd={jsonLd}
      />
      <section className="container max-w-[1200px] mx-auto py-10">
        <h1 className="text-4xl font-bold text-foreground mb-2">Event Launch</h1>
        <p className="text-muted-foreground mb-6">Sri Shanmugha Educational Institutions, Sankari, Salem</p>
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <ul className="space-y-2 text-foreground">
            <li><strong>Date:</strong> To be announced (IST)</li>
            <li><strong>Time:</strong> To be announced</li>
            <li><strong>Venue:</strong> Sri Shanmugha Educational Institutions, Sankari, Salem</li>
            <li><strong>Highlights:</strong> Chief guests, performances, team reveal, media</li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default EventLaunch;
