import React, { Component } from "react";
import { getComputerBuildFromId } from "../../actions/computerBuildDetailActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ComputerBuildHeader from "./ComputerBuildHeader";
import ComputerPartList from "./ComputerPartList";
import DirectionsList from "./DirectionsList";
import PurposeList from "./PurposeList";
import BuildNoteList from "./BuildNoteList";
import OverclockingNoteList from "./OverclockingNoteList";
import {
  getComputerBuildDetailsReducer,
  getSecurityReducer,
  getErrorsReducer,
} from "../../selectors";
import ComputerBuildError from "../error/ComputerBuildError";

class ComputerBuildDetail extends Component {
  constructor() {
    super();
    this.state = {
      errors: {},
    };
  }

  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({
        errors: newProps.errors,
      });
    }
  }

  componentDidMount() {
    const { buildIdentifier } = this.props.match.params;
    this.props.getComputerBuildFromId(buildIdentifier);
  }

  checkOwner = (props) => {
    const user = props.security.user;
    if (user !== undefined) {
      const { computerBuild } = props.computerBuildDetails;
      if (user.username !== undefined && computerBuild.username !== undefined) {
        if (user.username === computerBuild.username) {
          return true;
        }
      }
    }
    return false;
  };

  render() {
    const { buildIdentifier } = this.props.match.params;
    const { computerBuildDetails } = this.props;

    const isOwner = this.checkOwner(this.props);
    const { errors } = this.state;

    let hasError = errors.hasOwnProperty("message");

    const {
      computerParts,
      directions,
      purposeList,
      buildNotes,
      overclockingNotes,
      computerBuild,
      totalPrice,
    } = computerBuildDetails;

    let errorContent = <ComputerBuildError message={errors.message} />;
    // let errorContent = (
    //   <div className="Container">
    //     <div className="row">
    //       <div className="col-md-12 text-center">
    //         <h3>{errors.message}</h3>
    //       </div>
    //     </div>
    //   </div>
    // );

    let content = (
      <div class="Container">
        <ComputerBuildHeader computerBuild={computerBuild} />
        <ComputerPartList
          computerParts={computerParts}
          buildIdentifier={buildIdentifier}
          isOwner={isOwner}
          totalPrice={totalPrice}
        />
        <PurposeList
          purposeList={purposeList}
          buildIdentifier={buildIdentifier}
          isOwner={isOwner}
        />
        <OverclockingNoteList
          overclockingNotes={overclockingNotes}
          buildIdentifier={buildIdentifier}
          isOwner={isOwner}
        />
        <BuildNoteList
          buildNotes={buildNotes}
          buildIdentifier={buildIdentifier}
          isOwner={isOwner}
        />
        <DirectionsList
          directions={directions}
          buildIdentifier={buildIdentifier}
          isOwner={isOwner}
        />
      </div>
    );

    return hasError ? errorContent : content;
  }
}

ComputerBuildDetail.propTypes = {
  getComputerBuildFromId: PropTypes.func.isRequired,
  computerBuildDetails: PropTypes.object.isRequired,
  security: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  computerBuildDetails: getComputerBuildDetailsReducer(state),
  security: getSecurityReducer(state),
  errors: getErrorsReducer(state),
});

export default connect(mapStateToProps, { getComputerBuildFromId })(
  ComputerBuildDetail
);
