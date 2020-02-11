'use strict'

class SessionController {
  async store ({ request, auth }) {
    const { email, password } = request.body

    const token = auth.attempt(email, password)

    return token
  }
}

module.exports = SessionController
