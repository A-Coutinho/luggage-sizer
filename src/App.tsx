import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import "./App.css";
import { AirlineComponent } from "./components/airlinecomponent";
import { LDB_VIEW_AIRLINES } from "./helpers/constants";
import type { Airline } from "./helpers/types";

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY);

function App() {
    const [airlinesSelectedState, airlinesSelectedStateSet] = useState<Airline[]>([]);
    const [teste, testeSet] = useState<boolean>(false);

    const [airlinesDB, airlinesDBSet] = useState<Airline[] | undefined>(undefined);

    useEffect(() => {
        getTodos();

        return () => {};
    }, [teste]);

    async function getTodos() {
        const { data: allAirlines } = await supabase.from(LDB_VIEW_AIRLINES).select();

        if (allAirlines!.length > 1) {
            airlinesDBSet(allAirlines!);
        }
    }

    function airlineClick(element: Airline) {
        if (airlinesSelectedState.find((e) => e.code === element.code)) {
            airlinesSelectedStateSet(airlinesSelectedState.filter((e) => e.code !== element.code).sort((a, b) => a.name.localeCompare(b.name)));
        } else {
            airlinesSelectedState.push(element);
            airlinesSelectedStateSet(airlinesSelectedState.sort((a, b) => a.name.localeCompare(b.name)));
        }

        testeSet(!teste);
    }

    function isAirlineSelected(_airline: Airline) {
        if (airlinesSelectedState.filter((e) => e.code !== _airline.code)) return true;
        else return false;
    }

    return (
        <>
            {airlinesDB ? (
                <>
                    <div style={{ display: "flex" }}>
                        {airlinesDB.map((airline, index) => {
                            return (
                                <div key={index}>
                                    <AirlineComponent isSelected={isAirlineSelected(airline)} airline={airline} onClickAction={airlineClick}></AirlineComponent>
                                </div>
                            );
                        })}
                        {/* <ShortcutButton text="Select" onClickAction={selectClickAction} disabled={airlinesSelectedState.length < 1}></ShortcutButton> */}
                    </div>
                </>
            ) : (
                <>LOADING</>
            )}
        </>
    );
}

export default App;
