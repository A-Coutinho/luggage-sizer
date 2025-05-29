import { useEffect, useState } from "react";
import "./App.css";
import { AirlineComponent } from "./components/airlinecomponent";
import { AirlinesDB } from "./helpers/constants";
import type { Airline } from "./helpers/types";

function App() {
    const [airlinesListState, airlinesListStateSet] = useState<Airline[] | undefined>(undefined);
    const [airlinesSelectedState, airlinesSelectedStateSet] = useState<number[]>([]);
    const [teste, testeSet] = useState<boolean>(false);

    useEffect(() => {
        getAirlinesList();

        return () => {};
    }, [teste]);

    function getAirlinesList() {
        const airlinesList: Airline[] = [];

        AirlinesDB.forEach((item) => {
            airlinesList.push(item.airline);
        });

        airlinesListStateSet(airlinesList.sort((a, b) => a.code.localeCompare(b.code)));
    }

    function airlineClick(element: string) {
        // let enumKey = Object.values(AirlinesEnum).indexOf(element);
        // manageSelectedAirlines(enumKey);

        testeSet(!teste);
    }

    return (
        <>
            {airlinesListState ? (
                <>
                    <div style={{ display: "flex" }}>
                        {airlinesListState.map((airline, index) => {
                            return (
                                <div key={index}>
                                    <AirlineComponent airline={airline} onClickAction={airlineClick}></AirlineComponent>
                                </div>
                            );
                        })}
                        {/* <ShortcutButton text="Select" onClickAction={selectClickAction} disabled={airlinesSelectedState.length < 1}></ShortcutButton> */}
                    </div>

                    {/* {JSON.stringify(airlinesSelectedSizesState)} */}
                </>
            ) : (
                <>LOADING</>
            )}
        </>
    );
}

export default App;
