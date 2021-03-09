/* eslint-disable no-use-before-define */
import React from 'react';
import { Chart } from 'react-charts';
import { connect } from 'react-redux';
import { Container, Row, Col, Card, ButtonToolbar,
  ButtonGroup, Button } from 'react-bootstrap';
import { pageChange } from '../actions/index';

function StepFourComponet(props) {
  const propData = props;

  const points = propData.csv_data.map((a) => [a.kp, a.x]);

  const data = React.useMemo(
    () => [
      {
        label: 'Series 1',
        data: points
      }
    ],
    []
  );

  const series = React.useMemo(
    () => ({
      showPoints: false
    }),
    []
  );

  const axes = React.useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ],
    []
  );
  return (
    <Container>
      <Row>
        <Col lg={2} md={1} sm={0} />
        <Col lg={8} md={10} sm={12}>
          <Card>
            <Card.Body>
              <h2>KP vs X Graph</h2>
              <br />
              <div
                style={{
                  width: 'auto',
                  height: '600px'
                }}
              >
                <Chart
                    data={data}
                    series={series}
                    axes={axes}
                    tooltip
                    primaryCursor
                    secondaryCursor
                />
              </div>
            </Card.Body>
          </Card>
          <br />
          <ButtonToolbar
            className="buttongrp-align-center"
          >
            <ButtonGroup
                className="margin-10"
            >
              <Button
                variant="primary"
                onClick={() => { propData.pageChange({ page: 3 }); }}
              >
                Previous Page
              </Button>
            </ButtonGroup>
          </ButtonToolbar>
          <br />
          <br />
        </Col>
        <Col lg={2} md={1} sm={0} />
      </Row>
    </Container>
  );
}

function mapStateToProps(state) {
  return {
    csv_data: state.csv_data
  };
}

function mapDispatchToProps(dispatch) {
  return {
    pageChange: (payload) => dispatch(pageChange(payload))
  };
}

const StepFour = connect(
  mapStateToProps,
  mapDispatchToProps
)(StepFourComponet);

export default StepFour;
