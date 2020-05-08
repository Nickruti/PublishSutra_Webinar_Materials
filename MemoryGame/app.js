document.addEventListener('DOMContentLoaded', () => {

    //cards options
    const cardArray = [
        {
            name: 'S1',
            img: 'images/S1.png'
        },
        {
            name: 'S1',
            img: 'images/S1.png'
        },
        {
            name: 'S2',
            img: 'images/S2.png'
        },
        {
            name: 'S2',
            img: 'images/S2.png'
        },
        {
            name: 'S3',
            img: 'images/S3.png'
        },
        {
            name: 'S3',
            img: 'images/S3.png'
        },
        {
            name: 'S4',
            img: 'images/S4.png'
        },
        {
            name: 'S4',
            img: 'images/S4.png'
        },
        {
            name: 'S5',
            img: 'images/S5.png'
        },
        {
            name: 'S5',
            img: 'images/S5.png'
        },
        {
            name: 'S6',
            img: 'images/S6.png'
        },
        {
            name: 'S6',
            img: 'images/S6.png'
        }
    ]

    //on every refresh randomize the image positions
    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    //create the board
    function createBoard(){
        for (let i = 0; i < cardArray.length; i++){
            var card = document.createElement('img')
            card.setAttribute('src', 'images/front.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    //When the card is fliped
    function flipCard(){
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2){
            setTimeout(checkForMatch, 500)
        }
    }

    //Check your Matches
    function checkForMatch(){
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]){
            //alert("You found a match!")
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
            cardsWon.push(cardsChosen)
        }else{
            cards[optionOneId].setAttribute('src', 'images/front.png')
            cards[optionTwoId].setAttribute('src', 'images/front.png')
            //alert("Sorry! MAtch not found!")
        }
        cardsChosen = [] resultDisplay.textContent = cardsWon.length
        cardsChosenId = []
       
        if (cardsWon.length === cardArray.length/2){
            resultDisplay.textContent = "Congratulations! You got them All! :P"
        }
    }

    createBoard() 
})