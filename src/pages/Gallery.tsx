import SEO from "@/components/seo/SEO";

const Gallery = () => {
  return (
    <main>
      <SEO title="Gallery" description="Photos and videos from the league." canonical="/gallery" />
      <section className="container max-w-[1200px] mx-auto py-10">
        <h1 className="text-4xl font-bold text-foreground mb-6">Gallery</h1>
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <p className="text-muted-foreground">Media albums will appear here.</p>
        </div>
      </section>
    </main>
  );
};

export default Gallery;
