import { useState } from "react";
import { Person, savePersons } from "./Models";

let ID: number = 4;

export function ModalCreatePerson() {
    const [addedPerson, setAddedPerson] = useState<Person>({
        id: 0,
        firstName: '',
        lastName: '',
    });

    function handleChangeFirstName(e: any): void {
        setAddedPerson({
            ...addedPerson,
            id: ID++,
            firstName: e.target.value,
        });
    };

    function handleChangeLastName(e: any): void {
        setAddedPerson({
            ...addedPerson,
            lastName: e.target.value
        })
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        savePersons(addedPerson);
        setAddedPerson({
            id: 0,
            firstName: '',
            lastName: '',
        });
    };

    return (
        <form className="form__modal"
            onSubmit={handleSubmit}>
            <div className="mb-3">
                <input type="text"
                    className="form-control"
                    placeholder="Введите имя сотрудника"
                    value={addedPerson.firstName}
                    onChange={handleChangeFirstName}
                />
            </div>
            <div className="mb-3">
                <input type="text"
                    className="form-control"
                    placeholder="Введите фамилию сотрудника"
                    value={addedPerson.lastName}
                    onChange={handleChangeLastName}
                />
            </div>
            <div className="mb-3">
                <button
                    className="form__btn btn btn-primary"
                    type="submit"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                >
                    Сохранить
                </button>
            </div>

        </form>
    );
}