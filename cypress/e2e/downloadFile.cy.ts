import 'cypress-file-upload';

import { DownloadPage } from '../pages/index';

const downloadPage = new DownloadPage;

describe('Test to download demo site: Download file - Validate the name of the uploaded file', () => {
  it('Descargar un archivo y validar que existe en la carpeta fixtures', () => {
    cy.visit('https://demoqa.com/upload-download');

    //Select and upload the image from the 'fixtures' folder
    cy.get("#downloadButton").click();
    downloadPage.verifyFileExists();


    });
  });