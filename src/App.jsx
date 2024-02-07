import { useState } from 'react'
import styled from '@emotion/styled'
import criptoImage from './assets/img/imagen-criptos.png'
import Form from './components/Form'
import Cotizacion from './components/Cotizacion'
import Loading from './components/Loading'
/* Color azul oscuro mas oscuro */
const Main = styled.main`
  background-color: #111827;
  min-height: 100vh;
  display: flex;

  @media (min-width: 768px) {
    align-items: center;
  }
  
`
const Imagen = styled.img`
  width: min(100%, 400px);
  position:static;

  @media (max-width: 400px) {
   position: absolute;
   z-index: 0;
   opacity: 15%;
  }

`
const Centrar = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  height: 100%;
  
  @media (min-width: 768px) {
    align-items: center;
  }
`
const Contenedor = styled.div`
  position: relative;
  width: min(90%, 900px);
  margin:0 auto;
  display: flex;
 
  align-items: center;
  justify-content: center;
  padding: 40px 0 0 0;
  margin-bottom: 10px;
  row-gap: 20px;
  flex-direction: column;
  margin-top: 30px;
  @media (min-width: 768px) {
    margin-top: 0;
    column-gap: 50px;
    flex-direction: row;
    justify-content: center;
  }
 
  `

const Header = styled.h1`
  font-family: 'Lato', sans-serif;
  margin: 0;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  text-align: center;

  @media  (min-width: 768px) {
    font-size:35px;
    &::after{
   content: '';
   width: 140px;
   height: 6px;
   background-color: #10B981;
   display: block;
   margin: 0 auto;
 }
  }
  
  @media (max-width: 340px) {
    &::after{
   content: '';
   width: 80px;
   height: 6px;
   background-color: #10B981;
   display: block;
   margin: 0 auto;
 }
}
 
`

const Z = styled.div`
  z-index: 1;
`

function App() {

  const [resultado, setResultado] = useState({})
  const [mostrandoResultado, setMostrandoResultado] = useState(false)
  const [cargando, setCargando] = useState(false)

  return (
    <>

      <Main>

        <Centrar>
          <Contenedor>

            <Imagen src={criptoImage} alt='Imagen Criptos' />

            <Z>
              <Header>Cotiza Criptomonedas Al Instante</Header>

              <Form
                setMostrandoResultado={setMostrandoResultado}
                setCargando={setCargando}
                setResultado={setResultado}
                resultado={resultado}
              ></Form>


            </Z>

          </Contenedor>


          <div>
            <div>
              {cargando && <Loading></Loading>}
            </div>
            <div>
              {mostrandoResultado && <Cotizacion resultado={resultado} />}
            </div>
          </div>



        </Centrar>


      </Main>


    </>
  )
}

export default App
