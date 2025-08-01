const Consultorio = require('./models/Consultorio');

// @desc    Obtener todos los consultorios
// @route   GET /api/v1/consultorios
// @access  Public
exports.obtenerConsultorios = async (req, res, next) => {
  try {
    const consultorios = await Consultorio.find();
    res.status(200).json({
      success: true,
      count: consultorios.length,
      data: consultorios
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Crear nuevo consultorio
// @route   POST /api/v1/consultorios
// @access  Private (luego implementaremos auth)
exports.crearConsultorio = async (req, res, next) => {
  try {
    const consultorio = await Consultorio.create(req.body);
    res.status(201).json({
      success: true,
      data: consultorio
    });
  } catch (err) {
    next(err);
  }
};

// ... (actualizar, eliminar, desactivar, etc.)