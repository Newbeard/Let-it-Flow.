const express = require('express');
const router = express.Router();
const { Bouquet } = require('../db/models')

router.get('/', async (req, res) => {
  const card = await Bouquet.findAll();
  res.json(card)
})


router.post('/',  async (req, res) => {

  if (req.files === null) {
    return res.status(400).json({ msg: 'No file uploaded' });
  }
 
  const sampleFile = req.files.file;

  
  let uploadPath = '/img/' + sampleFile.name;
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }
  sampleFile.mv('public/img/'+sampleFile.name, function(err) {
    if (err)
      console.log(err);
  });

  try {
    const { title, description, price, category_id } = req.body;
    const bouquet = await Bouquet.create({ 
      title, 
      description, 
      price, 
      img: uploadPath, 
      category_id 
    });
    return res.json(bouquet)
    
  } catch (error) {
    res.status(401)
      .json({
        message: error.message,
      }).end();
  }
});


router.post('/edit/:id',  async (req, res) => {
  const { id } = req.params;
  const bouquet = await Bouquet.findOne({
    where: { id }
  })

let uploadPath
  if (req.files === null) {
    uploadPath = bouquet.img
  } else {
    const sampleFile = req.files.file;
    uploadPath = '/img/' + sampleFile.name;
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send('No files were uploaded.');
    }
    sampleFile.mv('public/img/'+sampleFile.name, function(err) {
      if (err)
        console.log(err);
    });

  }

  try {
    const { title, description, price, category_id } = req.body;

    bouquet.title = title
    bouquet.description = description
    bouquet.price = price
    bouquet.img = uploadPath
    bouquet.category_id = category_id
    console.log(bouquet)
    await bouquet.save()

    return res.json(bouquet)
    
  } catch (error) {
    res.status(401)
      .json({
        message: error.message,
      }).end();
  }
});

router.delete('/:id',  async (req, res) => {
  try {
    const { id } = req.params;

    const bouquet = await Bouquet.destroy({
      where: { id }
    })
    return res.json(bouquet)
    
  } catch (error) {
    res.status(401)
      .json({
        message: error.message,
      }).end();
  }
});


module.exports = router;
