/**
 * @file A subsystem for storing a list and its selected value
 */

/**
 * Sets the contents of the list.
 * @param {string[]} elementsIdentifiers
 * @return {void}
 */
export function SetListElements(elementsIdentifiers) {}

/**
 * Sets the selected item in the list
 * @param {string} elementIdentifier
 * @return {void}
 */
export function SetSelectedElement(element) {}

/**
 * Returns the selected item of the list
 * @return {string}
 */
export function GetSelectedElement() {}

/**
 * Returns all non-selected items of the list
 * @return {string[]}
 */
export function GetNonSelectedElements() {}

/**
 * Returns all items of the list
 * @return {string[]}
 */
export function GetAllElements() {}
