const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: [true, 'El nombre del item es requerido'],
    trim: true,
    unique: true,
    maxlength: [100, 'El nombre no puede exceder los 100 caracteres']
  },
  categoria: {
    type: String,
    required: [true, 'La categoría es requerida'],
    enum: {
      values: ['hardware', 'periferico', 'software', 'red', 'otros'],
      message: 'Categoría no válida'
    }
  },
  descripcion: {
    type: String,
    trim: true
  },
  activo: {
    type: Boolean,
    default: true
  }
}, { 
  timestamps: true 
});

module.exports = mongoose.model('Item', itemSchema);