import {storeDev} from "./store.dev";
import {storeProd} from "./store.prod";

export const store =
    (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ?
        storeDev : storeProd;