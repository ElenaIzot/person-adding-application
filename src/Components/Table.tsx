import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { ModalCreatePerson } from "./ModalCreatePerson";
import {ModalEditPerson} from './ModalEditPerson';

export function Table() {
    const [show, setShow] = useState(false);
    const [showCreationPerson, setShowCreationPerson] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleCreateClose = () => setShowCreationPerson(false)
    const handleCreateShow = () => setShowCreationPerson(true)

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
                                    className="btn btn-success"
                                    onClick={handleCreateShow}
                                >Редактировать</button>
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

            <button type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                onClick={handleShow}
            >
                Добавить сотрудника
            </button>


            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Создание сотрудника</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <a href='#'>Назад к списку</a>
                </Modal.Body>
                <ModalCreatePerson />
                <Modal.Footer>

                    <Button variant="primary">Сохранить
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal
                show={showCreationPerson}
                onHide={handleCreateClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Редактирование сотрудника</Modal.Title>
                </Modal.Header>
                
                <Modal.Body>
                    <a href='#'>Назад к списку</a>
                </Modal.Body>

                <ModalEditPerson />
                <Modal.Footer>
                    <Button variant="primary">
                        Сохранить
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}