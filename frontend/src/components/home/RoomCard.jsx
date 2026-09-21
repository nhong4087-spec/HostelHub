import { toast } from 'react-toastify';
import { IconShieldCheck, IconMapPin, IconArrowRight } from '../icons/Icons';
import { formatCurrencyVND, formatDistanceKm } from '../../utils/format';

const TYPE_LABEL = {
  single: 'Phòng riêng',
  shared: 'Phòng ghép',
};

// Chua co anh that (module upload anh la mot phan cua B3 - Room Management),
// nen dung mot khoi mau CSS thay cho <img> de khong bia duong dan anh gia.
function RoomThumbnail({ type }) {
  return (
    <div className={`room-card__thumb room-card__thumb--${type}`}>
      <span>{TYPE_LABEL[type] ?? 'Phòng trọ'}</span>
    </div>
  );
}

export default function RoomCard({ room }) {
  const handleViewDetail = () => {
    toast.info('Trang chi tiết phòng sẽ mở khi module Room Search (B4) hoàn thành.');
  };

  return (
    <article className="room-card">
      <RoomThumbnail type={room.type} />

      <div className="room-card__body">
        <div className="room-card__top">
          <h3 className="room-card__title">{room.title}</h3>
          {room.verified && (
            <span className="room-card__badge" title="Bài đăng đã được admin duyệt">
              <IconShieldCheck size={14} />
              Đã xác minh
            </span>
          )}
        </div>

        <p className="room-card__location">
          <IconMapPin size={15} />
          {room.area} · cách {formatDistanceKm(room.distanceKm)}
        </p>

        <ul className="room-card__amenities">
          {room.amenities.slice(0, 3).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="room-card__footer">
          <div>
            <p className="room-card__price">{formatCurrencyVND(room.priceMonth)}</p>
            <p className="room-card__price-note">mỗi tháng · {room.sizeM2}m²</p>
          </div>
          <button type="button" className="room-card__link" onClick={handleViewDetail}>
            Xem chi tiết
            <IconArrowRight size={16} />
          </button>
        </div>
      </div>
    </article>
  );
}
