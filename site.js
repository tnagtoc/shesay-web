window.SheSay = (() => {
  const url = 'https://suxprwbmoakcbopjuosa.supabase.co';
  const key = 'sb_publishable_JsggCmnvB1Q50l5z2W11Uw_AfKLxCx7';
  const client = window.supabase.createClient(url, key);
  const fusionUrl = `${url}/functions/v1/fusion-auth`;

  async function fusion(action, payload = {}, accessToken = null) {
    const headers = {
      'Content-Type': 'application/json',
      apikey: key,
    };
    if (accessToken) headers.Authorization = `Bearer ${accessToken}`;
    const response = await fetch(fusionUrl, {
      method: 'POST', headers, body: JSON.stringify({ action, ...payload }),
    });
    const body = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(body.error || 'Request failed. Please try again.');
    return body;
  }

  return { client, fusion };
})();
