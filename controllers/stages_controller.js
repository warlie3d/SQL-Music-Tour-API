const stages = require('express').Router()
const db = require('../models')
const { Stage } = db

//find all Stages
stages.get('/', async (req, res) => {
    try {
        const foundStages = await Stage.findAll({
            order: [ ['stage_name', 'ASC']],
            // where: {
            //     name: { [Op.like]: `${req.query.name ? req.query.name : ''}%`}
            // }
            })
        res.status(200).json(foundStages)
    } catch (error) {
        res.status(500).json(error)
    }
})

//FIND A SPECIFIC Stages
stages.get('/id', async (req, res) => {
    try {
        const foundStage = await Stage.findOne({
            where: {stage_id: req.params.id}
        })
        res.status(200).json(foundStage)
    } catch (error) {
        res.status(500).json(error)
    }
})

// UPDATE Stage
stages.put('/:id', async (req, res) => {
    try {
        const updatedStages = await Stage.update(req.body, {
            where: {
                stage_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedStages} stage(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

//DELETE a stage 
stages.delete('/:id', async (req, res) => {
    try {
        const deletedStages = await Stage.destroy({
            where: {
                event_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedStages} stage(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})


//post stage

stages.post('/', async (req, res) => {
    try {
        const newStage = await Stage.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted new stage',
            data: newStage
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = stages