import { makeAutoObservable } from 'mobx';

export default class DriverStore {
  firstGivesError = []
  noError = [] // no error
  rootStore = null

  constructor(rootStore) {
    makeAutoObservable(this, { rootStore: false });
    this.rootStore = rootStore;
  }
}
