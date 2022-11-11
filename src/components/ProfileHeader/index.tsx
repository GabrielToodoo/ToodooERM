import React, { useContext } from 'react'
import { ModalContext } from '../../contexts/ModalContext'
import {
  submitRemoveBackgroundPhoto,
  submitRemovePhoto
} from '../../services/dash'
import theme from '../../styles/theme'
import Modal from '../Modal'
import ProfilePictureModal from '../ProfilePicture'

import {
  ProfileBackground,
  ProfileContent,
  ProfileDescription,
  ProfileBgWrapper,
  ProfileInfo,
  ProfilePicture,
  ProfileSocial,
  ProfileWrapper
} from './styles'

interface IProfileHeaderProps {
  name: string
  picture: string
  bgPicture: string
  role: string
  facebookUrl: string
  instagramUrl: string
  linkedInUrl: string
  userId: string
  loadDashboard: any
  createdAt: string
}

const ProfileHeader: React.FC<IProfileHeaderProps> = ({
  name,
  bgPicture,
  picture,
  facebookUrl,
  instagramUrl,
  linkedInUrl,
  role,
  userId,
  loadDashboard,
  createdAt
}) => {
  const { callModal, setTitle } = useContext(ModalContext)

  async function removeProfilePhoto(event: any) {
    event.preventDefault()
    const response = await submitRemovePhoto(userId)

    if (response == 200) {
      await loadDashboard()
      callModal(
        <Modal
          title="Foto de perfil removida"
          color={theme.colors.primary400}
          description="Sua foto de perfil foi removida com sucesso."
          image="/icons/success-icon.svg"
        />
      )
    } else {
      callModal(
        <Modal
          title="Ocorreu um erro"
          color={theme.colors.colorError}
          description="Não foi possivel solicitar a remoção de sua foto de perfil, tente novamente mais tarde."
          image="/icons/error-icon.svg"
        />
      )
    }
  }

  async function removeBackgroundPhoto(event: any) {
    event.preventDefault()
    const response = await submitRemoveBackgroundPhoto(userId)

    if (response == 200) {
      await loadDashboard()
      callModal(
        <Modal
          title="Foto de capa removida"
          color={theme.colors.primary400}
          description="Sua foto de capa foi removida com sucesso."
          image="/icons/success-icon.svg"
        />
      )
    } else {
      callModal(
        <Modal
          title="Ocorreu um erro"
          color={theme.colors.colorError}
          description="Não foi possivel solicitar a remoção de sua foto de capa, tente novamente mais tarde."
          image="/icons/error-icon.svg"
        />
      )
    }
  }

  return (
    <ProfileWrapper>
      <ProfileBgWrapper>
        <ProfileBackground source={bgPicture}>
          <button
            className="edit-button"
            id="dopdownEditBackgroundPhoto"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.6786 8.01558L6.76391 17.932C6.23207 18.4634 5.56585 18.8404 4.83642 19.0227L1.0329 19.974C0.893644 20.0091 0.747674 20.0075 0.609247 19.9693C0.470821 19.931 0.344673 19.8576 0.243131 19.756C0.141589 19.6545 0.0681253 19.5283 0.029919 19.3899C-0.0082874 19.2515 -0.00992964 19.1055 0.0251525 18.9663L0.976448 15.1644C1.15893 14.4342 1.53654 13.7674 2.06886 13.2353L11.9819 3.31887L16.6786 8.01558ZM19.0278 0.973C19.6503 1.59567 20 2.44007 20 3.32053C20 4.20098 19.6503 5.04538 19.0278 5.66805L17.8524 6.84016L13.1557 2.1451L14.3311 0.973C14.6395 0.664529 15.0056 0.41983 15.4085 0.25288C15.8114 0.0859294 16.2433 0 16.6795 0C17.1156 0 17.5475 0.0859294 17.9504 0.25288C18.3534 0.41983 18.7195 0.664529 19.0278 0.973V0.973Z"
                fill="white"
              />
            </svg>
          </button>
          <ul
            className="dropdown-menu"
            aria-labelledby="dopdownEditBackgroundPhoto"
          >
            <li>
              <a
                className="dropdown-item d-flex align-items-center gap-2"
                href="#"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.6 1.06192C3.72269 0.84108 3.9022 0.657066 4.11994 0.528947C4.33767 0.400827 4.5857 0.333261 4.83833 0.333252H7.16167C7.4143 0.333261 7.66233 0.400827 7.88006 0.528947C8.0978 0.657066 8.27731 0.84108 8.4 1.06192L8.82867 1.83325H10.0833C10.5917 1.83325 11.0792 2.03519 11.4386 2.39463C11.7981 2.75408 12 3.24159 12 3.74992V6.01459C11.3036 5.56848 10.4937 5.33198 9.66667 5.33325C9.273 5.33325 8.89133 5.38592 8.52867 5.48425C8.38059 5.04375 8.11996 4.64959 7.77262 4.34084C7.42527 4.03209 7.00327 3.81948 6.54844 3.72407C6.09361 3.62867 5.62175 3.65378 5.17961 3.79693C4.73748 3.94007 4.34043 4.19628 4.02782 4.54015C3.71521 4.88402 3.49789 5.30362 3.39741 5.75735C3.29692 6.21109 3.31676 6.6832 3.45495 7.12691C3.59315 7.57062 3.8449 7.97051 4.18525 8.28694C4.52561 8.60337 4.94275 8.82537 5.39533 8.93092C5.25719 9.74114 5.35078 10.5739 5.66533 11.3333H1.91667C1.40834 11.3333 0.920823 11.1313 0.561379 10.7719C0.201934 10.4124 0 9.92492 0 9.41659V3.74992C0 3.24159 0.201934 2.75408 0.561379 2.39463C0.920823 2.03519 1.40834 1.83325 1.91667 1.83325H3.17133L3.6 1.06192Z"
                    fill="#3E4DAA"
                  />
                  <path
                    d="M5.99997 4.5C5.54681 4.49937 5.10947 4.66659 4.77233 4.9694C4.4352 5.27221 4.22215 5.68915 4.17431 6.13978C4.12647 6.59041 4.24722 7.04279 4.51326 7.40964C4.7793 7.77649 5.17177 8.03181 5.61497 8.12634C6.00536 7.10356 6.76718 6.26568 7.7483 5.78C7.63057 5.40864 7.39766 5.0844 7.08333 4.85427C6.76899 4.62413 6.38954 4.50005 5.99997 4.5Z"
                    fill="#3E4DAA"
                  />
                  <path
                    d="M9.66667 13.3333C11.6917 13.3333 13.3333 11.6917 13.3333 9.66667C13.3333 7.64167 11.6917 6 9.66667 6C7.64167 6 6 7.64167 6 9.66667C6 11.6917 7.64167 13.3333 9.66667 13.3333ZM9.66667 7.33333C9.75507 7.33333 9.83986 7.36845 9.90237 7.43096C9.96488 7.49348 10 7.57826 10 7.66667V9.33333H11.6667C11.7551 9.33333 11.8399 9.36845 11.9024 9.43096C11.9649 9.49348 12 9.57826 12 9.66667C12 9.75507 11.9649 9.83986 11.9024 9.90237C11.8399 9.96488 11.7551 10 11.6667 10H10V11.6667C10 11.7551 9.96488 11.8399 9.90237 11.9024C9.83986 11.9649 9.75507 12 9.66667 12C9.57826 12 9.49348 11.9649 9.43096 11.9024C9.36845 11.8399 9.33333 11.7551 9.33333 11.6667V10H7.66667C7.57826 10 7.49348 9.96488 7.43096 9.90237C7.36845 9.83986 7.33333 9.75507 7.33333 9.66667C7.33333 9.57826 7.36845 9.49348 7.43096 9.43096C7.49348 9.36845 7.57826 9.33333 7.66667 9.33333H9.33333V7.66667C9.33333 7.57826 9.36845 7.49348 9.43096 7.43096C9.49348 7.36845 9.57826 7.33333 9.66667 7.33333Z"
                    fill="#3E4DAA"
                  />
                </svg>
                Carregar do dispositivo
              </a>
              <a
                className="dropdown-item d-flex align-items-center gap-2"
                href="#"
                onClick={removeBackgroundPhoto}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.0893 1.82143H10.0089L9.76763 1.34141C9.71652 1.23879 9.63778 1.15246 9.54028 1.09215C9.44278 1.03183 9.33039 0.999922 9.21574 1H6.2817C6.16731 0.999565 6.05511 1.03136 5.95795 1.09174C5.8608 1.15212 5.78262 1.23865 5.73237 1.34141L5.49107 1.82143H2.41071C2.30179 1.82143 2.19732 1.8647 2.1203 1.94173C2.04327 2.01875 2 2.12322 2 2.23215V3.05358C2 3.1625 2.04327 3.26697 2.1203 3.34399C2.19732 3.42102 2.30179 3.46429 2.41071 3.46429H13.0893C13.1982 3.46429 13.3027 3.42102 13.3797 3.34399C13.4567 3.26697 13.5 3.1625 13.5 3.05358V2.23215C13.5 2.12322 13.4567 2.01875 13.3797 1.94173C13.3027 1.8647 13.1982 1.82143 13.0893 1.82143ZM3.36563 12.9877C3.38521 13.3005 3.52328 13.5941 3.75171 13.8087C3.98014 14.0233 4.28177 14.1428 4.5952 14.1429H10.9048C11.2182 14.1428 11.5199 14.0233 11.7483 13.8087C11.9767 13.5941 12.1148 13.3005 12.1344 12.9877L12.6786 4.28572H2.82143L3.36563 12.9877Z"
                    fill="#EA005A"
                  />
                </svg>
                Remover foto
              </a>
            </li>
          </ul>
        </ProfileBackground>
      </ProfileBgWrapper>
      <ProfileContent>
        <ProfileInfo>
          <ProfilePicture source={picture}>
            <button
              className="edit-button"
              id="dopdownEditProfilePhoto"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.6786 8.01558L6.76391 17.932C6.23207 18.4634 5.56585 18.8404 4.83642 19.0227L1.0329 19.974C0.893644 20.0091 0.747674 20.0075 0.609247 19.9693C0.470821 19.931 0.344673 19.8576 0.243131 19.756C0.141589 19.6545 0.0681253 19.5283 0.029919 19.3899C-0.0082874 19.2515 -0.00992964 19.1055 0.0251525 18.9663L0.976448 15.1644C1.15893 14.4342 1.53654 13.7674 2.06886 13.2353L11.9819 3.31887L16.6786 8.01558ZM19.0278 0.973C19.6503 1.59567 20 2.44007 20 3.32053C20 4.20098 19.6503 5.04538 19.0278 5.66805L17.8524 6.84016L13.1557 2.1451L14.3311 0.973C14.6395 0.664529 15.0056 0.41983 15.4085 0.25288C15.8114 0.0859294 16.2433 0 16.6795 0C17.1156 0 17.5475 0.0859294 17.9504 0.25288C18.3534 0.41983 18.7195 0.664529 19.0278 0.973V0.973Z"
                  fill="white"
                />
              </svg>
            </button>
            <ul
              className="dropdown-menu"
              aria-labelledby="dopdownEditProfilePhoto"
            >
              <li>
                <a
                  className="dropdown-item d-flex align-items-center gap-2"
                  href="#"
                  onClick={e => {
                    e.preventDefault()
                    setTitle('Editar foto')
                    callModal(<ProfilePictureModal />)
                  }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.6 1.06192C3.72269 0.84108 3.9022 0.657066 4.11994 0.528947C4.33767 0.400827 4.5857 0.333261 4.83833 0.333252H7.16167C7.4143 0.333261 7.66233 0.400827 7.88006 0.528947C8.0978 0.657066 8.27731 0.84108 8.4 1.06192L8.82867 1.83325H10.0833C10.5917 1.83325 11.0792 2.03519 11.4386 2.39463C11.7981 2.75408 12 3.24159 12 3.74992V6.01459C11.3036 5.56848 10.4937 5.33198 9.66667 5.33325C9.273 5.33325 8.89133 5.38592 8.52867 5.48425C8.38059 5.04375 8.11996 4.64959 7.77262 4.34084C7.42527 4.03209 7.00327 3.81948 6.54844 3.72407C6.09361 3.62867 5.62175 3.65378 5.17961 3.79693C4.73748 3.94007 4.34043 4.19628 4.02782 4.54015C3.71521 4.88402 3.49789 5.30362 3.39741 5.75735C3.29692 6.21109 3.31676 6.6832 3.45495 7.12691C3.59315 7.57062 3.8449 7.97051 4.18525 8.28694C4.52561 8.60337 4.94275 8.82537 5.39533 8.93092C5.25719 9.74114 5.35078 10.5739 5.66533 11.3333H1.91667C1.40834 11.3333 0.920823 11.1313 0.561379 10.7719C0.201934 10.4124 0 9.92492 0 9.41659V3.74992C0 3.24159 0.201934 2.75408 0.561379 2.39463C0.920823 2.03519 1.40834 1.83325 1.91667 1.83325H3.17133L3.6 1.06192Z"
                      fill="#3E4DAA"
                    />
                    <path
                      d="M5.99997 4.5C5.54681 4.49937 5.10947 4.66659 4.77233 4.9694C4.4352 5.27221 4.22215 5.68915 4.17431 6.13978C4.12647 6.59041 4.24722 7.04279 4.51326 7.40964C4.7793 7.77649 5.17177 8.03181 5.61497 8.12634C6.00536 7.10356 6.76718 6.26568 7.7483 5.78C7.63057 5.40864 7.39766 5.0844 7.08333 4.85427C6.76899 4.62413 6.38954 4.50005 5.99997 4.5Z"
                      fill="#3E4DAA"
                    />
                    <path
                      d="M9.66667 13.3333C11.6917 13.3333 13.3333 11.6917 13.3333 9.66667C13.3333 7.64167 11.6917 6 9.66667 6C7.64167 6 6 7.64167 6 9.66667C6 11.6917 7.64167 13.3333 9.66667 13.3333ZM9.66667 7.33333C9.75507 7.33333 9.83986 7.36845 9.90237 7.43096C9.96488 7.49348 10 7.57826 10 7.66667V9.33333H11.6667C11.7551 9.33333 11.8399 9.36845 11.9024 9.43096C11.9649 9.49348 12 9.57826 12 9.66667C12 9.75507 11.9649 9.83986 11.9024 9.90237C11.8399 9.96488 11.7551 10 11.6667 10H10V11.6667C10 11.7551 9.96488 11.8399 9.90237 11.9024C9.83986 11.9649 9.75507 12 9.66667 12C9.57826 12 9.49348 11.9649 9.43096 11.9024C9.36845 11.8399 9.33333 11.7551 9.33333 11.6667V10H7.66667C7.57826 10 7.49348 9.96488 7.43096 9.90237C7.36845 9.83986 7.33333 9.75507 7.33333 9.66667C7.33333 9.57826 7.36845 9.49348 7.43096 9.43096C7.49348 9.36845 7.57826 9.33333 7.66667 9.33333H9.33333V7.66667C9.33333 7.57826 9.36845 7.49348 9.43096 7.43096C9.49348 7.36845 9.57826 7.33333 9.66667 7.33333Z"
                      fill="#3E4DAA"
                    />
                  </svg>
                  Carregar do dispositivo
                </a>
                <a
                  className="dropdown-item d-flex align-items-center gap-2"
                  href="#"
                  onClick={removeProfilePhoto}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.0893 1.82143H10.0089L9.76763 1.34141C9.71652 1.23879 9.63778 1.15246 9.54028 1.09215C9.44278 1.03183 9.33039 0.999922 9.21574 1H6.2817C6.16731 0.999565 6.05511 1.03136 5.95795 1.09174C5.8608 1.15212 5.78262 1.23865 5.73237 1.34141L5.49107 1.82143H2.41071C2.30179 1.82143 2.19732 1.8647 2.1203 1.94173C2.04327 2.01875 2 2.12322 2 2.23215V3.05358C2 3.1625 2.04327 3.26697 2.1203 3.34399C2.19732 3.42102 2.30179 3.46429 2.41071 3.46429H13.0893C13.1982 3.46429 13.3027 3.42102 13.3797 3.34399C13.4567 3.26697 13.5 3.1625 13.5 3.05358V2.23215C13.5 2.12322 13.4567 2.01875 13.3797 1.94173C13.3027 1.8647 13.1982 1.82143 13.0893 1.82143ZM3.36563 12.9877C3.38521 13.3005 3.52328 13.5941 3.75171 13.8087C3.98014 14.0233 4.28177 14.1428 4.5952 14.1429H10.9048C11.2182 14.1428 11.5199 14.0233 11.7483 13.8087C11.9767 13.5941 12.1148 13.3005 12.1344 12.9877L12.6786 4.28572H2.82143L3.36563 12.9877Z"
                      fill="#EA005A"
                    />
                  </svg>
                  Remover foto
                </a>
              </li>
            </ul>
          </ProfilePicture>
          <ProfileDescription>
            <h3>{name}</h3>
            <p>{role}</p>
            <p>Desde {new Date(createdAt).getFullYear()}</p>
          </ProfileDescription>
        </ProfileInfo>
        <ProfileSocial>
          {linkedInUrl && (
            <a href={linkedInUrl}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 0H2C0.9 0 0 0.9 0 2V16C0 17.101 0.9 18 2 18H9V11H7V8.525H9V6.475C9 4.311 10.212 2.791 12.766 2.791L14.569 2.793V5.398H13.372C12.378 5.398 12 6.144 12 6.836V8.526H14.568L14 11H12V18H16C17.1 18 18 17.101 18 16V2C18 0.9 17.1 0 16 0Z"
                  fill="#3B5998"
                />
              </svg>
            </a>
          )}
          {instagramUrl && (
            <a href={instagramUrl}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.092 17.9911C3.69058 17.9769 3.17321 17.9454 2.93806 17.898C2.5791 17.8255 2.24012 17.7156 1.95821 17.5719C1.62699 17.4031 1.33014 17.1878 1.07381 16.9318C0.816903 16.6754 0.600673 16.3783 0.431196 16.0466C0.287916 15.7662 0.178075 15.4292 0.10528 15.0723C0.0568621 14.8348 0.0248406 14.3136 0.0103245 13.9096C0.00443802 13.7444 0.0014177 13.5307 0.0014177 13.4322L0 4.56921C0 4.47105 0.0029895 4.25729 0.00884521 4.09197C0.0231147 3.69058 0.0545198 3.17321 0.102013 2.93806C0.174469 2.57913 0.284403 2.24012 0.428053 1.95821C0.596882 1.62696 0.812218 1.33017 1.06814 1.07381C1.32456 0.816934 1.62172 0.600704 1.9534 0.431196C2.23383 0.287947 2.57075 0.178075 2.92764 0.10528C3.16517 0.0568621 3.68642 0.0248406 4.09043 0.0103554C4.2555 0.00443801 4.46923 0.0014177 4.5678 0.0014177L13.4308 0C13.5289 0 13.7427 0.00295868 13.908 0.00884521C14.3094 0.0231455 14.8268 0.0545198 15.0619 0.102013C15.4209 0.1745 15.7599 0.284434 16.0418 0.428053C16.373 0.596882 16.6698 0.812249 16.9262 1.06814C17.183 1.32459 17.3993 1.62169 17.5688 1.9534C17.712 2.23383 17.8219 2.57072 17.8947 2.92764C17.9431 3.16517 17.9751 3.68645 17.9896 4.09043C17.9956 4.25553 17.9986 4.46923 17.9986 4.5678L18 13.4308C18 13.5289 17.997 13.7427 17.9911 13.908C17.9768 14.3094 17.9454 14.8268 17.898 15.0619C17.8255 15.4209 17.7156 15.7599 17.5719 16.0418C17.4031 16.373 17.1877 16.6698 16.9319 16.9262C16.6754 17.183 16.3782 17.3993 16.0466 17.5688C15.7661 17.7121 15.4292 17.8219 15.0723 17.8947C14.8348 17.9431 14.3136 17.9751 13.9096 17.9896C13.7444 17.9956 13.5307 17.9986 13.4322 17.9986L4.56921 18C4.47102 18 4.25726 17.997 4.092 17.9911Z"
                  fill="url(#paint0_radial_329_874)"
                />
                <mask
                  id="mask0_329_874"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="18"
                  height="18"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.092 17.9911C3.69058 17.9769 3.17321 17.9454 2.93806 17.898C2.5791 17.8255 2.24012 17.7156 1.95821 17.5719C1.62699 17.4031 1.33014 17.1878 1.07381 16.9318C0.816903 16.6754 0.600673 16.3783 0.431196 16.0466C0.287916 15.7662 0.178075 15.4292 0.10528 15.0723C0.0568621 14.8348 0.0248406 14.3136 0.0103245 13.9096C0.00443802 13.7444 0.0014177 13.5307 0.0014177 13.4322L0 4.56921C0 4.47105 0.0029895 4.25729 0.00884521 4.09197C0.0231147 3.69058 0.0545198 3.17321 0.102013 2.93806C0.174469 2.57913 0.284403 2.24012 0.428053 1.95821C0.596882 1.62696 0.812218 1.33017 1.06814 1.07381C1.32456 0.816934 1.62172 0.600704 1.9534 0.431196C2.23383 0.287947 2.57075 0.178075 2.92764 0.10528C3.16517 0.0568621 3.68642 0.0248406 4.09043 0.0103554C4.2555 0.00443801 4.46923 0.0014177 4.5678 0.0014177L13.4308 0C13.5289 0 13.7427 0.00295868 13.908 0.00884521C14.3094 0.0231455 14.8268 0.0545198 15.0619 0.102013C15.4209 0.1745 15.7599 0.284434 16.0418 0.428053C16.373 0.596882 16.6698 0.812249 16.9262 1.06814C17.183 1.32459 17.3993 1.62169 17.5688 1.9534C17.712 2.23383 17.8219 2.57072 17.8947 2.92764C17.9431 3.16517 17.9751 3.68645 17.9896 4.09043C17.9956 4.25553 17.9986 4.46923 17.9986 4.5678L18 13.4308C18 13.5289 17.997 13.7427 17.9911 13.908C17.9768 14.3094 17.9454 14.8268 17.898 15.0619C17.8255 15.4209 17.7156 15.7599 17.5719 16.0418C17.4031 16.373 17.1877 16.6698 16.9319 16.9262C16.6754 17.183 16.3782 17.3993 16.0466 17.5688C15.7661 17.7121 15.4292 17.8219 15.0723 17.8947C14.8348 17.9431 14.3136 17.9751 13.9096 17.9896C13.7444 17.9956 13.5307 17.9986 13.4322 17.9986L4.56921 18C4.47102 18 4.25726 17.997 4.092 17.9911Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask0_329_874)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.03721 2.31555C7.22895 2.31555 7.00201 2.3235 6.2918 2.356C5.58297 2.38865 5.09914 2.50149 4.67579 2.66707C4.23787 2.83809 3.8664 3.06685 3.49631 3.43915C3.12594 3.81132 2.89845 4.18487 2.72784 4.62511C2.56277 5.05097 2.45041 5.53766 2.41851 6.25018C2.38674 6.96438 2.37842 7.19272 2.37842 9.01113C2.37842 10.8295 2.38646 11.057 2.41864 11.7712C2.45124 12.484 2.56346 12.9706 2.72798 13.3963C2.89818 13.8367 3.12567 14.2102 3.49589 14.5824C3.86584 14.9548 4.23732 15.1842 4.67496 15.3552C5.09859 15.5208 5.58256 15.6336 6.29124 15.6663C7.00146 15.6988 7.22825 15.7067 9.03638 15.7067C10.8448 15.7067 11.071 15.6988 11.7812 15.6663C12.4901 15.6336 12.9745 15.5208 13.3981 15.3552C13.8359 15.1842 14.2068 14.9548 14.5767 14.5824C14.9471 14.2102 15.1746 13.8367 15.3452 13.3965C15.5089 12.9706 15.6212 12.4839 15.6545 11.7714C15.6864 11.0572 15.6948 10.8295 15.6948 9.01113C15.6948 7.19272 15.6864 6.96451 15.6545 6.25032C15.6212 5.53752 15.5089 5.05097 15.3452 4.62525C15.1746 4.18487 14.9471 3.81132 14.5767 3.43915C14.2064 3.06671 13.836 2.83795 13.3977 2.66707C12.9732 2.50149 12.4891 2.38865 11.7803 2.356C11.0701 2.3235 10.844 2.31555 9.03513 2.31555H9.03721ZM8.81523 3.52209H8.81531L9.03723 3.52215C10.815 3.52215 11.0257 3.52857 11.7277 3.56065C12.3769 3.5905 12.7292 3.69958 12.9639 3.79123C13.2746 3.91259 13.4962 4.05766 13.7291 4.292C13.9621 4.52635 14.1064 4.74953 14.2273 5.06199C14.3185 5.29773 14.4271 5.65204 14.4566 6.30486C14.4885 7.01069 14.4955 7.22271 14.4955 9.0096C14.4955 10.7965 14.4885 11.0085 14.4566 11.7143C14.4269 12.3671 14.3185 12.7215 14.2273 12.9572C14.1066 13.2697 13.9621 13.4921 13.7291 13.7264C13.496 13.9607 13.2748 14.1058 12.9639 14.2271C12.7295 14.3192 12.3769 14.428 11.7277 14.4578C11.0258 14.4899 10.815 14.4969 9.03723 14.4969C7.25934 14.4969 7.04863 14.4899 6.34674 14.4578C5.69757 14.4277 5.34523 14.3186 5.11039 14.227C4.79967 14.1056 4.57773 13.9606 4.34469 13.7262C4.11166 13.4919 3.96739 13.2692 3.84644 12.9566C3.7553 12.7209 3.64669 12.3666 3.61714 11.7138C3.58524 11.0079 3.57886 10.7959 3.57886 9.00792C3.57886 7.21992 3.58524 7.00901 3.61714 6.30319C3.64683 5.65037 3.7553 5.29606 3.84644 5.06004C3.96712 4.74758 4.11166 4.5244 4.34469 4.29005C4.57773 4.05571 4.79967 3.91063 5.11039 3.789C5.34509 3.69693 5.69757 3.58813 6.34674 3.55814C6.96097 3.53024 7.199 3.52187 8.43993 3.52048V3.52215C8.55584 3.52197 8.68052 3.52202 8.81507 3.52209H8.81515H8.81523ZM11.7923 5.43704C11.7923 4.99332 12.1502 4.63385 12.5913 4.63385V4.63358C13.0324 4.63358 13.3903 4.99346 13.3903 5.43704C13.3903 5.88063 13.0324 6.24051 12.5913 6.24051C12.1502 6.24051 11.7923 5.88063 11.7923 5.43704ZM9.03707 5.57263C7.14882 5.57271 5.61792 7.11224 5.61792 9.01109C5.61792 10.91 7.1489 12.4489 9.0372 12.4489C10.9255 12.4489 12.4559 10.91 12.4559 9.01109C12.4559 7.1122 10.9254 5.57263 9.03707 5.57263ZM11.2566 9.01116C11.2566 7.77847 10.2629 6.7793 9.03722 6.7793C7.81141 6.7793 6.81781 7.77847 6.81781 9.01116C6.81781 10.2437 7.81141 11.243 9.03722 11.243C10.2629 11.243 11.2566 10.2437 11.2566 9.01116Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <radialGradient
                    id="paint0_radial_329_874"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(4.78127 19.3863) rotate(-90) scale(17.8393 17.8393)"
                  >
                    <stop stop-color="#FFDD55" />
                    <stop offset="0.1" stop-color="#FFDD55" />
                    <stop offset="0.5" stop-color="#FF543E" />
                    <stop offset="1" stop-color="#C837AB" />
                  </radialGradient>
                </defs>
              </svg>
            </a>
          )}
          {facebookUrl && (
            <a href={facebookUrl}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 1.28925C0 0.577125 0.59175 0 1.32187 0H16.6781C17.4083 0 18 0.577125 18 1.28925V16.7108C18 17.4229 17.4083 18 16.6781 18H1.32187C0.59175 18 0 17.4229 0 16.7108V1.28925ZM5.56087 15.0682V6.94012H2.85975V15.0682H5.56087ZM4.21088 5.82975C5.1525 5.82975 5.73862 5.2065 5.73862 4.42575C5.72175 3.62812 5.15363 3.02175 4.22888 3.02175C3.30413 3.02175 2.7 3.62925 2.7 4.42575C2.7 5.2065 3.28612 5.82975 4.19287 5.82975H4.21088V5.82975ZM9.73238 15.0682V10.5289C9.73238 10.2859 9.75038 10.0429 9.82238 9.86963C10.017 9.38475 10.4614 8.88188 11.2084 8.88188C12.186 8.88188 12.5764 9.62663 12.5764 10.7201V15.0682H15.2775V10.4062C15.2775 7.90875 13.9455 6.74775 12.168 6.74775C10.7348 6.74775 10.0924 7.53525 9.73238 8.08988V8.118H9.71438C9.72035 8.10861 9.72635 8.09923 9.73238 8.08988V6.94012H7.03237C7.06612 7.70287 7.03237 15.0682 7.03237 15.0682H9.73238Z"
                  fill="#0072B1"
                />
              </svg>
            </a>
          )}
        </ProfileSocial>
      </ProfileContent>
    </ProfileWrapper>
  )
}

export default ProfileHeader
