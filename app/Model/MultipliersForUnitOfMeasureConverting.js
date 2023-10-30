/**
 * @file A subsystem for getting a multiplier for converting one unit of measure to another.
 */

let unitsOfMeasureConvertionMultipliers = new Map();

/**
 * Returns multiplier for converting a value from one unit of measure to another
 * @param {string} currentUnitOfMeasure
 * @param {string} targetUnitOfMeasure
 * @returns {number}
 */
export
function getMultiplierForConvertingValueFromOneUnitOfMeasureToAnother(currentUnitOfMeasure,
                                                                      targetUnitOfMeasure)
{
    let convertionName = currentUnitOfMeasure + '/' + targetUnitOfMeasure;
    return unitsOfMeasureConvertionMultipliers.get(convertionName);
}

function addConvertionMultipliersForMeasureUnit(measureUnitsNames,
                                                multipliers,
                                                elementIndex)
{
    let multiplier = 1;
    let convertionName = '';
    for (let i = 0; i < measureUnitsNames.length; i++)
    {
        convertionName = measureUnitsNames[elementIndex] + '/' +
                         measureUnitsNames[i];
        multiplier = multipliers[i] / multipliers[elementIndex];
        unitsOfMeasureConvertionMultipliers.set(convertionName, multiplier);
    }
}

function addConvertionMultipliersForMeasureUnits(measureUnitsNames, multipliers)
{
    for (let i = 0; i < measureUnitsNames.length; i++)
        addConvertionMultipliersForMeasureUnit(measureUnitsNames, multipliers, i);
}


function addMultipliersForTimeUnitsOfMeasure()
{
    let measureUnitsNames =
    [
        'year',
        'month',
        'week',
        'day',
        'hour',
        'minute',
        'second',
        'millisecond',
        'microsecond',
        'nanosecond'
    ];
    let multipliers =
    [
        1,                  //year
        12,                 //month
        1 / (52 + 1/7),     //week
        365,                //day
        8760,               //hour
        525600,             //minute
        31536000,           //second
        31536000000,        //millisecond
        31536000000000,     //microsecond
        31536000000000000,  //nanosecond
    ];
    addConvertionMultipliersForMeasureUnits(measureUnitsNames, multipliers);
}

function addMultipliersForLengthUnitsOfMeasure()
{
    let measureUnitsNames =
    [
        'parsec',
        'light_year',
        'astronomical_unit',
        'nautical_mile',
        'mile',
        'kilometer',
        'fathom',
        'meter',
        'yard',
        'foot',
        'inch',
        'centimeter',
        'millimeter',
        'micrometer',
        'nanometer',
        'angstrom'
    ];
    let multipliers =
    [
        1,                          //parsec
        3.2615637769,               //light year
        206264.80625,               //astronomical unit
        16661326032829,             //nautical mile
        19173473228376,             //mile
        30856775812800,             //kilometer
        16872690186351360,          //fathom
        30856775812799588,          //meter
        33745380372702720,          //yard
        101235938645825620,         //foot
        1214833693417291800,        //inch
        3085677581279958500,        //centimeter
        30856775812799586000,       //millimeter
        30856775812799586000000,    //micrometer
        30856775812799586000000000, //nanometer
        308567758127995860000000000,//angstrom
    ];
    addConvertionMultipliersForMeasureUnits(measureUnitsNames, multipliers);
}

function addMultipliersForAreaUnitsOfMeasure()
{
    let measureUnitsNames =
    [
        'square_mile',
        'square_kilometer',
        'hectare',
        'acre',
        'square_meter',
        'square_yard',
        'square_foot',
        'square_inch',
        'square_centimeter',
        'square_millimeter'
    ];
    let multipliers =
    [
        1,                              //square mile
        2.58999,                        //square kilometer
        258.99881,                      //hectare
        640,                            //acre
        2589988.11034,                  //square meter
        3097600,                        //square yard
        27878400,                       //square foot
        4014489600,                     //square inch
        25899881103.36,                 //square centimeter
        2589988110336                   //square millimeter
    ];
    addConvertionMultipliersForMeasureUnits(measureUnitsNames, multipliers);
}

