import React from 'react';
import './css/LogBox.css';
import {Form, FormGroup, Label, Input, Col, Button } from 'reactstrap';

class LogBox extends React.Component{
    render(){
        return(
            <Col className="BigBox" xs="9" sm="6" md="5" lg="4" >
                <h1 id="loginLabel">Login</h1>
                <Form>
                    <FormGroup>
                        <Label for="inputEmail" className="label">Email ou Usuário</Label>
                        <Input type="email" name="email" id="inputEmail" placeholder="Digite o email"/>
                    </FormGroup>

                    <FormGroup>
                        <Label for="inputSenha" className="label">Senha</Label>
                        <Input type="password" name="password" id="inputSenha" placeholder="Digite sua senha" />
                    </FormGroup>
                    <Button color="success" className="logButton">Login</Button>
                    <Button color="link" className="logButton">Registrar</Button>
                </Form>
             
            </Col>
        );
    }
}

export default LogBox;
