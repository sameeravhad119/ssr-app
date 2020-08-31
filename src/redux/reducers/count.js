import { produce } from 'immer';
import { ADD, SUBTARCT } from "../types/count";

const initialState = {
    value: 0
}

const count = produce((state, action) => {
    const { type, payload } = action;

    switch (type) {
        case ADD:
            state.value = state.value + 1;
            break;

        case SUBTARCT:
            state.value = state.value - 1;
            break;
    }

}, initialState)


export default count;