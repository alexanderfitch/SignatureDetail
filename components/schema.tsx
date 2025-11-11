export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AutoDetailing",
    name: "Signature Auto Detailing",
    image: "https://detailomaha.com/images/logo.png",
    url: "https://detailomaha.com",
    telephone: "+14028504546",
    email: "detailomahaneb@gmail.com",
    description:
      "Signature Auto Detailing - Perfection is our Signature. Mobile auto detailing service in Omaha and surrounding areas. Specializing in full service detailing, paint correction, ceramic coating, interior and exterior detailing, headlight restoration, and more.",
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 41.2565,
        longitude: -96.0356,
      },
      geoRadius: "30mi",
    },
    priceRange: "$100 - $800+",
    sameAs: [
      "https://www.facebook.com/detailomaha",
      "https://www.instagram.com/detailomaha",
      "https://twitter.com/detailomaha",
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What services does Signature Auto Detailing offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Signature Auto Detailing offers a range of mobile detailing services including Full Service Detail ($350+), Paint Correction ($600+), Ceramic Coating, Interior Detail ($250+), Exterior Detail ($200+), Headlight Restoration ($150), and Clay Bar Treatment ($100+).",
        },
      },
      {
        "@type": "Question",
        name: "How often should I detail my car?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For optimal results, we recommend a full detail every 3-4 months, with maintenance washes every 2-3 weeks depending on your driving conditions and environment.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer mobile detailing services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we are a fully mobile detailing service covering Omaha and all surrounding areas. We bring everything needed to detail your vehicle at your home or office.",
        },
      },
      {
        "@type": "Question",
        name: "What areas do you service?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We service Omaha and all surrounding areas. Our mobile detailing service comes to your location, whether it's your home, office, or another convenient spot.",
        },
      },
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
