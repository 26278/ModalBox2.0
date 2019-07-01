const modalBox = {

  allContent: document.querySelectorAll('.content'),
  allButtons: document.querySelectorAll('.button'),

  makeBackground() {
    let background = document.createElement('div');
    background.classList.add('modalBackground');
    background.addEventListener('click', () => this.sluiten());
    return background;
  },
  makeModal(){
    let modal = document.createElement('div');
    modal.className = ('modal');
    modal.addEventListener('click', (event) => event.stopPropagation());
    return modal;
  },
  makeCloseButton(){
    let closeButton = document.createElement('div');
    closeButton.className = 'closeButton';
    closeButton.innerHTML = '&#x00D7';
    closeButton.addEventListener('click', () => this.sluiten());
    return closeButton;
  },

  open(elem) {
    this.background  = this.makeBackground();
    this.closeButton = this.makeCloseButton();
    this.modal       = this.makeModal();

    this.modal      .appendChild(this.closeButton);
    this.modal      .appendChild(elem);
    this.background .appendChild(this.modal);
    document.body   .appendChild(this.background);
  },
  sluiten() {
    this.modal .innerHTML = '';
    document.body   .removeChild(this.background);
  }

}
//Initieren, inhoud verwijderen, knoppen event geven
for (let i=0; i < modalBox.allContent.length; i++){
  modalBox.allContent[i].parentNode.removeChild(modalBox.allContent[i])
}

for (let i=0; i < modalBox.allButtons.length; i++){
  modalBox.allButtons[i].addEventListener('click', () => {
    let inhoud = modalBox.allContent[i];
    modalBox.open(inhoud);
  })
}
