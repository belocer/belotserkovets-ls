const smartgrid = require('smart-grid');
const settings = {
  outputStyle: 'scss',
  columns: 12,
  offset: '160Px',
  mobileFirst: false,
  container: {
    maxWidth: '1800Px',
    fields: '160Px'
  },
  breakPoints: {
    lg: {
      width: '1480Px',
      offset: '120Px',
      fields: '60Px'
    },
    md: {
      width: '1200Px',
      offset: '120Px',
      fields: '60Px'
    },
    sm: {
      width: '768Px',
      offset: '60Px',
      fields: '30Px'
    },
    i5: {
      width: '320Px',
      offset: '20Px',
      fields: '7Px'
    }
  }
};

smartgrid('src/styles/', settings);