import React, { createContext, Dispatch, SetStateAction, useState } from 'react'
import { Modal } from 'react-bootstrap'

type Props = { children: React.ReactNode }

interface ModalContextProps {
  callModal: (modalContent: React.ReactElement) => void
  setCloseable: Dispatch<SetStateAction<boolean>>
  handleClose: () => void
}

export const ModalContext = createContext({} as ModalContextProps)

export const ModalProvider: React.FC<Props> = ({ children }) => {
  const [modalContent, setModalContent] = useState<React.ReactElement>(<></>)
  const [show, setShow] = useState(false)
  const [closeable, setCloseable] = useState(true)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  function callModal(modalContent: React.ReactElement) {
    setModalContent(modalContent)
    handleShow()
  }

  return (
    <ModalContext.Provider value={{ callModal, setCloseable, handleClose }}>
      <Modal show={show} onHide={handleClose} keyboard={false} centered>
        {closeable && <Modal.Header closeButton></Modal.Header>}
        <Modal.Body>{modalContent}</Modal.Body>
      </Modal>
      {children}
    </ModalContext.Provider>
  )
}
