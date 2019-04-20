import React, { Component } from 'react';

import api from '../../services/api';
import {distanceInWords} from 'date-fns';
import pt from 'date-fns/locale/pt';
import socket from 'socket.io-client';

import {MdInsertDriveFile, MdFolder, MdCreateNewFolder} from 'react-icons/md';
import logo from '../../assets/logo.svg';
import './styles.css';

export default class BoxAll extends Component {

    state = {boxes: [{}], idbox: ''};

    async componentDidMount() {

        const boxes = await api.get(`showBoxes`);
        console.log(boxes);

        this.setState({boxes: boxes.data });
    };

    handleIdChange = (e) => {
        this.setState({ idbox: e });
    };

    handleListBox = (id, e) => {
       // this.handleIdChange(id);

        this.props.history.push(`/box/${id}`);
    };

    handleBox = () => {
        this.props.history.push(`/`);
    };

   /* subscribeToNewFiles = () => {
        const box = this.props.match.params.id;
        const io = socket('http://localhost:3000');
        //const io = socket('https://omnistackleite-backend.herokuapp.com');

        io.emit('connectRoom', box);

        io.on('file', data => {
            this.setState({box: {... this.state.box, files: [data, ... this.state.box.files, ]}});
        });
    }; */

  render() {
    return (
        <div id="box-container">
            <header>
                <img src={logo} alt="" />
                <h1>Lista de Boxes</h1>
                <MdCreateNewFolder size={24} color="#A5Cfff" onClick={this.handleBox}/>
            </header>

            <ul>
                {this.state.boxes.map(box => (
                    <li key={box._id}>
                        <a className="fileInfo" href="#" onClick={this.handleListBox.bind(this,box._id)}>
                            <MdFolder size={24} color="#A5Cfff" />
                            <strong>{box.title}</strong>
                        </a>

                        <span>há{" "} {distanceInWords(box.createdAt, new Date(), {
                            locale: pt
                        })}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
  }
}
