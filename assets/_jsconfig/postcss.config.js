module.exports = {
  map: false,
  plugins: {
    '@fullhuman/postcss-purgecss': {
      content: [
        '../../layouts/**/*.html',
        '../../assets/js/*.js',
      ],
    }
  }
};
