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
        </form>
    )
}