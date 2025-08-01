const mongoose = require('mongoose');

const inventarioSchema = new mongoose.Schema({
  consultorio: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Consultorio',
    required: [true, 'El consultorio es requerido']
  },
  item: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Item',
    required: [true, 'El item es requerido']
  },
  cantidad: {
    type: Number,
    required: [true, 'La cantidad es requerida'],
    min: [0, 'La cantidad no puede ser menor a 0']
  },
  estado: {
    type: String,
    enum: {
      values: ['activo', 'en_reparacion', 'dado_de_baja', 'perdido'],
      message: 'Estado no válido'
    },
    default: 'activo'
  }
}, { 
  timestamps: true 
});

// Índice compuesto para evitar duplicados
inventarioSchema.index({ consultorio: 1, item: 1 }, { unique: true });

module.exports = mongoose.model('Inventario', inventarioSchema);