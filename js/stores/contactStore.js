var AppDispatcher = require('../dispatcher/dispatcher');
var EventEmitter = require('events').EventEmitter;
var ContactConstants = require('../constants/contactConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _contacts = {};

function create(name, info) {
  // Using the current timestamp + random number in place of a real id.
  var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
  _contacts[id] = {
    id: id,
    name: name,
    info: info
  };
}

function update(id, updates) {
  _contacts[id] = assign({}, _contacts[id], updates);
}

function destroy(id) {
  delete _contacts[id];
}


var ContactStore = assign({}, EventEmitter.prototype, {

  getAll: function() {
    return _contacts;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

// Register callback to handle all updates
AppDispatcher.register(function(action) {
  var name, info;

  switch(action.actionType) {
    case ContactConstants.CONTACT_CREATE:
      name = action.name.trim();
      info = action.info.trim();
      if (name !== '' || info !== '') {
        create(name, info);
      }
      ContactStore.emitChange();
      break;

    case ContactConstants.CONTACT_UPDATE:
      name = action.name.trim();
      info = action.info.trim();
      if (name !== '' | info !== '') {
        update(action.id, {name: name, info: info});
      }
      ContactStore.emitChange();
      break;

    case ContactConstants.CONTACT_DESTROY:
      destroy(action.id);
      ContactStore.emitChange();
      break;

    default:
      // no op
  }
});

module.exports = ContactStore;