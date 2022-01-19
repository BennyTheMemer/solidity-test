module.exports = {
  reactStrictMode: true,
};
const withTM = require("next-transpile-modules")(["react-hook-mousetrap"]);

module.exports = withTM({
  /* Your Next.js config */
});
