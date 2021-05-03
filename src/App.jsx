import './App.css'
import React from 'react'
import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro'
import CF from './components/CF'
import Card from './components/layout/Card'

export default props =>
(

    <div className="App">
    
    <Card>
    <Primeiro></Primeiro>
    </Card>
     {/* <Card titulo = "Segundo Componente">
    <ComParametro></ComParametro>
    </Card>  */}
    <Card>
        <h3>Me chamo Matheus, curso Sistemas de informação na PUC
            Minas e atualmente estou estudando e aprendendo mais 
            sobre a área de segurança da informação, possuo 
            conhecimento em linguagens de programação. Estou totalmente 
            compromissado a atender os interesses da tecnologia 
            da empresa e da segurança!</h3>
    </Card>
     
    <Card>
    <CF>
        <ul>
            <li>Python</li>
            <li>C#</li>
            <li>Java</li>
            <li>JS</li>
            <li>Manutenção de redes</li>
            <li>Windows e Linux</li>
            <li>Pacote office avançado</li>
        </ul>
    </CF> 
    </Card>
  </div>
);