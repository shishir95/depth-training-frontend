type Props = {
  title?: string,
  description?: string,
  canonicalPath?: string,
  ogImage?: string,
};

export default function Seo({
  title,
  description,
  canonicalPath,
  ogImage,
}: Props) {
  const canonical = canonicalPath ? canonicalPath : undefined;
  return (
    <>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {canonical && <link rel="canonical" href={canonical} />}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {ogImage && <meta property="og:image" content={ogImage} />}
      {ogImage && <meta name="twitter:image" content={ogImage} />}
    </>
  );
}
