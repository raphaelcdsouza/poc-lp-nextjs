import { GetStaticProps } from "next";
import { useCallback, useState } from "react"
import * as Yup from 'yup';

import ibgeApi from '../services/ibge';

interface IState {
  id: number;
  nome: string;
  sigla: string;
}

interface ICity {
  id: number;
  nome: string;
  microrregiao: {
    mesorregiao: {
      UF: {
        id: number;
        sigla: string;
        nome: string;
      }
    }
  }
}

interface IndexProps {
  states: IState[];
  cities: ICity[];
}

export default function Home({ cities, states }: IndexProps) {
  const [filteredCities, setFilteredCities] = useState<ICity[]>([]);
  const [stateSelectedStatus, setStateSelectedStatus] = useState(false);
  const [citySelectedStatus, setCitySelectedStatus] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [errors, setErrors] = useState<Yup.ValidationError[]>([]);

  const handleNameInput = useCallback((event) => {
    setName(event.target.value);
  }, []);

  const handleEmailInput = useCallback((event) => {
    setEmail(event.target.value);
  }, []);

  const handlePhoneInput = useCallback((event) => {
    setPhone(event.target.value);
  }, []);

  const handleSelectState = useCallback((event) => {
    setStateSelectedStatus(false);
    const stateName = event.target.value

    if (stateName === 'default') {
      setStateSelectedStatus(false);
      setFilteredCities([] as ICity[]);

      return;
    };

    setFilteredCities(cities.filter(city => city.microrregiao.mesorregiao.UF.nome === stateName));
    setStateSelectedStatus(true);
    setState(stateName);
  }, []);

  const handleSelectCity = useCallback((event) => {
    const cityName = event.target.value;

    if (cityName === 'default') {
      setCitySelectedStatus(false);
      setCity('');
    }

    setCitySelectedStatus(true);
    setCity(cityName);
  }, []);

  const handleFormSubmit = useCallback(async (event) => {
    event.preventDefault();

    const data = {
      name,
      email,
      phone,
      state,
      city
    };

    const schema = Yup.object().shape({
      name: Yup.string().required('O campo nome é obrigatório'),
      email: Yup.string().email().required('O campo e-mail é obrigatório'),
      phone: Yup.string().required('O campo telefone é obrigatório'),
      state: Yup.string().required(),
      city: Yup.string().required(),
    })

    try {
      await schema.validate(data, { abortEarly: false });

      alert('Funcionou');

      setName('');
      setEmail('');
      setPhone('');
      setState('default');
      setCity('default');

      setStateSelectedStatus(false);
      setCitySelectedStatus(false);
      setErrors([]);
    } catch (err) {
      setErrors([...err.inner]);
    }
  }, [name, email, phone, state, city]);

  return (
    <div className="wrapper">
      <div className="content">
        <main>
          <img src="/logojlleimplementos.svg" height="89.67" width="350" alt="Logo Joinville Implementos"/>

          <h1>Quais são os principais benefícios do consórcio?</h1>

          <ul>
            <li>Sem juros</li>
            <li>Sem entrada</li>
            <li>Sem taxa de adesão</li>
            <li>Compra planejada</li>
          </ul>

          <p>A melhor maneira de <strong>renovar</strong> ou <strong>ampliar</strong> a sua frota é agora</p>
        </main>

        <aside>
          <p>Preencha os dados para receber um contato da nossa equipe!</p>
          <form onSubmit={handleFormSubmit}>
            <label htmlFor="name">Nome</label>
            <input type="text" name="name" id="name" placeholder="Ex.: João da Silva" value={name} onChange={handleNameInput} />
            <label htmlFor="email">E-mail</label>
            <input type="text" name="email" id="email" placeholder="Ex.: joao@silva.com.br" value={email} onChange={handleEmailInput} />
            <label htmlFor="phone">Telefone</label>
            <input type="text" name="phone" id="phone" placeholder="DDD + número" value={phone} onChange={handlePhoneInput} />
            <label htmlFor="state">Estado</label>
            <select name="state" id="state" value={state} onChange={handleSelectState}>
              <option value="default">Selecione um estado</option>
              {states.map(state => (
                <option value={state.nome} key={state.id}>{state.nome}</option>
              ))}
            </select>
            <label htmlFor="city">Cidade</label>
            <select name="city" id="city" value={city} onChange={handleSelectCity} disabled={!stateSelectedStatus}>
              <option value="default">Selecione um município</option>
              {filteredCities.map(city => (
                <option value={city.nome} key={city.id}>{city.nome}</option>
              ))}
            </select>
            <button type="submit" disabled={!citySelectedStatus}>Receber contato</button>

            {errors && (
              <div className="errors">
                {errors.map(error => (
                  <span key={error.message}>{error.message}</span>
                ))}
              </div>
            )}
          </form>
          <small>Ao receber o conteúdo você concorda em receber materiais periódicos em seu e-mail.</small>
        </aside>
      </div>

      <footer><a href="https://www.joinvilleimplementos.com.br">Conheça a Joinville implementos</a></footer>
    </div>
  )
}

export const getStaticProps: GetStaticProps<IndexProps> = async (context) => {
  const { data: states } = await ibgeApi.get<IState[]>('/localidades/estados');
  const { data: cities } = await ibgeApi.get<ICity[]>('/localidades/municipios');

  return {
    props: {
      states: states.sort((a, b) => a.nome > b.nome ? 1 : -1),
      cities,
    }
  };
};
