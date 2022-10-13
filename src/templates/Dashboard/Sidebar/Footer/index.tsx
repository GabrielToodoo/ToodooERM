import React, { useContext } from 'react'

import { AuthContext } from '../../../../contexts/AuthContext'

import { Wrapper, Avatar, Profile, Button } from './styles'

const Footer = () => {
  const { user, logOut } = useContext(AuthContext)

  return (
    <Wrapper>
      <Avatar src={user?.picture} />
      <Profile>
        <strong>{user?.name?.split(' ').slice(0, 3).join(' ')}</strong>
        <p className="text-muted">{user ? user.email : ''}</p>
      </Profile>
      <Button>
        <a
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={{ cursor: 'pointer' }}
        >
          <img
            src="/icons/more-options.svg"
            width="30"
            height="30"
            alt="More options"
          />
        </a>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <a className="dropdown-item" href="#" onClick={logOut}>
              <img src="/icons/feather_log-out.svg" alt="logout" /> Sair
            </a>
          </li>
        </ul>
      </Button>
    </Wrapper>
  )
}

export default Footer
