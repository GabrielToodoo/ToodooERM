export interface OrganogramPerson {
  picture: string
  name: string
  role: string
}

export interface OrganogramNode {
  person: OrganogramPerson
  childrens?: OrganogramNode[]
}

export const organogramMyTeam: OrganogramNode = {
  person: {
    picture: 'https://i.imgur.com/mrGqL0S.png',
    name: 'Flávio Teste',
    role: 'CEO'
  },
  childrens: [
    {
      person: {
        picture: 'https://i.imgur.com/mrGqL0S.png',
        name: 'Flávio Teste',
        role: 'CEO'
      },
      childrens: [
        {
          person: {
            picture: 'https://i.imgur.com/mrGqL0S.png',
            name: 'Flávio Teste',
            role: 'CEO'
          },
          childrens: [
            {
              person: {
                picture: 'https://i.imgur.com/mrGqL0S.png',
                name: 'Flávio Teste',
                role: 'CEO'
              }
            }
          ]
        }
      ]
    },
    {
      person: {
        picture: 'https://i.imgur.com/mrGqL0S.png',
        name: 'Flávio Teste',
        role: 'CEO'
      },
      childrens: [
        {
          person: {
            picture: 'https://i.imgur.com/mrGqL0S.png',
            name: 'Flávio Teste',
            role: 'CEO'
          },
          childrens: [
            {
              person: {
                picture: 'https://i.imgur.com/mrGqL0S.png',
                name: 'Flávio Teste',
                role: 'CEO'
              }
            }
          ]
        }
      ]
    },
    {
      person: {
        picture: 'https://i.imgur.com/mrGqL0S.png',
        name: 'Flávio Teste',
        role: 'CEO'
      },
      childrens: [
        {
          person: {
            picture: 'https://i.imgur.com/mrGqL0S.png',
            name: 'Flávio Teste',
            role: 'CEO'
          },
          childrens: [
            {
              person: {
                picture: 'https://i.imgur.com/mrGqL0S.png',
                name: 'Flávio Teste',
                role: 'CEO'
              }
            }
          ]
        }
      ]
    }
  ]
}

export const organogramGeneral: OrganogramNode = {
  person: {
    picture: 'https://i.imgur.com/mrGqL0S.png',
    name: 'Flávio Teste',
    role: 'CEO'
  },
  childrens: [
    {
      person: {
        picture: 'https://i.imgur.com/mrGqL0S.png',
        name: 'Flávio Teste',
        role: 'CEO'
      }
    },
    {
      person: {
        picture: 'https://i.imgur.com/mrGqL0S.png',
        name: 'Flávio Teste',
        role: 'CEO'
      },
      childrens: [
        {
          person: {
            picture: 'https://i.imgur.com/mrGqL0S.png',
            name: 'Flávio Teste',
            role: 'CEO'
          },
          childrens: [
            {
              person: {
                picture: 'https://i.imgur.com/mrGqL0S.png',
                name: 'Flávio Teste',
                role: 'CEO'
              }
            }
          ]
        }
      ]
    },
    {
      person: {
        picture: 'https://i.imgur.com/mrGqL0S.png',
        name: 'Flávio Teste',
        role: 'CEO'
      }
    }
  ]
}
