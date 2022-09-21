class App {
    addProperty() {
        event.preventDefault()
        let type = document.querySelector("select[name='type']").value
        let area = document.querySelector("input[name='area']").value
        let rented = document.querySelector("input[name='rented']").checked 
        let property = new Property(type, area, rented)
        this.addOnPropertiesList(property)
        this.cleanForm()
    }

    addOnPropertiesList(property) {
        let listElement = document.createElement("li")
        let propertyInfo = "<br> Tipo: " + property.type + "<br>" + "Área: " + property.area + "m²"
        if(property.rented) {
            let rentedMark = this.createRentedMark()
            listElement.appendChild(rentedMark)
        } else {
            let forSale = this.createForSale()
            listElement.appendChild(forSale)
        }
        listElement.innerHTML += propertyInfo

        let br = document.createElement("br")
        listElement.appendChild(br)

        let buttonToRemove = this.createRemoveButton()
        listElement.appendChild(buttonToRemove)
        document.getElementById("propertiesList").appendChild(listElement)
    }

    createRentedMark() {
        let rentedMark = document.createElement("span")
        rentedMark.style.color = "black"
        rentedMark.style.backgroundColor = "lightcoral"
        rentedMark.innerText = "ALUGADO"
        return rentedMark
    }

    createForSale() {
        let forSale =document.createElement("span")
        forSale.style.color = "black"
        forSale.style.backgroundColor = "lightgreen"
        forSale.innerText = "DISPONÍVEL"
        return forSale
    }

    createRemoveButton() {
        let buttonToRemove = document.createElement("button")
        buttonToRemove.setAttribute("onclick", "app.remove()")
        buttonToRemove.setAttribute("class", "removeButton")
        buttonToRemove.innerText = "Remover"
        return buttonToRemove
    }
    
    cleanForm() {
        document.querySelector("select[name='type']").value = false
        document.querySelector("input[name='area']").value = ""
        document.querySelector("input[name='rented']").checked = false
    }

    remove() {
        let liToRemove = event.target.parentNode
        document.getElementById("propertiesList").removeChild(liToRemove)
    }
}