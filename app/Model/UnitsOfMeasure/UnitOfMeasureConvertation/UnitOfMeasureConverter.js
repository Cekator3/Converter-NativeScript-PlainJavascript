/**
 * @file A subsystem for converting a value from one unit of measurement to another
 */

import {getMultiplierForConvertingValueFromOneUnitOfMeasureToAnother} from "~/Model/UnitsOfMeasure/UnitOfMeasureConvertation/UnitsOfMeasureConvertionMultipliers";

export class ConvertationNotImplementedException extends Error {}

/**
 * Converts a number from one unit of measure to another
 * @param {number} value
 * @param {string} currentUnitOfMeasureId Id of current unit of measure.
 * @param {string} targetUnitOfMeasureId Id of target unit of measure.
 * @returns {number}
 * @constructor
 */
export function ConvertValueToAnotherUnitOfMeasure(value,
                                                   currentUnitOfMeasureId,
                                                   targetUnitOfMeasureId)
{
    let multiplier = getMultiplierForConvertingValueFromOneUnitOfMeasureToAnother
    (
        currentUnitOfMeasureId,
        targetUnitOfMeasureId
    );
    if (multiplier === undefined)
        throw new ConvertationNotImplementedException();
    return value * multiplier;
}
