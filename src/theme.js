// External Dependencies
import {
  createMuiTheme,
  responsiveFontSizes,
} from '@material-ui/core/styles';

let theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Open Sans',
      'Source Sans Pro',
    ].join(','),
  },
});


// This gives us some default responsive font sizes
theme = responsiveFontSizes(theme);

export default theme;
