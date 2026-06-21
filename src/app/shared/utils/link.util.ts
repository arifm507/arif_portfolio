export function isValidExternalLink(url: string | null | undefined): boolean {
  return !!url && url !== '#';
}
