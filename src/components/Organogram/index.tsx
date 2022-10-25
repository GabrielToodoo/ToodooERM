import React from 'react'

import { Tree, TreeNode } from 'react-organizational-chart'
import { OrganogramNode } from '../../mock/dash-organogram'

import { StyledNode } from './styles'

interface OrganogramProps {
  data?: OrganogramNode
}

const Organogram: React.FC<OrganogramProps> = ({ data }) => {
  function createTreeNode(child: OrganogramNode) {
    // função recursiva
    return (
      <TreeNode
        label={
          <StyledNode>
            <img
              src={child.person.picture}
              width="49"
              height="49"
              alt="Photo"
            />{' '}
            <div>
              <b>{child.person.name}</b>
              <br />
              {child.person.role}
            </div>
          </StyledNode>
        }
      >
        {child.childrens &&
          child.childrens.map(nextChild => createTreeNode(nextChild))}
      </TreeNode>
    )
  }

  return data ? (
    <Tree
      lineWidth={'1px'}
      lineColor={'#ADADB2'}
      lineBorderRadius={'10px'}
      label={
        <StyledNode>
          <img src={data.person.picture} width="49" height="49" alt="Photo" />{' '}
          <div>
            <b>{data.person.name}</b>
            <br />
            {data.person.role}
          </div>
        </StyledNode>
      }
    >
      {data.childrens?.map(child => {
        return createTreeNode(child)
      })}
    </Tree>
  ) : (
    <p>Não há dados suficientes para carregar o organograma.</p>
  )
}

export default Organogram
