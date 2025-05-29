import React, { useState } from "react";
import styled from "styled-components";
import type { Airline } from "../helpers/types";

interface Props {
    airline: Airline;
    onClickAction?: Function;
    isSelected?: boolean;
}

const ComponentContainer = styled.div<{}>``;

const ComponentWrapper = styled.div<{ $isSelected?: boolean }>`
    margin: auto;
    margin: 5px;
    height: 105px;
    width: 105px;
`;

const ImageContainer = styled.div<{ $isSelected?: boolean }>`
    background: none;
    width: auto;
    display: inline-block;
    margin: auto;
    text-align: center;
    background-color: white;
    border: 1px solid white;
    border-radius: 50%;

    ${(props) => (props.$isSelected ? "background-color: grey;" : null)}
`;

const ImageWrapper = styled.div<{}>``;

const AirlineImg = styled.div<{ $airline: Airline }>`
    background-image: url("${(props) => (props.$airline ? "src/img/" + props.$airline.code + "/icon.png" : null)}");
    background-repeat: no-repeat;
    background-size: 75%;
    background-position: center;
    height: 100px;
    width: 100px;
    margin: auto;
    border-radius: 50%;
`;

const TextContainer = styled.div<{}>``;

const TextWrapper = styled.div<{}>``;

const AirlineDescText = styled.span<{}>`
    margin: auto;
`;

export const AirlineComponent: React.FC<Props> = ({ airline, onClickAction, isSelected }) => {
    const [isAirlineSelected, isAirlineSelectedSet] = useState<boolean>(false);

    function tabClick(_airline: Airline) {
        if (onClickAction) {
            onClickAction(_airline);
            isAirlineSelectedSet(!isAirlineSelected);
        }
    }

    return (
        <>
            <ComponentContainer onClick={(event) => tabClick(airline)}>
                <ComponentWrapper $isSelected={isAirlineSelected}>
                    <ImageContainer $isSelected={isAirlineSelected}>
                        <ImageWrapper>
                            <AirlineImg $airline={airline}></AirlineImg>
                        </ImageWrapper>
                    </ImageContainer>
                    <TextContainer>
                        <TextWrapper>
                            <AirlineDescText>{airline.name}</AirlineDescText>
                        </TextWrapper>
                    </TextContainer>
                </ComponentWrapper>
            </ComponentContainer>
        </>
    );
};
