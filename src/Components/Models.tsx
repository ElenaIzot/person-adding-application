export interface Person {
    id: number,
    firstName: string,
    lastName: string,
};

//API взаимодействия: GET api/v1/persons

const _PERSONS_FROM_SERVER: Person[] = [
    {
        id: 1,
        firstName: 'Jo',
        lastName: 'Green',
    },
    {
        id: 2,
        firstName: 'Ly',
        lastName: 'Water',
    },
    {
        id: 3,
        firstName: 'Jack',
        lastName: 'Black',
    },
];


export async function getPersons(): Promise<Person[]> {
    return _PERSONS_FROM_SERVER;
};

export async function savePersons(person: Person) {
    _PERSONS_FROM_SERVER.push(person);
};