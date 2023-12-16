
const today = new Date();
export function Birthday(props: {birthdate: string}) {
    const newDate = new Date(props.birthdate);
    const age = Math.floor((today.getTime() - newDate.getTime())/ (1000 * 60 * 60 * 24 * 365))
    return age
}