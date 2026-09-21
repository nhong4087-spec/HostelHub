import { useState } from 'react';
import { toast } from 'react-toastify';
import { IconSearch, IconMapPin } from '../icons/Icons';

const PRICE_RANGES = [
  { value: '', label: 'Mọi mức giá' },
  { value: '0-2', label: 'Dưới 2 triệu' },
  { value: '2-3', label: '2 - 3 triệu' },
  { value: '3-5', label: '3 - 5 triệu' },
  { value: '5+', label: 'Trên 5 triệu' },
];

// B4 (feature/room-search) se noi form nay toi GET /rooms/search
// va dieu huong sang trang ket qua tim kiem.
export default function SearchBar() {
  const [keyword, setKeyword] = useState('');
  const [priceRange, setPriceRange] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    toast.info('Tìm kiếm sẽ hoạt động khi API /rooms/search được kết nối ở bước tiếp theo.');
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit} aria-label="Tìm phòng trọ">
      <label className="search-bar__field search-bar__field--keyword">
        <IconMapPin size={18} className="search-bar__icon" />
        <input
          type="text"
          placeholder="Khu vực, tên trường hoặc đường..."
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
        />
      </label>

      <label className="search-bar__field search-bar__field--price">
        <select value={priceRange} onChange={(event) => setPriceRange(event.target.value)}>
          {PRICE_RANGES.map((range) => (
            <option key={range.value} value={range.value}>
              {range.label}
            </option>
          ))}
        </select>
      </label>

      <button type="submit" className="btn btn--primary search-bar__submit">
        <IconSearch size={18} />
        Tìm phòng
      </button>
    </form>
  );
}
