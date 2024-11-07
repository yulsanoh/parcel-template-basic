// ESM(브라우저 안에서 사용하는)이 아니라 CommonJS(NodeJS에서 사용하는) 방식

// import autoprefixer from 'autoprefixer';
const autoprefixer = require("autoprefixer");

// export {
//   plugins: [autoprefixer],
// };
module.exports = {
  plugins: [autoprefixer],
};
