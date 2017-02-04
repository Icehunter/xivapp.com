const Boom = require('boom');

const initialize = (server) => {
  // STATUS EFFECTS
  server.route({
    method: 'GET',
    path: '/api/actions',
    config: {
      tags: ['api'],
      description: 'A list of actions aggregated from XIVDB and ETL\'d into FFXIVAPP class formats.',
      handler: (request, reply) => {
        const ID = request.path.split('/').pop();
        server.methods.action(ID, (err, result) => {
          if (err) {
            return reply(Boom.expectationFailed(err.message));
          }
          return reply(result);
        });
      }
    }
  });
};

module.exports = {
  initialize
};
