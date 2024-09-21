import {Controller} from "@hotwired/stimulus"

// Connects to data-controller="my"
export default class extends Controller {
    connect() {
        console.log('my connect!')
    }

    myClick() {
        console.log('myClick!')
    }
}
