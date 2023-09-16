export function formatNumber(num: number): string {
  if (num < 1000) {
    return "0";
  } else if (num < 10000) {
    const thousands = (num / 1000).toFixed(1);
    return `${thousands}k`;
  } else {
    const thousands = Math.round(num / 1000);
    return `${thousands}k`;
  }
}
