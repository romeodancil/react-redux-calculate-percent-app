import { CACULATE, REMOVE } from './types'

export const calculateForm = (props, callback) => dispath => {
    const { price, tip } = props
    const percent = parseInt(tip, 10) / 100
    const total = percent * parseInt(price, 10)
    const id = Math.random().toString(36).slice(2)
    
    const existingState = JSON.parse(localStorage.getItem('history'));
    const currentState = { price, total, tip, id }
    
    if (existingState && existingState.history.length > 0) {
        existingState.history.push(currentState)
        dispath({ type: CACULATE, payload: existingState.history});
    }
    else {
        dispath({ type: CACULATE, payload: [currentState]});
    }


    callback(total);
}

export const remove = (props, callback) => dispath => {
    dispath({ type: REMOVE, payload: props});
}