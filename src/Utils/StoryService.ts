export async function getStories() {
  let storiesIds: Array<string> = [];
  let data: Array<Record<string, unknown>> = [];
  let uuidFecthResponse = await fetch(
    'https://api.axios.com/api/render/stream/content?page_size=20'
  );

  if (uuidFecthResponse.ok) {
    storiesIds = (await uuidFecthResponse.json()).results;

    for (const uuid of storiesIds) {
      const contentResponse = await fetch(
        `https://api.axios.com/api/render/content/${uuid}`
      );
      if (contentResponse.ok) {
        data.push(await contentResponse.json());
      } else {
        console.log(`Error: Trying to retrieve content for id ${uuid}`);
      }
    }
  } else {
    console.log('error getting stories');
  }

  return data;
}
