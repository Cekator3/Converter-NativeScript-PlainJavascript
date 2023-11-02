/**
 * @file Subsystem for retrieving units of measure identifiers from a certain group
 */
import {
    UNIT_OF_MEASURE_CNAME_ACRE, UNIT_OF_MEASURE_CNAME_ANGLE_MINUTE, UNIT_OF_MEASURE_CNAME_ANGLE_SECOND,
    UNIT_OF_MEASURE_CNAME_ANGSTROM,
    UNIT_OF_MEASURE_CNAME_ASTRONOMICAL_UNIT, UNIT_OF_MEASURE_CNAME_BAR,
    UNIT_OF_MEASURE_CNAME_BIT,
    UNIT_OF_MEASURE_CNAME_BYTE,
    UNIT_OF_MEASURE_CNAME_CENTILITER,
    UNIT_OF_MEASURE_CNAME_CENTIMETER,
    UNIT_OF_MEASURE_CNAME_CUBIC_CENTIMETER,
    UNIT_OF_MEASURE_CNAME_CUBIC_METER,
    UNIT_OF_MEASURE_CNAME_CUBIC_MILLIMETER,
    UNIT_OF_MEASURE_CNAME_DAY,
    UNIT_OF_MEASURE_CNAME_DECILITER, UNIT_OF_MEASURE_CNAME_DEGREE,
    UNIT_OF_MEASURE_CNAME_DRAM,
    UNIT_OF_MEASURE_CNAME_FATHOM,
    UNIT_OF_MEASURE_CNAME_FOOT,
    UNIT_OF_MEASURE_CNAME_GIBIBYTE,
    UNIT_OF_MEASURE_CNAME_GIGABYTE,
    UNIT_OF_MEASURE_CNAME_GRAIN,
    UNIT_OF_MEASURE_CNAME_GRAM,
    UNIT_OF_MEASURE_CNAME_HECTARE,
    UNIT_OF_MEASURE_CNAME_HOUR,
    UNIT_OF_MEASURE_CNAME_INCH,
    UNIT_OF_MEASURE_CNAME_KIBIBYTE,
    UNIT_OF_MEASURE_CNAME_KILOBYTE,
    UNIT_OF_MEASURE_CNAME_KILOGRAM,
    UNIT_OF_MEASURE_CNAME_KILOMETER,
    UNIT_OF_MEASURE_CNAME_LIGHT_YEAR,
    UNIT_OF_MEASURE_CNAME_LITER,
    UNIT_OF_MEASURE_CNAME_LONG_TON,
    UNIT_OF_MEASURE_CNAME_MEBIBYTE,
    UNIT_OF_MEASURE_CNAME_MEGABYTE,
    UNIT_OF_MEASURE_CNAME_METER,
    UNIT_OF_MEASURE_CNAME_MICROGRAM,
    UNIT_OF_MEASURE_CNAME_MICROMETER,
    UNIT_OF_MEASURE_CNAME_MICROSECOND,
    UNIT_OF_MEASURE_CNAME_MILE,
    UNIT_OF_MEASURE_CNAME_MILLIGRAM,
    UNIT_OF_MEASURE_CNAME_MILLILITER,
    UNIT_OF_MEASURE_CNAME_MILLIMETER,
    UNIT_OF_MEASURE_CNAME_MILLISECOND,
    UNIT_OF_MEASURE_CNAME_MINUTE,
    UNIT_OF_MEASURE_CNAME_MONTH,
    UNIT_OF_MEASURE_CNAME_NANOMETER,
    UNIT_OF_MEASURE_CNAME_NANOSECOND,
    UNIT_OF_MEASURE_CNAME_NAUTICAL_MILE,
    UNIT_OF_MEASURE_CNAME_OUNCE,
    UNIT_OF_MEASURE_CNAME_PARSEC, UNIT_OF_MEASURE_CNAME_PASCAL,
    UNIT_OF_MEASURE_CNAME_PEBIBYTE,
    UNIT_OF_MEASURE_CNAME_PETABYTE,
    UNIT_OF_MEASURE_CNAME_POUND, UNIT_OF_MEASURE_CNAME_RADIAN,
    UNIT_OF_MEASURE_CNAME_SECOND,
    UNIT_OF_MEASURE_CNAME_SHORT_TON,
    UNIT_OF_MEASURE_CNAME_SQUARE_CENTIMETER,
    UNIT_OF_MEASURE_CNAME_SQUARE_FOOT,
    UNIT_OF_MEASURE_CNAME_SQUARE_INCH,
    UNIT_OF_MEASURE_CNAME_SQUARE_KILOMETER,
    UNIT_OF_MEASURE_CNAME_SQUARE_METER,
    UNIT_OF_MEASURE_CNAME_SQUARE_MILE,
    UNIT_OF_MEASURE_CNAME_SQUARE_MILLIMETER,
    UNIT_OF_MEASURE_CNAME_SQUARE_YARD, UNIT_OF_MEASURE_CNAME_STANDART_ATMOSPHERE,
    UNIT_OF_MEASURE_CNAME_STONE,
    UNIT_OF_MEASURE_CNAME_TEBIBYTE,
    UNIT_OF_MEASURE_CNAME_TERABYTE,
    UNIT_OF_MEASURE_CNAME_TONNE, UNIT_OF_MEASURE_CNAME_TORR,
    UNIT_OF_MEASURE_CNAME_WEEK,
    UNIT_OF_MEASURE_CNAME_YARD,
    UNIT_OF_MEASURE_CNAME_YEAR
} from "~/Model/UnitsOfMeasure/UnitsOfMeasureIdentifiers";

