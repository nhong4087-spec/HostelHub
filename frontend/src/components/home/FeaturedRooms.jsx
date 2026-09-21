import mockRooms from '../../data/mockRooms';
import RoomCard from './RoomCard';

export default function FeaturedRooms() {
  return (
    <section className="featured" aria-labelledby="featured-heading">
      <div className="section-head">
        <div>
          <h2 id="featured-heading">Phòng mới đăng quanh khu vực bạn</h2>
          <p>Một vài phòng đang được thuê nhiều nhất tuần này.</p>
        </div>
      </div>

      <div className="featured__grid">
        {mockRooms.map((room) => (
          <RoomCard room={room} key={room.id} />
        ))}
      </div>

      <p className="featured__note">
        Đây là dữ liệu mẫu để dựng giao diện. Danh sách thật sẽ hiển thị khi module tìm kiếm
        kết nối với backend.
      </p>
    </section>
  );
}
