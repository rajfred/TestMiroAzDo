const icon = '<circle cx="12" cy="12" r="9" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="2"></circle>'

miro.onReady(() => {
    miro.initialize({
      extensionPoints: {
        bottomBar: {
          title: 'Add Card Rect 5:55',
          svgIcon: icon,
          onClick: async () => {
  
            // Show modal and wait for user choice
            let blnAddCard = confirm('Hey! This will add a card? 3')
  
            if (blnAddCard) {
              // Get all board objects
              //let objects = await miro.board.widgets.get()
  
              // Create new card
            await miro.board.widgets.create
            (
              {
                "type":'card', 
                  "title": "Story Title",
                  "description": "Story Description",
                  "bounds": {
                      "width": 200,
                      "height": 60
                  }
              }
            )
  
              // Display success
              miro.showNotification('Card has been added')
            }
            else
            {
              miro.showNotification('Alright, not adding a card')
            }
          }
        }
      }
    })
  })