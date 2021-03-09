/* eslint-disable no-use-before-define */
/* eslint-disable new-cap */
import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Table, Card, ButtonToolbar,
  ButtonGroup, Button } from 'react-bootstrap';
import jsPDF from 'jspdf';
import domtoimage from 'dom-to-image';
import { pageChange } from '../actions/index';

class StepThreeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  savePDF() {
    const input = this.myRef.current;
    const pdf = new jsPDF();
    if (pdf) {
      domtoimage.toPng(input)
        .then((imgData) => {
          pdf.addImage(imgData, 'PNG', 10, 10);
          pdf.save('download.pdf');
        });
    }
  }

  render() {
    const data = this.props;
    return (
      <Container>
        <Row>
          <Col lg={2} md={1} sm={0} />
          <Col lg={8} md={10} sm={12}>
            <div
            id="divToPrint"
            ref={this.myRef}
            >
              <Card>
                <Card.Body>
                  <h2>Final Results</h2>
                  <br />
                  <Table
                // ref={this.myRef}
                className="text-left"
                striped
                bordered
                hover
                variant="dark"
                  >
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Field Name</th>
                        <th>Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Name</td>
                        <td>{data.state.name}</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Description</td>
                        <td>{data.state.description}</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Client</td>
                        <td>{data.state.client}</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Contractor</td>
                        <td>{data.state.contractor}</td>
                      </tr>

                      <tr>
                        <td>5</td>
                        <td>Minimum value of X</td>
                        <td>{data.state.min_x}</td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>Maximum value of X</td>
                        <td>{data.state.max_x}</td>
                      </tr>

                      <tr>
                        <td>7</td>
                        <td>Minimum value of y</td>
                        <td>{data.state.min_y}</td>
                      </tr>
                      <tr>
                        <td>8</td>
                        <td>Maximum value of y</td>
                        <td>{data.state.max_y}</td>
                      </tr>

                      <tr>
                        <td>9</td>
                        <td>Minimum value of Z</td>
                        <td>{data.state.min_z}</td>
                      </tr>
                      <tr>
                        <td>10</td>
                        <td>Maximum value of Z</td>
                        <td>{data.state.max_z}</td>
                      </tr>
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>

            </div>
            <br />
            <ButtonToolbar
            className="buttongrp-align-center"
            >
              <ButtonGroup
                className="margin-10"
              >
                <Button
                variant="primary"
                onClick={() => { data.pageChange({ page: 2 }); }}
                >
                  Previous Page
                </Button>
              </ButtonGroup>
              <ButtonGroup
                className="margin-10"
              >
                <Button
                variant="primary"
                onClick={() => { data.pageChange({ page: 4 }); }}
                >
                  Show Graph
                </Button>
              </ButtonGroup>
              <ButtonGroup
                className="margin-10"
              >
                {/* {generatePdf} */}
                <Button
                  variant="primary"
                  onClick={() => {
                    // eslint-disable-next-line no-undef
                    this.savePDF();
                  }}
                >
                  Downlaod PDF
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
}

const mapStateToProps = (state) => ({ state });

function mapDispatchToProps(dispatch) {
  return {
    pageChange: (payload) => dispatch(pageChange(payload))
  };
}

const StepThree = connect(
  mapStateToProps,
  mapDispatchToProps
)(StepThreeComponent);

export default StepThree;
