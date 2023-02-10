import express from 'express';
import mongoose from 'mongoose';


mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    const app = express();
    const port = 8070;

    app.listen(port, () => {
      console.log('Porta conectada!');
    });
  })
  .catch(() => console.log('desconectado ao mongo'));


