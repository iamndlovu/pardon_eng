class Project
{
  constructor(title, description, hash, live, github) {
    this.title = title;
    this.description = description;
    this.hash = hash;
    this.live = live;
    this.github = github;
  }

  get title() {
    return this.title;
  }

  get description() {
    return this.description;
  }

  get hash() {
    return this.hash();
  }

  showCard(parent) {
    const card = this.buildCard();
    this.attach(parent, card);
    //TODO: listen(readMoreClick, showMore)
  }

  showMore() {
    //TODO: buildMore()
    //TODO: attachToDOM()
    //TODO: handleClose()
  }
  //TODO: buildCard()
  buildCard() {

  }
  //TODO: attach to container
  attach(parent, element) {
    parent.appendChild(element);
  }

}