import server from '@/api/http';

export default {
  testCPAPI: () => server.post('/cp/testCPAPI'),
  addNewAction: (params) => server.post('/cp/addNewAction', params),
  addNewUser: (params) => server.post('/user/addNewUser', params),
  addNewCoupon: (params) => server.post('/cp/addNewCoupon', params),
  updateAction: (params) => server.post('/cp/updateAction', params),
  closeCoupon: (params) => server.post('/cp/closeCoupon', params),
  switchActionActive: (params) => server.post('/cp/switchActionActive', params),

  getAllUsers: () => server.get('/user/getAllUsers'),
  getAllActions: () => server.get('/cp/getAllActions'),
  getActionById: (id) => server.get(`/cp/getActionById?id=${id}`),
  getAllCouponsForAction: (id) => server.get(`/cp/getAllCouponsForAction?id=${id}`),
  getActionWithCoupons: (id) => server.get(`/cp/getActionWithCoupons?id=${id}`),
};
