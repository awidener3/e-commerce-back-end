const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// * find all categories
router.get('/', async (req, res) => {
	// be sure to include its associated Products
	try {
		const categoryData = await Category.findAll({
			include: { model: Product },
		});
		res.status(200).json(categoryData);
	} catch (err) {
		res.status(500).json(err);
	}
});

// * find one category by its `id` value
router.get('/:id', async (req, res) => {
	// be sure to include its associated Products
	try {
		const categoryData = await Category.findByPk(req.params.id, {
			include: { model: Product },
		});
		res.status(200).json(categoryData);
	} catch (err) {
		res.status(500).json(err);
	}
});

// * create a new category
router.post('/', async (req, res) => {
	try {
		const newCategory = await Category.create(req.body.category_name);
		res.status(200).json(newCategory);
	} catch (err) {
		res.status(500).json(err);
	}
});

// * update a category by its `id` value
router.put('/:id', async (req, res) => {
	try {
		let updatedCategory = await Category.update(
			{ category_name: req.body.category_name },
			{
				where: {
					id: req.params.id,
				},
			}
		);
		res.status(200).json(updatedCategory);
	} catch (err) {
		res.status(500).json(err);
	}
});

// * delete a category by its `id` value
router.delete('/:id', async (req, res) => {
	try {
		let deletedCategory = await Category.destroy({
			where: {
				id: req.params.id,
			},
		});
		res.status(200).json(deletedCategory);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
