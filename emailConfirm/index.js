exports = function(payload, response) {
    Stitch.initializeDefaultAppClient(process.env.APP_ID);
    const url = window.location.search;
    const params = new URLSearchParams(url);
    const token = params.get('token');
    const tokenId = params.get('tokenId');
    const emailPassClient = Stitch.defaultAppClient.auth.getProviderClient(UserPasswordAuthProviderClient.factory);
    emailPassClient.confirmUser(token, tokenId).then(response => console.log(response));
};