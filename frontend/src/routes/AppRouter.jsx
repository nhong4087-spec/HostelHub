import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HealthPage from '../pages/HealthPage';

/**
 * B0: chi co mot route kiem tra ket noi.
 * B5: them HomePage, SearchPage, RoomDetailPage, Login/Register va PrivateRoute.
 */
export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HealthPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
