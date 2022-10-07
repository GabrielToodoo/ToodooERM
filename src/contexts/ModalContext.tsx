import React, { createContext, useState } from 'react'
import { Modal } from 'react-bootstrap'

type Props = { children: React.ReactNode }

interface ModalContextProps {
  callModal: (modalContent: React.ReactElement) => void
}

export const ModalContext = createContext({} as ModalContextProps)

export const ModalProvider: React.FC<Props> = ({ children }) => {
  const [modalContent, setModalContent] = useState<React.ReactElement>(<></>)
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  function callModal(modalContent: React.ReactElement) {
    setModalContent(modalContent)
    handleShow()
  }

  return (
    <ModalContext.Provider value={{ callModal }}>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>{modalContent}</Modal.Body>
      </Modal>
      {children}
    </ModalContext.Provider>
  )
}
