import React from 'react'

interface IErrorModalProps {
  title: string
  description: string
  error?: boolean
}

const ErrorModal: React.FC<IErrorModalProps> = ({
  title,
  description,
  error
}) => {
  return (
    <div className="modal-toodoo-container">
      <img
        src={error ? '/icons/error-icon.svg' : '/icons/success-icon.svg'}
        alt="Error Icon"
      />
      <div className="mt-3">
        <h4 className="modal-error-title">{title}</h4>
        <p className="text-muted mb-5">{description}</p>
      </div>
    </div>
  )
}

export default ErrorModal
