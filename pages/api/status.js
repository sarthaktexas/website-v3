import { get } from 'axios'
import { emojify } from 'node-emoji'

export default async (req, res) => {
  const data = await get('https://slack.com/api/users.profile.get', {
    headers: {
      'Content-type': 'application/x-www-form-urlencoded',
      'Authorization': 'Bearer ' + process.env.SLACK_USER_TOKEN
    },
    params: {
      user: process.env.SLACK_USER_ID
    }
  })
  res.statusCode = 200
  let status = data.data.profile.status_text;
  let statusEmoji = await getEmoji(data.data.profile.status_emoji);
  let statusWithEmoji = statusEmoji + ' ' + status
  res.json({
    status: status,
    statusEmoji: statusEmoji,
    statusWithEmoji: statusWithEmoji,
  })
}

async function getEmoji(slackEmoji) {
  if (slackEmoji === ':speech_balloon:') { slackEmoji = '' }
  return emojify(slackEmoji);
}