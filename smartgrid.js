const smartgrid = require('smart-grid');
const settings = {
  outputStyle: 'scss',
  columns: 10,
  offset: '158px',
  mobileFirst: false,
  container: {
    maxWidth: '1800px',
    fields: '15px'
  },
  breakPoints: {
    lg: {
      width: '1800px',
      fields: '15px'
    },
    md: {
      width: '1200px',
      fields: '15px'
    },
    sm: {
      width: '768px',
      fields: '10px'
    },
    i5: {
      width: '320px',
      fields: '7px'
    }
  }
};

smartgrid('src/styles/', settings);

