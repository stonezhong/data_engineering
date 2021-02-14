import React from 'react'
import ReactDOM from 'react-dom'

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Badge from 'react-bootstrap/Badge'

import "./main.scss"
import $ from 'jquery'


/*********************************************************************************
 * Purpose: Common Base Page
 *
 */

class DocumentPage extends React.Component {
    render() {
        return (
            <Container data-role="page" fluid>
                <Row>
                    <Col data-role="page-header">
                        <h1>Data Engineering Knowledge Center</h1>
                    </Col>
                </Row>
                <Row>
                    <Col data-role="page-index" xs={3}>
                        <h1>
                            Indexes
                        </h1>
                    </Col>
                    <Col data-role="page-content">
                        <h1>Content</h1>
                    </Col>
                </Row>
                <Row>
                    <Col data-role="page-footer">
                        <div>
                            Created by Stone Zhong. {' '}
                            <a href="https://www.linkedin.com/in/stonezhong/">Linkedin Profile</a>{' | '}
                            <a href="https://github.com/stonezhong/">Github Profile</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

$(function() {

    ReactDOM.render(
        <DocumentPage />,
        document.getElementById('app')
    );
});