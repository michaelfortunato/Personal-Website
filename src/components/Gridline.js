import React from 'react';
import  styled  from 'styled-components';
import { CSSTransition } from 'react-transition-group';

const StyledGridline = styled.div`
    position: absolute;
    background:#6699CC;
    left: ${(props) => props.isRow ? `${props.floatingPos}%` : `${props.fixedPos}vh`};
    top: ${(props) => props.isRow ? `${props.fixedPos}vh` : `${props.floatingPos}%`};
    height: ${(props) => props.isDot ? '10px': '0px'};
    width: ${(props) => props.isDot ? '10px': '0px'};
    
    border-radius: ${(props) => props.isDot ? '50%': '0%'};

    &.line-appear {
        left: ${(props) => props.isRow ? `${props.floatingPos}%` : `${props.fixedPos}vh`};
        top: ${(props) => props.isRow ? `${props.fixedPos}vh` : `${props.floatingPos}%`};
        height: ${(props) => props.isDot ? '10px': '0px'};
        width: ${(props) => props.isDot ? '10px': '0px'};
        
        border-radius: ${(props) => props.isDot ? '50%': '0%'};
    }
    
    &.line-appear-active {
        height: ${(props) => props.isRow ? '1px': '100%'};
        width:  ${(props) => props.isRow ? '100%': '1px'};
        
        left: ${(props) => props.isRow ? '0% !important': ''};
        top: ${(props) => props.isRow ? '': '0% !important'};
        
        border-radius: 0;

        transition-property: all;
        transition-duration: ${(props) => props.duration}ms; 
        transition-delay: ${(props) => props.delay}ms;
        will-change: transition;
    }
    &.line-appear-done{
        height: ${(props) => props.isRow ? '1px': '100%'};
        width:  ${(props) => props.isRow ? '100%': '1px'};
        left: ${(props) => props.isRow ? '0% !important': `${props.fixedPos}vh`};
        top: ${(props) => props.isRow ? `${props.fixedPos}vh`: '0% !important'};
        border-radius: 0;
    }
`;


const Gridline = (props) => {
    return(
        <CSSTransition
        in = {true}
        appear =  {true}
        classNames = "line"
        timeout={props.duration + props.delay}>
            <StyledGridline {...props}/>
        </CSSTransition>   
    );
};


export default Gridline;