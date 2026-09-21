import SearchBar from './SearchBar';

// Minh hoa rieng cho HostelHub: mot day nha tro, mot can duoc xac minh
// (mau xanh, co dau tick) va mot ghim ban do dang "ha canh" dung vao do -
// gan voi dung van de cot loi: giua nhieu lua chon, tim ra phong da xac minh.
function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 360 320"
      className="hero__art"
      role="img"
      aria-label="Minh hoạ một dãy nhà trọ, trong đó một phòng đã được xác minh"
    >
      <ellipse cx="180" cy="270" rx="150" ry="18" className="hero__art-ground" />

      {/* day nha phia sau, mau trung tinh */}
      <g className="hero__art-buildings">
        <rect x="24" y="150" width="60" height="110" rx="6" />
        <rect x="94" y="120" width="60" height="140" rx="6" />
        <rect x="246" y="140" width="58" height="120" rx="6" />
        <rect x="276" y="170" width="56" height="90" rx="6" />
      </g>

      {/* cua so nho tren cac nha nen */}
      <g className="hero__art-windows">
        <rect x="36" y="168" width="14" height="14" rx="2" />
        <rect x="58" y="168" width="14" height="14" rx="2" />
        <rect x="36" y="194" width="14" height="14" rx="2" />
        <rect x="58" y="194" width="14" height="14" rx="2" />

        <rect x="108" y="142" width="14" height="14" rx="2" />
        <rect x="132" y="142" width="14" height="14" rx="2" />
        <rect x="108" y="168" width="14" height="14" rx="2" />
        <rect x="132" y="168" width="14" height="14" rx="2" />

        <rect x="258" y="160" width="14" height="14" rx="2" />
        <rect x="258" y="186" width="14" height="14" rx="2" />
        <rect x="290" y="190" width="14" height="14" rx="2" />
      </g>

      {/* nha noi bat da xac minh */}
      <g className="hero__art-featured">
        <rect x="160" y="100" width="76" height="160" rx="8" />
        <rect x="176" y="128" width="18" height="18" rx="3" className="hero__art-featured-window" />
        <rect x="202" y="128" width="18" height="18" rx="3" className="hero__art-featured-window" />
        <rect x="176" y="160" width="18" height="18" rx="3" className="hero__art-featured-window" />
        <rect x="202" y="160" width="18" height="18" rx="3" className="hero__art-featured-window" />
        <rect x="186" y="210" width="24" height="50" rx="3" className="hero__art-door" />
      </g>

      {/* huy hieu xac minh */}
      <g className="hero__art-badge" transform="translate(214,86)">
        <circle r="16" />
        <path d="M-7 0l5 5 9-10" fill="none" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* ghim ban do */}
      <g className="hero__art-pin" transform="translate(198,20)">
        <path d="M0 0c14 0 25 10.5 25 24.5C25 44 0 74 0 74S-25 44-25 24.5C-25 10.5-14 0 0 0Z" />
        <circle cy="24" r="9" className="hero__art-pin-hole" />
      </g>
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__content">
        <p className="hero__eyebrow">Dành cho sinh viên tại Hà Nội</p>
        <h1 className="hero__title">
          Tìm phòng trọ trong một buổi chiều,
          <br />
          không phải ba tuần.
        </h1>
        <p className="hero__subtitle">
          HostelHub gom phòng đã xác minh quanh trường bạn, cho đặt lịch xem
          và giữ chỗ ngay trên ứng dụng — không cần chạy qua từng ngõ hỏi từng nhà.
        </p>

        <div id="tim-phong">
          <SearchBar />
        </div>

        <p className="hero__trust">
          Phòng có nhãn <strong>đã xác minh</strong> đều được admin duyệt bài trước khi hiển thị.
        </p>
      </div>

      <div className="hero__visual" aria-hidden="false">
        <HeroIllustration />
      </div>
    </section>
  );
}
