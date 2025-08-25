// // import { Link } from "react-router-dom";
// // import SEO from "@/components/seo/SEO";
// // import logo from "@/assets/2.png";

// // const Index = () => {
// //   return (
// //     <main>
// //       <SEO
// //         title="Home"
// //         description="TNGSS Cricket Central — schedule, teams, live scores, points, gallery, and registrations."
// //         canonical="/"
// //         jsonLd={{
// //           "@context": "https://schema.org",
// //           "@type": "Organization",
// //           name: "TNGSS Startup premier League",
// //           url: "/",
// //         }}
// //       />

// //       {/* Hero Banner */}
// //       <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
// //         {/* Animated Background */}
// //         <div className="absolute inset-0">
// //           <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background" />
// //           <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20" />
// //           <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
// //           <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
// //         </div>
        
// //         {/* Grid Pattern Overlay */}
// //         <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
// //         <div className="container max-w-[1200px] mx-auto relative z-10 text-center px-4">
// //           <div className="max-w-4xl mx-auto">
// //             {/* Logo */}
// //             <div className="mb-8 flex justify-center">
// //               <img 
// //                 src={logo} 
// //                 alt="TNGSS Cricket Central Logo" 
// //                 className="h-24 md:h-32 w-auto drop-shadow-2xl"
// //               />
// //             </div>
            
// //             {/* Main Heading */}
// //             <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-foreground to-accent bg-clip-text text-transparent leading-tight">
// //               Startup Premier League
// //             </h1>
            
// //             {/* Subheading */}
// //             <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
// //               Where Innovation Meets Cricket Excellence
// //             </p>
            
// //             {/* Description */}
// //             {/* <p className="text-base md:text-lg text-muted-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
// //               Join the ultimate startup cricket league that brings together Tamil Nadu's most innovative companies 
// //               for an electrifying tournament experience.
// //             </p> */}
            
// //             {/* CTA Buttons */}
// //             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
// //               <Link 
// //                 to="/register" 
// //                 className="group inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:from-primary/90 hover:to-primary/70 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-primary/25 hover:scale-105"
// //               >
// //                 <span>Register Your Team</span>
// //                 <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
// //                 </svg>
// //               </Link>
              
// //               {/* <Link 
// //                 to="/live" 
// //                 className="inline-flex items-center px-8 py-4 rounded-lg border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 font-semibold text-lg hover:scale-105"
// //               >
// //                 Watch Live Matches
// //               </Link> */}
// //             </div>
// //           </div>
// //         </div>
        
// //         {/* Scroll Indicator */}
// //         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
// //           <svg className="w-6 h-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
// //           </svg>
// //         </div>
// //       </section>
// // {/* <section className="absolute inset-0"> */}
// //       {/* About the League */}
// //       <section className="container max-w-[1200px] mx-auto py-12">
// //         <div className="max-w-4xl mx-auto">
// //           <h2 className="text-3xl font-bold text-center mb-8">About the League</h2>
// //           <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
// //             <p className="text-lg text-muted-foreground leading-relaxed">
// //               The TNGSS Startup Cricket League is an exciting initiative by Tamil Nadu Global Startup Summit 
// //               (TNGSS), combining innovation with cricket. This statewide league features two unique categories:
// //             </p>
// //             <ul className="mt-6 space-y-3">
// //               <li className="flex items-start gap-3">
// //                 <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
// //                 <span className="text-muted-foreground">
// //                   <strong className="text-foreground">Startup Category</strong> – for startup founders, co-founders, early team members, and ecosystem professionals.
// //                 </span>
// //               </li>
// //               <li className="flex items-start gap-3">
// //                 <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
// //                 <span className="text-muted-foreground">
// //                   <strong className="text-foreground">Professional Category</strong> – for professional cricket players, corporate athletes, and startup mentors.
// //                 </span>
// //               </li>
// //             </ul>
// //             <p className="text-lg text-muted-foreground leading-relaxed mt-6">
// //               Our mission is to promote startup energy, networking, and mentorship through the spirit of the sport.
// //             </p>
// //           </div>
// //         </div>
// //       </section>

