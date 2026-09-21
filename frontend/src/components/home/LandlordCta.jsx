import { toast } from 'react-toastify';
import { IconUsers } from '../icons/Icons';

export default function LandlordCta() {
  const handleClick = () => {
    toast.info('Trang đăng phòng cho chủ trọ sẽ mở khi module Room Management (B3) hoàn thành.');
  };

  return (
    <section className="landlord-cta" id="cho-chu-tro">
      <div className="landlord-cta__inner">
        <IconUsers size={28} className="landlord-cta__icon" />
        <div className="landlord-cta__copy">
          <h2>Đang cho thuê trọ quanh khu vực trường học?</h2>
          <p>
            Đăng phòng, cập nhật trạng thái còn/hết và xử lý yêu cầu xem phòng ngay trên
            một trang quản lý, không cần qua trung gian.
          </p>
        </div>
        <button type="button" className="btn btn--accent" onClick={handleClick}>
          Đăng phòng cho thuê
        </button>
      </div>
    </section>
  );
}
