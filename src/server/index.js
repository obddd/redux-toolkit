import { createServer } from 'miragejs';

export const makeServer = ({ environment = 'test' } = {}) => {
  let server = createServer({
    environment,

    routes() {
      this.namespace = 'api';

      this.get('/counter', () => {
        return 34;
      });
    },
  });
  return server;
};
