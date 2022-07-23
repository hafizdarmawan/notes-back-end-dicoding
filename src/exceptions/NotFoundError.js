const ClientError = require('./ClientError');

class NotFoundError extends ClientError {
  constructor(message) {
    super(message);
    this.name = 'NoteFoundError';
  }
}

module.exports = NotFoundError;
