/* CONSTANTS */

exports.skill = {
  appId: {
  'skills': [
    {
      'apis': [
        'custom'
      ],
      'lastUpdated': '2018-09-05T02:11:24.375Z',
      'nameByLocale': {
        'en-US': 'urc-sermon-player'
      },
      'publicationStatus': 'DEVELOPMENT',
      'skillId': 'amzn1.ask.skill.6e76c6c1-ace8-4597-bedb-f111459a4df1',
      'stage': 'development'
    },
    {
      'apis': [
        'custom'
      ],
      'lastUpdated': '2017-12-29T01:17:02.632Z',
      'nameByLocale': {
        'en-US': 'google'
      },
      'publicationStatus': 'DEVELOPMENT',
      'skillId': 'amzn1.ask.skill.9b7ea0a9-60f5-4ce2-9d9c-d772438142a3',
      'stage': 'development'
    }
  ]
}
,
  dynamoDBTableName: 'Audio-Player-Multi-Stream',
};

exports.audioData = [
  {
    title: 'Episode 139',
    date: new Date('December 17, 2006'),
    url: 'https://feeds.soundcloud.com/stream/274166909-amazon-web-services-306355661-aws-podcast-episode-139.mp3'
  },
  {
    title: 'Episode 140',
    date: new Date('December 1, 2006'),
    url: 'https://feeds.soundcloud.com/stream/275202399-amazon-web-services-306355661-amazon-web-services.mp3'
  },
];