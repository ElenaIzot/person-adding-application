export interface Person {
    id: number|null,
    firstName: string,
    lastName: string,
};

//API взаимодействия: GET api/v1/persons
let ID: number = 1;

let _PERSONS_FROM_SERVER: Person[] = [
    {
        id: ID++,
        firstName: 'Jo',
        lastName: 'Green',
    },
    {
        id: ID++,
        firstName: 'Ly',
        lastName: 'Water',
    },
    {
        id: ID++,
        firstName: 'Jack',
        lastName: 'Black',
    },
];


export async function getPersons(): Promise<Person[]> {
    return _PERSONS_FROM_SERVER;
};

export async function savePersons(person: Person): Promise<void> {
    if (!person.id) {
        person.id = ID++;
        _PERSONS_FROM_SERVER.push(person);
    } else {
        for (let i = 0; i < _PERSONS_FROM_SERVER.length; i++) {
            if (_PERSONS_FROM_SERVER[i].id == person.id) {
                _PERSONS_FROM_SERVER[i] = person;
                break;
            }
        }
    }
};

export async function deletePerson(person: Person): Promise<void> {
    _PERSONS_FROM_SERVER = _PERSONS_FROM_SERVER.filter(elem => elem.id !== person.id);
};