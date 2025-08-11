// import SEO from "@/components/seo/SEO";

// const EventLaunch = () => {
//   const jsonLd = {
//     "@context": "https://schema.org",
//     "@type": "SportsEvent",
//     name: "TNGSS Startup Cricket League - Grand Launch",
//     startDate: "2025-08-12T10:00:00+05:30",
//     location: {
//       "@type": "Place",
//       name: "Sri Shanmugha Educational Institutions",
//       address: "Sankari, Salem, Tamil Nadu, India",
//     },
//     eventStatus: "EventScheduled",
//     sport: "Cricket",
//   };

//   return (
//     <main>
//       <SEO
//         title="Event Launch - TNGSS Startup Cricket League"
//         description="Join us for the grand launch of Tamil Nadu's first-ever startup-inclusive statewide cricket league. August 12, 2025 at Sri Shanmugha Educational Institutions, Sankari, Salem."
//         canonical="/event-launch"
//         jsonLd={jsonLd}
//       />

//       {/* Header */}
//       <section className="container max-w-[1200px] mx-auto py-12">
//         <div className="text-center">
//           <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
//             TNGSS Startup Cricket League – Grand Launch
//           </h1>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//             Kickstarting Tamil Nadu's First-Ever Startup-Inclusive Statewide Cricket League!
//           </p>
//         </div>
//       </section>

//       {/* Launch Details */}
//       <section className="container max-w-[1200px] mx-auto py-8">
//         <div className="grid md:grid-cols-2 gap-8">
//           <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
//             <h2 className="text-2xl font-semibold mb-6 text-primary">Launch Details</h2>
//             <div className="space-y-4">
//               <div>
//                 <h3 className="font-semibold text-foreground mb-2">Launch Date</h3>
//                 <p className="text-lg text-muted-foreground">August 12, 2025</p>
//               </div>
//               <div>
//                 <h3 className="font-semibold text-foreground mb-2">Venue</h3>
//                 <p className="text-lg text-muted-foreground">Sri Shanmugha Educational Institutions, Sankari, Salem</p>
//               </div>
//             </div>
//           </div>

//           {/* Chief Guest */}
//           <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
//             <h2 className="text-2xl font-semibold mb-6 text-primary">Chief Guest</h2>
//             <div className="space-y-4">
//               <div>
//                 <h3 className="font-semibold text-foreground mb-2">Thiru. Neeraj Mittal, IAS</h3>
//                 <p className="text-muted-foreground">Additional Chief Secretary, Department of MSME, Govt. of TN</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Guests */}
//       <section className="container max-w-[1200px] mx-auto py-8">
//         <h2 className="text-3xl font-bold text-center mb-8">Distinguished Guests</h2>
//         <div className="grid md:grid-cols-2 gap-8">
//           <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
//             <h3 className="text-xl font-semibold mb-4 text-primary">Guest of Honour</h3>
//             <div>
//               <h4 className="font-semibold text-foreground mb-2">Dr. Sudha Seshayyan</h4>
//               <p className="text-muted-foreground">Former VC, The Tamil Nadu Dr. MGR Medical University</p>
//             </div>
//           </div>
//           <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
//             <h3 className="text-xl font-semibold mb-4 text-primary">Special Guests</h3>
//             <ul className="space-y-2 text-muted-foreground">
//               <li>• StartupTN CEO</li>
//               <li>• College Management</li>
//               <li>• Investor Delegates</li>
//               <li>• Startup Founders</li>
//             </ul>
//           </div>
//         </div>
//       </section>

//       {/* Launch Highlights */}
//       <section className="container max-w-[1200px] mx-auto py-8">
//         <h2 className="text-3xl font-bold text-center mb-8">Launch Highlights</h2>
//         <div className="grid md:grid-cols-3 gap-6">
//           {[
//             {
//               title: "Official Trophy Reveal",
//               description: "Witness the unveiling of the prestigious TNGSS Startup Cricket League trophy"
//             },
//             {
//               title: "Team Jersey Unveiling",
//               description: "Get a first look at the official team jerseys and merchandise"
//             },
//             {
//               title: "Startup-Founder Cricket Showcase",
//               description: "Watch startup founders showcase their cricket skills in a friendly match"
//             }
//           ].map((highlight) => (
//             <div key={highlight.title} className="bg-card border border-border rounded-lg p-6 shadow-sm text-center">
//               <h3 className="text-xl font-semibold mb-3 text-primary">{highlight.title}</h3>
//               <p className="text-muted-foreground">{highlight.description}</p>
//             </div>
//           ))}
//         </div>
//       </section>


