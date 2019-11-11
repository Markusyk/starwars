import React, {useEffect} from 'react';
import Header from "./Header";
import Content from "./Content";
import axios from "../http/star-wars-default-config";

export default function StarWarsPageWrapper() {

    useEffect(() => {
        axios.get(`/people/62/`).then(console.log);
    });
    return (
        <React.Fragment>
           <Content/>
        </React.Fragment>
        );
}
