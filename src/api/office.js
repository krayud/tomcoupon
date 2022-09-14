import server from '@/api/http';

export default {
  getAllMyActions: () => server.get('/office/getAllMyActions'),
  getMyActionCoupons: (id) => server.get(`/office/getMyActionCoupons?id=${id}`),
  closeCoupon: (params) => server.post('/office/closeCoupon', params),
};
