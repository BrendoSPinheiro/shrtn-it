const { format } = require('date-fns');

class UrlView {
  render(url) {
    return {
      id: url.id,
      title: url.title,
      short_url: `https://shrtn-it.herokuapp.com/${url.slug}`,
      clicks: url.count_click,
      scheduling_type: url.scheduling_type,
      created_at: format(url.created_at, 'dd/MM/yyyy'),
      start_expires_date: url.start_expires_date,
      end_expires_date: url.end_expires_date,
      start_expires_hour: url.start_expires_hour,
      end_expires_hour: url.end_expires_hour,
    };
  }

  renderMany(urls) {
    return urls.map((url) => this.render(url));
  }
}

module.exports = new UrlView();
