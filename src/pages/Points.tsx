import SEO from "@/components/seo/SEO";

const Points = () => {
  return (
    <main>
      <SEO title="Points Table" description="Standings for Startup and Professional categories." canonical="/points" />
      <section className="container max-w-[1200px] mx-auto py-10">
        <h1 className="text-4xl font-bold text-foreground mb-6">Points Table</h1>
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <p className="text-muted-foreground">Points tables will appear here.</p>
        </div>
      </section>
    </main>
  );
};

export default Points;
