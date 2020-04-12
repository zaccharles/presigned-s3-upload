async function uploadViaPresignedPost(api, file) {
  // Get presigned POST URL and form fields
  let response = await fetch(api + 'signed-post');
  let json = await response.json();

  // Build a form for the request body
  let form = new FormData();
  Object.keys(json.data.fields).forEach(key => form.append(key, json.data.fields[key]));
  form.append('file', file);

  // Send the POST request
  response = await fetch(json.data.url, { method: 'POST', body: form });
  if (!response.ok) return 'Failed to upload via presigned POST';

  // Done!
  return `File uploaded via presigned POST with key: ${json.id}`;
}
