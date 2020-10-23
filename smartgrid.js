const smartgrid = require('smart-grid');
const settings = {
  outputStyle: 'scss',
  columns: 12,
  offset: '158px',
  mobileFirst: false,
  container: {
    maxWidth: '1799px',
    fields: '158px'
  },
  breakPoints: {
    lg: {
      width: '1799px',
      fields: '15px'
    },
    md: {
      width: '1199px',
      fields: '15px'
    },
    sm: {
      width: '767px',
      fields: '10px'
    },
    i5: {
      width: '319px',
      fields: '7px'
    }
  }
};

smartgrid('src/styles/', settings);