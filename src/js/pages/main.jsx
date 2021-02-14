import React from 'react'
import ReactDOM from 'react-dom'

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const _ = require("lodash");

import TreeView from 'react-treeview';

import "./main.scss"
import $ from 'jquery'


/*********************************************************************************
 * Purpose: Common Base Page
 *
 * props
 * pageName  : string, the name of the page to load
 * localTest : boolean, are we running local testing?
 */
class DocumentPage extends React.Component {
    state = {
        page_content: "loading ...",
        index: []
    }

    get baseDir() {
        return (window.location.pathname.startsWith("/data_engineering")?"/data_engineering":"");
    }


    async load_content() {
        let resp = await fetch(
            `${this.baseDir}/pages/index.json`, {cache: "reload"}
        );

        if (!resp.ok) {
            // Need to surface error
            return;
        }
        const index = await resp.json();
        this.setState({index, index});

        resp = await fetch(
            `${this.baseDir}/pages/${this.props.pageName}/index.html`, {cache: "reload"}
        )
        let page_content = "page not found!";
        if (resp.ok) {
            page_content = await resp.text();
        }
        this.setState({page_content: page_content});
    }

    componentDidMount() {
        this.load_content();
    }

    renderIndexNode(node) {
        let currentUrl = new URL(window.location.href);
        const qs = new URLSearchParams("");
        if (this.props.pageName !== "readme") {
            qs.append("page_name", this.props.pageName);
        }
        const newUrl = currentUrl.toString().split("?")[0] + "?" + qs.toString();

        let link = <a href={newUrl}>{node.title}</a>;
        if (node.page_name === this.props.pageName) {
            link = <b>{link}</b>;
        }

        if (_.isEmpty(node.children)) {
            return <div className="index-leaf-node">{link}</div>;
        }

        return (
            <TreeView key={node.page_name} nodeLabel={link}>
                {
                    node.children.map(childNode => this.renderIndexNode(childNode))
                }
            </TreeView>
        );

    }

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
                        <div>
                            {
                                this.state.index.map(node => this.renderIndexNode(node))
                            }
                        </div>
                    </Col>
                    <Col data-role="page-content">
                        <div dangerouslySetInnerHTML={{__html: this.state.page_content}}></div>
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

    const urlParams = new URLSearchParams(window.location.search);
    const local_test = urlParams.get('local_test');

    let pageName = urlParams.get('page_name');
    if (!pageName) {
        pageName = "readme";
    }

    ReactDOM.render(
        <DocumentPage
            pageName = {pageName}
        />,
        document.getElementById('app')
    );
});