import SEO from "@/components/seo/SEO";

const Schedule = () => {
  return (
    <main>
      <SEO
        title="Match Schedule"
        description="Browse the TNGSS Startup Cricket League match schedule by category and date."
        canonical="/schedule"
      />
      <section className="container max-w-[1200px] mx-auto py-10">
        <h1 className="text-4xl font-bold text-foreground mb-6">Match Schedule</h1>
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <p className="text-muted-foreground">Filters and schedule table coming soon.</p>
        </div>
      </section>
    </main>
  );
};

export default Schedule;
