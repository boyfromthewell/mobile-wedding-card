import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import "./font/font.css";

const GlobalStyles = createGlobalStyle`
    ${reset};

    body {
        display:flex;
        align-items:center;
        justify-content:center;
        background-color:#F8C8C4;
        font-family: "gowun dodum", sans-serif;
    }

    *{

        &::-webkit-scrollbar {
			width: 12px;
		}
		&::-webkit-scrollbar-thumb {
			border-radius: 10px;
			background: #EEEEEE;
			background-clip: padding-box;
			border: 4px solid transparent;
		}
    }
`;

export default GlobalStyles;
