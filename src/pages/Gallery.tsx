import { useState } from "react";
import SEO from "@/components/seo/SEO";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Gallery = () => {
  const [preview, setPreview] = useState<string | null>(null);

  return (
    <main>
      <SEO title="Gallery" description="Photos and videos from the league." canonical="/gallery" />
      <section className="container max-w-[1200px] mx-auto py-10">
        <h1 className="text-4xl font-bold text-foreground mb-6">Gallery</h1>
        <Tabs defaultValue="highlights" className="space-y-4">
          <TabsList>
            <TabsTrigger value="highlights">Highlights</TabsTrigger>
            <TabsTrigger value="teams">Team Photos</TabsTrigger>
            <TabsTrigger value="practice">Practice</TabsTrigger>
            <TabsTrigger value="awards">Awards</TabsTrigger>
            <TabsTrigger value="fans">Crowd/Fans</TabsTrigger>
          </TabsList>
          <TabsContent value="highlights">
            <div className="bg-card border border-border rounded-lg shadow-sm overflow-hidden">
              <AspectRatio ratio={16/9}>
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0"
                  title="League Highlights"
                  className="w-full h-full rounded-md"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </AspectRatio>
            </div>
          </TabsContent>
          {(["teams", "practice", "awards", "fans"] as const).map((tab) => (
            <TabsContent key={tab} value={tab}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Array.from({ length: 8 }).map((_, i) => {
                  const url = "/placeholder.svg";
                  return (
                    <button
                      key={i}
                      onClick={() => setPreview(url)}
                      className="group relative rounded-md overflow-hidden border border-border focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <img
                        src={url}
                        alt={`${tab} photo ${i+1}`}
                        className="w-full h-40 object-cover transition-transform group-hover:scale-[1.02]"
                        loading="lazy"
                      />
                    </button>
                  );
                })}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      <Dialog open={!!preview} onOpenChange={(o) => !o && setPreview(null)}>
        <DialogContent className="max-w-4xl">
          {preview && (
            <img src={preview} alt="Full size preview" className="w-full h-auto rounded-md" />
          )}
        </DialogContent>
      </Dialog>
    </main>
  );
};

export default Gallery;
