import { createGlobalStyle } from 'styled-components';
import { ROOT_FONT_SIZE } from '../../css.settings';

import UbuntuRegular from '../../assets/fonts/Ubuntu/Ubuntu-Regular.ttf';

const GlobalStyles = createGlobalStyle`
	@font-face {
    font-family: 'Ubuntu';
    src: url(${UbuntuRegular}); format("ttf");
	};
	html {
		font-size: ${ROOT_FONT_SIZE} 
	}
	body {
		font-family: Ubuntu;
		padding: 0;
		margin: 0;
	};
`;

export default GlobalStyles;
