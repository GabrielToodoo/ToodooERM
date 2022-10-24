import React from 'react'

import { Tree, TreeNode } from 'react-organizational-chart'

import { StyledNode } from './styles'

const Organogram: React.FC = () => {
  return (
    <Tree
      lineWidth={'1px'}
      lineColor={'#ADADB2'}
      lineBorderRadius={'10px'}
      label={
        <StyledNode>
          <img
            src="https://i.imgur.com/mrGqL0S.png"
            width="49"
            height="49"
            alt="Photo"
          />{' '}
          <div>
            <b>Flávio Teste</b>
            <br />
            CEO
          </div>
        </StyledNode>
      }
    >
      <TreeNode
        label={
          <StyledNode>
            <img
              src="https://i.imgur.com/mrGqL0S.png"
              width="49"
              height="49"
              alt="Photo"
            />{' '}
            <div>
              <b>Flávio Teste</b>
              <br />
              CEO
            </div>
          </StyledNode>
        }
      >
        <TreeNode
          label={
            <StyledNode>
              <img
                src="https://i.imgur.com/mrGqL0S.png"
                width="49"
                height="49"
                alt="Photo"
              />{' '}
              <div>
                <b>Flávio Teste</b>
                <br />
                CEO
              </div>
            </StyledNode>
          }
        />
      </TreeNode>
      <TreeNode
        label={
          <StyledNode>
            <img
              src="https://i.imgur.com/mrGqL0S.png"
              width="49"
              height="49"
              alt="Photo"
            />{' '}
            <div>
              <b>Flávio Teste</b>
              <br />
              CEO
            </div>
          </StyledNode>
        }
      >
        <TreeNode
          label={
            <StyledNode>
              <img
                src="https://i.imgur.com/mrGqL0S.png"
                width="49"
                height="49"
                alt="Photo"
              />{' '}
              <div>
                <b>Flávio Teste</b>
                <br />
                CEO
              </div>
            </StyledNode>
          }
        />
        <TreeNode
          label={
            <StyledNode>
              <img
                src="https://i.imgur.com/mrGqL0S.png"
                width="49"
                height="49"
                alt="Photo"
              />{' '}
              <div>
                <b>Flávio Teste</b>
                <br />
                CEO
              </div>
            </StyledNode>
          }
        />
      </TreeNode>
    </Tree>
  )
}

export default Organogram
