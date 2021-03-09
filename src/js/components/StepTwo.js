/* eslint-disable no-unused-vars */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
/* eslint-disable max-len */
/* eslint-disable class-methods-use-this */
import { Component } from 'react';
import { connect } from 'react-redux';
import CSVReader from 'react-csv-reader';
import { Container, Row, Col, Form, Card,
  ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';
import { addStep2, pageChange } from '../actions/index';

const papaparseOptions = {
  header: true,
  dynamicTyping: true,
  skipEmptyLines: true,
  transformHeader: (header) => header.toLowerCase().replace(/\W/g, '_')
};

class StepTwoComponent extends Component {
  constructor(props) {
    super(props);
    const porps = this.props;

    this.state = {
      page: 3,
      name: porps.name,
      description: porps.description,
      client: porps.client,
      contractor: porps.contractor,
      csv_data: '',
      min_x: '',
      max_x: '',
      min_y: '',
      max_y: '',
      min_z: '',
      max_z: ''
    };
  }

  componentDidMount() {
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit(event) {
    const { props } = this;
    event.preventDefault();
    props.addStep2(this.state);
  }

  handleFileUpload(data, fileInfo) {
    const x = data.map((a) => (a.x));
    const y = data.map((a) => (a.y));
    const z = data.map((a) => (a.z));

    this.setState({
      csv_data: data,
      max_x: Math.max(...x),
      min_x: Math.min(...x),
      max_y: Math.max(...y),
      min_y: Math.min(...y),
      max_z: Math.max(...z),
      min_z: Math.min(...z)
    });
  }

  render() {
    const { state } = this;
    const { props } = this;
    return (
      <Container>
        <Row>
          <Col lg={2} md={1} sm={0} />
          <Col lg={8} md={10} sm={12}>
            <Card>
              <Card.Body>
                <Form
                className="form-container"
                onSubmit={(event) => { this.handleSubmit(event); }}
                >
                  <Row>
                    <Col md={6}>
                      <Form.Group controlId="formProjectName">
                        <Form.Label>Project Name</Form.Label>
                        <Form.Control
                            placeholder="Enter Project Name"
                            id="name"
                            value={state.name}
                            onChange={(event) => this.handleChange(event)}
                            readOnly
                        />
                      </Form.Group>
                      <Form.Group controlId="formProjectDescription">
                        <Form.Label>Project Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={4}
                            placeholder="Enter Project Description"
                            id="description"
                            value={state.description}
                            onChange={(event) => this.handleChange(event)}
                            readOnly
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="formClient">
                        <Form.Label>Client</Form.Label>
                        <Form.Control
                            placeholder="Enter Client Name"
                            id="client"
                            value={state.client}
                            onChange={(event) => this.handleChange(event)}
                            readOnly
                        />
                      </Form.Group>
                      <Form.Group controlId="formContractor">
                        <Form.Label>Contractor</Form.Label>
                        <Form.Control
                            placeholder="Enter Contractor Name"
                            id="contractor"
                            value={state.contractor}
                            onChange={(event) => this.handleChange(event)}
                            readOnly
                        />
                      </Form.Group>
                      <Form.Group controlId="formContractor">
                        <Form.Label>Upload CSV</Form.Label>
                        <Card>
                          <CSVReader
                              cssClass="react-csv-input"
                              // label="Select CSV with secret Death Star statistics"
                              onFileLoaded={(data, fileInfo) => this.handleFileUpload(data, fileInfo)}
                              parserOptions={papaparseOptions}
                          />
                        </Card>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={4}>
                      <Form.Group controlId="formMinX">
                        <Form.Label>Minimum X</Form.Label>
                        <Form.Control
                          placeholder="minimum value of x"
                          id="min_x"
                          type="number"
                          value={state.min_x}
                          onChange={(event) => this.handleChange(event)}
                          required
                        />
                      </Form.Group>
                      <Form.Group controlId="formMaxX">
                        <Form.Label>Maximum X</Form.Label>
                        <Form.Control
                          placeholder="maximum value of x"
                          id="max_x"
                          type="number"
                          value={state.max_x}
                          onChange={(event) => this.handleChange(event)}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={4}>
                      <Form.Group controlId="formMinY">
                        <Form.Label>Minimum Y</Form.Label>
                        <Form.Control
                          placeholder="minimum value of y"
                          id="min_y"
                          type="number"
                          value={state.min_y}
                          onChange={(event) => this.handleChange(event)}
                          required
                        />
                      </Form.Group>
                      <Form.Group controlId="formMaxY">
                        <Form.Label>Maximum Y</Form.Label>
                        <Form.Control
                          placeholder="maximum value of y"
                          id="max_y"
                          type="number"
                          value={state.max_y}
                          onChange={(event) => this.handleChange(event)}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={4}>
                      <Form.Group controlId="formMinZ">
                        <Form.Label>Minimum Z</Form.Label>
                        <Form.Control
                          placeholder="minimum value of z"
                          id="min_z"
                          type="number"
                          value={state.min_z}
                          onChange={(event) => this.handleChange(event)}
                          required
                        />
                      </Form.Group>
                      <Form.Group controlId="formMaxZ">
                        <Form.Label>Maximum Z</Form.Label>
                        <Form.Control
                          placeholder="maximum value of z"
                          id="max_z"
                          type="number"
                          value={state.max_z}
                          onChange={(event) => this.handleChange(event)}
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <ButtonToolbar
                    className="buttongrp-align-center"
                  >
                    <ButtonGroup
                      className="margin-10"
                    >
                      <Button
                        variant="primary"
                        onClick={() => { props.pageChange({ page: 1 }); }}
                      >
                        Previous Page
                      </Button>
                    </ButtonGroup>
                    <ButtonGroup>
                      <Button variant="primary" type="submit">
                        Submit
                      </Button>
                    </ButtonGroup>
                  </ButtonToolbar>
                  {/* <Button variant="primary" type="submit">
                    Submit
                  </Button> */}
                </Form>
              </Card.Body>
            </Card>
            <br />
            <br />
          </Col>
          <Col lg={2} md={1} sm={0} />
        </Row>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    name: state.name,
    description: state.description,
    client: state.client,
    contractor: state.contractor
  };
}

function mapDispatchToProps(dispatch) {
  return {
    pageChange: (payload) => dispatch(pageChange(payload)),
    addStep2: (payload) => dispatch(addStep2(payload))
  };
}

const StepTwo = connect(
  mapStateToProps,
  mapDispatchToProps
)(StepTwoComponent);

export default StepTwo;
