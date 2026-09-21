import { toast } from 'react-toastify';

// B5 se thay hai nut Dang nhap/Dang ky bang trang that khi module Auth xong.
function notifyComingSoon(feature) {
  toast.info(`${feature} sẽ mở ở bước tiếp theo của dự án.`);
}

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a href="#top" className="brand">
          <span className="brand__mark" aria-hidden="true" />
          HostelHub
        </a>

        <nav className="site-nav" aria-label="Điều hướng chính">
          <a href="#tim-phong">Tìm phòng</a>
          <a href="#cho-chu-tro">Cho chủ trọ</a>
          <a href="#quy-trinh">Cách hoạt động</a>
        </nav>

        <div className="site-header__actions">
          <button type="button" className="btn btn--ghost" onClick={() => notifyComingSoon('Đăng nhập')}>
            Đăng nhập
          </button>
          <button type="button" className="btn btn--primary" onClick={() => notifyComingSoon('Đăng ký')}>
            Đăng ký
          </button>
        </div>
      </div>
    </header>
  );
}
