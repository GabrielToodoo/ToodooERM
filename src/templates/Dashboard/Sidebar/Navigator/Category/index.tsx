import React from 'react'
import Link from '../Link'
import { Category } from '../links'

import { CategoryHeader, Wrapper } from './styles'

interface Props {
  data: Category
}

const Page: React.FC<Props> = ({ data }) => {
  return (
    <Wrapper>
      <CategoryHeader
        data-bs-toggle="collapse"
        href={`#${data.name}Collapse`}
        role="button"
        aria-expanded={data.expanded}
        aria-controls={`${data.name}Collapse`}
      >
        {data.name.toUpperCase()}
      </CategoryHeader>

      <div className="collapse show" id={`${data.name}Collapse`}>
        <nav>
          {data.childrens!.map(link => {
            return (
              <Link key={link.name} path={link.path} icon={link.icon}>
                {link.name}
              </Link>
            )
          })}
        </nav>
      </div>
    </Wrapper>
  )
}

export default Page
