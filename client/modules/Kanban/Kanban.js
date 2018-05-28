import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { createLane, deleteLane, updateLane, fetchLanes } from '../Lane/LaneActions';
import Lanes from '../Lane/Lanes';
import styles from '../Lane/Lane.css';

const Kanban = (props) => (
  <div>
    <button
      className={styles.AddLane}
      onClick={() => props.createLane({
        name: 'New lane',
      })}
    >Add lane</button>
    <button
      className={styles.DeleteLane}
      onClick={() => props.deleteLane(id)}
    >Delete lane</button>
     <button
      className={styles.UpdateLane}
      onClick={() => props.updateLane(lane)}
    >Update lane</button>
    <Lanes lanes={props.lanes} />
  </div>
);

Kanban.need = [() => { return fetchLanes(); }];

Kanban.propTypes = {
  lanes: PropTypes.array,
  createLane: PropTypes.func,
  deleteLane: PropTypes.func,
  updateLane: PropTypes.func,
};

const mapStateToProps = state => ({
  lanes: Object.values(state.lanes)
});

const mapDispatchToProps = {
  createLane,
  deleteLane,
  updateLane,
};

export default connect(mapStateToProps, mapDispatchToProps)(Kanban);