import SEO from "@/components/seo/SEO";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const AdminLogin = () => {
  return (
    <main>
      <SEO title="Admin Login" description="Secure access for administrators and scorers." canonical="/admin" />
      <section className="container max-w-[1200px] mx-auto py-10">
        <h1 className="text-4xl font-bold text-foreground mb-6">Admin Login</h1>
        <form className="max-w-md bg-card border border-border rounded-lg p-6 shadow-sm space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Email</label>
            <Input type="email" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Password</label>
            <Input type="password" placeholder="••••••••" />
          </div>
          <Button type="submit">Sign in</Button>
        </form>
      </section>
    </main>
  );
};

export default AdminLogin;
