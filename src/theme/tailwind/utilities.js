const plugin = require('tailwindcss/plugin');

module.exports = plugin(({ addComponents, addUtilities }) => {
  /*
   * Add base components. These are very important for everything to look
   * correct. We are adding these to the 'components' layer because they must
   * be defined before pretty much everything else.
   */
  addComponents({
    '.card-default': {
      backgroundColor: 'white !important',
      'box-shadow': '0 0 10px #0000001a !important',
      'border-radius': '10px !important',
      padding: '40px 30px !important',
    },
  });

  addUtilities({
    '.app-title': {
      color: '#164b65 !important',
      'font-weight': '300 !important',
      position: 'relative !important',
      '&::before': {
        backgroundColor: 'rgba(var(--fuse-primary-500-rgb)) !important',
        content: '""',
        height: '1px !important',
        left: 0,
        bottom: '-10px !important',
        position: 'absolute !important',
        width: '60px !important',
      },
    },
  });
});
