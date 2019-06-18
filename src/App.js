import React from 'react'
import './App.scss'
import { configureFirebase } from './utils/firebaseUtils'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import NavBar from './components/HOC/NavBar/NavBar'
import LandingPage from './components/LandingPage/LandingPage'
import Disciplina from './components/docs/Disciplina/Disciplina'

import Modelagem from './components/docs/Modelagem/Modelagem'
import Lexico from './components/docs/Modelagem/Lexico/Lexico'
import Cenario from './components/docs/Modelagem/Cenario/Cenario'
import PreRastreabilidade from './components/docs/PreRastreabilidade/PreRastreabilidade'
import RichPicture from './components/docs/PreRastreabilidade/RichPicture'
import Argumentacao from './components/docs/PreRastreabilidade/Argumentacao'
import Elicitacao from './components/docs/Elicitacao/Elicitacao'
import lexicos from './utils/lexicos'
import RoutesCenarios from './utils/RoutesCenarios'

import GIFSComponent from './components/docs/PosRastreabilidade/GIFS'
import GIFS from './components/docs/PosRastreabilidade/GIFS.json'

import Priorizacao from './components/docs/Elicitacao/Priorizacao'
import Requisitos from './components/docs/Elicitacao/Requisitos'
import BrainstormV1 from './components/docs/Elicitacao/Brainstorm/BrainstormV1'
import BrainstormV2 from './components/docs/Elicitacao/Brainstorm/BrainstormV2'
import Entrevistas from './components/docs/Elicitacao/Entrevistas/Entrevistas'
import Entrevista01 from './components/docs/Elicitacao/Entrevistas/Entrevista01'
import Entrevista02 from './components/docs/Elicitacao/Entrevistas/Entrevista02'
import Etnografia from './components/docs/Elicitacao/Etnografia'
import Introspeccao from './components/docs/Elicitacao/Introspeccao'
import i5W2H from './components/docs/Elicitacao/5W2H'
import Analise01 from './components/docs/Elicitacao/AnaliseProtocolo/Analise01'
import Analise02V1 from './components/docs/Elicitacao/AnaliseProtocolo/Analise02V1'
import Analise02 from './components/docs/Elicitacao/AnaliseProtocolo/Analise02'


import Analise from './components/docs/Analise/Analise'
import Verificacao from './components/docs/Analise/Verificacao'

const RouteRollUp = props => <Route {...props} onUpdate={() => window.scrollTo(0, 0)}/>

const App = () => {

  configureFirebase()
  
  console.log(process.env.PUBLIC_URL)
  return (
    <Router basename={process.env.PUBLIC_URL}>
        <NavBar>
          <Switch>
            
            <RouteRollUp exact path="/" component={ LandingPage } />
            <RouteRollUp exact path="/Disciplina" component={ Disciplina } />
            <RouteRollUp exact path="/Pre-Rastreabilidade" component={ PreRastreabilidade } />
            <RouteRollUp exact path="/RichPictures" component={ RichPicture } />
            <RouteRollUp exact path="/Argumentacoes" component={ Argumentacao } />
            <RouteRollUp exact path="/Pos-Rastreabilidade" />
            <RouteRollUp exact path="/Elicitacao" component={ Elicitacao }/>
            <RouteRollUp exact path="/Modelagem" component={ Modelagem } />
            <RouteRollUp exact path="/Analise" component={ Analise } />
            <RouteRollUp exact path="/Sobre" />
            <RouteRollUp exact path="/GIFS" component={ GIFS } />

            {/* Elicitação */}
            <RouteRollUp exact path="/RequisitosElicitacao" component={ Requisitos } />

            <RouteRollUp exact path="/AnaliseProtocolo01" component={ Analise01 } />
            <RouteRollUp exact path="/AnaliseProtocolo02V1" component={ Analise02V1 } />
            <RouteRollUp exact path="/AnaliseProtocolo02" component={ Analise02 } />
            <RouteRollUp exact path="/BrainstormV1" component={ BrainstormV1 } />
            <RouteRollUp exact path="/Brainstorm" component={ BrainstormV2 } />
            <RouteRollUp exact path="/Entrevista" component={ Entrevistas } />
            <RouteRollUp exact path="/Entrevista/01" component={ Entrevista01 } />
            <RouteRollUp exact path="/Entrevista/02" component={ Entrevista02 } />
            <RouteRollUp exact path="/Etnografia" component={ Etnografia } />
            <RouteRollUp exact path="/Introspeccao" component={ Introspeccao } />
            <RouteRollUp exact path="/Persona" component={ Requisitos } />
            <RouteRollUp exact path="/Storytelling01V1" component={ Requisitos } />
            <RouteRollUp exact path="/Storytelling01" component={ Requisitos } />
            <RouteRollUp exact path="/Storytelling02" component={ Requisitos } />
            <RouteRollUp exact path="/Questionario" component={ Requisitos } />
            <RouteRollUp exact path="/5W2H" component={ i5W2H } />


            <RouteRollUp exact path="/Priorizacao" component={ Priorizacao } />

            <RouteRollUp exact path="/HOQ" component={ Priorizacao } />
            <RouteRollUp exact path="/FirstThingsFirst" component={ Priorizacao } />
            <RouteRollUp exact path="/MoSCoW" component={ Priorizacao } />
          
            {/* Modelagem */}
            <RouteRollUp path="/Lexicos" component={ Lexico }/>
            <RouteRollUp path="/Cenarios" component={ Cenario }/>
            <RouteRollUp path="/CasosDeUso" component={ Cenario }/>
            <RouteRollUp path="/CasosDeUso/Loja" component={ Lexico }/>
            <RouteRollUp path="/EspecificacaoSuplementar" component={ Lexico }/>
            <RouteRollUp path="/Agil" component={ Lexico }/>
            <RouteRollUp path="/NFR" component={ Lexico }/>
            <RouteRollUp path="/IStar" component={ Lexico }/>


            {/* Analise */}
            <RouteRollUp path="/Verificacao" component={ Verificacao }/>
            <RouteRollUp path="/Validacao" component={ Cenario }/>

            {Object.keys(lexicos).map(group => 
              Object.keys(lexicos[group].lexic).map(term => <Route  key={ term } 
                                                                    path={`/${term}`}
                                                                    component={ lexicos[group].lexic[term] }
                                                                    onUpdate={() => window.scrollTo(0, 0)}/>))}

            {Object.keys(RoutesCenarios).map(group => 
              Object.keys(RoutesCenarios[group].lexic).map(term => <Route key={ term } 
                                                                          path={`/${term}`}
                                                                          component={ RoutesCenarios[group].lexic[term] }
                                                                          onUpdate={() => window.scrollTo(0, 0)}/>))}

            {GIFS.map( gif => <Route path = {`/gif/${gif.id}`}
                                    render={() => <GIFSComponent id={gif.id} description={gif.description} />}/>)}

          </Switch>
        </NavBar>
    </Router>
  )
}

export default App
