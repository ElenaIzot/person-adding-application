import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { ModalCreatePerson } from "./ModalCreatePerson";
import { ModalEditPerson } from './ModalEditPerson';
import cancel from "../img/cancel.png";
import pencil from "../img/pencil.png";
import user from "../img/user.png";
import { getPersons, Person, savePersons } from "./Models"


export function Table() {
    const [persons, setPersons] = useState<Array<Person>>([]);
    const [show, setShow] = useState(false);
    const [showCreationPerson, setShowCreationPerson] = useState(false);
    const [showDeletePerson, setShowDeletePerson] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleCreateClose = () => setShowCreationPerson(false)
    const handleCreateShow = () => setShowCreationPerson(true)

    const handleDeleteClose = () => setShowDeletePerson(false)
    const handleDeleteShow = () => setShowDeletePerson(true)

    getPersons().then(response => {
        return response
    }).then(personsArray => {
        setPersons(personsArray)
    })


    console.log('persons', persons);

    let renderedPersonInTable = persons.map((person, id) => {
        return (
            <tr key={id}>
                <th scope="row user-icon">
                    <img className='icon user-icon'
                        src={user}
                        alt={'edit'} />
                </th>
                <td>{person.firstName}</td>
                <td>{person.lastName}</td>
                <td>
                    <div role="group"
                        aria-label="Basic mixed styles example">
                        <button type="button"
                            className="btn-edit btn btn-sm"
                            onClick={handleCreateShow}>
                            <img className='icon'
                                src={pencil}
                                alt={'edit'} />
                        </button>
                        <button type="button"
                            className="btn-delete btn btn-sm"
                            onClick={handleDeleteShow}>
                            <img className='icon'
                                src={cancel}
                                alt={'delete'}
                            />
                        </button>
                    </div>
                </td>
            </tr>
        )
    });


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
                    {renderedPersonInTable}
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
                    <a href='/'>Назад к списку</a>
                </Modal.Body>
                <ModalCreatePerson />
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

            <Modal
                show={showDeletePerson}
                onHide={handleDeleteClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Удаление сотрудника</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <a href='#'>Назад к списку</a>
                </Modal.Body>
                <Modal.Body>
                    <div>Вы действительно хотите удалить сотрудника?</div>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary">
                        Сохранить
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}