import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset};

    body {
        display:flex;
        align-items:center;
        justify-content:center;
        background-color:lightgray;
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
