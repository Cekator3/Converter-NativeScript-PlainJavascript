/**
 * @file A subsystem for converting a value from one unit of measurement to another
 */


/**
 * Converts a value from one unit of measurement to another
 * @param value
 * @param currentUnitOfMeasurement {string} Current unit of measurement of the given value.
 * @param targetUnitOfMeasurement {string} Target unit of measurement.
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
    //Есть две группы величин:
    // 1. которые конвертируются при помощи одной арифметической операции (время)
    // 2. в которых нужно использовать формулу (температура)

    return value ;
}
