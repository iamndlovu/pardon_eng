export class Project
{
  constructor(title, intro, description, hash, live, github, languages) {
    this.title = title;
    this.intro = intro;
    this.description = description;
    this.hash = hash;
    this.live = live;
    this.github = github;
    this.languages = languages;
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

  get liveLink() {
    return this.live;
  }

  get githubLink() {
    return this.github;
  }

  get getLanguages() {
    return this.languages;
  }

  //display project preview card
  showCard(parent) {
    const card = this.buildCard();
    this.attach(parent, card);
  }

  //show more project details
  showMore(project) {
    const hiddenItems = [document.querySelector('.menu-btn'), document.querySelector('section.projects'), document.querySelector('.intro')];
    const moreDetails = project.buildMore(hiddenItems);
    project.attach(document.querySelector('main'), moreDetails)

    hiddenItems.forEach(item => {
      item.classList.add('hidden-items');
    });
    moreDetails.classList.remove('hidden-items');
  }

  // build project preview card
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
    moreButton.addEventListener('click', () => this.showMore(this));

    projectPreview.appendChild(projectTitle);
    projectPreview.appendChild(projectIntro);
    projectPreview.appendChild(moreButton);
    projectCard.appendChild(thumbnail);
    projectCard.appendChild(projectPreview);
    container.appendChild(projectCard);

    return container;
  }

  // append child to parent container
  attach(parent, element) {
    parent.appendChild(element);
  }

  remove(parent, element) {
    parent.removeChild(element);
  }

  // build elements with more details about project
  buildMore(hiddenItems) {
    const projectMore = document.createElement('article');
    projectMore.className = 'project-more hidden-items';

    const closeButton = document.createElement('div');
    closeButton.className = 'close-btn';
    closeButton.innerHTML = '&times';
    closeButton.addEventListener('click', () => this.hideMore(hiddenItems));

    const moreContainer = document.createElement('section');
    moreContainer.className = 'more-container';

    const projectImageContainer = document.createElement('div');
    projectImageContainer.className = 'project-more-image more-right';

    const projectImage = document.createElement('img');
    projectImage.src = this.getHash;
    projectImage.alt = `${this.getTitle} project image`;

    const left = document.createElement('div');
    left.className = 'more-left';

    const projectTitle = document.createElement('h1');
    projectTitle.className = 'project-more-title';
    projectTitle.textContent = this.getTitle;
    
    const projectDescription = document.createElement('div');
    projectDescription.className = 'project-more-description';
    projectDescription.innerHTML = this.getDescription;

    const projectCTA = document.createElement('section');
    projectCTA.className = 'project-more-cta';

    const liveLink = document.createElement('a');
    liveLink.target = '_blank';
    liveLink.href = this.liveLink;

    const liveText = document.createTextNode('live');

    const liveIcon = document.createElement('i');
    liveIcon.className = 'fas fa-eye';

    const githubLink = document.createElement('a');
    githubLink.target = '_blank';
    githubLink.href = this.githubLink;

    const githubText = document.createTextNode('Github');

    const githubIcon = document.createElement('i');
    githubIcon.className = 'fab fa-github';

    const languagesContainer = document.createElement('div');
    languagesContainer.className = 'languages';
    this.getLanguages.forEach(language => {
      const languageCont = document.createElement('i');
      languageCont.className = `language fab fa-${language} fa-2x`;
      languagesContainer.appendChild(languageCont);
    });

    projectImageContainer.appendChild(projectImage);
    githubLink.appendChild(githubIcon);
    githubLink.appendChild(githubText);
    liveLink.appendChild(liveIcon);
    liveLink.appendChild(liveText);
    projectCTA.appendChild(liveLink);
    projectCTA.appendChild(githubLink);
    projectDescription.appendChild(languagesContainer);
    left.appendChild(projectTitle);
    left.appendChild(projectDescription);
    left.appendChild(projectCTA);
    moreContainer.appendChild(left);
    moreContainer.appendChild(projectImageContainer);
    projectMore.appendChild(closeButton);
    projectMore.appendChild(moreContainer);

    return projectMore;
  }

  hideMore(toBeShown) {
    const moreDetails = document.querySelector('.project-more');

    toBeShown.forEach(item => {
      item.classList.remove('hidden-items')
    });

    moreDetails.classList.add('hidden-items');

    setTimeout(() => {this.remove(document.querySelector('main'), moreDetails)}, 1000);
  }
};