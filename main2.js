const getCard = () => {
    let card = document.querySelector('input').value.toLowerCase().replace(/\s+/g, '%20');
    console.log(card);

    fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${card}`)
    .then(res => res.json())
    .then(data => {
        console.log(data.data[0])
        document.querySelector("h2").innerText = data.data[0].name
        document.querySelector("img").src = data.data[0].card_images[0].image_url
        document.querySelector("h3").innerText = data.data[0].desc
    })
    .catch(err => {
        console.log('ERROR')
    });
}

document.querySelector("button").addEventListener('click', getCard);