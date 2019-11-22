import {useLocation} from "react-router-dom";
import {sliderDefault} from "../constants/filter.constants";

export function useQueryFilterParams() {
    const query = new URLSearchParams(useLocation().search);
    return {
        mass: query.has('mass') ?
            query.get('mass').split(',') :
            [sliderDefault.mass.lower, sliderDefault.mass.bigger],
        height: query.has('height') ? query.get('height').split(',')
            : [sliderDefault.height.lower, sliderDefault.height.bigger],
        nameIncludes: query.has('nameIncludes') ? query.get('nameIncludes') : '',
        urlSearchParams: query
    }
}
