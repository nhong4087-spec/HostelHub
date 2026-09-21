// Dinh dang so tien theo chuan Viet Nam: 2500000 -> "2.500.000đ"
export function formatCurrencyVND(amount) {
  return `${new Intl.NumberFormat('vi-VN').format(amount)}đ`;
}

// Dinh dang khoang cach: 1.2 -> "1,2 km"
export function formatDistanceKm(km) {
  return `${km.toString().replace('.', ',')} km`;
}
