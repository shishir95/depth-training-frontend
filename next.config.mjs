// next.config.js
export default {
  async redirects() {
    return [
      {
        source: '/',           // homepage URL
        destination: '/home',  // new page you want to show
        permanent: true,       // 301 redirect
      },
    ];
  },
};
