import { Router } from 'express';
import * as LaneController from '../controllers/lane.controller';

const router = new Router();

// Get all Lanes
router.route('/lanes').get(LaneController.getLanes);

// Add a new Lane
router.route('/lanes').post(LaneController.addLane);

// Delete a Lane
router.route('/lanes/:laneId').delete(LaneController.deleteLane);

// Edit a Lane name
router.route('/lanes/:laneId').put(LaneController.editLaneName);

export default router;
