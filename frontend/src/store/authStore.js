import { create } from 'zustand';

/**
 * Store phien dang nhap. B0 moi dung khung; B2 se dien login/logout that.
 */
const useAuthStore = create((set) => ({
  user: null,
  token: localStorage.getItem('hostelhub_token') || null,

  setSession: (user, token) => {
    localStorage.setItem('hostelhub_token', token);
    set({ user, token });
  },

  clearSession: () => {
    localStorage.removeItem('hostelhub_token');
    set({ user: null, token: null });
  },
}));

export default useAuthStore;
