import server from '@/api/http';

export default {
  getActualActions: (currentCategory) => server.get(`/action/getActualActions?currentCategory=${currentCategory}`),
  getActionById: (id) => server.get(`/action/getActionById?id=${id}`),
  // getPaymentUrl: (id, phone) => server.get(`/payment/getPaymentUrl?id=${id}&phone=${phone}`),
  getPaymentData: (id) => server.get(`/payment/getPaymentData?id=${id}`),
};
