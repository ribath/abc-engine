import { connect } from 'react-redux';
import { Jumbotron, Container } from 'react-bootstrap';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';

function HomeComponet(props) {
  const viewComponent = () => {
    if (props.page === 1) return <StepOne />;
    if (props.page === 2) return <StepTwo />;
    if (props.page === 3) return <StepThree />;
    if (props.page === 4) return <StepFour />;
    else return <div>{props.page}</div>;
  };
  return (
    <div>
      <Jumbotron>
        <Container>
          <h1 className="text-center">ABC Engine</h1>
        </Container>
      </Jumbotron>
      {viewComponent()}
    </div>
  );
}

const mapStateToProps = (state) => ({ page: state.page });

const Home = connect(
  mapStateToProps
)(HomeComponet);

export default Home;
