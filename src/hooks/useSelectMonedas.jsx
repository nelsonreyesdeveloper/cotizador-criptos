import { useState } from 'react'
import styled from '@emotion/styled'


const Option = styled.option` 
  color: #000;
  font-family: 'Lato', sans-serif;
  font-weight: 700; 
  &:hover {
    font-weight: 400; 
  }
`

const Label = styled.label` 
  display: block;
  font-family: 'Lato', sans-serif;
  color: #fff;
  font-weight: 700;
  font-size: 22px;
`

const Campo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  margin-bottom: 20px;
`

const Select = styled.select`

  width: 100%;
  text-decoration: none;
  border: none;
  outline: none;
  font-family: 'Lato', sans-serif;
  color: #000;
  font-weight:400;
  padding: 15px 20px;
  border-radius: 5px;
`

const useSelectMonedas = (label, opciones) => {

  const [state, setState] = useState('');

  const SelectMoneda = () => (
    <>

      <Campo>
        <Label>{label}</Label>
        <Select value={state} onChange={(e) => setState(e.target.value)}>
          <Option  key={""} value="">-Seleccione-</Option>
          {
            opciones.map(opcion => (
              <Option value={opcion.id} key={opcion.id}>{opcion.nombre}</Option>
            ))
          }
        </Select>

      </Campo>

    </>
  )

  return [state, SelectMoneda]

}

export default useSelectMonedas
