const Footer = () => {
  return (
    <footer className="border-t border-border bg-background mt-16" role="contentinfo">
      <div className="container max-w-[1200px] mx-auto py-8 text-sm text-muted-foreground">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p>&copy; {new Date().getFullYear()} TNGSS Startup Cricket League</p>
          <div className="flex items-center gap-6">
            <a href="mailto:info@tngsscricket.com" className="hover:text-foreground">info@tngsscricket.com</a>
            <a href="#" aria-label="Follow on X" className="hover:text-foreground">X</a>
            <a href="#" aria-label="Follow on Facebook" className="hover:text-foreground">Facebook</a>
            <a href="#" aria-label="Follow on Instagram" className="hover:text-foreground">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
