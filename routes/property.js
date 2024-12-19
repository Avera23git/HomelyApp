const express = require('express');
const Property = require('../models/property');
const router = express.Router();

// Get all properties
router.get('/', async (req, res) => {
  try {
    const properties = await Property.find().populate('user');
    res.json(properties);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a new property
router.post('/', async (req, res) => {
  const { title, location, price, description, images, amenities, user } = req.body;
  try {
    const property = await Property.create({ title, location, price, description, images, amenities, user});
    res.status(201).json(property);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

//deleting a property
router.delete('/:id', async (req, res) => {
  const propertyId = req.params.id;

  try {
    // Check if the property exists
    const property = await Property.findById(propertyId);

    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }

    // Delete the property
    await Property.findByIdAndDelete(propertyId);

    res.json({ message: 'Property deleted successfully' });
  } catch (error) {
    console.error('Error deleting property:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router