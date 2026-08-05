export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function getAssetPath(path: string): string {
  const isGitHubPages = typeof process !== "undefined" && process.env.GITHUB_ACTIONS === "true";
  const basePath = isGitHubPages ? "/Cortex-website" : "";
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${cleanPath}`;
}
