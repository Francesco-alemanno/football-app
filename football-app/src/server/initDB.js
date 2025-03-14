import pgPromise from "pg-promise";
import dotenv from 'dotenv'
dotenv.config()
const {URL}= process.env
export const db = pgPromise()(
  URL
);

const initDb = async () => {
  try {
    await db.none(`
            CREATE TABLE IF NOT EXISTS users(
            id SERIAL PRIMARY KEY,
            nome TEXT,
            cognome TEXT,
            email TEXT UNIQUE,
            password TEXT
            )
            `);
    // await db.none(`INSERT INTO users (nome, cognome, email, password) VALUES(
    //             'Gianlorenzo',
    //             'Mungiovino',
    //             'gianlorenzo@gmail.com',
    //             'Pass123!'
                
                
                
    //             )`);
    // await db.none(`INSERT INTO users (nome, cognome, email, password) VALUES(
    //                 'Marco',
    //                 'Grassi',
    //                 'marcog@gmail.com',
    //                 'Pass123!'
                    
                    
                    
    //                 )`);
    // await db.none(`INSERT INTO users (nome, cognome, email, password) VALUES(
    //                     'Marco',
    //                     'Filannino',
    //                     'marcof@gmail.com',
    //                     'Pass123!'
                        
                        
                        
    //                     )`);

    console.log("tabelle create correttamente");
  } catch (error) {
    console.error("errore", error.message);
  }
};
initDb();
