import _ from "lodash";

//
// paginating data on the client side
//

export function paginate(items, pageNumber, pageSize) {
    //calculating the starting index of the page number
    const startIndex = (pageNumber - 1) * pageSize
    //converting items to lodash wrapper with _(items) for chaining items
    //taking all the items for the current page _.slice(startIndex)
    //taking items for the current page _.take(pageSize)
    //converting the lodash object to a regular array with _.value()
    return _(items).slice(startIndex).take(pageSize).value()
    
}