import 'cypress-file-upload';

import { UploadFile } from '../pages';

const uploadFile = new UploadFile;

describe('Test to Upload demo site: Upload file - Validate the name of the uploaded file', () => {
  it('debería cargar una imagen', () => {
    cy.visit('https://the-internet.herokuapp.com/upload');

    //Select and upload the image from the 'fixtures' folder
    const fileName = 'fillingForm.png'
    uploadFile.uploadFile(fileName);
    cy.get("#file-submit").click();

    //Validate that the file name corresponds
    cy.get("#uploaded-files").should("contain", fileName);

    //Validate that the file was uploaded correctly
    cy.get("h3").should("contain", "File Uploaded!");
    });
  });