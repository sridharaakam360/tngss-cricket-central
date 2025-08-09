import { Link, NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/event-launch", label: "Event Launch" },
  { to: "/schedule", label: "Schedule" },
  { to: "/teams", label: "Teams" },
  { to: "/live", label: "Live" },
  { to: "/points", label: "Points" },
  { to: "/gallery", label: "Gallery" },
  { to: "/admin", label: "Admin" },
];

const Header = () => {
  return (
    <header className="border-b border-border bg-background">
      <div className="container max-w-[1200px] mx-auto flex items-center justify-between py-4">
        <Link to="/" className="font-bold text-xl tracking-tight text-foreground">
          TNGSS Startup Cricket League
        </Link>
        <nav aria-label="Main navigation">
          <ul className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors duration-200 ${isActive ? "text-primary" : "text-foreground/80 hover:text-foreground"}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
