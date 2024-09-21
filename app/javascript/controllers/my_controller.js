import {Controller} from "@hotwired/stimulus"

// Connects to data-controller="my"
export default class extends Controller {
    connect() {

        console.log('connet!')
    }

    myClick() {
        console.log('myClick!')
    }
}
