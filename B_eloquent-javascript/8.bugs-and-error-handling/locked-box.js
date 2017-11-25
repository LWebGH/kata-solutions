const box = {
  locked: true,
  unlock() { this.locked = false; },
  lock() { this.locked = true; },
  content: [],
  get content() {
    if (this.locked) throw new Error('Заперто!');
    return this.content;
  },
};
const withBoxUnlocked = (body) => {
  const state = box.locked;
  box.unlock();
  try {
    body();
  } catch (e) {
    console.log(e.state);
  } finally {
    if (state) box.lock();
  }
};
