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
    const [creatModalState, setCreatModalState] = useState({
        isVisible: false,
        person: {
            id: -1,
            firstName: '',
            lastName: '',
        }
    });

    const [personToDeleteId, setPersonToDeleteId] = useState(-1);
    const [showDeletePerson, setShowDeletePerson] = useState(false);

    useEffect(() => {
        getPersons().then((persons: Person[]) => {
            setPersons(persons)
        })
    });

    const onPeopleCreateSubmit = () => {
        getPersons().then((persons: Person[]) => {
            setPersons(persons)
            setCreatModalState({
                ...creatModalState,
                isVisible: false,
            })
        });
    };


    const showPeopleDeleteDialog = (id: number) => {
        setPersonToDeleteId(id);
        setShowDeletePerson(true);
    }
    const showCreatePersonModal = () => {
        setCreatModalState({
            ...creatModalState,
            isVisible: true,
            person: {
                id: -1,
                firstName: '',
                lastName: '',
            }
        })

    }

    const showPeopleEditDialog = (person: Person): void => {
        setCreatModalState({
            ...creatModalState,
            isVisible: true,
            person: {
                id: person.id,
                firstName: person.firstName,
                lastName: person.lastName,
            }
        })
    }

    const onPersonDeletedConfirmed = (e: any) => {
        e.preventDefault();
        deletePerson(personToDeleteId!).then(() => {
            getPersons().then((persons: Person[]) => {
                setPersons(persons);
                setShowDeletePerson(false)
            });
        });

    }

    let renderedPersonInTable = persons.map((person) => {
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
                    <div className="btns-group" role="group">
                        <button type="button"
                            className="btn-edit btn btn-sm"
                            onClick={() => showPeopleEditDialog(person)}>
                            <img className='icon'
                                src={pencil}
                                alt={'edit'} />
                        </button>
                        <button type="button"
                            className="btn-delete btn btn-sm"
                            onClick={() => showPeopleDeleteDialog(person.id!)}
                        >
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
                onClick={showCreatePersonModal}
            >
                Добавить сотрудника
            </button>

            {/* <Modal
                show={show}
                onHide={() => setShow(false)}
                backdrop="static"
                keyboard={false}>
                <Modal.Header closeButton className="modal__header">
                    <Modal.Title>Создание сотрудника</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <a href='/'>Назад к списку</a>
                </Modal.Body>
                <ModalCreatePerson onSubmit={onPeopleCreateSubmit} />
            </Modal> */}


            <Modal
                show={creatModalState.isVisible}
                onHide={() => setCreatModalState({
                    ...creatModalState,
                    isVisible: false
                })}

                backdrop="static"
                keyboard={false}>
                <Modal.Header closeButton className="modal__header">
                    <Modal.Title>Редактирование сотрудника</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <a href='#'>Назад к списку</a>
                </Modal.Body>
                <ModalCreatePerson person={creatModalState.person} onSubmit={onPeopleCreateSubmit} />
            </Modal>

            <Modal
                show={showDeletePerson}
                onHide={() => setShowDeletePerson(false)}
                backdrop="static"
                keyboard={false}>
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
                                onClick={onPersonDeletedConfirmed}>
                                Удалить
                            </button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    )
}