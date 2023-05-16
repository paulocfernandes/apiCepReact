import { useEffect, useState } from "react"
import { Label } from "./label"
import axios from "axios"

export const CepForm = () => {
  const [estados, setEstados] = useState([])


  const getEstados = () => {
    axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
      .then(response => {

        let arrayEstados = response.data.map((estado, index) =>
          <option key={index}value={estado.sigla}>
            {estado.nome}
          </option>
        )
        setEstados(arrayEstados)
      })
  }

  buscaCep = (e) => {

    let cep = e.target.value;

    axios.get('https://viacep.com.br/ws/${cep}/json/')
    .then(function (response){
      console.log(response.data);

      setedereco({
        ... endereco,
        logradouro: response.data.bairro, localidade: response.data.localidade
      })


  }
   
  


  useEffect(() => {
    console.log('teste')
    getEstados()
  }, [])

  return (
    <div>

      <h1>Cadastro de enderço</h1>

      <hr />
      <form action="">

        <Label name='Cep' />
        <input type="text"
          placeholder='digite Cep' name='cep'
          id='cep'
          onBlur={buscaCep}
        />

        <Label name='Logradouro' />
        <input type="text"
          placeholder='Digite nome da rua '
          name='logradouro'
          id='logradouro'
          value={endereco.logradouro || ""} />

        <Label name='Numero' />
        <input type="text"
          name='numero'
          id='numero' />

        <Label name='Bairro' />
        <input type="text"
          placeholder='Bairro'
          name='bairro'
          id='bairro' />


        <Label name='Localidade' />
        <input type="text"
          placeholder='Localidade'
          name='localidade'
          id='localidade' />

        <Label name='UF' />
        <input type="text"
          name='uf'
          id='uf' />

        <select id="cidade">
          <option selected>Selecione...</option>
          {estados.sort()}
        </select>
      </form>

    </div>
  )
}