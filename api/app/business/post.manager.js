'use strict';

import PostDAO from '../DAO/postDAO';

function create(context) {
  async function query() {
    let result = await PostDAO.query();
    if (result) {
      return result;
    }
  }

  async function get(id) {
    let result = await PostDAO.get(id);
    if (result) {
      return result;
    }
  }

  async function createNewOrUpdate(data) {
    let result = await PostDAO.createNewOrUpdate(data);
    if (result) {
      return result;
    }
  }

  return {
    query: query,
    get: get,
    createNewOrUpdate: createNewOrUpdate
  };
}

export default {
  create: create
};
