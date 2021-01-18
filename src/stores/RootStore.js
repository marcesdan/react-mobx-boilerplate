import DriverStore from './DriverStore';

export default class RootStore {
  constructor() {
    this.userStore = new DriverStore(this);
  }
}
