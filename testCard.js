require('dotenv-safe').config()
const axios = require('axios')

const icon = '<circle cx="12" cy="12" r="9" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="4"></circle>'
const viewport = await miro.board.viewport.get()
const centeredX = viewport.x + viewport.width / 2
const centeredY = viewport.y + viewport.height / 2

miro.onReady(() => {
  miro.initialize({
    extensionPoints: {
      bottomBar: {
        title: 'Add test Card Raj title 10:44',
        svgIcon: icon,
        onClick: async () => {

          // Show modal and wait for user choice
          let needToClear = confirm('Hey! This will add card?')

          if (needToClear) {
            // Get all board objects
            //let objects = await miro.board.widgets.get()

            // Delete all board objects
            //await miro.board.widgets.deleteById(objects.map(object => object.id))

            //miro.board.widgets.create({type:'sticker', x:centeredX, y:centeredY})
            //let widgets = await miro.board.widgets.create([{type: 'sticker', text: 'I am sticker'},{type: 'card', title: 'I am card'},])
            //miro.board.tags.create({title: 'Red tag', color: '#F24726', widgetIds: widgets})

            // Create new card
            //let wTestCard = 
            await miro.board.widgets.create
            (
              {
                "type":'card', 
                  "title": "color story",
                  "description": "Story Description",
				  				  
				  card: {
					customFields: [
						{
							value: `test value`,
							iconUrl: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
						},
						
					]
				}				  
              }
            )

            //miro.board.tags.create({title: 'Red tag', color: '#F24726', widgetIds: wTestCard})

            // Display success
            miro.showNotification('Card has been added 2000')
          }
          else
          {
            miro.showNotification('Alright, canceled the action')
          }
        }
      }
    }
  })
})