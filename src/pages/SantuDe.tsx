import { useEffect } from "react";

const profileSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    "@id": "https://developereye.in/santu-de#person",
    name: "Santu De",
    alternateName: ["santude1997", "Santu De Developer"],
    jobTitle: "Full Stack Developer & AI Developer",
    url: "https://developereye.in/santu-de",
    sameAs: [
      "https://www.linkedin.com/in/santude-dev/",
      "https://github.com/santude1997",
      "https://www.facebook.com/santude1997/",
      "https://www.instagram.com/imsantude/",
      "https://x.com/Santude1997",
      "https://www.threads.com/@imsantude1997",
      "https://developereye.in/",
    ],
  },
};

const SantuDe = () => {
  useEffect(() => {
    const title = "Santu De | Full Stack & AI Developer";
    const description =
      "Santu De is a Full Stack Developer and AI Developer building modern web applications, AI solutions and digital products.";
    const canonicalUrl = "https://developereye.in/santu-de";

    document.title = title;

    const descriptionTag = document.querySelector('meta[name="description"]');
    descriptionTag?.setAttribute("content", description);

    const canonicalTag = document.querySelector('link[rel="canonical"]');
    canonicalTag?.setAttribute("href", canonicalUrl);

    return () => {
      document.title = "Developer Eye | AI Solutions & Custom Web Applications";
      descriptionTag?.setAttribute(
        "content",
        "Developer Eye builds AI solutions, custom websites, web applications, automation systems and scalable digital products for modern businesses.",
      );
      canonicalTag?.setAttribute("href", "https://developereye.in/");
    };
  }, []);

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(profileSchema)}</script>
      <article className="py-20 lg:py-28 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-600">
          Developer Profile
        </p>
        <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
          Santu De
        </h1>
        <p className="mt-4 text-xl text-slate-600">
          Full Stack Developer &amp; AI Developer
        </p>
        <div className="mt-10 max-w-2xl space-y-5 text-slate-600 leading-relaxed">
          <p>
            Santu De is a Full Stack Developer and AI Developer focused on
            building reliable web applications, intelligent software and
            practical digital products.
          </p>
          <p>
            Through Developer Eye, Santu works with businesses to turn ideas
            into useful, scalable technology.
          </p>
        </div>
      </article>
    </>
  );
};

export default SantuDe;