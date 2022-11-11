import React from 'react'

import Box from '../Box'
import DatePicker from '../DatePicker'
import Select from '../Select'

import { Container, BoxesWrapper } from './styles'

const ProfileInfoPessoalSection: React.FC = () => {
  return (
    <Container>
      <BoxesWrapper>
        <Box id="personal-data">
          <h6>Dados pessoais</h6>
          <DatePicker label="Nascimento*" registerFunction={() => {}} />
          <Select
            id=""
            label="Estado Civil"
            options={['Solteiro', 'Casado', 'Divorciado']}
          />
        </Box>
        <Box id="about-me"></Box>
      </BoxesWrapper>
      <BoxesWrapper></BoxesWrapper>
    </Container>
  )
}

export async function onSaveFunction(): Promise<void> {}

export default ProfileInfoPessoalSection
