const today = new Date();
const myBday = new Date('1992-01-09');
const age = Math.floor((today.getTime() - myBday.getTime())/ (1000 * 60 * 60 * 24 * 365))




export function Birthday() {
    return age
}