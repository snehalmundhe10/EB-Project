import express from 'express';
import bodyParser from 'body-parser';
import {filterImageFromURL, deleteLocalFiles} from './util/util';

(async () => {

  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;
  
  // Use the body parser middleware for post requests
  app.use(bodyParser.json());

  //Implementation of filterimage endpoint
  app.get("/filteredimage", async(req,res) => {
    const image_url : string = req.query.image_url;
    if(!image_url){
      res.status(400).send("Image URL is not valid");
      return;
    }
    const image_file : string  = await filterImageFromURL(image_url);
    res.sendFile(image_file);
    res.on("finish", () => deleteLocalFiles([image_url]));
  });

  // Root Endpoint
  // Displays a simple message to the user
  app.get( "/", async ( req, res ) => {
    res.send("try GET /filteredimage?image_url={{}}")
  } );
  

  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
})();