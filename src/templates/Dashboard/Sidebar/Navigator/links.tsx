export interface Link {
  name: string
  path: string
  icon: any
}

export interface Category {
  name: string
  level: string[]
  path?: string
  childrens?: Link[]
  icon?: any
  expanded?: boolean
}

export const links: Category[] = [
  {
    name: 'Home',
    level: ['Employee', 'Administrator'],
    path: '/dashboard',
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.0142 4.36012C11.2923 4.12725 11.6406 4 12 4C12.3594 4 12.7077 4.12725 12.9858 4.36012L18.4108 8.88291C18.5954 9.03766 18.744 9.23245 18.8459 9.45316C18.9478 9.67388 19.0004 9.915 19 10.1591V18.363C19 19.267 18.2951 19.9996 17.425 19.9996H15.325C14.4549 19.9996 13.75 19.267 13.75 18.363V14.4208C13.75 14.1198 13.5153 13.8756 13.225 13.8756H10.775C10.4851 13.8756 10.25 14.1198 10.25 14.4208V18.3634C10.25 19.2674 9.54506 20 8.675 20H6.575C5.70536 19.9996 5 19.267 5 18.363V10.1591C4.99956 9.915 5.05219 9.67388 5.1541 9.45316C5.25601 9.23245 5.40464 9.03766 5.58924 8.88291L11.0142 4.36012Z"
          fill="currentColor"
        />
      </svg>
    )
  },
  {
    name: 'Colaborador',
    level: ['Employee', 'Administrator'],
    expanded: true,
    childrens: [
      {
        name: 'Perfil',
        path: '/dashboard/profile',
        icon: (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4C10.9391 4 9.92172 4.42143 9.17157 5.17157C8.42143 5.92172 8 6.93913 8 8C8 9.06087 8.42143 10.0783 9.17157 10.8284C9.92172 11.5786 10.9391 12 12 12C13.0609 12 14.0783 11.5786 14.8284 10.8284C15.5786 10.0783 16 9.06087 16 8C16 6.93913 15.5786 5.92172 14.8284 5.17157C14.0783 4.42143 13.0609 4 12 4Z"
              fill="currentColor"
            />
            <path
              d="M7.009 13C6.74564 12.9989 6.48466 13.0499 6.24102 13.1499C5.99739 13.2499 5.7759 13.3971 5.58926 13.5829C5.40261 13.7687 5.25448 13.9895 5.15337 14.2327C5.05225 14.4759 5.00013 14.7366 5 15C5 16.691 5.833 17.966 7.135 18.797C8.417 19.614 10.145 20 12 20C13.855 20 15.583 19.614 16.865 18.797C18.167 17.967 19 16.69 19 15C19 14.4696 18.7893 13.9609 18.4142 13.5858C18.0391 13.2107 17.5304 13 17 13H7.009Z"
              fill="currentColor"
            />
          </svg>
        )
      },
      {
        name: 'Meu time',
        path: '/dashboard/team',
        icon: (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.3333 3C11.9835 3 11.6371 3.06893 11.3138 3.20287C10.9906 3.3368 10.697 3.5331 10.4496 3.78058C10.2022 4.02805 10.006 4.32185 9.8721 4.64519C9.73822 4.96853 9.66932 5.31508 9.66932 5.66506C9.66932 6.01504 9.73822 6.3616 9.8721 6.68494C10.006 7.00828 10.2022 7.30207 10.4496 7.54955C10.697 7.79702 10.9906 7.99333 11.3138 8.12726C11.6371 8.26119 11.9835 8.33013 12.3333 8.33013C13.0399 8.33013 13.7175 8.04934 14.217 7.54955C14.7166 7.04975 14.9973 6.37188 14.9973 5.66506C14.9973 4.95824 14.7166 4.28037 14.217 3.78058C13.7175 3.28078 13.0399 3 12.3333 3Z"
              fill="currentColor"
            />
            <path
              d="M18.3333 4.33127C17.8029 4.33127 17.2942 4.54207 16.9191 4.91729C16.544 5.29251 16.3333 5.80142 16.3333 6.33207C16.3333 6.86271 16.544 7.37162 16.9191 7.74685C17.2942 8.12207 17.8029 8.33287 18.3333 8.33287C18.8638 8.33287 19.3725 8.12207 19.7475 7.74685C20.1226 7.37162 20.3333 6.86271 20.3333 6.33207C20.3333 5.80142 20.1226 5.29251 19.7475 4.91729C19.3725 4.54207 18.8638 4.33127 18.3333 4.33127Z"
              fill="currentColor"
            />
            <path
              d="M6.33386 4.3313C5.80343 4.3313 5.29472 4.5421 4.91965 4.91732C4.54458 5.29254 4.33386 5.80145 4.33386 6.3321C4.33386 6.86274 4.54458 7.37165 4.91965 7.74687C5.29472 8.1221 5.80343 8.33289 6.33386 8.33289C6.86429 8.33289 7.373 8.1221 7.74807 7.74687C8.12315 7.37165 8.33386 6.86274 8.33386 6.3321C8.33386 5.80145 8.12315 5.29254 7.74807 4.91732C7.373 4.5421 6.86429 4.3313 6.33386 4.3313Z"
              fill="currentColor"
            />
            <path
              d="M8.33337 10.9912C8.33584 10.639 8.4774 10.3022 8.72718 10.054C8.97696 9.8059 9.31469 9.66666 9.66671 9.66666H15C15.3537 9.66666 15.6928 9.8072 15.9428 10.0573C16.1929 10.3075 16.3334 10.6468 16.3334 11.0005V15.0021C16.3333 15.4219 16.2676 15.8391 16.1387 16.2386C15.8435 17.1439 15.2353 17.9143 14.4234 18.4113C13.6115 18.9084 12.649 19.0997 11.7089 18.9507C10.7687 18.8018 9.91241 18.3224 9.29375 17.5987C8.67508 16.875 8.33458 15.9544 8.33337 15.0021V10.9912Z"
              fill="currentColor"
            />
            <path
              d="M7 11.0005C7 10.5136 7.12933 10.0588 7.35733 9.66662H4.33333C3.97971 9.66662 3.64057 9.80716 3.39052 10.0573C3.14048 10.3075 3 10.6467 3 11.0005V14.3352C2.99982 14.8811 3.13363 15.4188 3.3897 15.9009C3.64576 16.383 4.01623 16.7949 4.46859 17.1003C4.92094 17.4057 5.44134 17.5954 5.98407 17.6526C6.52681 17.7098 7.07528 17.6328 7.58133 17.4284C7.19757 16.6768 6.99829 15.8447 7 15.0007V11.0005Z"
              fill="currentColor"
            />
            <path
              d="M17.6666 11.0005V15.0021C17.6666 15.8758 17.4573 16.7001 17.0853 17.4284C17.5913 17.6328 18.1398 17.7098 18.6826 17.6526C19.2253 17.5954 19.7457 17.4058 20.198 17.1003C20.6504 16.7949 21.0209 16.3831 21.2769 15.9009C21.533 15.4188 21.6668 14.8812 21.6666 14.3352V11.0005C21.6666 10.6468 21.5262 10.3075 21.2761 10.0573C21.0261 9.8072 20.6869 9.66666 20.3333 9.66666H17.3093C17.536 10.0588 17.6666 10.5137 17.6666 11.0005Z"
              fill="currentColor"
            />
          </svg>
        )
      },
      {
        name: 'Dados corporativos',
        path: '/dashboard/corp',
        icon: (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 8.5V4H7.5C7.10218 4 6.72064 4.15804 6.43934 4.43934C6.15804 4.72064 6 5.10218 6 5.5V18.5C6 18.8978 6.15804 19.2794 6.43934 19.5607C6.72064 19.842 7.10218 20 7.5 20H16.5C16.8978 20 17.2794 19.842 17.5607 19.5607C17.842 19.2794 18 18.8978 18 18.5V10H13.5C13.1022 10 12.7206 9.84196 12.4393 9.56066C12.158 9.27936 12 8.89782 12 8.5ZM8 12.5C8 12.3674 8.05268 12.2402 8.14645 12.1464C8.24021 12.0527 8.36739 12 8.5 12C8.63261 12 8.75979 12.0527 8.85355 12.1464C8.94732 12.2402 9 12.3674 9 12.5C9 12.6326 8.94732 12.7598 8.85355 12.8536C8.75979 12.9473 8.63261 13 8.5 13C8.36739 13 8.24021 12.9473 8.14645 12.8536C8.05268 12.7598 8 12.6326 8 12.5ZM8 14.5C8 14.3674 8.05268 14.2402 8.14645 14.1464C8.24021 14.0527 8.36739 14 8.5 14C8.63261 14 8.75979 14.0527 8.85355 14.1464C8.94732 14.2402 9 14.3674 9 14.5C9 14.6326 8.94732 14.7598 8.85355 14.8536C8.75979 14.9473 8.63261 15 8.5 15C8.36739 15 8.24021 14.9473 8.14645 14.8536C8.05268 14.7598 8 14.6326 8 14.5ZM8 16.5C8 16.3674 8.05268 16.2402 8.14645 16.1464C8.24021 16.0527 8.36739 16 8.5 16C8.63261 16 8.75979 16.0527 8.85355 16.1464C8.94732 16.2402 9 16.3674 9 16.5C9 16.6326 8.94732 16.7598 8.85355 16.8536C8.75979 16.9473 8.63261 17 8.5 17C8.36739 17 8.24021 16.9473 8.14645 16.8536C8.05268 16.7598 8 16.6326 8 16.5ZM10 12.5C10 12.3674 10.0527 12.2402 10.1464 12.1464C10.2402 12.0527 10.3674 12 10.5 12H15.5C15.6326 12 15.7598 12.0527 15.8536 12.1464C15.9473 12.2402 16 12.3674 16 12.5C16 12.6326 15.9473 12.7598 15.8536 12.8536C15.7598 12.9473 15.6326 13 15.5 13H10.5C10.3674 13 10.2402 12.9473 10.1464 12.8536C10.0527 12.7598 10 12.6326 10 12.5ZM10 14.5C10 14.3674 10.0527 14.2402 10.1464 14.1464C10.2402 14.0527 10.3674 14 10.5 14H15.5C15.6326 14 15.7598 14.0527 15.8536 14.1464C15.9473 14.2402 16 14.3674 16 14.5C16 14.6326 15.9473 14.7598 15.8536 14.8536C15.7598 14.9473 15.6326 15 15.5 15H10.5C10.3674 15 10.2402 14.9473 10.1464 14.8536C10.0527 14.7598 10 14.6326 10 14.5ZM10 16.5C10 16.3674 10.0527 16.2402 10.1464 16.1464C10.2402 16.0527 10.3674 16 10.5 16H15.5C15.6326 16 15.7598 16.0527 15.8536 16.1464C15.9473 16.2402 16 16.3674 16 16.5C16 16.6326 15.9473 16.7598 15.8536 16.8536C15.7598 16.9473 15.6326 17 15.5 17H10.5C10.3674 17 10.2402 16.9473 10.1464 16.8536C10.0527 16.7598 10 16.6326 10 16.5ZM13 8.5V4.25L17.75 9H13.5C13.3674 9 13.2402 8.94732 13.1464 8.85355C13.0527 8.75979 13 8.63261 13 8.5Z"
              fill="currentColor"
            />
          </svg>
        )
      },
      {
        name: 'Organograma',
        path: '/dashboard/organogram',
        icon: (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.6665 7.5C15.6665 6.98857 15.8234 6.48944 16.1159 6.06995C16.4085 5.65045 16.8226 5.33078 17.3025 5.15403C17.7825 4.97729 18.305 4.95199 18.7998 5.08154C19.2945 5.21109 19.7376 5.48926 20.0694 5.87853C20.4011 6.2678 20.6054 6.74944 20.6548 7.25847C20.7042 7.76751 20.5963 8.27945 20.3457 8.72525C20.095 9.17105 19.7137 9.52924 19.2531 9.75152C18.7925 9.97381 18.2748 10.0495 17.7698 9.96833L16.0715 12.7667C16.4296 13.2942 16.5727 13.9386 16.4714 14.5681C16.3701 15.1976 16.0322 15.7646 15.5266 16.1531C15.0211 16.5417 14.3862 16.7224 13.7519 16.6583C13.1175 16.5942 12.5316 16.2901 12.114 15.8083L8.9965 17.3667C9.02864 17.9736 8.83854 18.5715 8.46177 19.0485C8.085 19.5255 7.54737 19.8488 6.94944 19.9581C6.35152 20.0674 5.73426 19.9551 5.21315 19.6422C4.69203 19.3293 4.30275 18.8373 4.11812 18.2582C3.93349 17.6791 3.96617 17.0526 4.21004 16.4958C4.45391 15.939 4.89226 15.4902 5.4431 15.2332C5.99394 14.9763 6.61953 14.9288 7.20284 15.0997C7.78615 15.2705 8.28723 15.6481 8.61234 16.1617L11.5548 14.6908C11.4559 14.2303 11.4892 13.7512 11.6507 13.3087C11.8122 12.8663 12.0954 12.4784 12.4677 12.1899C12.84 11.9014 13.2863 11.7239 13.7551 11.6779C14.2238 11.6319 14.6961 11.7193 15.1173 11.93L16.6157 9.46083C16.3195 9.227 16.0803 8.92907 15.9159 8.58944C15.7515 8.24981 15.6662 7.87733 15.6665 7.5Z"
              fill="currentColor"
            />
          </svg>
        )
      },
      {
        name: 'Helpdesk',
        path: '/dashboard/helpdesk',
        icon: (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4C16.4184 4 20 7.5816 20 12C20 16.4184 16.4184 20 12 20C10.7058 20.0017 9.43063 19.6881 8.28481 19.0864L4.85281 19.98C4.73813 20.0099 4.61764 20.0092 4.50328 19.9782C4.38892 19.9472 4.28465 19.8868 4.20082 19.803C4.11699 19.7193 4.05649 19.6151 4.02534 19.5007C3.99419 19.3864 3.99345 19.2659 4.02321 19.1512L4.91601 15.72C4.31265 14.573 3.99822 13.296 4.00001 12C4.00001 7.5816 7.58161 4 12 4ZM12 14.8C11.7878 14.8 11.5843 14.8843 11.4343 15.0343C11.2843 15.1843 11.2 15.3878 11.2 15.6C11.2 15.8122 11.2843 16.0157 11.4343 16.1657C11.5843 16.3157 11.7878 16.4 12 16.4C12.2122 16.4 12.4157 16.3157 12.5657 16.1657C12.7157 16.0157 12.8 15.8122 12.8 15.6C12.8 15.3878 12.7157 15.1843 12.5657 15.0343C12.4157 14.8843 12.2122 14.8 12 14.8ZM12 7.8C11.4165 7.8 10.8569 8.03178 10.4444 8.44436C10.0318 8.85694 9.8 9.41652 9.8 10C9.80005 10.152 9.8578 10.2983 9.96158 10.4094C10.0654 10.5205 10.2074 10.5881 10.3591 10.5984C10.5108 10.6088 10.6607 10.5612 10.7786 10.4653C10.8966 10.3693 10.9737 10.2322 10.9944 10.0816L11.0056 9.8976C11.0326 9.64325 11.1561 9.40892 11.3506 9.24281C11.5451 9.0767 11.7958 8.99143 12.0513 9.00455C12.3067 9.01766 12.5474 9.12816 12.7239 9.31332C12.9004 9.49848 12.9992 9.74422 13 10C13 10.4312 12.892 10.644 12.484 11.0656L12.2408 11.3136C11.6376 11.9408 11.4 12.3912 11.4 13.2C11.4 13.3591 11.4632 13.5117 11.5757 13.6243C11.6883 13.7368 11.8409 13.8 12 13.8C12.1591 13.8 12.3117 13.7368 12.4243 13.6243C12.5368 13.5117 12.6 13.3591 12.6 13.2C12.6 12.7688 12.708 12.556 13.116 12.1344L13.3592 11.8864C13.9624 11.2592 14.2 10.8088 14.2 10C14.2 9.41652 13.9682 8.85694 13.5556 8.44436C13.1431 8.03178 12.5835 7.8 12 7.8Z"
              fill="currentColor"
            />
          </svg>
        )
      }
    ]
  },
  {
    name: 'Administrativo',
    level: ['Administrator'],
    childrens: [
      {
        name: 'Cadastros',
        path: '/dashboard/records',
        icon: (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.68986 9.43864C9.96187 9.20103 10.2851 9.01782 10.6419 8.90981L10.8395 8.85781L10.9675 8.83381L11.1083 8.81381L11.2523 8.80181L11.3995 8.79781H17.3999C18.0639 8.79775 18.7028 9.05174 19.1855 9.50769C19.6682 9.96364 19.9582 10.587 19.996 11.2499L20 11.3979V17.3983C20 18.0624 19.7459 18.7014 19.2898 19.1841C18.8337 19.6669 18.2102 19.9568 17.5471 19.9944L17.3999 19.9984H11.3995C10.7354 19.9984 10.0964 19.7443 9.61367 19.2882C9.13092 18.8321 8.84101 18.2086 8.80341 17.5455L8.79941 17.3991V11.3987L8.80181 11.2795L8.81301 11.1275L8.83381 10.9747L8.86261 10.8259L8.90981 10.6475L8.97382 10.4587L9.04342 10.2971L9.10903 10.1675L9.18423 10.0371L9.30104 9.86347L9.37624 9.76506L9.48425 9.64025L9.57065 9.55065L9.68986 9.43864ZM14.3997 11.1987C14.2547 11.1987 14.1146 11.2513 14.0053 11.3466C13.8961 11.4419 13.825 11.5735 13.8053 11.7172L13.7997 11.7988V13.7981H11.7996C11.6546 13.7981 11.5145 13.8506 11.4052 13.9459C11.2959 14.0412 11.2249 14.1729 11.2051 14.3165L11.1995 14.3981C11.1995 14.7021 11.4251 14.9525 11.718 14.9925L11.7996 14.9981H13.7997V16.999C13.7997 17.3031 14.0253 17.5543 14.3181 17.5935L14.3997 17.5991C14.5447 17.5991 14.6848 17.5466 14.7941 17.4513C14.9033 17.3559 14.9744 17.2243 14.9941 17.0806L14.9997 16.999V14.9981H16.9998C17.145 14.9981 17.2851 14.9455 17.3944 14.85C17.5037 14.7545 17.5747 14.6227 17.5943 14.4789L17.5999 14.3989C17.5999 14.2539 17.5474 14.1138 17.4521 14.0045C17.3567 13.8953 17.2251 13.8242 17.0814 13.8045L16.9998 13.7989H14.9997V11.7988C14.9997 11.6538 14.9472 11.5137 14.8519 11.4044C14.7566 11.2951 14.625 11.2241 14.4813 11.2043L14.3997 11.1987ZM14.8653 5.78485L14.9069 5.92646L15.4622 7.99697H11.3995C10.953 7.99697 10.5108 8.08494 10.0982 8.25587C9.68559 8.42679 9.31072 8.67732 8.99497 8.99314C8.67923 9.30896 8.42879 9.68389 8.25796 10.0965C8.08713 10.5091 7.99926 10.9514 7.99937 11.3979V16.5454C7.4792 16.5144 6.98032 16.3279 6.56737 16.0101C6.15441 15.6923 5.8464 15.2578 5.68324 14.7629L5.64164 14.6221L4.08876 8.82581C3.91675 8.18448 3.99662 7.50164 4.31199 6.91731C4.62736 6.33298 5.15434 5.89145 5.78485 5.68324L5.92726 5.64164L11.7228 4.08876C12.3641 3.91675 13.0469 3.99662 13.6313 4.31199C14.2156 4.62736 14.6571 5.15434 14.8653 5.78485Z"
              fill="currentColor"
            />
          </svg>
        )
      },
      {
        name: 'Promoções',
        path: '/dashboard/promotions',
        icon: (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 18.25C19 18.4489 18.921 18.6397 18.7803 18.7803C18.6397 18.921 18.4489 19 18.25 19H6.75C6.28587 19 5.84075 18.8156 5.51256 18.4874C5.18437 18.1592 5 17.7141 5 17.25V5.75C5 5.55109 5.07902 5.36032 5.21967 5.21967C5.36032 5.07902 5.55109 5 5.75 5C5.94891 5 6.13968 5.07902 6.28033 5.21967C6.42098 5.36032 6.5 5.55109 6.5 5.75V17.25C6.5 17.388 6.612 17.5 6.75 17.5H18.25C18.4489 17.5 18.6397 17.579 18.7803 17.7197C18.921 17.8603 19 18.0511 19 18.25ZM14 7.75C14 7.55109 14.079 7.36032 14.2197 7.21967C14.3603 7.07902 14.5511 7 14.75 7H18.25C18.4489 7 18.6397 7.07902 18.7803 7.21967C18.921 7.36032 19 7.55109 19 7.75V11.25C19 11.4489 18.921 11.6397 18.7803 11.7803C18.6397 11.921 18.4489 12 18.25 12C18.0511 12 17.8603 11.921 17.7197 11.7803C17.579 11.6397 17.5 11.4489 17.5 11.25V9.56L13.53 13.53C13.3894 13.6705 13.1988 13.7493 13 13.7493C12.8012 13.7493 12.6106 13.6705 12.47 13.53L11 12.06L8.78 14.28C8.63783 14.4125 8.44978 14.4846 8.25548 14.4812C8.06118 14.4777 7.87579 14.399 7.73838 14.2616C7.60097 14.1242 7.52225 13.9388 7.51883 13.7445C7.5154 13.5502 7.58752 13.3622 7.72 13.22L10.47 10.47C10.6106 10.3295 10.8012 10.2507 11 10.2507C11.1988 10.2507 11.3894 10.3295 11.53 10.47L13 11.94L16.44 8.5H14.75C14.5511 8.5 14.3603 8.42098 14.2197 8.28033C14.079 8.13968 14 7.94891 14 7.75Z"
              fill="currentColor"
            />
          </svg>
        )
      },
      {
        name: 'Helpdesk',
        path: '/dashboard/helpdesk',
        icon: (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4C16.4184 4 20 7.5816 20 12C20 16.4184 16.4184 20 12 20C10.7058 20.0017 9.43063 19.6881 8.28481 19.0864L4.85281 19.98C4.73813 20.0099 4.61764 20.0092 4.50328 19.9782C4.38892 19.9472 4.28465 19.8868 4.20082 19.803C4.11699 19.7193 4.05649 19.6151 4.02534 19.5007C3.99419 19.3864 3.99345 19.2659 4.02321 19.1512L4.91601 15.72C4.31265 14.573 3.99822 13.296 4.00001 12C4.00001 7.5816 7.58161 4 12 4ZM12 14.8C11.7878 14.8 11.5843 14.8843 11.4343 15.0343C11.2843 15.1843 11.2 15.3878 11.2 15.6C11.2 15.8122 11.2843 16.0157 11.4343 16.1657C11.5843 16.3157 11.7878 16.4 12 16.4C12.2122 16.4 12.4157 16.3157 12.5657 16.1657C12.7157 16.0157 12.8 15.8122 12.8 15.6C12.8 15.3878 12.7157 15.1843 12.5657 15.0343C12.4157 14.8843 12.2122 14.8 12 14.8ZM12 7.8C11.4165 7.8 10.8569 8.03178 10.4444 8.44436C10.0318 8.85694 9.8 9.41652 9.8 10C9.80005 10.152 9.8578 10.2983 9.96158 10.4094C10.0654 10.5205 10.2074 10.5881 10.3591 10.5984C10.5108 10.6088 10.6607 10.5612 10.7786 10.4653C10.8966 10.3693 10.9737 10.2322 10.9944 10.0816L11.0056 9.8976C11.0326 9.64325 11.1561 9.40892 11.3506 9.24281C11.5451 9.0767 11.7958 8.99143 12.0513 9.00455C12.3067 9.01766 12.5474 9.12816 12.7239 9.31332C12.9004 9.49848 12.9992 9.74422 13 10C13 10.4312 12.892 10.644 12.484 11.0656L12.2408 11.3136C11.6376 11.9408 11.4 12.3912 11.4 13.2C11.4 13.3591 11.4632 13.5117 11.5757 13.6243C11.6883 13.7368 11.8409 13.8 12 13.8C12.1591 13.8 12.3117 13.7368 12.4243 13.6243C12.5368 13.5117 12.6 13.3591 12.6 13.2C12.6 12.7688 12.708 12.556 13.116 12.1344L13.3592 11.8864C13.9624 11.2592 14.2 10.8088 14.2 10C14.2 9.41652 13.9682 8.85694 13.5556 8.44436C13.1431 8.03178 12.5835 7.8 12 7.8Z"
              fill="currentColor"
            />
          </svg>
        )
      }
    ]
  }
]
