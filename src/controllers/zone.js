const Boom = require('boom');

const initialize = (server) => {
  // ZONES
  server.route({
    method: 'GET',
    path: '/api/zones',
    config: {
      tags: ['api'],
      description: 'A list of zones aggregated from XIVDB and ETL\'d into FFXIVAPP class formats.',
      handler: (request, reply) => {
        const ID = request.path.split('/').pop();
        server.methods.zone(ID, (err, result) => {
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