/**
 * Returns identifiers of time units of measure
 * @return {string[]}
 */
export function getIdentifiersOfTimeUnitsOfMeasure()
{
    return [
        UNIT_OF_MEASURE_CNAME_YEAR,
        UNIT_OF_MEASURE_CNAME_MONTH,
        UNIT_OF_MEASURE_CNAME_WEEK,
        UNIT_OF_MEASURE_CNAME_DAY,
        UNIT_OF_MEASURE_CNAME_HOUR,
        UNIT_OF_MEASURE_CNAME_MINUTE,
        UNIT_OF_MEASURE_CNAME_SECOND,
        UNIT_OF_MEASURE_CNAME_MILLISECOND,
        UNIT_OF_MEASURE_CNAME_MICROSECOND,
        UNIT_OF_MEASURE_CNAME_NANOSECOND
    ];
}

/**
 * Returns identifiers of length units of measure
 * @return {string[]}
 */
export function getIdentifiersOfLengthUnitsOfMeasure()
{
    return [
        UNIT_OF_MEASURE_CNAME_PARSEC,
        UNIT_OF_MEASURE_CNAME_LIGHT_YEAR,
        UNIT_OF_MEASURE_CNAME_ASTRONOMICAL_UNIT,
        UNIT_OF_MEASURE_CNAME_NAUTICAL_MILE,
        UNIT_OF_MEASURE_CNAME_MILE,
        UNIT_OF_MEASURE_CNAME_KILOMETER,
        UNIT_OF_MEASURE_CNAME_FATHOM,
        UNIT_OF_MEASURE_CNAME_METER,
        UNIT_OF_MEASURE_CNAME_YARD,
        UNIT_OF_MEASURE_CNAME_FOOT,
        UNIT_OF_MEASURE_CNAME_INCH,
        UNIT_OF_MEASURE_CNAME_CENTIMETER,
        UNIT_OF_MEASURE_CNAME_MILLIMETER,
        UNIT_OF_MEASURE_CNAME_MICROMETER,
        UNIT_OF_MEASURE_CNAME_NANOMETER,
        UNIT_OF_MEASURE_CNAME_ANGSTROM,
    ];
}

/**
 * Returns identifiers of area units of measure
 * @return {string[]}
 */
