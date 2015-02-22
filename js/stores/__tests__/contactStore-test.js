jest.dontMock('../../constants/contactConstants');
jest.dontMock('../contactStore');
jest.dontMock('object-assign');

describe('ContactStore', function() {

  var ContactConstants = require('../../constants/contactConstants');
  var AppDispatcher;
  var ContactStore;
  var callback;

  // mock actions
  var actionContactCreate = {
    actionType: ContactConstants.CONTACT_CREATE,
    name: 'name1',
    info: 'info1'
  };
  
  var actionContactUpdate = {
    actionType: ContactConstants.CONTACT_UPDATE,
    index: 1,
    name: 'name1updated',
    info: 'info1updated'
  };

  var actionContactActivate = {
    actionType: ContactConstants.CONTACT_ACTIVATE,
    index: 1
  };

  var actionContactDestroy = {
    actionType: ContactConstants.CONTACT_DESTROY,
    index: 1
  };

  beforeEach(function() {
    AppDispatcher = require('../../dispatcher/dispatcher');
    ContactStore = require('../contactStore');
    callback = AppDispatcher.register.mock.calls[0][0];
  });

  it('registers a callback with the dispatcher', function() {
    expect(AppDispatcher.register.mock.calls.length).toBe(1);
  });

  it('should initialize with no contacts', function() {
    var all = ContactStore.getAll();
    expect(all.length).toBe(0);
  });

  it('creates a contact', function() {
    callback(actionContactCreate);
    var all = ContactStore.getAll();
    expect(all.length).toBe(1);
    expect(all[0].name).toEqual('name1');
    expect(all[0].info).toEqual('info1');
  });

  it('updates a contact', function() {
    callback(actionContactCreate);
    var all = ContactStore.getAll();
    expect(all.length).toBe(1);
    actionContactUpdate.name = 'name1updated';
    actionContactUpdate.info = 'info1updated';
    actionContactUpdate.index = 0;
    callback(actionContactUpdate);
    expect(all[0].name).toEqual('name1updated');
    expect(all[0].info).toEqual('info1updated');
  });

  it('activate a contact', function() {
    callback(actionContactCreate);
    var all = ContactStore.getAll();
    expect(all.length).toBe(1);
    var active = ContactStore.getActive();
    expect(active).toBe(0);
    callback(actionContactCreate);
    expect(all.length).toBe(2);
    active = ContactStore.getActive();
    expect(active).toBe(1);
    actionContactActivate.index = 0;
    callback(actionContactActivate);
    active = ContactStore.getActive();
    expect(active).toBe(0);
  });

  it('destroys a contact', function() {
    callback(actionContactCreate);
    var all = ContactStore.getAll();
    expect(all.length).toBe(1);
    actionContactDestroy.index = 0;
    callback(actionContactDestroy);
    expect(all[0]).toBeUndefined();
  });

});