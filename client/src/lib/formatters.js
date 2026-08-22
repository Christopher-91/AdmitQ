export function formatDegree(degree) {
  if (!degree) return '';
  const d = degree.toLowerCase().trim();
  if (d === 'bachelors' || d === 'bachelor') return "Bachelor's";
  if (d === 'masters' || d === 'master') return "Master's";
  if (d === 'phd') return 'PhD';
  return degree;
}
