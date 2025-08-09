import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description?: string;
  canonical?: string;
  jsonLd?: Record<string, any>;
}

const SEO = ({ title, description, canonical, jsonLd }: SEOProps) => {
  const fullTitle = `${title} | TNGSS Startup Cricket League`;
  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      {canonical && <link rel="canonical" href={canonical} />}
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:type" content="website" />
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
