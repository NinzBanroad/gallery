const appRoot = require("app-root-path");

module.exports = {
  get: async ctx => {
    await ctx.render("join");
  }
};
