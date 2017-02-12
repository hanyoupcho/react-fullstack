import express from 'express';
import data from '../src/testData';

const router = express.Router();
const contests = data.contests.reduce((obj, contest) => {
			obj[contest.id] = contest;
			return obj;
		}, {});

router.get('/contests', (req, res) => {
	res.send({
		contests: contests
	});
});

router.get('/contests/:contestId', (req, res) => {
	let contest = contests[req.params.contestId];
	contest.description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
	res.send(contest);
});

export default router;
