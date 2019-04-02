export default class AnimalAdapter {
  static DOG_URL = process.env.REACT_APP_DOG_URL; // "http://localhost:4000/dog";
  static CAT_URL = process.env.REACT_APP_CAT_URL; // "http://localhost:4000/cat";

  static getDog() {
    return fetch(`${this.DOG_URL}`)
      .then(res => res.json())
      .then(json => json.url)
  }

  static getCat() {
    return fetch(`${this.CAT_URL}`)
      .then(res => res.json())
      .then(json => json.url)
  }
}
