module.exports = function(Player) {
    Player.beforeRemote('create', function(context, user, next) {
        var req = context.req;
        req.body.created = Date.now();
        req.body.lastUpdated = Date.now();
        next();
      });
};
