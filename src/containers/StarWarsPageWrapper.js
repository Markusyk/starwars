import React, {useEffect} from 'react';
import Header from "./Header";
import Content from "./Content";
import axios from "../http/star-wars-default-config";

export default function StarWarsPageWrapper(props) {

    return (
        <React.Fragment>
           <Content/>
        </React.Fragment>
        );
}
