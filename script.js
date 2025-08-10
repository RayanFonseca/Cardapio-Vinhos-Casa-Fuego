const filterSelect = document.getElementById("wineTypeFilter")
    const wineCards = document.querySelectorAll(".wine-card")
    filterSelect.addEventListener("change", ()=> {
        const selectedType = filterSelect.value;
        wineCards.forEach(card=>{
            if (selectedType === "all" || card.dataset.type === selectedType){
                card.classList.remove("hidden")
            }else{
                card.classList.add("hidden")
            }
        })
    })