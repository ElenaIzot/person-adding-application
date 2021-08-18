import { Person } from "./Models";

export function ModalEditPerson() {

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