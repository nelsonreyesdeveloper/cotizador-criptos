import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'
import { monedas, criptoMonedas } from '../data/monedas'
import Error from './Error'
import Cotizacion from './Cotizacion'
import Loading from './Loading'

const Formu = styled.form`
  margin-top: 20px;
`
const ErrorP = styled.p`
    color: white;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    background-color: red;
    text-align: center;
    padding: 10px;
    border-radius: 5px;
    margin: 10px 0;
`
const Button = styled.button`

  width: 100%;
  text-decoration: none;
  border: none;
  outline: none;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  background-color: #10B981;
  text-transform: uppercase;
  color: #fff;
  padding: 15px 20px;
  border-radius: 5px;
`


const Form = ({setMostrandoResultado,setCargando,setResultado,resultado}) => {


    const [cripto, setCripto] = useState([]);
    const [error, setError] = useState(false);
    const [monedaState, SelectMoneda] = useSelectMonedas('Elige Tu Moneda', monedas);
    const [criptoState, SelectCripto] = useSelectMonedas('Elige Tu CriptoMoneda', cripto);


    const handleSubmit = async (e) => {
        e.preventDefault()

        if ([monedaState, criptoState].includes('')) {
            setError(true);


            setTimeout(() => {
                setError(false);
                /* Contar segundos del setTimeout */
            }, 8000);

            return
        }
        setError(false);
        setResultado({})
        setCargando(true)

        /* Conversion de monedas */
        const url = `https://min-api-v2.cryptocompare.com/data/pricemultifull?fsyms=${criptoState}&tsyms=${monedaState}`

        const response = await fetch(url);
        const result = await response.json();

        const { DISPLAY } = result;

        const { PRICE, HIGHDAY, LOWDAY, IMAGEURL } = DISPLAY[criptoState][monedaState];

        setResultado({
            cotizacion: PRICE,
            maximo: HIGHDAY,
            minimo: LOWDAY,
            imagen: IMAGEURL
        })

        setCargando(false)

    }

    useEffect(() => {
        if (Object.keys(resultado).length > 0) {
            setMostrandoResultado(true)
        }
    }, [resultado])

    useEffect(() => {
        const consultarApi = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
            const response = await fetch(url);
            const result = await response.json();

            const { Data } = result;

            const nuevoArray = Data.map(coin => {

                return {
                    id: coin.CoinInfo.Name,
                    nombre: coin.CoinInfo.FullName
                }
            })

            setCripto(nuevoArray)
        }

        consultarApi()
    }, [])


    return (
        <>
            <Formu onSubmit={handleSubmit}>
                {error && <Error><ErrorP>Todos lo campos son obligatorios</ErrorP></Error>}

                < SelectMoneda />
                < SelectCripto />
                
                <div>
                    <Button type='submit'>Calcular</Button>
                </div>
        
            </Formu>
          
        </>
    )
}

export default Form