//       {/* Social Links */}
//       <section className="container max-w-[1200px] mx-auto py-8">
//         <div className="text-center">
//           <h2 className="text-2xl font-bold mb-6">Follow Us On</h2>
//           <div className="flex justify-center gap-6">
//             {[
//               { name: "Instagram", icon: "📷", url: "#" },
//               { name: "LinkedIn", icon: "💼", url: "#" },
//               { name: "YouTube", icon: "▶️", url: "#" }
//             ].map((social) => (
//               <a
//                 key={social.name}
//                 href={social.url}
//                 className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition-colors font-medium"
//               >
//                 <span>{social.icon}</span>
//                 <span>{social.name}</span>
//               </a>
//             ))}
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default EventLaunch;



import React from 'react';
import SEO from "@/components/seo/SEO"; // Assuming you have an SEO component

// --- Component Start ---

const EventLaunch = () => {
  // JSON-LD for Rich Snippets in search results
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    name: "TNGSS Startup Cricket League - Grand Launch",
    startDate: "2025-08-12T10:00:00+05:30",
    endDate: "2025-08-12T14:00:00+05:30",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: "Sri Shanmugha Educational Institutions",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Tiruchengode - Sankari Main Road, Pullipalayam, Morur(Po)",
        addressLocality: "Sankari",
        addressRegion: "Salem",
        postalCode: "637304",
        addressCountry: "IN"
      },
    },
    image: [
      "https://placehold.co/1200x630/18181b/fafafa?text=TNGSS+Grand+Launch" // Replace with a compelling event banner image
    ],
    description: "The grand launch of Tamil Nadu's first-ever startup-inclusive statewide cricket league, featuring industry leaders, a trophy reveal, and a showcase match.",
    organizer: {
      "@type": "Organization",
      name: "TNGSS Startup Premier League",
      url: "https://yourwebsite.com" // Replace with your actual domain
    },
  };

  // --- Data for Page Sections ---
  const chiefGuest = {
    name: "Thiru. Neeraj Mittal, IAS",
    title: "Chief Secretary, Govt. of TN",
    imageUrl: "https://placehold.co/400x500/18181b/fafafa?text=Chief+Guest",
    description: "Honoring us with his presence to inaugurate the league and inspire the next generation of entrepreneurs."
  };

  const distinguishedGuests = [
    {
      name: "Dr. Sudha Seshayyan",
      title: "Former VC, Dr. MGR University",
      imageUrl: "https://placehold.co/400x400/27272a/fafafa?text=Guest",
    },
    {
      name: "StartupTN Leadership",
      title: "Driving TN's Startup Growth",
      imageUrl: "https://placehold.co/400x400/52525b/fafafa?text=Guest",
    },
    {
      name: "Esteemed Investors",
      title: "Fueling Innovation",
      imageUrl: "https://placehold.co/400x400/71717a/fafafa?text=Guest",
    },
    {
      name: "College Management",
      title: "Sri Shanmugha Institutions",
      imageUrl: "https://placehold.co/400x400/a1a1aa/fafafa?text=Guest",
    },
  ];

  const launchHighlights = [
    {
      title: "Official Trophy Reveal",
      description: "Witness the unveiling of the prestigious TNGSS Startup Cricket League trophy.",
      icon: "🏆"
    },
    {
      title: "Team Jersey Unveiling",
      description: "Get a first look at the official team jerseys and merchandise.",
      icon: "👕"
    },
    {
      title: "Founder Showcase Match",
      description: "Watch startup founders showcase their skills in a friendly exhibition match.",
      icon: "🏏"
    }
  ];

  const galleryImages = [
    { src: "https://placehold.co/600x400/18181b/fafafa?text=Trophy+Unveiling", alt: "Trophy Reveal" },
    { src: "https://placehold.co/600x400/27272a/fafafa?text=Jersey+Launch", alt: "Team Jersey Unveiling" },
    { src: "https://placehold.co/600x400/52525b/fafafa?text=Action+Shot", alt: "Action Shot from the showcase match" },
    { src: "https://placehold.co/600x400/71717a/fafafa?text=Dignitaries+on+Stage", alt: "Dignitaries on Stage" },
  ];


  return (
    <main className="bg-background text-foreground">
      <SEO
        title="Event Launch - TNGSS Startup Cricket League"
        description="Join us for the grand launch of Tamil Nadu's first-ever startup-inclusive statewide cricket league. August 12, 2025 at Sri Shanmugha Educational Institutions, Sankari, Salem."
        canonical="/event-launch"
        jsonLd={jsonLd}
      />

      {/* Hero Section */}
      <section className="relative bg-secondary/20 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10"></div>
        <div className="container max-w-[1200px] mx-auto text-center relative z-10">
          <p className="text-primary font-semibold mb-2">YOU'RE INVITED</p>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            The Grand Launch
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Kickstarting Tamil Nadu's First-Ever Startup-Inclusive Statewide Cricket League!
          </p>
        </div>
      </section>

      {/* Event Details & Chief Guest */}
      <section className="py-16 md:py-24">
        <div className="container max-w-[1200px] mx-auto grid md:grid-cols-5 gap-8 md:gap-12 items-center">
          {/* Launch Details */}
          <div className="md:col-span-2 bg-card border border-border rounded-lg p-8 shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-accent">Event Details</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-1 text-lg">Date & Time</h3>
                <p className="text-muted-foreground">August 12, 2025, from 10:00 AM onwards</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1 text-lg">Venue</h3>
                <p className="text-muted-foreground">Sri Shanmugha Educational Institutions, Sankari, Salem</p>
              </div>
            </div>
          </div>

          {/* Chief Guest */}
          <div className="md:col-span-3 bg-card border border-border rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
            <img src={chiefGuest.imageUrl} alt={`Photo of ${chiefGuest.name}`} className="w-full md:w-1/3 h-auto object-cover" />
            <div className="p-8 flex flex-col justify-center">
              <p className="text-sm font-semibold text-primary mb-1">CHIEF GUEST</p>
              <h3 className="text-2xl font-bold text-foreground mb-2">{chiefGuest.name}</h3>
              <p className="text-muted-foreground mb-4">{chiefGuest.title}</p>
              <p className="text-sm text-muted-foreground/80">{chiefGuest.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Distinguished Guests */}
      <section className="bg-secondary/20 py-16 md:py-24">
        <div className="container max-w-[1200px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-accent">In the Presence Of</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {distinguishedGuests.map((guest) => (
              <div key={guest.name} className="bg-card rounded-lg shadow-lg overflow-hidden text-center group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className="aspect-w-1 aspect-h-1">
                  <img src={guest.imageUrl} alt={`Photo of ${guest.name}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-1">{guest.name}</h3>
                  <p className="text-sm text-primary">{guest.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Launch Highlights */}
      <section className="py-16 md:py-24">
        <div className="container max-w-[1200px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Launch Highlights</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {launchHighlights.map((highlight) => (
              <div key={highlight.title} className="bg-card border border-border rounded-lg p-8 shadow-sm text-center transition-all hover:shadow-xl hover:border-primary/50">
                {/* <div className="text-4xl mb-4">{highlight.icon}</div> */}
                <h3 className="text-xl font-semibold mb-3 text-primary">{highlight.title}</h3>
                <p className="text-muted-foreground">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Gallery */}
      <section className="bg-secondary/20 py-16 md:py-24">
        <div className="container max-w-[1200px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-accent">Glimpses of the Action</h2>
          <div className="mb-12 rounded-lg overflow-hidden shadow-2xl border-4 border-primary/50">
            <div className="aspect-w-16 aspect-h-9 bg-black">
              <iframe 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your video ID
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full h-full">
              </iframe>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-lg group relative cursor-pointer">
                <img src={image.src} alt={image.alt} className="w-full h-full object-cover aspect-video transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                  <p className="text-white font-bold text-center text-sm">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
};

export default EventLaunch;

