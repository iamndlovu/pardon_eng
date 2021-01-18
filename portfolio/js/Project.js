export class Project
{
  constructor(title, intro, description, hash, live, github) {
    this.title = title;
    this.intro = intro;
    this.description = description;
    this.hash = hash;
    this.live = live;
    this.github = github;
  }

  get getTitle() {
    return this.title;
  }

  get getIntro() {
    return this.intro;
  }

  get getDescription() {
    return this.description;
  }

  get getHash() {
    return this.hash;
  }

  showCard(parent) {
    const card = this.buildCard();
    this.attach(parent, card);
  }

  showMore() {
    //TODO: buildMore()
    //TODO: attachToDOM()
    //TODO: handleClose()
    alert('show more');
  }
  //TODO: buildCard()
  buildCard() {
    const container = document.createElement('div');
    const projectCard = document.createElement('div');
    projectCard.className = 'project';
    projectCard.name = this.getTitle;

    const thumbnail = document.createElement('img');
    thumbnail.className = 'thumbnail';
    thumbnail.src = this.getHash;
    thumbnail.alt = `${this.getTitle} app thumbnail`;

    const projectPreview = document.createElement('div');
    projectPreview.className = 'project-preview';

    const projectTitle = document.createElement('h6');
    projectTitle.className = 'project-title';
    projectTitle.textContent = this.getTitle;

    const projectIntro = document.createElement('p');
    projectIntro.className = 'project-intro';
    projectIntro.textContent = this.getIntro;

    const moreButton = document.createElement('a');
    moreButton.textContent = 'Read more'
    moreButton.addEventListener('click', this.showMore);

    projectPreview.appendChild(projectTitle);
    projectPreview.appendChild(projectIntro);
    projectPreview.appendChild(moreButton);
    projectCard.appendChild(thumbnail);
    projectCard.appendChild(projectPreview);
    container.appendChild(projectCard);

    return container;
  }
  //TODO: attach to container
  attach(parent, element) {
    parent.appendChild(element);
  }
};