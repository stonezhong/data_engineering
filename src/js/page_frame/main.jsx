import React from 'react'
import ReactDOM from 'react-dom'
import SplitPane from 'react-split-pane'
import TreeView from 'react-treeview'

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const _ = require("lodash");


import "./main.scss"
import $ from 'jquery'


/*********************************************************************************
 * Purpose: Common Base Page
 *
 * props
 *     pageName
 *     sitePrefix
 *     config             // see config.json for example
 */
class DocumentPage extends React.Component {
    renderIndexNode(node) {
        let pageDesc = this.props.config.pages[node.page_name];
        const url = `${this.props.sitePrefix}/pages/${node.page_name}/page.html`;
        let link = <a href={url}>{pageDesc.title}</a>;
        if (this.props.pageName === node.page_name) {
            link = <b>{link}</b>;
        }

        if (_.isEmpty(node.children)) {
            return <div key={node.page_name} className="index-leaf-node">{link}</div>;
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
            <div>
                <div className="page-header">
                    <h1 >Data Engineering Knowledge Center</h1>
                    <div className="user-profile">
                        Created by Stone Zhong. {' '}
                            <a href="https://www.linkedin.com/in/stonezhong/">Linkedin Profile</a>{' | '}
                            <a href="https://github.com/stonezhong/">Github Profile</a>
                    </div>
                </div>
                <div className="body-wrapper">
                    <SplitPane split="vertical" minSize={200} defaultSize={300} className="panel-wrapper">
                        <div className="page-index">
                        {
                            this.props.config.index.map(node => this.renderIndexNode(node))
                        }
                        </div>
                        <div className="page-content">
                            <ContentComponent />
                        </div>
                    </SplitPane>
                </div>
            </div>
        )
    }
}

$(function() {
    let page_config = JSON.parse($("meta[name='page_config']")[0].content)

    ReactDOM.render(
        <DocumentPage
            pageName = {page_config.page_name}
            sitePrefix = {page_config.site_prefix}
            config = {page_config.config}   // see config.json for example
        />,
        document.getElementById('app')
    );
});