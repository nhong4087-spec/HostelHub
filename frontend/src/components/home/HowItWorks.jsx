import { IconSearch, IconCalendar, IconWallet } from '../icons/Icons';

const steps = [
  {
    icon: IconSearch,
    title: 'Tìm và lọc phòng',
    description: 'Lọc theo giá, khu vực và tiện ích để chỉ xem những phòng thực sự phù hợp.',
  },
  {
    icon: IconCalendar,
    title: 'Đặt lịch xem phòng',
    description: 'Chọn giờ rảnh của bạn, chủ trọ xác nhận hoặc đổi giờ ngay trên ứng dụng.',
  },
  {
    icon: IconWallet,
    title: 'Đặt cọc giữ chỗ',
    description: 'Cọc 500.000đ qua ví để giữ phòng. Chủ trọ từ chối thì được hoàn lại 100%.',
  },
];

export default function HowItWorks() {
  return (
    <section className="how-it-works" id="quy-trinh" aria-labelledby="how-heading">
      <div className="section-head">
        <div>
          <h2 id="how-heading">Ba bước, không cần đi lại nhiều lần</h2>
          <p>Toàn bộ quy trình từ tìm phòng đến giữ chỗ nằm trong một luồng duy nhất.</p>
        </div>
      </div>

      <ol className="how-it-works__list">
        {steps.map(({ icon: Icon, title, description }, index) => (
          <li className="how-it-works__item" key={title}>
            <span className="how-it-works__index">{String(index + 1).padStart(2, '0')}</span>
            <Icon size={22} className="how-it-works__icon" />
            <h3>{title}</h3>
            <p>{description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
