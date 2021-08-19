import { useState } from "react";
import { Person, savePersons as savePerson } from "./Models";

export function ModalCreatePerson(props: { onSubmit: () => void }) {
    const [addedPerson, setPerson] = useState<Person>({
        id: null,
        firstName: '',
        lastName: '',
    });

    const [canSubmit, setCanSubmit] = useState(false);

    function handleChange(e: any) {
        const name = e.target.name;
        const person = {
            ...addedPerson,
            [name]: e.target.value
        };
        setPerson(person);
        setCanSubmit(!!person.firstName && !!person.lastName)
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        savePerson(addedPerson).then(() => {
            console.log('сохранено');
            props.onSubmit();
        })
    };

    if (!addedPerson.id) {
        return (
            <form className="form__modal"
                onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input type="text"
                        className="form-control"
                        placeholder="Введите имя сотрудника"
                        value={addedPerson.firstName}
                        name='firstName'
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <input type="text"
                        className="form-control"
                        placeholder="Введите фамилию сотрудника"
                        value={addedPerson.lastName}
                        name='lastName'
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <button
                        className="form__btn btn btn-primary"
                        type="submit"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                        disabled={!canSubmit}
                    >
                        Сохранить
                    </button>
                </div>
            </form>
        );
    } else {
        return (
            <form className="form__modal">
                <div className="mb-3">
                    <input type="text"
                        className="form-control"
                        placeholder="Введите имя сотрудника" />
                    {addedPerson.firstName}
                </div>
                <div className="mb-3">
                    <input type="text"
                        className="form-control"
                        placeholder="Введите фамилию сотрудника"
                    />
                    {addedPerson.lastName}
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
        )
    }

    // return (
    //     <form className="form__modal"
    //         onSubmit={handleSubmit}>
    //         <div className="mb-3">
    //             <input type="text"
    //                 className="form-control"
    //                 placeholder="Введите имя сотрудника"
    //                 value={addedPerson.firstName}
    //                 name='firstName'
    //                 onChange={handleChange}
    //             />
    //         </div>
    //         <div className="mb-3">
    //             <input type="text"
    //                 className="form-control"
    //                 placeholder="Введите фамилию сотрудника"
    //                 value={addedPerson.lastName}
    //                 name='lastName'
    //                 onChange={handleChange}
    //             />
    //         </div>
    //         <div className="mb-3">
    //             <button
    //                 className="form__btn btn btn-primary"
    //                 type="submit"
    //                 data-bs-toggle="modal"
    //                 data-bs-target="#staticBackdrop"
    //                 disabled={!canSubmit}
    //             >
    //                 Сохранить
    //             </button>
    //         </div>
    //     </form>
    // );
}