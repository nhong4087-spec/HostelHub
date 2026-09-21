export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__grid">
        <div className="site-footer__brand">
          <a href="#top" className="brand brand--footer">
            <span className="brand__mark" aria-hidden="true" />
            HostelHub
          </a>
          <p>
            Nền tảng kết nối sinh viên với chủ trọ quanh các trường đại học tại Hà Nội —
            tìm phòng, đặt lịch xem và giữ chỗ trong cùng một chỗ.
          </p>
        </div>

        <div className="site-footer__col">
          <h3>Sinh viên</h3>
          <a href="#tim-phong">Tìm phòng trọ</a>
          <a href="#quy-trinh">Cách đặt lịch xem phòng</a>
          <a href="#quy-trinh">Cách đặt cọc giữ chỗ</a>
        </div>

        <div className="site-footer__col">
          <h3>Chủ trọ</h3>
          <a href="#cho-chu-tro">Đăng phòng cho thuê</a>
          <a href="#cho-chu-tro">Quản lý yêu cầu xem phòng</a>
        </div>

        <div className="site-footer__col">
          <h3>Về dự án</h3>
          <p className="site-footer__note">
            HostelHub là đồ án môn Các vấn đề hiện đại của Công nghệ phần mềm,
            đang trong giai đoạn xây dựng từng module.
          </p>
        </div>
      </div>

      <div className="site-footer__bottom">
        <span>© {year} HostelHub</span>
      </div>
    </footer>
  );
}
