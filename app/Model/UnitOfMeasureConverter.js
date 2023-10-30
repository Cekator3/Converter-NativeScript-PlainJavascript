/**
 * @file A subsystem for converting a value from one unit of measurement to another
 */

import {getMultiplierForConvertingValueFromOneUnitOfMeasureToAnother} from "~/Model/UnitsOfMeasureConvertionMultipliers";

export class ConvertationNotImplementedException extends Error {}

/**
 * Converts a number from one unit of measurement to another
 * @param {number} value
 * @param {string} currentUnitOfMeasurement Current unit of measurement of the given value.
 * @param {string} targetUnitOfMeasurement Target unit of measurement.
 * @returns {number}
 * @constructor
 */
export function ConvertValueToAnotherUnitOfMeasurement(value,
                                                       currentUnitOfMeasurement,
                                                       targetUnitOfMeasurement)
{
    let multiplier = getMultiplierForConvertingValueFromOneUnitOfMeasureToAnother
    (
        currentUnitOfMeasurement,
        targetUnitOfMeasurement
    );
    if (multiplier === undefined)
        throw new ConvertationNotImplementedException();
    return value * multiplier;
}
