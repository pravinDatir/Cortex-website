export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function getAssetPath(path: string): string {
  const isProd = process.env.NODE_ENV === "production";
  const basePath = isProd ? "/Cortex-website" : "";
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${cleanPath}`;
}
