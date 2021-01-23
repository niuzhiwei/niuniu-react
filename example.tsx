import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter as Router,NavLink,Route} from 'react-router-dom'
import  IconDemo  from './lib/icon/icon.demo';
import DialogExample from './lib/dialog/dialog.example';
import LayoutExample from './lib/layout/layout.example';
import {Layout,Header,Aside,Content,Footer} from './lib/layout/layout'
import FormExample from './lib/form/form.example';
import './example.scss'
const logo = require('./logo.png');

ReactDOM.render(
<Router>
    <Layout className='site-page'>
        <Header className="site-header">
            <div className="logo">
                <img src={logo.default} width='48' height='48' alt=""/>
                <span>NiuNiu UI</span>
            </div>
        </Header>
        <Layout>
            <Aside className='site-aside'>
                <h2>组件</h2>
                <ul>
                    <li><NavLink to='/icon'>Icon</NavLink></li>
                    <li><NavLink to='/dialog'>Dialog</NavLink></li>
                    <li><NavLink to='/layout'>Layout</NavLink></li>
                    <li><NavLink to='/form'>表单</NavLink></li>
                </ul>
            </Aside>
            <Content className='site-main'>
             <Route path='/icon' component={IconDemo} ></Route>
             <Route path='/dialog' component={DialogExample} ></Route>
             <Route path='/layout' component={LayoutExample} ></Route>
             <Route path='/form' component={FormExample} ></Route>
            </Content>
        </Layout>
       <Footer className='site-footer'>
           &copy; niuniu
       </Footer>
    </Layout>
    </Router>
,document.querySelector('#root'))