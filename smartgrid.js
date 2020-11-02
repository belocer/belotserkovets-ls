const smartgrid = require('smart-grid');
const settings = {
  outputStyle: 'scss',
  columns: 12,
  offset: '158Px',
  mobileFirst: false,
  container: {
    maxWidth: '1799Px',
    fields: '158Px'
  },
  breakPoints: {
    lg: {
      width: '1799Px',
      offset: '120Px',
      fields: '60Px'
    },
    md: {
      width: '1199Px',
      offset: '120Px',
      fields: '60Px'
    },
    sm: {
      width: '767Px',
      offset: '60Px',
      fields: '30Px'
    },
    i5: {
      width: '319Px',
      offset: '20Px',
      fields: '7Px'
    }
  }
};

smartgrid('src/styles/', settings);