// //       {/* League Categories */}
// //       <section className="container max-w-[1200px] mx-auto py-12">
// //         <h2 className="text-3xl font-bold text-center mb-8">League Categories</h2>
// //         <div className="grid md:grid-cols-2 gap-8">
// //           <article className="bg-card border border-border rounded-lg p-8 shadow-sm">
// //             <h3 className="text-2xl font-semibold mb-4 text-primary">Startup Category</h3>
// //             <p className="text-muted-foreground text-lg">
// //               For founders, co-founders, early-stage team members, and ecosystem enablers.
// //             </p>
// //           </article>
// //           <article className="bg-card border border-border rounded-lg p-8 shadow-sm">
// //             <h3 className="text-2xl font-semibold mb-4 text-primary">Professional Category</h3>
// //             <p className="text-muted-foreground text-lg">
// //               For corporate teams, state-level players, and mentors to inspire the startup ecosystem.
// //             </p>
// //           </article>
// //         </div>
// //       </section>

// //       {/* Featured Live Match */}
// //       <section className="container max-w-[1200px] mx-auto pb-4">
// //         <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
// //           <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
// //             <div className="flex-1">
// //               <h3 className="text-xl font-semibold text-foreground mb-2">Featured Live Match</h3>
// //               <div className="space-y-2">
// //                 <p className="text-lg font-medium text-foreground">Team A vs Team B</p>
// //                 <p className="text-muted-foreground">Live Now</p>
// //                 <p className="text-2xl font-bold text-primary">135/4 (17.3)</p>
// //               </div>
// //             </div>
// //             <div className="flex gap-3">
// //               <Link to="/live" className="inline-flex px-6 py-2 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition-colors font-medium">Watch Live</Link>
// //               <Link to="/schedule" className="inline-flex px-6 py-2 rounded-md border border-border bg-background text-foreground hover:bg-card transition-colors font-medium">Scorecard</Link>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Quick Stats */}
// //       <section className="container max-w-[1200px] mx-auto py-8">
// //         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
// //           {[
// //             ["16", "Teams"],
// //             ["2", "Categories"],
// //             ["30+", "Matches"],
// //             ["1", "Grand Finale"],
// //           ].map(([val, label]) => (
// //             <div key={label} className="bg-card border border-border rounded-lg p-6 text-center shadow-sm">
// //               <div className="text-4xl font-bold text-primary mb-2">{val}</div>
// //               <div className="text-sm text-muted-foreground font-medium">{label}</div>
// //             </div>
// //           ))}
// //         </div>
// //       </section>

// //       {/* Timeline */}
// //       <section className="container max-w-[1200px] mx-auto py-8">
// //         <h2 className="text-3xl font-bold text-center mb-8">Timeline</h2>
// //         <div className="relative">
// //           <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2"></div>
// //           <ol className="grid md:grid-cols-5 gap-4">
// //             {["Registration", "Team Reveal", "League Start", "Knockouts", "Grand Finale"].map((stage, i) => (
// //               <li key={stage} className="bg-card border border-border rounded-lg p-4 text-center shadow-sm relative">
// //                 <div className="hidden md:block absolute -top-2 left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 border-2 border-background"></div>
// //                 <span className="text-sm text-muted-foreground">Step {i + 1}</span>
// //                 <div className="font-medium text-foreground">{stage}</div>
// //               </li>
// //             ))}
// //           </ol>
// //         </div>
// //       </section>

// //       {/* Partners */}
// //       <section className="container max-w-[1200px] mx-auto py-12">
// //         <h2 className="text-3xl font-bold text-center mb-8">Partners</h2>
// //         <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
// //           {['StartupTN', 'Aakam360', 'Aakam Shine', 'Sponsors', 'Institutional Partners', 'Tech Partners'].map((p) => (
// //             <div key={p} className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
// //               <div className="text-muted-foreground font-medium">{p}</div>
// //             </div>
// //           ))}
// //         </div>
// //       </section>
// //       {/* </section> */}
// //     </main>
// //   );
// // };

// // export default Index;

// import { Link } from "react-router-dom";
// import SEO from "@/components/seo/SEO";
// import logo from "@/assets/2.png";

