import React from 'react';
import styled from 'styled-components';
import './Upsite.css';
const Item = styled.div`
  margin-right: 100px;
  margin-left: 50px;
`;
const Upsite = () => {
    return (
        <div className = "upsite">
            <Item>ЛОГО</Item>
            <Item>nazvanie</Item>
            <Item>+2838722378</Item>
            <Item>minsk</Item>
        </div>
    );
};
export default Upsite;