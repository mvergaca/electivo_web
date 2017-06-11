import React from 'react';
import classNames from 'classnames';

import { Tab, Row, Col, Nav, NavItem } from 'react-bootstrap';

function RoomChat(){
    return(
      <Tab.Container id="list_users" defaultActiveKey="first">
        <Row className="clearfix">
          <Col sm={4}>
            <Nav bsStyle="pills" stacked>
              <NavItem eventKey="first">
                Primer Usuario
              </NavItem>
              <NavItem eventKey="second">
                Segundo Usuario
              </NavItem>
            </Nav>
          </Col>
          <Col sm={8}>
            <Tab.Content animation>
              <Tab.Pane eventKey="first">
                Tab 1 content
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                Tab 2 content
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    );
}
export default RoomChat;