// // Import your partner logos here. 
// // Note: It's best practice in React projects (like Vite or Create React App) 
// // to import images so the bundler can handle them.
// // Example: import startupTNLogo from "src/assets/1.png";
// // Then use the variable: logo: startupTNLogo

// const Index = () => {
//   // Create your partners array with names and logos
//   const partners = [
//     { name: "StartupTN", logo: "src/assets/brandLogo/White Horizonta.png" },
//     { name: "Aakam360", logo: "src/assets/brandLogo/aakam.png" },
//     { name: "Aakam Shine", logo: "src/assets/brandLogo/s.png" },
//     { name: "Sponsor One", logo: "src/assets/brandLogo/favicon.ico" },
//     // { name: "Institutional Partner", logo: "src/assets/1.png" },
//     // { name: "Tech Partner", logo: "src/assets/1.png" },
//   ];

//   return (
//     // UI/UX Note: The <main> tag now has a background color to ensure consistency 
//     // if any sections don't have their own specific background.
//     <main className="bg-background">
//       <SEO
//         title="Home"
//         description="TNGSS Cricket Central — schedule, teams, live scores, points, gallery, and registrations."
//         canonical="/"
//         jsonLd={{
//           "@context": "https://schema.org",
//           "@type": "Organization",
//           name: "TNGSS Startup premier League",
//           url: "/",
//         }}
//       />

//       {/* Hero Banner (Unchanged) */}
//       <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0">
//           <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background" />
//           <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20" />
//           <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
//           <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
//         </div>
//         <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
//         <div className="container max-w-[1200px] mx-auto relative z-10 text-center px-4">
//           <div className="max-w-4xl mx-auto">
//             <div className="mb-8 flex justify-center">
//               <img 
//                 src={logo} 
//                 alt="TNGSS Cricket Central Logo" 
//                 className="h-55 md:h-64 w-auto drop-shadow-2xl"
//               />
//             </div>
//             <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-foreground to-accent bg-clip-text text-transparent leading-tight">
//               Startup Cricket League
//             </h1>
//             <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
//               First-ever Roadshow Series of the Tamil Nadu Global Startup Summit
//             </p>
//             <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
//               Where Innovation Meets Cricket Excellence
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//               <Link 
//                 to="/register" 
//                 className="group inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:from-primary/90 hover:to-primary/70 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-primary/25 hover:scale-105"
//               >
//                 <span>Register Here</span>
//                 <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                 </svg>
//               </Link>
//             </div>
//           </div>
//         </div>
//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//           <svg className="w-6 h-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
//           </svg>
//         </div>
//       </section>

//       {/* --- UI/UX REDESIGN STARTS HERE --- */}

//       {/* About the League */}
//       {/* UI/UX Note: Using a subtle secondary background to separate this section from the hero.
//           The heading uses the 'accent' color to pop, and the main text is on a high-contrast card. */}
//       <section className="bg-secondary/20 py-16 md:py-24">
//         <div className="container max-w-[1200px] mx-auto">
//           <div className="max-w-4xl mx-auto text-center">
//             <h2 className="text-3xl md:text-4xl font-bold mb-8 text-accent">About the League</h2>
//             <div className="bg-card border border-border rounded-lg p-8 shadow-lg text-left">
//               <p className="text-lg text-muted-foreground leading-relaxed">
//                 The TNGSS Startup Cricket League is an exciting initiative by the Tamil Nadu Global Startup Summit (TNGSS), combining the spirit of innovation with the passion of cricket. This statewide league is exclusively for <strong className="text-primary font-semibold">startup founders, co-founders, early team members, and ecosystem professionals.</strong>
//               </p>
//               <p className="text-lg text-muted-foreground leading-relaxed mt-6">
//                 Our mission is to foster networking, collaboration, and mentorship within the startup community through the universal love for the sport.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Featured Live Match */}
//       {/* UI/UX Note: Returning to the default background for visual rhythm. The card has a prominent
//           primary-colored border and shadow to signify importance and action. */}
//       {/* <section className="container max-w-[1200px] mx-auto py-12">
//         <div className="bg-card border-2 border-primary/50 rounded-lg p-6 shadow-xl shadow-primary/10">
//           <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
//             <div className="flex-1 text-center md:text-left">
//               <h3 className="text-xl font-semibold text-foreground mb-2">Featured Live Match</h3>
//               <div className="space-y-2">
//                 <p className="text-lg font-medium text-foreground">Innovators XI vs Tech Titans</p>
//                 <p className="text-sm font-bold uppercase tracking-wider text-destructive animate-pulse">Live Now</p>
//                 <p className="text-4xl font-bold text-primary">135/4 <span className="text-2xl text-muted-foreground">(17.3)</span></p>
//               </div>
//             </div>
//             <div className="flex gap-3 justify-center">
//               {/* <Link to="/live" className="inline-flex px-6 py-3 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition-colors font-medium shadow-md hover:shadow-lg">Watch Live</Link> *
//               <Link to="/live" className="inline-flex px-6 py-3 rounded-md border border-border bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground transition-colors font-medium">Scorecard</Link>
//             </div>
//           </div>
//         </div>
//       </section> */}

