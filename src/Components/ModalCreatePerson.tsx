import { useState } from "react";
import { Person, savePersons } from "./Models";

export function ModalCreatePerson() {
    const [addedPerson, setAddedPerson] = useState<Person>({
        id: 0,
        firstName: '',
        lastName: '',
    });

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
                    onChange={e => setAddedPerson({
                        ...addedPerson, firstName: e.target.value
                    })}
                />
            </div>
            <div className="mb-3">
                <input type="text"
                    className="form-control"
                    placeholder="Введите фамилию сотрудника"
                    value={addedPerson.lastName}
                    onChange={e => setAddedPerson({
                        ...addedPerson, lastName: e.target.value
                    })}
                />
            </div>
            <div className="mb-3">
                <button
                    type="submit"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                >
                    Добавить сотрудника
                </button>
            </div>

        </form>
    );
}