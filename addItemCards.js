require('dotenv-safe').config()
const axios = require('axios')

//////////////////////////////////
// FILL IN THE IDS HERE
//////////////////////////////////
const appConfig = {
  boardId: '',
  inboxFrameId: '',
}

const icon = '<rect width="300" height="100" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />'

class AzDoApiService {
  async readItems() {
    const response = await axios.get('https://dev.azure.com/TeamFred/Pharmacy/_apis/wit/wiql/1d2450ca-7439-4df2-a39b-ac61dcf5ffeb', {
      headers: {
        Authorization: `token ${process.env.AZDO_TOKEN}`,
        'User-Agent': 'Miro Importer',
      },
    })
    return response.data
  }
}

class MiroBoardApiService {
  constructor(miroProperties) {
    this._miro = miroProperties
  }
  
    async createWidget(widgetData) {
    if (!widgetData.parentFrameId) {
      widgetData.parentFrameId = this._miro.inboxFrameId
    }
    const response = await axios.post(`https://api.miro.com/v1/boards/${this._miro.boardId}/widgets`, widgetData, {
      headers: {
        Authorization: `Bearer ${process.env.MIRO_TOKEN}`,
      },
    })
    return response.data
  }
}

class ConversionService {
  static _styleByItemType(backlogitem) {
    switch (backlogitem.itemtype) {
      case 'feature':
        return {backgroundColor: '#0ca789'}
      case 'userstory':
        return {backgroundColor: '#f24726'}
      default:
        return {backgroundColor: '#808080'}
    }
  }

  static convert2Card(backlogitem) {
    let cardData = {
      type: 'card',
      title: `<a href="${backlogitem.html_url}">${backlogitem.title}</a>`,
      description: `${backlogitem.body}<br /><br />
                          ------------------------------------<br />
                          repo: <a href="${backlogitem.repository.html_url}">${backlogitem.repository.full_name}</a>`,
      card: {
        customFields: [
          {
            value: `${backlogitem.repository.full_name}`,
            iconUrl: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
          },
        ],
      },
    }
    backlogitem.assignees.forEach((assignee) => {
      cardData.card.customFields.push({
        value: `${assignee.login}`,
        iconUrl: `${assignee.avatar_url}`,
      })
    })
    cardData.style = this._styleByItemType(backlogitem)
    return cardData
  }
}

const azdoService = new GithubApiService()
const boardApiService = new MiroBoardApiService(appConfig)

azdoService
  .readItems()
  .then((backlogitem) =>
    backlogitems.forEach((backlogitem) => {
      const cardData = ConversionService.convert2Card(backlogitem)
      boardApiService
        .createWidget(cardData)
        .then((value) => console.log(`card widget ${value.id} has been created from an issue ${backlogitem.url}`))
        .catch((reason) =>
          console.error(
            `*** creating card widget error: ${reason.response.status} ${JSON.stringify(reason.response.data)}`,
          ),
        )
    }),
  )
  .catch((reason) =>
    console.error(`*** reading GitHub issues error: ${reason.response.status} ${JSON.stringify(reason.response.data)}`),
  )





