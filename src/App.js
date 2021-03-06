import ListIcon from '@material-ui/icons/List';
import {GridFullWidthSection, Grid, GridCell, GridContent, GridCore} from "./ComponentsLib/Grid";


import {useState} from "react";
import {H1, H2, H3, H4, H5, P, H6} from "./ComponentsLib/Typography";
import breakpointsMaxWidth from "./ComponentsLib/breakpoints";
import NavApp from "./Components/MainLayout/NavApp";
import {BodyApp} from "./Components/MainLayout/BodyApp";
import MenuApp from "./Components/MainLayout/MenuApp";
import {Flex} from "./ComponentsLib/Flex";
import styled from "styled-components";
import {PriorityButton} from "./Components/Input/PriorityButton";
import {PriorityButtons} from "./Components/Input/PriorityButtons";
import {useSelector} from "react-redux";
import {Editor} from "./Components/Editor/Editor";

let {tablet, mobileL, mobileS} = breakpointsMaxWidth


const AppGridContent = styled(GridContent)`

`

function App() {


    return (<>
            <Flex justifyContent="center">
                <AppGridContent>
                    <NavApp/>
                    <BodyApp/>
                </AppGridContent>
            </Flex>
        </>
    )

}

export default App;

