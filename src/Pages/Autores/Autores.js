import React, { Component, Fragment } from 'react';
import Header from '../../Components/Header/Header';
import Tabela from '../../Components/Tabela/Tabela';
import ApiService from '../../utils/ApiService';
import PopUp from '../../utils/PopUp';


class Autores extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nomes: []
        };
    }

    componentDidMount() {
        ApiService.ListaNomes()
            .then(res => {
                if (res.message === 'success') {
                    PopUp.exibeMensagem('success', 'Autores listados com sucesso');
                    this.setState({ nomes: [...this.state.nomes, ...res.data] });
                }
            })
            .catch(err => PopUp.exibeMensagem('error', 'Erro na comunicação com a API ao tentar listar os autores'));
    }

    render() {
        const campos = [
            { titulo: 'Autores', dado: 'nome' }
          ];
        return (
            <Fragment>
                <Header />
                <div className='container'>
                    <h1>Página de Autores</h1>
                    <Tabela dados={this.state.nomes} campos={campos} />
                </div>
            </Fragment>
        );
    }
}

export default Autores;