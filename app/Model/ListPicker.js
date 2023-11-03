/**
 * @file A subsystem for storing a list of unique items and its selected item
 */

let set = undefined;
let selectedElement = undefined;

export class ListPickerNotInitiliasedException extends Error {}
export class ListPickerGivenNonUniqueItems extends Error
{
    items;
    constructor(items)
    {
        super('Given non unique items in ListPicker: ' + items);
        this.items = items;
    }
}
export class ElementIsNotInListPickerException extends Error
{
    element;
    listPickerContents;
    constructor(element, listPickerContents)
    {
        super('Element ' + element + ' is not in ListPicker ' + listPickerContents);
        this.element = element;
        this.listPickerContents = listPickerContents;
    }
}

/**
 * Sets the contents of the list.
 * @param {string[]} elementsIdentifiers Must be unique values
 * @return {void}
 */
export function ListPickerSetElements(elementsIdentifiers)
{
    set = new Set(elementsIdentifiers);
    if (set.size !== elementsIdentifiers.length)
        throw new ListPickerGivenNonUniqueItems(elementsIdentifiers);
    selectedElement = elementsIdentifiers[0];
}

/**
 * Sets the selected item in the list
 * @param {string} elementIdentifier
 * @return {void}
 */
export function ListPickerSetSelectedElement(elementIdentifier)
{
    if (set === undefined)
        throw new ListPickerNotInitiliasedException();
    if (!set.has(elementIdentifier))
        throw new ElementIsNotInListPickerException(elementIdentifier, [...set]);
    selectedElement = elementIdentifier;
}

/**
 * Returns the selected item of the list
 * @return {string}
 */
export function ListPickerGetSelectedElement()
{
    return selectedElement;
}

/**
 * Returns all non-selected items of the list
 * @return {string[]}
 */
export function ListPickerGetNonSelectedElements()
{
    if (set === undefined)
        return [];
    set.delete(selectedElement);
    let result = [...set];
    set.add(selectedElement);
    return result;
}

/**
 * Returns all items of the list
 * @return {string[]}
 */
export function ListPickerGetAllElements()
{
    if (set === undefined)
        return [];
    return [...set];
}
