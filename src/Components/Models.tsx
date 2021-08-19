export interface Person {
    id: number,
    firstName: string,
    lastName: string,
};

let ID: number = 1;

let _PERSONS_FROM_SERVER: Person[] = [
    {
        id: ID++,
        firstName: 'John',
        lastName: 'Boo',
    },
    {
        id: ID++,
        firstName: 'Li',
        lastName: 'Robinson',
    },
    {
        id: ID++,
        firstName: 'Jack',
        lastName: 'Green',
    },
];


export async function getPersons(): Promise<Person[]> {
    return _PERSONS_FROM_SERVER;
};

export async function savePersons(person: Person): Promise<void> {
    if (person.id == -1) {
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

export async function deletePerson(id: number): Promise<void> {
    _PERSONS_FROM_SERVER = _PERSONS_FROM_SERVER.filter(elem => elem.id !== id);
};