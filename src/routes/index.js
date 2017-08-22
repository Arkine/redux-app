import React, { Component } from 'react'
import { FrontPage } from 'containers'
import { Header } from 'components'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`text-align: center;`

class Routes extends Component {
  render() {
    return (
      <Router>
        <Container>
          <Header />
          <Route path="/" component={ FrontPage } />
        </Container>
      </Router>
    )
  }
}

export default Routes
