import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import sizeStyles from "../style/size.module.css";
import colorStyles from "../style/color.module.css";
import alignStyles from "../style/align.module.css";
import positionStyles from "../style/position.module.css";
import spaceStyles from "../style/space.module.css";

type LayoutProps = {
  header?: React.ReactNode
  navBar?: React.ReactNode
  settingBar?: React.ReactNode
  footer?: React.ReactNode
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({header, navBar, settingBar, children, footer}) => (
  <Container
    fluid
    className={[sizeStyles.height100].join(" ")}
  >
    <Row
      xs={8}
      className={[positionStyles.relative, positionStyles.zIndex1, spaceStyles.mt1rem].join(" ")}
    >
      {header}
    </Row>
    <Row
      fluid
      xs={12}
      className={["d-flex", "h-100", positionStyles.relative, positionStyles.zIndex1].join(" ")}
    >
      <Col
        xxl={{
          span: 1,
          order: "first",
        }}
        lg={{
          span: 1,
          order: "first",
        }}
        sm={2}
        xxs={4}
        className={[colorStyles.darkTheme, 
          alignStyles.fromTopCenter].join(" ")}
      >
        {navBar}
      </Col>
      <Col
        xxl={10}
        lg={9}
        xs={{
          span: 12,
          order: "first",
        }}
        className={[positionStyles.relative, colorStyles.greyTheme].join(" ")}
      >
        {children}
      </Col>
      <Col
        xxl={1}
        lg={2}
        xs={6}
        className={[colorStyles.darkTheme, positionStyles.relative, positionStyles.zIndex1].join(" ")}
      >
        {settingBar}
      </Col>
    </Row>
    <Row
      xs={2}
      className={[colorStyles.darkTheme, positionStyles.relative, positionStyles.zIndex1].join(" ")}
    >
      {footer}
    </Row>
  </Container>
);

export default Layout;
