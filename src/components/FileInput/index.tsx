import React, { HTMLAttributes, useRef } from 'react'

import { FileInputFakeBox, FileInputWrapper } from './styles'

interface IFileInputProps extends HTMLAttributes<HTMLInputElement> {
  id: string
  label: string
}

const FileInput: React.FC<IFileInputProps> = ({ id, label, ...props }) => {
  const inputRef = useRef<HTMLInputElement>()

  const focusInput = () => {
    inputRef?.current?.click()
  }

  return (
    <FileInputWrapper {...props}>
      <label htmlFor={id}>{label}</label>
      <input className="d-none" id="fileUpload" type="file" ref={inputRef} />
      <FileInputFakeBox onClick={focusInput}>
        <p className="body-2 m-auto position-relative">
          <span className="upload-icon">
            <svg
              width="24"
              height="16"
              viewBox="0 0 24 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.35 6.04C19.0141 4.33772 18.0976 2.80486 16.7571 1.70325C15.4165 0.601633 13.7351 -0.000392242 12 1.91737e-07C9.11 1.91737e-07 6.6 1.64 5.35 4.04C3.88023 4.19883 2.52101 4.89521 1.53349 5.99532C0.545971 7.09543 -0.000171702 8.52168 4.04928e-08 10C4.04928e-08 11.5913 0.632141 13.1174 1.75736 14.2426C2.88258 15.3679 4.4087 16 6 16H19C19.6566 16 20.3068 15.8707 20.9134 15.6194C21.52 15.3681 22.0712 14.9998 22.5355 14.5355C22.9998 14.0712 23.3681 13.52 23.6194 12.9134C23.8707 12.3068 24 11.6566 24 11C24 8.36 21.95 6.22 19.35 6.04ZM19 14H6C4.93913 14 3.92172 13.5786 3.17157 12.8284C2.42143 12.0783 2 11.0609 2 10C2 7.95 3.53 6.24 5.56 6.03L6.63 5.92L7.13 4.97C7.58988 4.07478 8.28787 3.32381 9.14712 2.79979C10.0064 2.27577 10.9936 1.99902 12 2C14.62 2 16.88 3.86 17.39 6.43L17.69 7.93L19.22 8.04C19.9717 8.09056 20.6764 8.42399 21.1922 8.97319C21.708 9.52238 21.9966 10.2466 22 11C22 11.7956 21.6839 12.5587 21.1213 13.1213C20.5587 13.6839 19.7956 14 19 14ZM8 9H10.55V12H13.45V9H16L12 5L8 9Z"
                fill="#5168F4"
              />
            </svg>
          </span>
          Clique ou arraste seus arquivos aqui
        </p>
      </FileInputFakeBox>
    </FileInputWrapper>
  )
}

export default FileInput
