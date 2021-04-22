const config = {
    APPLICATION_INSIGHTS: '#{APPLICATION_INSIGHTS}#',
    API_URL: '#{API_URL}#',
    SUBSCRIPTION_ID: '#{SUBSCRIPTION_ID}#'
};

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
    config.APPLICATION_INSIGHTS = '7041aae9-6ab8-4c8f-940a-06eb691e5a72';
    config.API_URL = 'http://localhost:8080';
    config.SUBSCRIPTION_ID = ''
}

module.exports = config;