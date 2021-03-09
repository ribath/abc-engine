import { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { addStep1 } from '../actions/index';

class StepOneComponent extends Component {
  constructor(props) {
    super(props);
    const data = this.props;
    this.state = {
      page: 2,
      name: data.name,
      description: data.description,
      client: data.client,
      contractor: data.contractor
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
    props.addStep1(this.state);
  }

  render() {
    const { state } = this;
    return (
      <Container>
        <Row>
          <Col md={2} />
          <Col md={8}>
            <Card>
              <Card.Body>
                <Form
                className="form-container"
                onSubmit={(event) => { this.handleSubmit(event); }}
                >
                  <Form.Group controlId="formProjectName">
                    <Form.Label>Project Name</Form.Label>
                    <Form.Control
                      placeholder="Enter Project Name"
                      id="name"
                      value={state.name}
                      onChange={(event) => this.handleChange(event)}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formProjectDescription">
                    <Form.Label>Project Description</Form.Label>
                    <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter Project Description"
                    id="description"
                    value={state.description}
                    onChange={(event) => this.handleChange(event)}
                    required
                    />
                  </Form.Group>
                  <Form.Group controlId="formClient">
                    <Form.Label>Client</Form.Label>
                    <Form.Control
                      placeholder="Enter Client Name"
                      id="client"
                      value={state.client}
                      onChange={(event) => this.handleChange(event)}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formContractor">
                    <Form.Label>Contractor</Form.Label>
                    <Form.Control
                      placeholder="Enter Contractor Name"
                      id="contractor"
                      value={state.contractor}
                      onChange={(event) => this.handleChange(event)}
                      required
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
            <br />
            <br />
          </Col>
          <Col md={2} />
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
    addStep1: (payload) => dispatch(addStep1(payload))
  };
}

const StepOne = connect(
  mapStateToProps,
  mapDispatchToProps
)(StepOneComponent);

export default StepOne;
