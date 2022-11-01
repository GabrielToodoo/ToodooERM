export interface OrganogramPerson {
  picture: string
  name: string
  role: string
}

export interface OrganogramNode {
  person: OrganogramPerson
  childrens?: OrganogramNode[]
}
