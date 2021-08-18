export function ModalCreatePerson() {

    return (
        <div className="form-container">
            <h6 className="form-label">Создание сотрудника</h6>
            <a href='#'>Назад к списку</a>
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

                <button type="submit"
                    className="btn btn-primary">
                    Сохранить</button>
            </form>
        </div>
    )
}