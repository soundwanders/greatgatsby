import styled from 'styled-components';

export const Wrapper = styled.div`
    display: none;
    position: absolute;
    top: 1.6rem;
    right: 1.8rem;
    cursor: pointer;
    transition: left 500ms cubic-bezier(0.6, 0.05, 0.28, 0.91);
    z-index: 5;

    @media (max-width: 960px) { 
        display: block;
    }

    ${
        ({ sidebar }) => sidebar &&
        `
        right: 18%;
        top: 1.4rem;
        @media (max-width: 960px) {
            right: 35%;
            position: fixed;
        }
        @media (max-width: 600px) {
            right: 66%;
        }
        `
    }
`;

export const Bar = styled.div`
	width: 1.6rem;
	height: .15rem;
	margin-bottom: .3rem;
	background-color: #212121;
    box-shadow 250ms,
    opacity 500ms,
	transition: transform 500ms cubic-bezier(0.6, 0.05, 0.28, 0.91),
	@media (max-width: 600px){
		width: 1.6rem;
	}
	${
        ({ top, sidebar }) => top && sidebar &&
		`
		background-color: pink;
		transform: translateY(8px) rotate(-135deg);
	    `
    }
	${
        ({ mid, sidebar }) => mid && sidebar &&
		`
		transform: scale(0);
        `
    }
	${
        ({ bottom, sidebar }) => bottom && sidebar &&
        `
            background-color: green;
            transform: translateY(-6px) rotate(-45deg);
        `
    }
`;