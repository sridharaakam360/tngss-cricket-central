import { Link, NavLink } from "react-router-dom";
import logo from "@/assets/3.png";
import logo1 from "@/assets/1.png";
const navItems = [
  { to: "/", label: "Home" },  
  { to: "/event-launch", label: "Event Launch" },
  // { to: "/schedule", label: "Schedule" },
  // { to: "/teams", label: "Teams" },
  // { to: "/live", label: "Live" },
  // { to: "/points", label: "Points" },
  // { to: "/gallery", label: "Gallery" },
  // { to: "/admin", label: "Admin" },
];

const Header = () => {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="container max-w-[1200px] mx-auto flex items-center justify-between py-4">
        {/* <Link to="/" className="flex items-center gap-3 font-bold text-xl tracking-tight text-foreground hover:text-primary transition-colors">
          <img 
            src={logo} 
            alt="TNGSS Cricket Central Logo" 
            className="h-10 w-auto"
          />
        </Link> */}
        <Link to="/" className="flex items-center gap-3 font-bold text-xl tracking-tight text-foreground hover:text-primary transition-colors">
          <img 
            src={logo1} 
            alt="TNGSS Cricket Central Logo" 
            className="h-10 w-auto"
          />
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Startup Cricket League
          </span>
        </Link>
        <nav aria-label="Main navigation">
          <ul className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end
                  className={({ isActive }) =>
                    `text-sm font-medium transition-all duration-200 hover:text-primary relative ${
                      isActive 
                        ? "text-primary after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-primary after:to-accent" 
                        : "text-foreground/80 hover:text-foreground"
                    }`
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
