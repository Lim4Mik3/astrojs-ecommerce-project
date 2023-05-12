export function getRandomPhoto(query?: string): string {
  return `https://source.unsplash.com/random/700x700/?${query ?? "avatar"}`;
}
