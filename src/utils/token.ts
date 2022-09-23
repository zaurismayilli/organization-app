export const userToken = {
  key: 'ac_tkn',
  refreshKey: 'rf_tkn',
  get() {
    return localStorage.getItem(this.key);
  },
  getRefresh() {
    return localStorage.getItem(this.refreshKey);
  },
  removeAll() {
    localStorage.removeItem(this.key);
    localStorage.removeItem(this.refreshKey);
  },
  set(token: string): void {
    localStorage.setItem(this.key, token);
  },
  saveAll(data: any) {
    localStorage.setItem(this.key, JSON.stringify(data.accessToken));
    localStorage.setItem(this.refreshKey, JSON.stringify(data.refreshToken));
  },
};
