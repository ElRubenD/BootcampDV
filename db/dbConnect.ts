import mongoose from 'mongoose';
import { config } from 'dotenv';

config();

// el defaul le da gerarquia a la funcion principal y solo puede haber una
export default async function dbConnect() {
    //readyState si ya tenemos una coneccion activa de MongoDB
    if (mongoose.connection.readyState >= 1) return;
    try{
        //campturamos atraves de process
        // as string o ! para definir como string o ! para decirle que no va a ser nulo
        const mongodbURI = process.env.MONGODB_URI! ;
        await mongoose.connect(mongodbURI);
        console.log('Database connected');
        
    }catch(error){
        console.log('Error connecting to the Database', error);
    }
}