//       {/* Quick Stats */}
//       {/* UI/UX Note: This section is designed to be high-energy and visually striking, using the main theme colors
//           for the card backgrounds. This makes the stats memorable and breaks the visual monotony. */}
//       <section className="bg-secondary/20 py-16 md:py-24">
//         <div className="container max-w-[1200px] mx-auto">
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
//             {[
//               { val: "10", label: "Teams", bgColor: "bg-primary", textColor: "text-primary-foreground" },
//               { val: "15+", label: "Matches", bgColor: "bg-accent", textColor: "text-accent-foreground" },
//               { val: "1", label: "Grand Finale", bgColor: "bg-secondary", textColor: "text-secondary-foreground" },
//             ].map(({ val, label, bgColor, textColor }) => (
//               <div key={label} className={`${bgColor} ${textColor} rounded-lg p-8 text-center shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300`}>
//                 <div className="text-5xl font-bold mb-2">{val}</div>
//                 <div className="text-base font-semibold uppercase tracking-wider">{label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Timeline */}
//       {/* UI/UX Note: A clean, minimalist approach to the timeline. The primary color is used to guide the user's
//           eye along the path, with the accent color highlighting each specific step or milestone. */}
//       <section className="container max-w-[1200px] mx-auto py-16 md:py-24">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">The Journey to the Finals</h2>
//         <div className="relative">
//           <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-primary/20 -translate-y-1/2"></div>
//           <ol className="grid md:grid-cols-5 gap-8">
//             {["Registration", "Team Reveal", "League Start", "Knockouts", "Grand Finale"].map((stage, i) => (
//               <li key={stage} className="bg-card border border-border rounded-lg p-4 text-center shadow-lg relative transition-transform hover:-translate-y-2">
//                 <div className="hidden md:block absolute -top-3 left-1/2 w-6 h-6 bg-accent rounded-full -translate-x-1/2 border-4 border-background ring-2 ring-accent"></div>
//                 <div className="font-bold text-primary mb-1">Step {i + 1}</div>
//                 <div className="font-medium text-foreground">{stage}</div>
//               </li>
//             ))}
//           </ol>
//         </div>
//       </section>

//       {/* Partners */}
//       {/* UI/UX Note: This section provides a calm, professional end to the page. The gradient background adds
//           depth, while the grayscale logos ensure a clean, uniform look. */}
//       <section className="bg-gradient-to-t from-secondary/30 to-background py-16 md:py-24">
//         <div className="container max-w-[1200px] mx-auto">
//           <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
//             Our Esteemed Partners
//           </h2>
//           <div 
//             className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]"
//           >
//             <div className="flex w-max animate-scroll-x space-x-16 md:space-x-24">
//               {[...partners, ...partners].map((partner, index) => (
//                 <div key={index} className="flex-shrink-0 flex items-center justify-center">
//                   <img
//                     src={partner.logo}
//                     alt={`${partner.name} Logo`}
//                     className="h-12 md:h-16 w-auto object-contain  opacity-100 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Index;

import { Link } from "react-router-dom";
import SEO from "@/components/seo/SEO";
import logo from "@/assets/2.png";
import { useState } from "react";

