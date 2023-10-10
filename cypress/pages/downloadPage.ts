import 'cy-verify-downloads';

class DownloadPage {

  verifyFileExists() {
    const FileName = 'sampleFile.jpeg';
    // Verifica que el nombre del archivo aparezca en la barra de descargas de Chrome
    cy.verifyDownload(FileName);
   
  }
}

export {DownloadPage};


