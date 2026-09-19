import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import healthApi from '../api/healthApi';

export default function HealthPage() {
  const [state, setState] = useState({ loading: true, data: null, error: null });

  const load = async () => {
    setState({ loading: true, data: null, error: null });
    try {
      const res = await healthApi.check();
      setState({ loading: false, data: res.data, error: null });
      toast.success('Ket noi backend thanh cong');
    } catch (err) {
      setState({ loading: false, data: null, error: err.message });
      toast.error(err.message);
    }
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <main className="page">
      <h1>HostelHub</h1>
      <p className="lead">
        Khung du an buoc B0. Trang nay chi kiem tra frontend co goi duoc
        <code> GET /api/health </code> cua backend hay khong.
      </p>

      <section className="panel">
        <div className="panel-head">
          <h2>Tinh trang backend</h2>
          <button type="button" onClick={load} disabled={state.loading}>
            {state.loading ? 'Dang kiem tra...' : 'Kiem tra lai'}
          </button>
        </div>

        {state.loading && <p>Dang goi {import.meta.env.VITE_API_BASE_URL}/health</p>}

        {state.error && (
          <div className="status status-down">
            <strong>Khong ket noi duoc</strong>
            <p>{state.error}</p>
            <p>Chay backend bang <code>mvn spring-boot:run</code> trong thu muc backend, roi bam Kiem tra lai.</p>
          </div>
        )}

        {state.data && (
          <div className="status status-up">
            <dl>
              <dt>Dich vu</dt>
              <dd>{state.data.service}</dd>
              <dt>Trang thai</dt>
              <dd>{state.data.status}</dd>
              <dt>Phien ban</dt>
              <dd>{state.data.version}</dd>
              <dt>Thoi diem</dt>
              <dd>{state.data.timestamp}</dd>
            </dl>
          </div>
        )}
      </section>
    </main>
  );
}
