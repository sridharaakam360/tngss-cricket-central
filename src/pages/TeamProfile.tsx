import { useParams } from "react-router-dom";
import SEO from "@/components/seo/SEO";

const TeamProfile = () => {
  const { teamId } = useParams();
  return (
    <main>
      <SEO title="Team Profile" description="Team details and player roster." canonical={`/teams/${teamId ?? ''}`} />
      <section className="container max-w-[1200px] mx-auto py-10">
        <h1 className="text-4xl font-bold text-foreground mb-4">Team Profile</h1>
        <p className="text-muted-foreground mb-6">Team ID: {teamId}</p>
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <p className="text-foreground">Player roster and stats will appear here.</p>
        </div>
      </section>
    </main>
  );
};

export default TeamProfile;
