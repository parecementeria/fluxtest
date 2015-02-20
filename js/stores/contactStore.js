var AppDispatcher = require('../dispatcher/dispatcher');
var EventEmitter = require('events').EventEmitter;
var ContactConstants = require('../constants/contactConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _contacts = [{name:'kjhda', info:'kjhdfa'},{name:'kdjsbfakjds', info:'kgadsfgsdgfsad'}];
var _activeContact = 0;

function create(name, info) {
  var contact = {
    name: name,
    info: info
  };
  _contacts.push(contact);
  _activeContact = _contacts.length - 1;
}

function update(index, name, info) {
  var updates = {name: name, info: info};
  _contacts[index] = updates;
}

function activate(index) {
  _activeContact = index;
}

function destroy(index) {
  _contacts.splice(index, 1);
  _activeContact = 0;
}

var ContactStore = assign({}, EventEmitter.prototype, {

  getAll: function() {
    return _contacts;
  },

  getActive: function() {
    return _activeContact;
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
      if (name !== '' && info !== '') {
        update(action.index, name, info);
      }
      ContactStore.emitChange();
      break;

    case ContactConstants.CONTACT_DESTROY:
      destroy(action.index);
      ContactStore.emitChange();
      break;

    case ContactConstants.CONTACT_ACTIVATE:
      activate(action.index);
      ContactStore.emitChange();
      break;

    default:
      // no op
  }
});

module.exports = ContactStore;