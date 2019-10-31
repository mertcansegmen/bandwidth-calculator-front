const dataFetcher = {
    async getResults(url, visitor, frequency) {
      const response = await fetch(`https://jpstatsapi.herokuapp.com/calculate-bandwidth`);
      const results = await response.json();
      return {
        bandwidth: results.bandwidth,
        sitemap: results.sitemap
      };
    }
  };

  