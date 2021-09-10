
import { pens } from '../data/pens/pens.js';

export const getPenById = ( id ) => {
    return pens.find( pen => pen.id.toString() === id.toString() );
}