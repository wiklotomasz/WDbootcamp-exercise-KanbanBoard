import { connect } from 'react-redux';
import Lane from './Lane';
import { createLaneRequest, deletLaneRequest, updateLaneRequest, fetchLanes } from '../Lane/LaneActions';
import { editLane } from './LaneActions';
import { createNoteRequest, updateNoteRequest, deleteNoteRequest } from '../Note/NoteActions'

const mapStateToProps = (state, ownProps) => ({
  laneNotes: ownProps.lane.notes.map(noteId => state.notes[noteId])
});

const mapDispatchToProps = {
  editLane,
  deleteLane: deletLaneRequest,
  updateLane: updateLaneRequest,
  createLane: createLaneRequest,
  addNote: createNoteRequest,
  updateNote: updateNoteRequest,
  deleteNote: deleteNoteRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lane);