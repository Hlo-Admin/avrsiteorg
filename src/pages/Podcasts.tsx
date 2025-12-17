import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import Spotify from "@/assets/spotify-button.png"
import Amazon from "@/assets/amazon-music-button.png"
import R1 from "@/assets/podcasts/r1.jpg"
import R2 from "@/assets/podcasts/r2.jpg"
import R3 from "@/assets/podcasts/r3.jpg"
import R4 from "@/assets/podcasts/r4.jpg"
import R5 from "@/assets/podcasts/r5.jpg"

import E1 from "@/assets/Episode_1.png"
import E2 from "@/assets/Episode_2.png"
import E3 from "@/assets/Episode_3.png"
import E4 from "@/assets/Episode_4.png"
import E5 from "@/assets/Episode_5.png"

const podcastSeries = [
  {
    id: 1,
    title: "Startup Stories: Realm by Rook",
    subtitle: "Founder journeys, startup lessons, scaling secrets.",
    link: "https://realmrook.com/podcasts",
    episodes: [
      {
        id: 1,
        title: "ELON: From Scarred Childhood to Becoming the 21st Century’s First Half-Trillionaire",
        description: "Dive into the raw, inspiring story behind a global icon, as we uncover the struggles, breakthroughs, and bold vision that transformed Musk from adversity into achievement.",
        cover: R1, // Add image URL if available
        duration: "42:17",
        spotifyUrl: "https://open.spotify.com/episode/6CmRqMRj2ZFqOhEoyszdjF?si=onCJsdE4TpWIzjxejG39VA",
        amazonUrl: "https://music.amazon.com/podcasts/68807c68-84aa-426b-82ae-e0e568eedce9/episodes/0c988299-2e96-49d2-b036-c70a61d46c99/startup-stories-aravindh-ravichandran-elon-from-scarred-childhood-to-becoming-the-21st-century%E2%80%99s-first-half-trillionaire"
      },
      {
        id: 2,
        title: "Ruling the Search: Google’s Journey From Dorm Room to Global AI Labs",
        description: "Larry Page and Sergey Brin’s journey begins in a Stanford dorm, with a wild dream and a scrappy computer built from cheap parts and LEGO. Their obsession with ranking trust on the web led to revolutionary breakthroughs like PageRank, a secret weapon that reshaped the internet.",
        cover: R2,
        duration: "38:05",
        spotifyUrl: "https://open.spotify.com/episode/5pKrEZq2UWOSem0keEXODm?si=95jQ7P_7T0eLX6SaBcXU5g",
        amazonUrl: "https://music.amazon.com/podcasts/68807c68-84aa-426b-82ae-e0e568eedce9/episodes/ad0cf557-0794-44c3-adfd-58d9537a92c5/startup-stories-aravindh-ravichandran-ruling-the-search-google%E2%80%99s-journey-from-dorm-room-to-global-ai-labs"
      },
      {
        id: 3,
        title: "Empire Built From Code: Microsoft’s Rise, Rivalries & Reinventions",
        description: "Bill Gates and Paul Allen’s code obsession started in Lakeside School, but their real genius lay in striking licensing deals with IBM that locked Microsoft into the DNA of every personal computer.",
        cover: R3,
        duration: "45:12",
        spotifyUrl: "https://open.spotify.com/episode/7FWWnw3uNMGjPA24D9PLkQ?si=_bgGV3QDQb-EnC4P_9s4bg",
        amazonUrl: "https://music.amazon.com/podcasts/68807c68-84aa-426b-82ae-e0e568eedce9/episodes/153f99be-07dd-4336-b2e3-0e03bee3fda6/startup-stories-aravindh-ravichandran-empire-built-from-code-microsoft%E2%80%99s-rise-rivalries-reinventions"
      },
      {
        id: 4,
        title: "Think Rebellion: Apple’s Eye-Opening Saga of Pirates, Betrayal & Reinvention",
        description: "Apple’s birth was pure rebellion: Steve Jobs, Steve Wozniak, and Ronald Wayne created a cult of pirates flying flags above secretive Mac teams, choosing attitude and relentless drive over polished résumés. Little-known stories reveal how Jobs lured Pepsi’s John Sculley, only to be betrayed and fired by him.",
        cover: R4,
        duration: "33:48",
        spotifyUrl: "https://open.spotify.com/episode/0YLY1OC5SRwOzFMwAknxL8?si=YaLqVtIYTEmTYMDu09nudA",
        amazonUrl: "https://music.amazon.com/podcasts/68807c68-84aa-426b-82ae-e0e568eedce9/episodes/b289923d-6061-42b7-8596-1181588910fe/startup-stories-aravindh-ravichandran-think-rebellion-apple%E2%80%99s-eye-opening-saga-of-pirates-betrayal-reinvention"
      },
      {
        id: 5,
        title: "Move Fast, Break All: Zuckerberg’s Secrets, Backstabs & Metaverse Bets",
        description: "From the dorm-room code for Facemash, Mark Zuckerberg’s early rise was marked by relentless ambition—and bruising betrayals. The Winkelvoss twins, co-founder Eduardo Saverin, and ex-partner Sean Parker all felt the bite of Zuckerberg’s strategic moves.",
        cover: R5,
        duration: "29:59",
        spotifyUrl: "https://open.spotify.com/episode/2hczREIL8MtIkDe1v3rAnE?si=xJV0wuCdQR2NmA8ye03XYg",
        amazonUrl: "https://music.amazon.com/podcasts/68807c68-84aa-426b-82ae-e0e568eedce9/episodes/76c84e0d-6565-4d54-a49a-b4c39ae5b058/startup-stories-aravindh-ravichandran-move-fast-break-all-zuckerberg%E2%80%99s-secrets-backstabs-metaverse-bets"
      }
    ] // Add actual episodes data when available
  },
  {
    id: 2,
    title: "Sports29 by AVR",
    subtitle: "Untold athlete stories, grit, and glory.",
    link: "https://sports29.aravindh.org",
    episodes: [
      {
        id: 1,
        title: "Michael Phelps: Deep Water, Deeper Battles – Mastering Victory and Vulnerability | Episode 1",
        description: "Dive into the longest-ever deep dive on Michael Phelps, the world’s most decorated Olympian, who transformed ADHD, anxiety, and crushing perfectionism into superhuman triumphs. Every record, rivalry, and comeback is dissected with true stories and technical mastery.",
        cover: E1, // Add image URL if available
        duration: "36:42",
        spotifyUrl: "https://open.spotify.com/episode/6k4klt79P2gm8eIVGbV4YE?si=6IPnEgwlQH22s_6ZJrNExw",
        amazonUrl: "https://music.amazon.com/podcasts/e60c2128-1271-4e3d-b4c2-32e5c55bce2a/episodes/4fdab896-531e-4183-be1a-c4f17df23f7b/sports29-by-avr-michael-phelps-deep-water-deeper-battles-%E2%80%93-mastering-victory-and-vulnerability-episode-1"
      },
      {
        id: 2,
        title: "Lionel Messi: Breaking Limits – The Rise of Football’s Little Giant | Episode 2",
        description: "Dive into the extraordinary story of Lionel Messi, the boy too small to succeed, who became the greatest footballer of all time. From battling growth hormone deficiency as a child in Rosario, Argentina, to becoming Barcelona’s legendary number ten, Messi’s story redefines resilience and hope.",
        cover: E2,
        duration: "41:08",
        spotifyUrl: "https://open.spotify.com/episode/2bb0w6lF2pq6uUyHSyyL9v?si=KjBksWO5S0G6eIMkyJE0NQ",
        amazonUrl: "https://music.amazon.com/podcasts/e60c2128-1271-4e3d-b4c2-32e5c55bce2a/episodes/b9764a7a-aaee-4f43-8dd8-3c73913de29e/sports29-by-avr-lionel-messi-breaking-limits-%E2%80%93-the-rise-of-football%E2%80%99s-little-giant-episode-2"
      },
      {
        id: 3,
        title: "Yusra Mardini: Swimming for Survival – The Refugee Olympian’s Longest Journey | Episode 3",
        description: "Travel with Yusra Mardini from war-torn Syria, through open seas and refugee camps, to competing under the Olympic flag. Her harrowing three hour swim, pulling a sinking boat to safety, echoes through everything she does, becoming UN ambassador and symbol of hope for displaced millions.",
        cover: E3,
        duration: "39:27",
        spotifyUrl: "https://open.spotify.com/episode/3TnuWYXRYOot4u4euS1Q4n?si=erJjlNGgQCaxbv1s_V8PmQ",
        amazonUrl: "https://music.amazon.com/podcasts/e60c2128-1271-4e3d-b4c2-32e5c55bce2a/episodes/37f7922b-e7b6-492a-95ec-49a40db767ef/sports29-by-avr-yusra-mardini-swimming-for-survival-%E2%80%93-the-refugee-olympian%E2%80%99s-longest-journey-episode-3"
      },
      {
        id: 4,
         title: "Michael Jordan: Cut from the Team – Building Basketball’s Greatest Legend | Episode 4",
        description: "Uncover Michael Jordan’s rise from being cut from his high school basketball team to becoming the NBA’s most revered legend. Relive the agony, obsession, and mental fire that fueled his championship runs, including iconic moments like the Flu Game, Father’s Day tears, and the Last Shot.",
        cover: E4,
        duration: "34:15",
        spotifyUrl: "https://open.spotify.com/episode/0Jo6L19YWodeTkegD5eeri?si=9Y7HPg5zS1qoNej3NUQ3sg",
        amazonUrl: "https://music.amazon.com/podcasts/e60c2128-1271-4e3d-b4c2-32e5c55bce2a/episodes/e2d669a2-f54e-4060-b910-97cf05ef85b1/sports29-by-avr-michael-jordan-cut-from-the-team-%E2%80%93-building-basketball%E2%80%99s-greatest-legend-episode-4"
      },
      {
        id: 5,
        title: "Cristiano Ronaldo: From Poverty’s Pitch to Football Immortality | Episode 5",
        description: "Discover the untold journey of Cristiano Ronaldo, the world’s most recognized football icon, who rose from poverty in Madeira to conquer every record and headline in football history. This episode dives deep into Ronaldo’s relentless work ethic, his battle against heart surgery at 15, and the audacity that turned jeers into cheers throughout his career.",
        cover: E5,
        duration: "30:50",
        spotifyUrl: "https://open.spotify.com/episode/5HTb8pyTcIfHbRGAfMNP4d?si=rXREW0JfQDul-sCJBKmCqA",
        amazonUrl: "https://music.amazon.com/podcasts/e60c2128-1271-4e3d-b4c2-32e5c55bce2a/episodes/828e35cf-6113-47c4-b50b-8b27c7cee1c0/sports29-by-avr-cristiano-ronaldo-from-poverty%E2%80%99s-pitch-to-football-immortality-episode-5"
      }
    ] // Add actual episodes data when available
  },
  
];

