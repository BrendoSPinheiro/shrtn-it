class UserView {
  render(user) {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
    };
  }
}

module.exports = new UserView();
