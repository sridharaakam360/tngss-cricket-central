import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const StartupCricketLeagueLaunch = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState('');

  // Hero Section Data with Visual Suggestions
  const heroData = {
    badge: "GRAND LAUNCH",
    title: "Startup Cricket League (SCL)",
    subtitle: "The official first-ever roadshow for Tamil Nadu Global Startup Summit (TNGSS) 2025",
    bannerImage: "/assets/hero-cricket.jpg",
    overlayElements: {
      logo: "/assets/2.png",
      eventDate: "August 14, 2025",
      venue: "SSEI, Salem"
    }
  };

  // Event Introduction with Visual Suggestions
  const introSection = {
    heading: "Celebrating Innovation with Sportsmanship",
    content: "The Startup Cricket League (SCL) kicked off in style on August 14, 2025, at Sri Shanmugha Educational Institutions, Salem. This unique initiative, as the first-ever roadshow for TNGSS 2025, brought together startups, entrepreneurs, students, and ecosystem enablers under one roof to celebrate collaboration, networking, and innovation – all through the unifying spirit of cricket.",
    montageImage: "/events/DSC08043.JPG"
  };

  // Event Flow as Storyboard with Visual Suggestions
  const eventFlow = [
    {
      id: "3.1",
      title: "Welcoming the Guest",
      description: "Warm reception for Thiru. Sivarajah Ramanathan, MD & CEO of StartupTN, and the StartupTN team at SSEI campus.",
      image: "/events/DSC08014.JPG",
    },
    {
      id: "3.2", 
      title: "Welcome Address",
      description: "Ms. Ponni Velmurugan, Associate VP, StartupTN welcomed 50+ startups and 100+ entrepreneurs from Salem, Namakkal, Erode, and Tiruppur, setting the stage for SCL as a first-of-its-kind roadshow for TNGSS 2025.",
      image: "/events/DSC08033.JPG",
    },
    {
      id: "3.3",
      title: "Presidential Address", 
      description: "Mr. Thirumoorthy Arumugam, Founder & CEO of Aakam360 & Executive Director, SSEI, shared the joint vision of SSEI, Aakam360, and Aakam Shine in building a rural startup hub for Tier 2 & 3 regions. He also explained the event flow of SCL.",
      image: "/events/DSC08039.JPG",
    },
    {
      id: "3.4",
      title: "Grand Launch of SCL",
      description: "The official launch moment – Thiru. Sivarajah Ramanathan unveiled the Startup Cricket League as the first-ever TNGSS 2025 roadshow, alongside Mr. Thirumoorthy.",
      image: "/events/DSC08043.JPG",
    },
    {
      id: "3.5",
      title: "Jersey Unveiling",
      description: "The official jersey of SCL was unveiled by Thiru. Sivarajah Ramanathan in the presence of Mr. Thirumoorthy Arumugam.",
      image: "/events/DSC08051.JPG",
    },
    {
      id: "3.6",
      title: "Chief Guest Address",
      description: "In his keynote, Thiru. Sivarajah Ramanathan emphasized the goals of TNGSS 2025 and highlighted why such roadshows in Tier 2 & Tier 3 regions are critical to democratize startup growth. He expressed his joy in launching SCL from Salem.",
      image: "/events/DSC08140.JPG",
    },
    {
      id: "3.7",
      title: "Vote of Thanks",
      description: "Mr. Gurushankar Selvam, Project Lead, closed the ceremony, recalling how SCL began as an idea and has now become a live reality.",
      image: "/events/DSC01003.JPG",
    }
  ];

  // Inaugural Game Section with Visual Suggestions
  const inauguralGame = {
    heading: "Cricket Meets Startups",
    description: "The inaugural cricket match was the highlight of the celebrations, played between two spirited teams – one comprising startup founders and the other led by Thiru. Sivarajah Ramanathan with the StartupTN team. The match, filled with fun, energy, and sportsmanship, reflected the very essence of collaboration and competition in the startup journey.",
    highlights: [
      "Friendly yet competitive inaugural match",
      "Special bat signed by Mr. Natarajan (Indian cricketer) and later signed by the Chief Guest",
      "Memento bat presented to Chief Guest; memento ball presented to StartupTN team", 
      "Concluded with a grand group photo capturing the unity of startups & leaders"
    ],
    visualSuggestions: [
      {
        type: "Match action shots",
        description: "bowling, batting, cheering",
        image: "/events/DSC01174.JPG"
      },
      {
        type: "Bat-signing moment",
        description: "Special ceremony with signatures",
        image: "/events/DSC08413.JPG"
      },
      {
        type: "Group photo",
        description: "Unity of startups & leaders",
        image: "/events/DSC08400.JPG"
      }
    ]
  };

  // Event Highlights for Carousel/Grid
  const eventHighlights = [
    {
      title: "Inspiring Addresses",
      description: "Keynote speeches from industry leaders",
      image: "/events/DSC08021.JPG"
    },
    {
      title: "Jersey Unveiling",
      description: "Official SCL jersey reveal ceremony",
      image: "/events/DSC08051.JPG"
    },
    {
      title: "Inaugural Cricket Match", 
      description: "Startup founders vs StartupTN team",
      image: "/events/DSC08276.JPG"
    },
    {
      title: "Special Bat Signing",
      description: "Commemorative bat ceremony",
      image: "/events/DSC08413.JPG"
    },
    {
      title: "Group Photo Memories",
      description: "Capturing the unity moment",
      image: "/events/DSC08400.JPG"
    }
  ];

  // Gallery with Categories and Visual Suggestions
  const galleryImages = [
    // Launch Ceremony
    { src: "/events/DSC08043.JPG", alt: "Launch ceremony stage setup", category: "Launch Ceremony" },
    // { src: "https://placehold.co/600x400/27272a/fafafa?text=Ribbon+Cutting", alt: "Official ribbon cutting moment", category: "Launch Ceremony" },
    // { src: "https://placehold.co/600x400/52525b/fafafa?text=Logo+Unveiling", alt: "SCL logo unveiling", category: "Launch Ceremony" },
    { src: "/events/P1236277.JPG", alt: "Audience applauding", category: "Launch Ceremony" },
    
    // Jersey Reveal
    { src: "/events/DSC08049.JPG", alt: "Official jersey display", category: "Jersey Reveal" },
    // { src: "/events/DSC013.JPG", alt: "Jersey handover ceremony", category: "Jersey Reveal" },
    { src: "/events/DSC01113.JPG", alt: "Close-up of SCL jersey", category: "Jersey Reveal" },
    
    // Guest Speeches
    { src: "/events/DSC08140.JPG", alt: "Chief guest delivering keynote", category: "Guest Speeches" },
    { src: "/events/DSC08033.JPG", alt: "Ms. Ponni's welcome address", category: "Guest Speeches" },
    // { src: "https://placehold.co/600x400/52525b/fafafa?text=Presidential+Speech", alt: "Presidential address moment", category: "Guest Speeches" },
    { src: "/events/DSC01002.JPG", alt: "Vote of thanks address", category: "Guest Speeches" },
    
    // Inaugural Match
    // { src: "https://placehold.co/600x400/a1a1aa/fafafa?text=Cricket+Pitch", alt: "Cricket pitch and teams", category: "Inaugural Match" },
    { src: "/events/DSC01170.JPG", alt: "Batting action shot", category: "Inaugural Match" },
    { src: "/events/DSC01094.JPG", alt: "Bowling delivery", category: "Inaugural Match" },
    { src: "/events/DSC08276.JPG", alt: "Team celebration", category: "Inaugural Match" },
    // { src: "https://placehold.co/600x400/18181b/fafafa?text=Spectators+Cheering", alt: "Spectators cheering", category: "Inaugural Match" },
    
    // Networking Moments
    // { src: "https://placehold.co/600x400/27272a/fafafa?text=Startup+Founders", alt: "Startup founders networking", category: "Networking Moments" },
    // { src: "https://placehold.co/600x400/52525b/fafafa?text=Business+Cards", alt: "Business card exchange", category: "Networking Moments" },
    // { src: "https://placehold.co/600x400/71717a/fafafa?text=Casual+Conversations", alt: "Casual networking conversations", category: "Networking Moments" },
    { src: "/events/P1236268.JPG", alt: "Group discussions", category: "Networking Moments" },
    { src: "/events/DSC08400.JPG", alt: "Final unity group photo", category: "Networking Moments" }
  ];

  // Guests & Dignitaries
  const guestsData = [
    {
      name: "Thiru. Sivarajah Ramanathan",
      title: "Mission Director & CEO, StartupTN", 
      image: "/events/Sivarajah.png",
      role: "Chief Guest"
    },
    {
      name: "Mr. Thirumoorthy Arumugam",
      title: "Founder & CEO, Aakam360 & Executive Director, SSEI",
      image: "/events/thirumoorthy.png"
    },
    {
      name: "Ms. Ponni Velmurugan", 
      title: "Associate VP, StartupTN",
      image: "/events/Ponni.jpg"
    },
    {
      name: "Mr. Gurushankar Selvam",
      title: "Project Lead, StartupTN", 
      image: "/events/guru1.JPG"
    }
  ];

  // Media & Press Coverage (placeholder for future implementation)
  const pressCoverage = [
    {
      title: "Regional Tamil Daily Coverage",
      description: "Front page coverage of SCL launch",
      image: "https://placehold.co/400x300/18181b/fafafa?text=Tamil+Newspaper+Clipping"
    },
    {
      title: "State-level Business Journal",
      description: "Startup ecosystem development feature",
      image: "https://placehold.co/400x300/27272a/fafafa?text=Business+Journal+Article"
    },
    {
      title: "Online News Portal",
      description: "Digital coverage and video highlights",
      image: "https://placehold.co/400x300/52525b/fafafa?text=Online+News+Portal"
    }
  ];

  // Lightbox Functions
  const openLightbox = (imageSrc) => {
    setLightboxImage(imageSrc);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxImage('');
  };

  return (
    <main className="bg-background text-foreground">
      
      {/* Hero Section with Banner Photo and Overlay */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background Banner Image */}
        <div className="absolute inset-0">
          <img 
            src={heroData.bannerImage} 
            alt="Chief Guest launching SCL"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20"></div>
        </div>
        
        {/* Content with Overlay Elements */}
        <div className="container max-w-[1200px] mx-auto text-center relative z-10">
          <img
            src={heroData.overlayElements.logo}
            alt="SCL Logo"
            className="h-32 md:h-40 mx-auto mb-6"
          />
          <p className="text-primary font-semibold mb-2 text-white">{heroData.badge}</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            {heroData.title}
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8">
            {heroData.subtitle}
          </p>
          
          {/* Overlay Elements: Date and Venue */}
          <div className="text-white/90 text-center mt-8">
            <p className="font-semibold text-lg">{heroData.overlayElements.eventDate}</p>
            <p className="text-white/70">{heroData.overlayElements.venue}</p>
          </div>
        </div>
      </section>

      {/* Event Introduction with Montage Visual */}
      <section className="py-16 md:py-24">
        <div className="container max-w-[1200px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-accent">{introSection.heading}</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {introSection.content}
              </p>
            </div>
            <div className="relative">
              <img 
                src={introSection.montageImage} 
                alt="Event montage - audience, dignitaries, and stage"
                className="w-full h-80 object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold">
                Event Highlights
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Flow as Storyboard Timeline */}
      <section className="bg-secondary/20 py-16 md:py-24">
        <div className="container max-w-[1200px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">Event Flow</h2>
          <p className="text-center text-muted-foreground mb-12">Sectioned Timeline of the Launch Ceremony</p>
          
          <div className="space-y-12">
            {eventFlow.map((step, index) => (
              <div key={step.id} className={`flex flex-col lg:flex-row gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Image/Video Thumbnail */}
                <div className="lg:w-1/2 relative group cursor-pointer" onClick={() => openLightbox(step.image)}>
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-64 lg:h-80 object-cover rounded-lg shadow-lg group-hover:shadow-2xl transition-shadow duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                    <div className="bg-white/90 rounded-full p-3">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-1/2 bg-card border border-border rounded-lg p-8 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-2xl font-bold text-primary">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inaugural Game Section with Visual Suggestions */}
      <section className="py-16 md:py-24">
        <div className="container max-w-[1200px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-accent">{inauguralGame.heading}</h2>
          
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {inauguralGame.description}
            </p>
          </div>

          {/* Key Highlights */}
          <div className="grid md:grid-cols-1 gap-8 mb-12">
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Key Highlights</h3>
              <ul className="space-y-3">
                {inauguralGame.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary text-lg">•</span>
                    <span className="text-muted-foreground">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Event Highlights Carousel/Grid Section */}
      <section className="bg-secondary/20 py-16 md:py-24">
        <div className="container max-w-[1200px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-accent">Event Highlights</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {eventHighlights.map((highlight, index) => (
              <div key={index} className="bg-card rounded-lg shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className="relative">
                  <img 
                    src={highlight.image} 
                    alt={highlight.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-foreground mb-2">{highlight.title}</h3>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-[1200px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-accent">Gallery</h2>
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="rounded-lg overflow-hidden shadow-lg group relative cursor-pointer"
                onClick={() => openLightbox(image.src)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover aspect-video transition-transform duration-300 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                  <div className="text-center">
                    <p className="text-white font-bold text-sm mb-1">{image.category}</p>
                    <p className="text-white/80 text-xs">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media & Press Coverage Section */}
      {/* <section className="bg-secondary/20 py-16 md:py-24">
        <div className="container max-w-[1200px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-accent">In the News</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pressCoverage.map((press, index) => (
              <div key={index} className="bg-card rounded-lg shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl">
                <img 
                  src={press.image} 
                  alt={press.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2">{press.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{press.description}</p>
                  <button className="text-primary hover:text-primary/80 font-medium text-sm">
                    Read Full Coverage →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Guests & Dignitaries Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-[1200px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Guests & Dignitaries</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {guestsData.map((guest, index) => (
              <div key={index} className="bg-card rounded-lg shadow-lg overflow-hidden text-center group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className="relative">
                  <img 
                    src={guest.image} 
                    alt={`Photo of ${guest.name}`} 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                  {guest.role && (
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                      {guest.role}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-1">{guest.name}</h3>
                  <p className="text-sm text-primary">{guest.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-secondary/20 py-16 md:py-24">
        <div className="container max-w-[1200px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-accent">What's Next?</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            The journey of the Startup Cricket League (SCL) has just begun. Stay tuned for upcoming matches, roadshows, and the grand finale leading to TNGSS 2025.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/register"
            className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Register Your Startup
          </Link>
            {/* <button className="bg-transparent border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors">
              View Upcoming Matches
            </button> */}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-full">
            <img 
              src={lightboxImage} 
              alt="Gallery image" 
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button 
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 text-3xl bg-black/50 rounded-full w-12 h-12 flex items-center justify-center"
            >
              ×
            </button>
          </div>
        </div>
      )}

    </main>
  );
};

export default StartupCricketLeagueLaunch;