import * as tuitsDao from '../tuits/tuits-dao.js'

const findTuits = async (req, res) => {
    const tuits = await tuitsDao.findTuits()
    res.json(tuits);
}

const createTuit = async(req, res) => {
    const newTuit = req.body;
    newTuit.likes = 0;
    newTuit.liked = false;
    const insertedTuit = await tuitsDao
        .createTuit(newTuit);
    res.json(insertedTuit);
}

const deleteTuit = async(req, res) => {
    const tuitdIdToDelete = parseInt(req.params.tid);
    const status = await tuitsDao
        .deleteTuit(tuitdIdToDelete);
    res.json(status);
}

const updateTuit = async(req, res) => {
    const tuitdIdToUpdate = parseInt(req.params.tid);
    const updates = req.body;
    const status = await tuitsDao
        .updateTuit(tuitdIdToUpdate,
            updates);
    res.json(status);
}


export default (app) => {
    app.post('/api/a9/tuits', createTuit);
    app.get('/api/a9/tuits', findTuits);
    app.put('/api/a9/tuits/:tid', updateTuit);
    app.delete('/api/a9/tuits/:tid', deleteTuit);
}
