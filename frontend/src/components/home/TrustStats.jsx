import { IconShieldCheck, IconClock, IconWallet } from '../icons/Icons';

// Ghi chu: day la muc tieu/thiet ke he thong (theo dac ta du an), khong phai
// so lieu san xuat that. Khi co du lieu that tu module Analytics (B11),
// thay noi dung nay bang API /admin/analytics.
const stats = [
  {
    icon: IconClock,
    value: '≥ 50%',
    label: 'Thời gian tìm phòng được rút ngắn so với cách hỏi thăm truyền thống',
  },
  {
    icon: IconShieldCheck,
    value: '100%',
    label: 'Bài đăng hiển thị công khai đã qua admin duyệt',
  },
  {
    icon: IconWallet,
    value: '500.000đ',
    label: 'Mức cọc giữ phòng cố định, hoàn 100% nếu chủ trọ từ chối',
  },
];

export default function TrustStats() {
  return (
    <section className="trust-stats" aria-label="Cam kết của HostelHub">
      {stats.map(({ icon: Icon, value, label }) => (
        <div className="trust-stats__item" key={label}>
          <Icon size={22} className="trust-stats__icon" />
          <div>
            <p className="trust-stats__value">{value}</p>
            <p className="trust-stats__label">{label}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
