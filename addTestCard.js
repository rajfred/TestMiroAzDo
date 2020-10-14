const icon = '<rect width="300" height="100" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />'

miro.onReady(() => {
  miro.initialize({
    extensionPoints: {
      bottomBar: {
        title: 'Add Card Rect',
        svgIcon: icon,
        onClick: async () => {

          // Show modal and wait for user choice
          let blnAddCard = confirm('Hey! This will add a card?')

          if (blnAddCard) {
            // Get all board objects
            let objects = await miro.board.widgets.get()

            // Create new card
          await miro.board.widgets.create({type: 'card', text: 'Hello'})

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