const Index = () => {
  const [showPopup, setShowPopup] = useState(false);

  const partners = [
    { name: "StartupTN", logo: "/brandLogo/White Horizonta.png" },
    { name: "Aakam360", logo: "/brandLogo/aakam.png" },
    { name: "Aakam Shine", logo: "/brandLogo/s.png" },
    { name: "Sponsor One", logo: "/brandLogo/favicon.ico" },
  ];

  const handleRegisterClick = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  return (
    <main className="bg-background">
      <SEO
        title="Home"
        description="TNGSS Cricket Central — schedule, teams, live scores, points, gallery, and registrations."
        canonical="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "TNGSS Startup premier League",
          url: "/",
        }}
      />

      {/* Hero Banner */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background" />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="container max-w-[1200px] mx-auto relative z-10 text-center px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 flex justify-center">
              <img
                src={logo}
                alt="TNGSS Cricket Central Logo"
                className="h-72 md:h-96 w-auto drop-shadow-2xl"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-foreground to-accent bg-clip-text text-transparent leading-tight">
              Startup Cricket League
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
              First-ever Roadshow Series of the Tamil Nadu Global Startup Summit
            </p>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
              Where Innovation Meets Cricket Excellence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/register"
                // onClick={handleRegisterClick}
                className="group inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:from-primary/90 hover:to-primary/70 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-primary/25 hover:scale-105"
              >
                <span>Register Here</span>
                <svg
                  className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-muted-foreground"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div> */}
      </section>

      {/* About the League */}
      <section className="bg-secondary/20 py-16 md:py-24">
        <div className="container max-w-[1200px] mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-accent">
              About the League
            </h2>
            <div className="bg-card border border-border rounded-lg p-8 shadow-lg text-left">
              <p className="text-lg text-muted-foreground leading-relaxed">
                The TNGSS Startup Cricket League is an exciting initiative by
                the Tamil Nadu Global Startup Summit (TNGSS), combining the
                spirit of innovation with the passion of cricket. This statewide
                league is exclusively for{" "}
                <strong className="text-primary font-semibold">
                  startup founders, co-founders, early team members, and
                  ecosystem professionals.
                </strong>
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                Our mission is to foster networking, collaboration, and
                mentorship within the startup community through the universal
                love for the sport.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-secondary/20 py-16 md:py-24">
        <div className="container max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                val: "10",
                label: "Teams",
                bgColor: "bg-primary",
                textColor: "text-primary-foreground",
              },
              {
                val: "15+",
                label: "Matches",
                bgColor: "bg-accent",
                textColor: "text-accent-foreground",
              },
              {
                val: "1",
                label: "Grand Finale",
                bgColor: "bg-secondary",
                textColor: "text-secondary-foreground",
              },
            ].map(({ val, label, bgColor, textColor }) => (
              <div
                key={label}
                className={`${bgColor} ${textColor} rounded-lg p-8 text-center shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300`}
              >
                <div className="text-5xl font-bold mb-2">{val}</div>
                <div className="text-base font-semibold uppercase tracking-wider">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Description */}
      <section className="bg-secondary/10 py-16 md:py-24">
        <div className="container max-w-[1200px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            Startup Cricket League
          </h2>

          <div className="bg-card border border-border rounded-lg p-8 shadow-lg">
            <ul className="list-disc list-inside text-lg text-muted-foreground space-y-3">
              <li>
                This is a{" "}
                <strong>statewide cricket league designed exclusively for startups</strong>{" "}
                across Tamil Nadu.
              </li>
              <li>
                Teams will be <strong>formed based on their respective StartupTN Regional Hubs</strong>,
                encouraging collaboration and regional representation.
              </li>
              <li>
                In case a Regional Hub has fewer participants,{" "}
                <strong>excess players from other hubs will be shuffled</strong> to balance
                the teams.
              </li>
              <li>
                All matches will follow <strong>standard cricket rules</strong> and will be
                played in a <strong>knockout format</strong>.
              </li>
              <li>
                The event aims to <strong>strengthen bonding, build networks</strong> and{" "}
                <strong>celebrate teamwork & innovation</strong> in the startup community.
              </li>
              <li>
                This event is not only for the players all startups across Tamil Nadu can register, network and cheer for their Regional Hub teams while engaging with the ecosystem.
              </li>
            </ul>

            {/* Table */}
            <div className="overflow-x-auto mt-8">
              <table className="min-w-full border border-border rounded-lg text-left">
                <thead className="bg-secondary text-foreground">
                  <tr>
                    <th className="p-3 border">S. No</th>
                    <th className="p-3 border">Hub Name</th>
                    <th className="p-3 border">Districts Covered</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  {[
                    {
                      no: 1,
                      hub: "Chennai Metro Hub",
                      districts: "Chengalpattu, Chennai, Kancheepuram, Tiruvallur",
                    },
                    {
                      no: 2,
                      hub: "Cuddalore Regional Hub",
                      districts: "Cuddalore, Kallakurichi, Tiruvannamalai, Villupuram",
                    },
                    {
                      no: 3,
                      hub: "Hosur Regional Hub",
                      districts: "Dharmapuri, Krishnagiri, Ranipet, Tirupattur, Vellore",
                    },
                    {
                      no: 4,
                      hub: "Salem Regional Hub",
                      districts: "Namakkal, Salem",
                    },
                    {
                      no: 5,
                      hub: "Erode Regional Hub",
                      districts: "Erode, Tiruppur",
                    },
                    {
                      no: 6,
                      hub: "Coimbatore Regional Hub",
                      districts: "Coimbatore, The Nilgiris",
                    },
                    {
                      no: 7,
                      hub: "Thanjavur Regional Hub",
                      districts:
                        "Mayiladuthurai, Nagapattinam, Pudukkottai, Thanjavur, Thiruvarur",
                    },
                    {
                      no: 8,
                      hub: "Tiruchirappalli Satellite Hub",
                      districts:
                        "Ariyalur, Karur, Perambalur, Tiruchirappalli",
                    },
                    {
                      no: 9,
                      hub: "Madurai Regional Hub",
                      districts:
                        "Dindigul, Madurai, Sivagangai, Theni, Virudhunagar",
                    },
                    {
                      no: 10,
                      hub: "Tirunelveli Regional Hub",
                      districts:
                        "Kanniyakumari, Ramanathapuram, Tenkasi, Thoothukudi, Tirunelveli",
                    },
                  ].map(({ no, hub, districts }) => (
                    <tr key={no} className="hover:bg-secondary/30 transition">
                      <td className="p-3 border">{no}</td>
                      <td className="p-3 border">{hub}</td>
                      <td className="p-3 border">{districts}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="container max-w-[1200px] mx-auto py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
          The Journey to the Finals
        </h2>
        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-primary/20 -translate-y-1/2"></div>
          <ol className="grid md:grid-cols-5 gap-8">
            {[
              "Registration",
              "Team Reveal",
              "League Start",
              "Knockouts",
              "Grand Finale",
            ].map((stage, i) => (
              <li
                key={stage}
                className="bg-card border border-border rounded-lg p-4 text-center shadow-lg relative transition-transform hover:-translate-y-2"
              >
                <div className="hidden md:block absolute -top-3 left-1/2 w-6 h-6 bg-accent rounded-full -translate-x-1/2 border-4 border-background ring-2 ring-accent"></div>
                <div className="font-bold text-primary mb-1">Step {i + 1}</div>
                <div className="font-medium text-foreground">{stage}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Partners */}
      <section className="bg-gradient-to-t from-secondary/30 to-background py-16 md:py-24">
        <div className="container max-w-[1200px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Our Esteemed Partners
          </h2>
          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <div className="flex w-max animate-scroll-x space-x-16 md:space-x-24">
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex items-center justify-center"
                >
                  <img
                    src={partner.logo}
                    alt={`${partner.name} Logo`}
                    className="h-12 md:h-16 w-auto object-contain opacity-100 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full text-center">
            <h2 className="text-lg text-black font-bold mb-2">Stay Tuned!</h2>
            <p className="mb-4 text-black">
              The application will be open on{" "}
              <strong>18th Aug</strong>. Stay tuned for updates.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="px-4 py-2 rounded bg-primary text-white hover:bg-primary/90 transition"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Index;
