class UrlView {
  render(url) {
    return {
      id: url.id,
      title: url.title,
      short_url: `http://localhost:3001/${url.slug}`,
      clicks: url.count_click,
      created_at: url.created_at,
      start_expires_date: url.start_expires_date,
      end_expires_date: url.end_expires_date,
    };
  }

  renderMany(urls) {
    return urls.map((url) => this.render(url));
  }
}

module.exports = new UrlView();
