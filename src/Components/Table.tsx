import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { ModalCreatePerson } from "./ModalCreatePerson";
import { ModalEditPerson } from './ModalEditPerson';
import cancel from "../img/cancel.png";
import pencil from "../img/pencil.png";
import user from "../img/user.png";
import { deletePerson, getPersons, Person } from "./Models"

export function Table() {
    const [persons, setPersons] = useState<Array<Person>>([]);
    const [show, setShow] = useState(false);
    const [showCreationPerson, setShowCreationPerson] = useState(false);
    const [showDeletePerson, setShowDeletePerson] = useState(false);

    useEffect(() => {
        getPersons().then(response => {
            return response
        }).then((persons: Person[]) => {
            setPersons(persons)
        })
    });

    const onPeopleCreateSubmit = () => {
        setShow(false)
    }

    const onPeopleCreateHide = () => setShow(false);
    const onPeopleCreateShow = () => setShow(true);

    const handleCreateClose = () => setShowCreationPerson(false);
    const handleCreateShow = () => setShowCreationPerson(true);

    // const handleDeleteClose = () => setShowDeletePerson(false);
    const handleDeleteShow = () => setShowDeletePerson(true);
    const handleDeleteClose = () => {
        setShowDeletePerson(false)
    };


    console.log('persons', persons);

    let renderedPersonInTable = persons.map((person, id) => {
        return (
            <tr key={person.id}>
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
                <thead className="header__table">
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
                onClick={onPeopleCreateShow}
            >
                Добавить сотрудника
            </button>

            <Modal
                show={show}
                onHide={onPeopleCreateHide}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton className="modal__header">
                    <Modal.Title>Создание сотрудника</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <a href='/'>Назад к списку</a>
                </Modal.Body>
                <ModalCreatePerson onSubmit={onPeopleCreateSubmit}/>
            </Modal>

            <Modal
                show={showCreationPerson}
                onHide={handleCreateClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton className="modal__header">
                    <Modal.Title>Редактирование сотрудника</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <a href='#'>Назад к списку</a>
                </Modal.Body>
                <ModalEditPerson />
            </Modal>

            <Modal
                show={showDeletePerson}
                onHide={handleDeleteClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton className="modal__header">
                    <Modal.Title>Удаление сотрудника</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <a href='#'>Назад к списку</a>
                </Modal.Body>
                <Modal.Body>
                    <form className="form__modal">
                        <div className="mb-3">
                            Вы действительно хотите удалить сотрудника?
                        </div>
                        <div className="mb-3">
                            <button
                                className="form__btn btn btn-primary"
                                type="submit"
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop"
                            >
                                Удалить
                            </button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    )
}