function addMultipliersForWeightUnitsOfMeasure()
{
    let measureUnitsNames =
    [
        'long_ton',
        'tonne',
        'short_ton',
        'stone',
        'kilogram',
        'pound',
        'ounce',
        'dram',
        'gram',
        'grain',
        'milligram',
        'microgram'
    ];
    let multipliers =
    [
        1,                      //long ton
        1.01605,                //tone
        1.12,                   //short ton
        160,                    //stone
        1016.0469088,           //kilogram
        2240,                   //pound
        35840,                  //ounce
        573440,                 //dram
        1016046.9088,           //gram
        15680000,               //grain
        1016046908.8,           //milligram
        1016046908800,          //microgram
    ];
    addConvertionMultipliersForMeasureUnits(measureUnitsNames, multipliers);
}

function addMultipliersForVolumeUnitsOfMeasure()
{
    let measureUnitsNames =
    [
        'cubic_meter',
        'cubic_centimeter',
        'cubic_millimeter',
        'liter',
        'centiliter',
        'deciliter',
        'milliliter'
    ];
    let multipliers =
    [
        1,              //cubic meter
        1000000,        //cubic centimeter
        1000000000,     //cubic millimeter
        1000,           //liter
        100000,         //centiliter
        10000,          //deciliter
        1000000,        //milliliter
    ];
    addConvertionMultipliersForMeasureUnits(measureUnitsNames, multipliers);
}

function addMultipliersForStorageUnitsOfMeasure()
{
    let measureUnitsNames =
    [
        'pebibyte',
        'petabyte',
        'tebibyte',
        'terabyte',
        'gibibyte',
        'gigabyte',
        'mebibyte',
        'megabyte',
        'kibibyte',
        'kilobyte',
        'byte',
        'bit'
    ];
    let multipliers =
    [
        1,                          //pebibyte
        1.1258999068426,            //petabyte
        1024,                       //tebibyte
        1125.8999068426,            //terabyte
        1048576,                    //gibibyte
        1048576 * 1.073741824,      //gigabyte
        1073741824,                 //mebibyte
        1073741824 * 1.048576,      //megabyte
        1099511627776,              //kibibyte
        1099511627776 * 1.024,      //kilobyte
        1125899906842624,           //byte
        1125899906842624 * 8        //bit
    ];
    addConvertionMultipliersForMeasureUnits(measureUnitsNames, multipliers);
}

function addMultipliersForAngleUnitsOfMeasure()
{
    let measureUnitsNames =
    [
        'radian',
        'degree',
        'minute',
        'second'
    ];
    let multipliers =
    [
        1,                          //radian
        180 / Math.PI,              //degree
        180 / Math.PI * 60,         //minute
        180 / Math.PI * 3600,       //second
    ];
    addConvertionMultipliersForMeasureUnits(measureUnitsNames, multipliers);
}

function addMultipliersForPressureUnitsOfMeasure()
{
    let measureUnitsNames =
    [
        'standart_atmosphere',
        'bar',
        'pascal',
        'torr'
    ];
    let multipliers =
    [
        1,                  //standart atmosphere
        1.01325,            //bar
        101325,             //pascal
        760                 //torr
    ];
    addConvertionMultipliersForMeasureUnits(measureUnitsNames, multipliers);
}

function InitUnitOfMeasureConvertionMultipliers()
{
    addMultipliersForLengthUnitsOfMeasure();
    addMultipliersForAreaUnitsOfMeasure();
    addMultipliersForWeightUnitsOfMeasure();
    addMultipliersForVolumeUnitsOfMeasure()
    addMultipliersForTimeUnitsOfMeasure();
    addMultipliersForAngleUnitsOfMeasure();
    addMultipliersForStorageUnitsOfMeasure();
    addMultipliersForPressureUnitsOfMeasure();
}

InitUnitOfMeasureConvertionMultipliers();
