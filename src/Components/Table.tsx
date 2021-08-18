export function Table() {
    return (
        <div className='wrapper'>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Имя</th>
                        <th scope="col">Фамилия</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>
                            <div className="btn-group" role="group"
                                aria-label="Basic mixed styles example">
                                <button type="button"
                                    className="btn btn-success">Редактировать</button>
                                <button type="button"
                                    className="btn btn-danger">Удалить</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>
                            <div className="btn-group" role="group"
                                aria-label="Basic mixed styles example">
                                <button type="button"
                                    className="btn btn-success">Редактировать</button>
                                <button type="button"
                                    className="btn btn-danger">Удалить</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>Bird</td>
                        <td>
                            <div className="btn-group" role="group"
                                aria-label="Basic mixed styles example">
                                <button type="button"
                                    className="btn btn-success">Редактировать</button>
                                <button type="button"
                                    className="btn btn-danger">Удалить</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <button type="button" className="btn btn-primary">Добавить сотрудника</button>
        </div>
    )
}