const Podcasts = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO 
        title="All Podcasts by Aravindh Ravichandran | Startup Stories, Sports29, AVR x Amrish"
        description="Explore three acclaimed podcast series by AVR: Startup Stories (founder journeys), Sports29 (athlete stories), and AVR x Amrish (entrepreneurship insights). Listen on Spotify, Amazon Music, and major podcast platforms. Discover transformative stories from entrepreneurs, athletes, and innovators."
        keywords="Aravindh Ravichandran podcasts, Startup Stories, Sports29, AVR x Amrish, entrepreneur podcast, startup podcast, business podcast, podcast series, startup stories podcast, sports podcast, entrepreneurship podcast, business podcast USA, founder podcast, athlete podcast, innovation podcast, startup journey podcast, business insights podcast"
        canonicalUrl="https://aravindh.org/podcasts"
        ogImage="https://aravindh.org/assets/podcast-thumb-1.png"
        geoLocation={{
          region: "US",
          placename: "United States"
        }}
        breadcrumbs={[
          { name: "Home", url: "https://aravindh.org" },
          { name: "Podcasts", url: "https://aravindh.org/podcasts" }
        ]}
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "PodcastSeries",
            "name": "Podcasts by Aravindh Ravichandran",
            "description": "Three acclaimed podcast series covering startup journeys, athlete stories, and entrepreneurship insights",
            "url": "https://aravindh.org/podcasts",
            "author": {
              "@type": "Person",
              "name": "Aravindh Ravichandran",
              "url": "https://aravindh.org"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Aravindh Initiative",
              "url": "https://aravindh.org"
            }
          }
        ]}
      />
      <Navigation />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Header Section */}
          <header className="text-center pt-20 mb-16 animate-fade-in space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-primary">
              All Podcast Series by Aravindh Ravichandran
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore my three acclaimed shows. Tap any show to see all episodes.
            </p>
          </header>
          
          {/* Podcast Series Sections */}
          <div className="space-y-16">
            {podcastSeries.map((series, index) => (
              <section 
                key={series.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Series Header */}
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                    {series.title}
                  </h2>
                  <p className="text-lg text-muted-foreground italic">
                    {series.subtitle}
                  </p>
                </div>

                {/* Horizontally Scrolling Episode Tiles */}
           <div className="relative mb-6">
            <div
              className="overflow-x-auto pb-4 hide-scrollbar"
              id={`episodeSlider-${series.id}`}
            >
              <div className="flex gap-6 min-w-max">
                {series.episodes.length > 0 ? (
                  series.episodes.map((episode) => (
                    <div
                      key={episode.id}
                      className="bg-card border border-border/50 rounded-lg p-6 w-64 md:w-80 hover:scale-105 hover:shadow-xl transition-all duration-300"
                    >
                      {/* Episode Cover */}
                      <div className="w-full aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                        {episode.cover ? (
                          <img
                            src={episode.cover}
                            alt={episode.title}
                            className="object-cover w-full h-full rounded-lg"
                          />
                        ) : (
                          <span className="text-primary/50 font-bold text-2xl">EP {episode.id}</span>
                        )}
                      </div>

                      {/* Episode Info */}
                      <h3 className="font-bold text-primary mb-2 line-clamp-3">
                        {episode.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                        {episode.description}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>Episode {episode.id}</span>
                      </div>
                      <div className="flex flex-row gap-1.5 justify-center items-center mt-2">
                        <a
                          href={episode.spotifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-all duration-300 hover:scale-105 hover:opacity-80 flex items-center"
                        >
                          <img src={Spotify} alt="Listen on Spotify" className="h-[52px] w-auto" />
                        </a>
                        <a
                          href={episode.amazonUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-all duration-300 hover:scale-105 hover:opacity-80 flex items-center"
                        >
                          <img src={Amazon} alt="Listen on Amazon Music" className="h-10 w-auto" />
                        </a>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-muted-foreground italic py-8 px-4">
                    Episodes coming soon.
                  </div>
                )}
              </div>
            </div>

            {/* Scroll Buttons */}
            <div className="flex justify-center gap-3 mt-4">
              <button
                onClick={() => {
                  const slider = document.getElementById(`episodeSlider-${series.id}`);
                  slider.scrollBy({ left: -300, behavior: "smooth" });
                }}
                className="bg-primary text-white text-xs px-3 py-1.5 rounded-full hover:bg-primary/90 shadow-sm transition-all duration-300"
              >
                ◀
              </button>

              <button
                onClick={() => {
                  const slider = document.getElementById(`episodeSlider-${series.id}`);
                  slider.scrollBy({ left: 300, behavior: "smooth" });
                }}
                className="bg-primary text-white text-xs px-3 py-1.5 rounded-full hover:bg-primary/90 shadow-sm transition-all duration-300"
              >
                ▶
              </button>
            </div>
          </div>

                {/* All Episodes Button */}
                <div className="text-center">
                  <Button
                    asChild
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <a href={series.link} target="_blank" rel="noopener noreferrer">
                      All Episodes
                    </a>
                  </Button>
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Podcasts;
