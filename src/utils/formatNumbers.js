// Keep only digits and a single decimal point
export function sanitizeNumber(value) {
  const cleaned = value.replace(/[^\d.]/g, '')
  const [integer, ...rest] = cleaned.split('.')
  return rest.length ? `${integer}.${rest.join('')}` : integer
}

// 300000 -> "300,000" (display only)
export function formatWithCommas(value) {
  if (value === '') return ''
  const [integer, decimal] = value.split('.')
  const withCommas = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return decimal !== undefined ? `${withCommas}.${decimal}` : withCommas
}

export const formatGBP = (n) =>
  new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(n)