import server from '@/api/http';

export default {
  getAll: () => server.get('/category/getAll'),
};
