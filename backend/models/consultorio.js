const mongoose = require('mongoose');

const consultorioSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: [true, 'El nombre del consultorio es requerido'],
    trim: true,
    maxlength: [50, 'El nombre no puede exceder los 50 caracteres']
  },
  ubicacion: {
    type: String,
    required: [true, 'La ubicación es requerida'],
    trim: true
  },
  responsable: {
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

// Métodos personalizados
consultorioSchema.methods.desactivar = function() {
  this.activo = false;
  return this.save();
};

module.exports = mongoose.model('Consultorio', consultorioSchema);