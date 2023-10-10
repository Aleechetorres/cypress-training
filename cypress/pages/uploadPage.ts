import 'cypress-file-upload';

class UploadFile {
  uploadFile(fileName:any) {
    cy.fixture(fileName).then(fileContent => {
      cy.get('input[type="file"]').attachFile({
        fileContent: fileContent,
        fileName: fileName,
        mimeType: 'image/png'
      });
    });
  }
}

export {UploadFile};