const router = require('express').Router();
const res = require('express/lib/response');
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// * get all tags
router.get('/', async (req, res) => {
	// be sure to include its associated Product data
	try {
		const tagData = await Tag.findAll({
			include: { model: Product },
		});
		res.status(200).json(tagData);
	} catch (err) {
		res.status(500).json(err);
	}
});

// * get a single tag by its `id`
router.get('/:id', async (req, res) => {
	// be sure to include its associated Product data
	try {
		const tagData = await Tag.findByPk(req.params.id, {
			include: { model: Product },
		});
		res.status(200).json(tagData);
	} catch (err) {
		res.status(500).json(err);
	}
});

// * create a new tag
router.post('/', async (req, res) => {
	try {
		const newTag = await Tag.create(req.body.tag_name);
		res.status(200).json(newTag);
	} catch (err) {
		res.status(500).json(err);
	}
});

// * update a tag's name by its `id` value
router.put('/:id', async (req, res) => {
	try {
		let updatedUser = await Tag.update(
			{ tag_name: req.body.tag_name },
			{
				where: {
					id: req.params.id,
				},
			}
		);
		res.status(200).json(updatedUser);
	} catch (err) {
		res.status(500).json(err);
	}
});

// * delete on tag by its `id` value
router.delete('/:id', async (req, res) => {
	try {
		let deletedTag = await Tag.destroy({
			where: {
				id: req.params.id,
			},
		});
		res.status(200).json(deletedTag);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