export function getIdentifiersOfAreaUnitsOfMeasure()
{
    return [
        UNIT_OF_MEASURE_CNAME_SQUARE_MILE,
        UNIT_OF_MEASURE_CNAME_SQUARE_KILOMETER,
        UNIT_OF_MEASURE_CNAME_HECTARE,
        UNIT_OF_MEASURE_CNAME_ACRE,
        UNIT_OF_MEASURE_CNAME_SQUARE_METER,
        UNIT_OF_MEASURE_CNAME_SQUARE_YARD,
        UNIT_OF_MEASURE_CNAME_SQUARE_FOOT,
        UNIT_OF_MEASURE_CNAME_SQUARE_INCH,
        UNIT_OF_MEASURE_CNAME_SQUARE_CENTIMETER,
        UNIT_OF_MEASURE_CNAME_SQUARE_MILLIMETER,
    ]
}

/**
 * Returns identifiers of weight units of measure
 * @return {string[]}
 */
export function getIdentifiersOfWeightUnitsOfMeasure()
{
    return [
        UNIT_OF_MEASURE_CNAME_LONG_TON,
        UNIT_OF_MEASURE_CNAME_TONNE,
        UNIT_OF_MEASURE_CNAME_SHORT_TON,
        UNIT_OF_MEASURE_CNAME_STONE,
        UNIT_OF_MEASURE_CNAME_KILOGRAM,
        UNIT_OF_MEASURE_CNAME_POUND,
        UNIT_OF_MEASURE_CNAME_OUNCE,
        UNIT_OF_MEASURE_CNAME_DRAM,
        UNIT_OF_MEASURE_CNAME_GRAM,
        UNIT_OF_MEASURE_CNAME_GRAIN,
        UNIT_OF_MEASURE_CNAME_MILLIGRAM,
        UNIT_OF_MEASURE_CNAME_MICROGRAM
    ];
}

/**
 * Returns identifiers of volume units of measure
 * @return {string[]}
 */
export function getIdentifiersOfVolumeUnitsOfMeasure()
{
    return [
        UNIT_OF_MEASURE_CNAME_CUBIC_METER,
        UNIT_OF_MEASURE_CNAME_CUBIC_CENTIMETER,
        UNIT_OF_MEASURE_CNAME_CUBIC_MILLIMETER,
        UNIT_OF_MEASURE_CNAME_LITER,
        UNIT_OF_MEASURE_CNAME_CENTILITER,
        UNIT_OF_MEASURE_CNAME_DECILITER,
        UNIT_OF_MEASURE_CNAME_MILLILITER
    ];
}

/**
 * Returns identifiers of storage units of measure
 * @return {string[]}
 */
export function getIdentifiersOfStorageUnitsOfMeasure()
{
    return [
        UNIT_OF_MEASURE_CNAME_PEBIBYTE,
        UNIT_OF_MEASURE_CNAME_PETABYTE,
        UNIT_OF_MEASURE_CNAME_TEBIBYTE,
        UNIT_OF_MEASURE_CNAME_TERABYTE,
        UNIT_OF_MEASURE_CNAME_GIBIBYTE,
        UNIT_OF_MEASURE_CNAME_GIGABYTE,
        UNIT_OF_MEASURE_CNAME_MEBIBYTE,
        UNIT_OF_MEASURE_CNAME_MEGABYTE,
        UNIT_OF_MEASURE_CNAME_KIBIBYTE,
        UNIT_OF_MEASURE_CNAME_KILOBYTE,
        UNIT_OF_MEASURE_CNAME_BYTE,
        UNIT_OF_MEASURE_CNAME_BIT
    ];
}

/**
 * Returns identifiers of angle units of measure
 * @return {string[]}
 */
export function getIdentifiersOfAngleUnitsOfMeasure()
{
    return [
        UNIT_OF_MEASURE_CNAME_RADIAN,
        UNIT_OF_MEASURE_CNAME_DEGREE,
        UNIT_OF_MEASURE_CNAME_ANGLE_MINUTE,
        UNIT_OF_MEASURE_CNAME_ANGLE_SECOND
    ];
}

/**
 * Returns identifiers of pressure units of measure
 * @return {string[]}
 */
export function getIdentifiersOfPressureUnitsOfMeasure()
{
    return [
        UNIT_OF_MEASURE_CNAME_STANDART_ATMOSPHERE,
        UNIT_OF_MEASURE_CNAME_BAR,
        UNIT_OF_MEASURE_CNAME_PASCAL,
        UNIT_OF_MEASURE_CNAME_TORR
    ];
}
