class EventObserver {
  constructor() {
    this.observers = [];
  }
}

EventObserver.prototype = {
  subscribe: function(fn) {
    this.observer.push(fn);
    console.log(`subscribed to ${fn}.name `);
  },
  unsubscribe: function(fn) {
    this.observers = this.observers.filter(function() {
      if (item !== fn) {
        return item;
      }
    });
  }
};
