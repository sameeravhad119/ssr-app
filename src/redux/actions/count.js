import { ADD, SUBTARCT } from "../types/count";

export const add = (payload) => ({
    type: ADD,
    payload
})

export const subtract = (payload) => ({
    type: SUBTARCT,
    payload
})
