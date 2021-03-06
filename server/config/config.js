// ====================
// Puerto
// ====================
process.env.PORT = process.env.PORT || 3000;

// ====================
// Entorno
// ====================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ====================
// Base de datos
// ====================
let urlDB;

// ====================
// Vencimiento del Token
// ====================
// 60 segundos
// 60 minutos
// 24 horas
// 30 días
process.env.CADUCIDAD_TOKEN = '48h';

// ====================
// SED de autenticación
// ====================
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

if(process.env.NODE_ENV === 'dev'){
    urlDB = 'mongodb://localhost:27017/cafe';
}else{
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;

// ====================
// Google Client Id
// ====================
process.env.CLIENT_ID = process.env.CLIENT_ID || '870976510389-5uvga2m9aaepojvhql8vnrkfd5on72sa.apps.googleusercontent.com';