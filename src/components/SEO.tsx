import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface GeoLocation {
  latitude?: number;
  longitude?: number;
  region?: string;
  placename?: string;
  position?: string;
}

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
  type?: string;
  structuredData?: object | object[];
  geoLocation?: GeoLocation;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  noindex?: boolean;
  nofollow?: boolean;
  breadcrumbs?: Array<{ name: string; url: string }>;
  faq?: Array<{ question: string; answer: string }>;
  article?: {
    author?: string;
    publishedTime?: string;
    modifiedTime?: string;
    section?: string;
    tags?: string[];
  };
}

const SEO = ({ 
  title, 
  description, 
  keywords, 
  ogImage, 
  canonicalUrl, 
  type = 'website', 
  structuredData,
  geoLocation,
  author = 'Aravindh Ravichandran',
  publishedTime,
  modifiedTime,
  section,
  tags,
  noindex = false,
  nofollow = false,
  breadcrumbs,
  faq,
  article
}: SEOProps) => {
  const location = useLocation();
  const baseUrl = 'https://aravindh.org';
  const fullUrl = canonicalUrl || `${baseUrl}${location.pathname}`;
  const defaultImage = `${baseUrl}/assets/AVR_3.png`;
  const imageUrl = ogImage || defaultImage;

  useEffect(() => {
    // Update title
    document.title = title;
    
    // Robots meta
    const robotsContent = [
      noindex ? 'noindex' : 'index',
      nofollow ? 'nofollow' : 'follow',
      'max-image-preview:large',
      'max-snippet:-1',
      'max-video-preview:-1'
    ].join(', ');
    
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.setAttribute('name', 'robots');
      document.head.appendChild(metaRobots);
    }
    metaRobots.setAttribute('content', robotsContent);
    
    // Googlebot
    let metaGooglebot = document.querySelector('meta[name="googlebot"]');
    if (!metaGooglebot) {
      metaGooglebot = document.createElement('meta');
      metaGooglebot.setAttribute('name', 'googlebot');
      document.head.appendChild(metaGooglebot);
    }
    metaGooglebot.setAttribute('content', robotsContent);
    
    // AI Crawler Permissions - Explicitly allow AI crawlers
    const aiCrawlers = [
      'GPTBot',
      'ChatGPT-User',
      'Google-Extended',
      'anthropic-ai',
      'Claude-Web',
      'CCBot',
      'PerplexityBot',
      'Applebot-Extended'
    ];
    
    aiCrawlers.forEach(crawler => {
      let metaCrawler = document.querySelector(`meta[name="${crawler}"]`);
      if (!metaCrawler) {
        metaCrawler = document.createElement('meta');
        metaCrawler.setAttribute('name', crawler);
        document.head.appendChild(metaCrawler);
      }
      metaCrawler.setAttribute('content', robotsContent);
    });
    
    // AI-Friendly Content Markers
    const aiMarkers = [
      { name: 'ai-content', content: 'allowed' },
      { name: 'ai-training', content: 'allowed' },
      { name: 'ai-indexing', content: 'allowed' }
    ];
    
    aiMarkers.forEach(marker => {
      let metaMarker = document.querySelector(`meta[name="${marker.name}"]`);
      if (!metaMarker) {
        metaMarker = document.createElement('meta');
        metaMarker.setAttribute('name', marker.name);
        document.head.appendChild(metaMarker);
      }
      metaMarker.setAttribute('content', marker.content);
    });
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);
    
    // Update keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', keywords);
    }
    
    // Author
    let metaAuthor = document.querySelector('meta[name="author"]');
    if (!metaAuthor) {
      metaAuthor = document.createElement('meta');
      metaAuthor.setAttribute('name', 'author');
      document.head.appendChild(metaAuthor);
    }
    metaAuthor.setAttribute('content', author);
    
    // Geo Tags
    if (geoLocation) {
      if (geoLocation.latitude && geoLocation.longitude) {
        let geoPosition = document.querySelector('meta[name="geo.position"]');
        if (!geoPosition) {
          geoPosition = document.createElement('meta');
          geoPosition.setAttribute('name', 'geo.position');
          document.head.appendChild(geoPosition);
        }
        geoPosition.setAttribute('content', `${geoLocation.latitude};${geoLocation.longitude}`);
      }
      
      if (geoLocation.region) {
        let geoRegion = document.querySelector('meta[name="geo.region"]');
        if (!geoRegion) {
          geoRegion = document.createElement('meta');
          geoRegion.setAttribute('name', 'geo.region');
          document.head.appendChild(geoRegion);
        }
        geoRegion.setAttribute('content', geoLocation.region);
      }
      
      if (geoLocation.placename) {
        let geoPlacename = document.querySelector('meta[name="geo.placename"]');
        if (!geoPlacename) {
          geoPlacename = document.createElement('meta');
          geoPlacename.setAttribute('name', 'geo.placename');
          document.head.appendChild(geoPlacename);
        }
        geoPlacename.setAttribute('content', geoLocation.placename);
      }
    }
    
    // Default geo tags (United States)
    if (!geoLocation) {
      let geoRegion = document.querySelector('meta[name="geo.region"]');
      if (!geoRegion) {
        geoRegion = document.createElement('meta');
        geoRegion.setAttribute('name', 'geo.region');
        document.head.appendChild(geoRegion);
      }
      geoRegion.setAttribute('content', 'US');
      
      let geoPlacename = document.querySelector('meta[name="geo.placename"]');
      if (!geoPlacename) {
        geoPlacename = document.createElement('meta');
        geoPlacename.setAttribute('name', 'geo.placename');
        document.head.appendChild(geoPlacename);
      }
      geoPlacename.setAttribute('content', 'United States');
    }
    
    // Language
    let metaLanguage = document.querySelector('meta[name="language"]');
    if (!metaLanguage) {
      metaLanguage = document.createElement('meta');
      metaLanguage.setAttribute('name', 'language');
      document.head.appendChild(metaLanguage);
    }
    metaLanguage.setAttribute('content', 'English');
    
    // Content Rating
    let metaRating = document.querySelector('meta[name="rating"]');
    if (!metaRating) {
      metaRating = document.createElement('meta');
      metaRating.setAttribute('name', 'rating');
      document.head.appendChild(metaRating);
    }
    metaRating.setAttribute('content', 'General');
    
    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', fullUrl);
    
    // Open Graph Tags
    const updateOrCreateMeta = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };
    
    updateOrCreateMeta('og:type', type);
    updateOrCreateMeta('og:url', fullUrl);
    updateOrCreateMeta('og:site_name', 'Aravindh Ravichandran');
    updateOrCreateMeta('og:title', title);
    updateOrCreateMeta('og:description', description);
    updateOrCreateMeta('og:image', imageUrl);
    updateOrCreateMeta('og:image:width', '1200');
    updateOrCreateMeta('og:image:height', '630');
    updateOrCreateMeta('og:image:alt', title);
    updateOrCreateMeta('og:locale', 'en_US');
    
    if (article) {
      if (article.publishedTime) updateOrCreateMeta('article:published_time', article.publishedTime);
      if (article.modifiedTime) updateOrCreateMeta('article:modified_time', article.modifiedTime);
      if (article.author) updateOrCreateMeta('article:author', article.author);
      if (article.section) updateOrCreateMeta('article:section', article.section);
      if (article.tags) {
        article.tags.forEach((tag, index) => {
          updateOrCreateMeta(`article:tag`, tag);
        });
      }
    }
    
    // Twitter Card Tags
    const updateOrCreateTwitterMeta = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };
    
    updateOrCreateTwitterMeta('twitter:card', 'summary_large_image');
    updateOrCreateTwitterMeta('twitter:site', '@AravAVR');
    updateOrCreateTwitterMeta('twitter:creator', '@AravAVR');
    updateOrCreateTwitterMeta('twitter:title', title);
    updateOrCreateTwitterMeta('twitter:description', description);
    updateOrCreateTwitterMeta('twitter:image', imageUrl);
    updateOrCreateTwitterMeta('twitter:image:alt', title);
    
    // Structured Data
    const structuredDataArray: object[] = [];
    
    // Add breadcrumbs if provided
    if (breadcrumbs && breadcrumbs.length > 0) {
      structuredDataArray.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((crumb, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": crumb.name,
          "item": crumb.url
        }))
      });
    }
    
    // Add FAQ schema if provided
    if (faq && faq.length > 0) {
      structuredDataArray.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faq.map(item => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
          }
        }))
      });
    }
    
    // Add main structured data
    if (structuredData) {
      if (Array.isArray(structuredData)) {
        structuredDataArray.push(...structuredData);
      } else {
        structuredDataArray.push(structuredData);
      }
    }
    
    // Add Organization schema to all pages
    structuredDataArray.push({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Aravindh Initiative",
      "url": baseUrl,
      "logo": `${baseUrl}/assets/AVR_3.png`,
      "sameAs": [
        "https://x.com/AravAVR",
        "https://instagram.com/arav.vr",
        "https://youtube.com/@ardh",
        "https://linkedin.com/in/avra",
        "https://realmrook.com"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "avr@aravindh.org",
        "contactType": "Business Inquiries"
      }
    });
    
    // Add WebSite schema
    structuredDataArray.push({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Aravindh Ravichandran",
      "url": baseUrl,
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${baseUrl}/?q={search_term_string}`
        },
        "query-input": "required name=search_term_string"
      }
    });
    
    // Remove old structured data scripts
    const oldScripts = document.querySelectorAll('script[type="application/ld+json"]');
    oldScripts.forEach(script => script.remove());
    
    // Add new structured data
    structuredDataArray.forEach((data, index) => {
      const script = document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      script.setAttribute('id', `structured-data-${index}`);
      script.textContent = JSON.stringify(data);
      document.head.appendChild(script);
    });
    
  }, [
    title, 
    description, 
    keywords, 
    imageUrl, 
    canonicalUrl, 
    type, 
    structuredData, 
    location.pathname,
    geoLocation,
    author,
    publishedTime,
    modifiedTime,
    section,
    tags,
    noindex,
    nofollow,
    breadcrumbs,
    faq,
    article,
    fullUrl
  ]);
  
  return null;
};

export default SEO;
