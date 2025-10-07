import Header from "@/components/Header/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Card from "@/components/Card";
import Booking from "@/components/Booking";
import Amenities from "@/components/amenities";
import Map from "@/components/Map";


export default function Home() {
  
  const showcase= [
    {title: "Art Deco Elegance", description: "A beautiful tribute to 1920s architecture with intricate details and timeless design that transports you to an era of sophistication", image: "/Claridge_inside_look.jpg"
    },
    {
      title: "Non-Gaming Sanctuary", description: "Experience peace and tranquility in our sophisticated atmosphere no casino floor pressure, just pure relaxation", image: "/claridge_relax.jpg"
    },
    {
      title: "Private Beachfront Rooms", description: "Stay cozy and unwind in our private beachfront rooms with views of the ocean and luxurious amenities", image: "/claridge_oceanview.png"
      },
  ]
  
  const Foodshowcase= [
    {title: "VÜE Rooftop Bar", description: "Perched high above the city, VÜE offers panoramic, 360-degree views of the ocean, skyline, and the whole boardwalk hustle. Catching the sunset here with a cocktail in hand? Pure vacation goals.", image: "/vue_pic.png"
    },
    {
      title: "Twenties Restaurant", description: "Living up to the hotel's vintage glamour, the Twenties Restaurant provides an exceptional dining experience. It's refined but friendly, focusing on great food in a setting that channels the hotel's classic, elegant past.", image: "/twenties_pic.png"
    },
    {
      title: "LEAVANDER'S 22 SOUTHERN CUISINE", description: "Living up to its charming, private setting, this catering option provides an exceptional Southern dining experience. It's classic yet modern, focusing on fresh, curated food in a setting that celebrates rich culinary traditions with contemporary elegance.", image: "/22_pic.png"
      },
  ]
  

  return (
    
    <div className="font-sans min-h-screen flex flex-col items-center bg-background text-foreground">
      <Header />
      <Hero />

      <main className="mt-12 w-full">
        
        <div className="relative min-h-screen w-full max-w-5xl p-4 sm:p-10 mx-auto align-middle flex flex-col justify-center mb-16">
        
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl font-serif mb-4">The Skyscraper by the Sea</h1>
              <p className="text-neutral-600 dark:text-neutral-300 mb-6">
                Forget the same old sprawling casino complexes. If you're looking for a spot that's got history, serious class, and the absolute best location without being swallowed by the slots, welcome to The Claridge Hotel Atlantic City.
              </p>

              <div className="flex gap-3">
                <a className="btn-primary" href="#">
                  Book a room
                </a>
                <a className="btn-outline" href="#">
                  Learn more
                </a>
              </div>
            </div>

            <div className="relative pb-[56.25%] h-0">
                <iframe 
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://video.wixstatic.com/video/e38f27_2076efdf040a43ce950881d59280444d/720p/mp4/file.mp4" 
                  title="Claridge Hotel Promotional Video" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen>
                </iframe>
            </div>
           </section> 

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
              {/* --- Cards --- */}
              {showcase.map((item) => (
                <Card
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                />
              ))}
            </div>
          </div>

          <div className="w-full bg-stone-200 p-4 sm:p-10 py-16 justify-center flex">
            {/* ====== INTRO SECTION: 2-COLUMN LAYOUT ====== */}
            <section className="max-w-5xl my-16 grid grid-cols-1 items-center gap-5 md:grid-cols-2">

              {/* --- Left Column: Text Content --- */}
              <div>
                <h1 className="mb-6 font-serif text-neutral-950 text-4xl">
                  A Piece of AC History
                </h1>
                <p className="mb-4 text-neutral-950">
                  When you step into The Claridge, you're not just walking into a lobby; you're walking into a legacy. Built back in the roaring 1920s, this place has hosted presidents, movie stars, and maybe even a few legends from your favorite historical dramas.
                </p>
                <p className="mb-4 text-neutral-950">
                  It's known as the "Skyscraper by the Sea," and it was the place to be the most exclusive non-casino resort in town. Every detail, from the stunning architecture to the high ceilings, has a story.
                </p>
                <p className="mb-4 text-neutral-950">
                  Think Great Gatsby glamour meets modern, chill luxury. While competitors fight to be the newest, The Claridge gracefully leans into being the best kind of historic luxury.
                </p>
              </div>

              {/* --- Right Column: Video Player (16:9 Aspect Ratio) --- */}
              <div className="relative h-0 w-full overflow-hidden rounded-lg pb-[75.25%]">
                <img src="/Claridge_Atlantic_City_(Night).JPG" alt="A piture of the Claridge hotel at night"/>
              </div>
            </section>   
          </div>
          
          <div className="mt-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <section className="my-16 md:my-24">
              
              <div className="text-center">
                <h1 className="text-3xl sm:text-4xl font-serif mb-10">Food &amp; Drinks That Shine</h1>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 mt-8">
                {Foodshowcase.map((item) => (
                  <Card
                    key={item.title}
                    title={item.title}
                    description={item.description}
                    image={item.image}
                  />
                ))}
              </div>
            </section>
          </div>

          <Amenities />
          <Map />
          <Booking />
        </main>
      <Footer />
    </div>
  );
}
