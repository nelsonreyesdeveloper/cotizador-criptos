import React from 'react'
import styled from '@emotion/styled'

const Contenedor = styled.div`
    margin-top: 20px;
    box-shadow: 0 0 3px rgba(255, 0, 0, 0);
    padding: 20px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    column-gap: 60px;

    &:hover { 
        transform: scale(1.05);
        transition: .3s
    }

    @media (max-width: 400px) {
        column-gap: 20px;
    }

`

const Imagen = styled.img`
    width: min(95%,180px);
    border-radius: 5px;
    display: block;

`

const Heading = styled.h3` 
  display: block;
  font-family: 'Lato', sans-serif;
  color: #fff;
  font-weight: 700;
  font-size: 22px;
`
const P = styled.p` 
   display: flex;
    flex-direction: column;
 
    white-space: nowrap;
  font-family: 'Lato', sans-serif;
  color: #fff;
  font-weight: 400;
  font-size: 16px;

  @media (min-width: 768px){
    flex-direction: row;
  }
`
const Wrap = styled.div`
 
`

const Cotizacion = ({ resultado }) => {

    console.log(resultado)
    const { cotizacion, maximo, minimo, imagen } = resultado
    return (
        <Contenedor >
            <Imagen src={`https://www.cryptocompare.com${imagen}`} />

            <Wrap>
                <Heading>Cotizacion</Heading>
                <P>El precio es de: <span>{cotizacion}</span></P>
                <P>El precio máximo del dia es: <span>{maximo}</span></P>
                <P>El precio mínimo del dia es: <span>{minimo}</span></P>
            </Wrap>
        </Contenedor>
    )
}

export default Cotizacion