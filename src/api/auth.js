import server from '@/api/http';

export default {
  login: (params) => server.post('/auth/login', params),
  refresh: () => server.post('/auth/refresh'),
};
