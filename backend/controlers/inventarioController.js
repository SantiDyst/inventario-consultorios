const Inventario = require('./models/Inventario');
const Consultorio = require('./models/Consultorio');
const Item = require('./models/Item');

exports.obtenerInventario = async (req, res, next) => {
  try {
    const inventario = await Inventario.find()
      .populate('consultorio')
      .populate('item');
    
    res.status(200).json({
      success: true,
      count: inventario.length,
      data: inventario
    });
  } catch (err) {
    next(err);
  }
};
// ... (más funciones)