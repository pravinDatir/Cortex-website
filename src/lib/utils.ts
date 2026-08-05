export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function getAssetPath(path: string): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  // `basePath` is applied to routes and Next's generated assets, but not to
  // public files passed to `next/image`. GitHub Pages serves this site from
  // /Cortex-website, so public images need the prefix in production.
  const basePath = process.env.NODE_ENV === "production" ? "/Cortex-website" : "";

  return `${basePath}${cleanPath}`;
}
