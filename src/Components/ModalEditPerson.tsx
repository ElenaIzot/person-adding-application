import { Person } from "./Models";

// props: { person: Person }

export function ModalEditPerson() {

    // if (!props.person) {
    //     return (
    //         <form className="form__modal">
    //             <div className="mb-3">
    //                 <input type="text"
    //                     className="form-control"
    //                     placeholder="Введите имя сотрудника" />
    //             </div>
    //             <div className="mb-3">
    //                 <input type="text"
    //                     className="form-control"
    //                     placeholder="Введите фамилию сотрудника"
    //                 />
    //             </div>
    //             <div className="mb-3">
    //                 <button
    //                     className="form__btn btn btn-primary"
    //                     type="submit"
    //                     data-bs-toggle="modal"
    //                     data-bs-target="#staticBackdrop"
    //                 >
    //                     Сохранить
    //                 </button>
    //             </div>
    //         </form>
    //     )
    // } else {
    //     <form className="form__modal">
    //         <div className="mb-3">
    //             <input type="text"
    //                 className="form-control"
    //                 placeholder="Введите имя сотрудника" />
    //             {props.person.firstName}
    //         </div>
    //         <div className="mb-3">
    //             <input type="text"
    //                 className="form-control"
    //                 placeholder="Введите фамилию сотрудника"
    //             />
    //             {props.person.lastName}
    //         </div>
    //         <div className="mb-3">
    //             <button
    //                 className="form__btn btn btn-primary"
    //                 type="submit"
    //                 data-bs-toggle="modal"
    //                 data-bs-target="#staticBackdrop"
    //             >
    //                 Сохранить
    //             </button>
    //         </div>
    //     </form>
    // }


    return (
        <form className="form__modal">
            <div className="mb-3">
                <input type="text"
                    className="form-control"
                    placeholder="Введите имя сотрудника" />
            </div>
            <div className="mb-3">
                <input type="text"
                    className="form-control"
                    placeholder="Введите фамилию сотрудника"
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
    )
}